module.exports = {
    apps: [
        {
            name: "UI",
            script: "pnpm",
            args: "run preview",
            interpreter: "bash",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
