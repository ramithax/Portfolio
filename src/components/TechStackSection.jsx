import { motion } from "framer-motion";

const Row = ({ icons, duration, reverse = false }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                className="flex gap-4 w-max"
                animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
                transition={{
                    repeat: Infinity,
                    duration: duration,
                    ease: "linear",
                }}
            >
                {[...icons, ...icons, ...icons].map((icon, i) => (
                    <div
                        key={i}
                        className="w-20 h-20 flex items-center justify-center 
                            bg-white rounded-xl 
                            border border-gray-200
                            shadow-lg
                            hover:scale-110 
                            hover:shadow-md
                            transition-all duration-300"
                    >
                        {/* ✅ added "colored" for devicon full colors */}
                        <i className={`${icon} colored text-4xl`}></i>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function TechStackSection() {
    const row1 = [
        "devicon-javascript-plain",
        "devicon-typescript-plain",
        "devicon-react-original",
        "devicon-nextjs-plain",
        "devicon-nodejs-plain",
        "devicon-express-original",
        "devicon-python-plain",
        "devicon-django-plain",
        "devicon-flask-original",
        "devicon-amazonwebservices-plain-wordmark",
        "devicon-docker-plain",
        "devicon-kubernetes-plain",
    ];

    const row2 = [
        "devicon-java-plain",
        "devicon-spring-plain",
        "devicon-mongodb-plain",
        "devicon-mysql-plain",
        "devicon-postgresql-plain",
        "devicon-firebase-plain",
        "devicon-redis-plain",
        "devicon-tailwindcss-plain",
        "devicon-bootstrap-plain",
        "devicon-sass-original",
        "devicon-figma-plain",
        "devicon-git-plain",
    ];

    const row3 = [
        "devicon-html5-plain",
        "devicon-css3-plain",
        "devicon-vuejs-plain",
        "devicon-angularjs-plain",
        "devicon-electron-original",
        "devicon-graphql-plain",
        "devicon-apachekafka-original",
        "devicon-linux-plain",
        "devicon-ubuntu-plain",
        "devicon-github-original",
        "devicon-gitlab-plain",
        "devicon-vscode-plain",
    ];

    const row4 = [
        "devicon-html5-plain",
        "devicon-github-original",
        "devicon-vuejs-plain",
        "devicon-angularjs-plain",
        "devicon-graphql-plain",
        "devicon-electron-original",
        "devicon-apachekafka-original",
        "devicon-vscode-plain",
        "devicon-linux-plain",
        "devicon-css3-plain",
        "devicon-ubuntu-plain",
        "devicon-gitlab-plain",
    ]

    return (
        <section className="relative py-20 bg-white overflow-hidden">

            {/* Rows */}
            <div className="space-y-6">
                <Row icons={row1} duration={30} />
                <Row icons={row2} duration={22} reverse />
                <Row icons={row3} duration={15} />
            </div>

            {/* Light mode fade edges */}
            <div className="pointer-events-none absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </section>
    );
}