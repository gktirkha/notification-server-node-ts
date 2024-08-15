// Download gac.json from fire base

module.exports = {
    apps: [
        {
            name: 'fcm_notification',
            script: './dist/index.js',
            namespace: "FCM Notification Demo",
            instances: 2,
            env: {
                GOOGLE_APPLICATION_CREDENTIALS: "./gac.json",
                PORT: 3001
            },
            env_production: {
                GOOGLE_APPLICATION_CREDENTIALS: "./gac.json",
                PORT: 3000
            },
            restart: true
        }
    ]
};