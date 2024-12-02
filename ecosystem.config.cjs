module.exports = {
    apps: [
        {
            name: "UI",
            script: "pnpm",
            args: "run preview",
            interpreter: "/root/.nvm/versions/node/v22.8.0/bin/node", 
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};
