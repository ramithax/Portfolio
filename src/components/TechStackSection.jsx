import { motion } from 'framer-motion';

const Row = ({ icons, duration, reverse = false }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                className="flex gap-4 w-max"
                animate={{ x: reverse ? ['-33.333%', '0%'] : ['0%', '-33.333%'] }}
                transition={{ repeat: Infinity, duration, ease: 'linear' }}
            >
                {[...icons, ...icons, ...icons].map((icon, i) => (
                    <div
                        key={i}
                        className="w-16 h-16 flex items-center justify-center rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-md"
                        style={{ background: '#ffffff', borderColor: '#e8eaed' }}
                    >
                        <i className={`${icon} colored text-3xl`} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function TechStackSection() {
    const row1 = [
        'devicon-javascript-plain', 'devicon-typescript-plain', 'devicon-react-original',
        'devicon-nextjs-plain', 'devicon-nodejs-plain', 'devicon-express-original',
        'devicon-python-plain', 'devicon-flask-original', 'devicon-amazonwebservices-plain-wordmark',
        'devicon-docker-plain', 'devicon-kubernetes-plain', 'devicon-django-plain',
    ];
    const row2 = [
        'devicon-java-plain', 'devicon-spring-plain', 'devicon-mongodb-plain',
        'devicon-mysql-plain', 'devicon-postgresql-plain', 'devicon-firebase-plain',
        'devicon-redis-plain', 'devicon-tailwindcss-plain', 'devicon-bootstrap-plain',
        'devicon-sass-original', 'devicon-figma-plain', 'devicon-git-plain',
    ];
    const row3 = [
        'devicon-html5-plain', 'devicon-css3-plain', 'devicon-vuejs-plain',
        'devicon-angularjs-plain', 'devicon-electron-original', 'devicon-graphql-plain',
        'devicon-linux-plain', 'devicon-ubuntu-plain', 'devicon-github-original',
        'devicon-gitlab-plain', 'devicon-vscode-plain', 'devicon-apachekafka-original',
    ];

    return (
        <section className="relative py-20 overflow-hidden" style={{ background: '#f0f4f9' }}>

            {/* Section label */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#4285F4' }}>
                    Tech Stack
                </p>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1f1f1f' }}>
                    Tools I Work With
                </h2>
            </div>

            {/* Scrolling rows */}
            <div className="space-y-4">
                <Row icons={row1} duration={32} />
                <Row icons={row2} duration={24} reverse />
                <Row icons={row3} duration={18} />
            </div>

            {/* Fade edges matching section bg */}
            <div
                className="pointer-events-none absolute top-0 left-0 w-40 h-full z-10"
                style={{ background: 'linear-gradient(to right, #f0f4f9, transparent)' }}
            />
            <div
                className="pointer-events-none absolute top-0 right-0 w-40 h-full z-10"
                style={{ background: 'linear-gradient(to left, #f0f4f9, transparent)' }}
            />
        </section>
    );
}