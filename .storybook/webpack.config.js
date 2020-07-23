const path = require("path");

//dont need stories path if you have your stories inside your //components folder
module.exports = ({ baseConfig, env,config }) => {

    config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../components")],
        use: [
            //require.resolve("ts-loader"),
            {
            //loader: require.resolve("awesome-typescript-loader"),
            loader: require.resolve("babel-loader"),
                options: {
                presets: [
                    ['react-app', {
                        flow: false,
                        typescript: true
                    }]
                ]
                //configFileName: './.storybook/tsconfig.json'
            }
        },
        {
            loader: require.resolve("react-docgen-typescript-loader")
            },
{
    loader: require.resolve('react-docgen-typescript-loader'),
}
    ]
});
config.resolve.extensions.push(".ts", ".tsx");
    return config;
};