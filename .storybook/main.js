module.exports = {
    stories: ["../src/components/**/*.stories.(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/preset-create-react-app",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
    ],
};