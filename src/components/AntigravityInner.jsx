/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';

// Google brand color palette — matches the real Antigravity site
const GOOGLE_COLORS = [
    '#4285F4', // Google Blue
    '#EA4335', // Google Red
    '#FBBC05', // Google Yellow
    '#34A853', // Google Green
    '#A142F4', // Google Purple
    '#1A73E8', // Deep Blue
    '#E52592', // Google Pink
];

const AntigravityInner = ({
    count = 300,
    magnetRadius = 10,
    ringRadius = 10,
    waveSpeed = 0.4,
    waveAmplitude = 1,
    particleSize = 2,
    lerpSpeed = 0.1,
    color = null,       // null = use Google multi-color palette
    autoAnimate = false,
    particleVariance = 1,
    rotationSpeed = 0,
    depthFactor = 1,
    pulseSpeed = 3,
    particleShape = 'capsule',
    fieldStrength = 10
}) => {
    const meshRef = useRef(null);
    const { viewport } = useThree();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const lastMousePos = useRef({ x: 0, y: 0 });
    const lastMouseMoveTime = useRef(0);
    const virtualMouse = useRef({ x: 0, y: 0 });

    // Assign colors directly into a Float32Array for declarative instancedBufferAttribute
    const colorArray = useMemo(() => {
        if (color) return null;
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const hex = GOOGLE_COLORS[Math.floor(Math.random() * GOOGLE_COLORS.length)];
            const c = new THREE.Color(hex);
            arr[i * 3] = c.r;
            arr[i * 3 + 1] = c.g;
            arr[i * 3 + 2] = c.b;
        }
        return arr;
    }, [count, color]);

    const particles = useMemo(() => {
        const temp = [];
        const width = viewport.width || 100;
        const height = viewport.height || 100;

        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const speed = 0.004 + Math.random() / 300;

            // Spread particles all over viewport — key to matching the real site
            const x = (Math.random() - 0.5) * width * 1.15;
            const y = (Math.random() - 0.5) * height * 1.15;
            const z = (Math.random() - 0.5) * 15;

            // Ambient drift — makes particles float gently even far from cursor
            const driftSpeed = 0.003 + Math.random() * 0.005;
            const driftRadius = 0.3 + Math.random() * 0.9;
            const driftPhase = Math.random() * Math.PI * 2;

            const randomRadiusOffset = (Math.random() - 0.5) * 2;

            temp.push({
                t, speed,
                mx: x, my: y, mz: z,
                cx: x, cy: y, cz: z,
                vx: 0, vy: 0, vz: 0,
                driftSpeed, driftRadius, driftPhase,
                randomRadiusOffset
            });
        }
        return temp;
    }, [count, viewport.width, viewport.height]);

    useFrame(state => {
        const mesh = meshRef.current;
        if (!mesh) return;

        const { viewport: v, pointer: m } = state;
        const time = state.clock.getElapsedTime();

        const mouseDist = Math.sqrt(
            Math.pow(m.x - lastMousePos.current.x, 2) +
            Math.pow(m.y - lastMousePos.current.y, 2)
        );
        if (mouseDist > 0.001) {
            lastMouseMoveTime.current = Date.now();
            lastMousePos.current = { x: m.x, y: m.y };
        }

        let destX = (m.x * v.width) / 2;
        let destY = (m.y * v.height) / 2;

        if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
            destX = Math.sin(time * 0.4) * (v.width / 4);
            destY = Math.cos(time * 0.7) * (v.height / 4);
        }

        virtualMouse.current.x += (destX - virtualMouse.current.x) * 0.04;
        virtualMouse.current.y += (destY - virtualMouse.current.y) * 0.04;

        const targetX = virtualMouse.current.x;
        const targetY = virtualMouse.current.y;
        const globalRotation = time * rotationSpeed;

        particles.forEach((particle, i) => {
            const { mx, my, mz, cz, randomRadiusOffset, driftSpeed, driftRadius, driftPhase } = particle;

            particle.t += particle.speed;
            const t = particle.t;

            const projectionFactor = 1 - cz / 50;
            const projectedTargetX = targetX * projectionFactor;
            const projectedTargetY = targetY * projectionFactor;

            const dx = mx - projectedTargetX;
            const dy = my - projectedTargetY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Ambient gentle drift for all particles (not just ring)
            const ambientX = mx + Math.sin(time * driftSpeed + driftPhase) * driftRadius;
            const ambientY = my + Math.cos(time * driftSpeed * 1.3 + driftPhase) * driftRadius;

            let targetPos = { x: ambientX, y: ambientY, z: mz * depthFactor };

            if (dist < magnetRadius) {
                const angle = Math.atan2(dy, dx) + globalRotation;
                const wave = Math.sin(t * waveSpeed + angle) * (0.5 * waveAmplitude);
                const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));
                const currentRingRadius = ringRadius + wave + deviation;

                targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle);
                targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle);
                targetPos.z = mz * depthFactor + Math.sin(t) * waveAmplitude * depthFactor;
            }

            // Spring physics: accumulate velocity, apply damping
            const springK = lerpSpeed * 2.5;
            const damping = 0.80;

            particle.vx = (particle.vx + (targetPos.x - particle.cx) * springK) * damping;
            particle.vy = (particle.vy + (targetPos.y - particle.cy) * springK) * damping;
            particle.vz = (particle.vz + (targetPos.z - particle.cz) * springK) * damping;

            particle.cx += particle.vx;
            particle.cy += particle.vy;
            particle.cz += particle.vz;

            dummy.position.set(particle.cx, particle.cy, particle.cz);
            dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
            dummy.rotateX(Math.PI / 2);

            // All particles stay visible — not gated to ring proximity
            const baseScale = 0.65 + Math.sin(t * pulseSpeed + driftPhase) * 0.2 * particleVariance;
            const finalScale = Math.max(0.1, baseScale) * particleSize;
            dummy.scale.set(finalScale, finalScale, finalScale);

            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        });

        mesh.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            {particleShape === 'capsule' && <capsuleGeometry args={[0.08, 0.35, 4, 8]} />}
            {particleShape === 'sphere' && <sphereGeometry args={[0.15, 16, 16]} />}
            {particleShape === 'box' && <boxGeometry args={[0.25, 0.25, 0.25]} />}
            {particleShape === 'tetrahedron' && <tetrahedronGeometry args={[0.25]} />}
            <meshBasicMaterial color={color || '#ffffff'} />
            {colorArray && (
                <instancedBufferAttribute attach="instanceColor" args={[colorArray, 3]} />
            )}
        </instancedMesh>
    );
};

const Antigravity = props => (
    <Canvas
        camera={{ position: [0, 0, 50], fov: 35 }}
        style={{ background: 'transparent' }}
    >
        <AntigravityInner {...props} />
    </Canvas>
);

export default Antigravity;
