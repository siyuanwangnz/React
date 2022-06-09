const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: {
        presets: ["@babel/preset-env"],
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};