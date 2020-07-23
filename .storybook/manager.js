
// import {themes} from '@storybook/theming';

import {
    addons
} from '@storybook/addons';

import {
    addonstorysource
}
from '@storybook/addon-storysource';


// export default create({
//     base: 'light',

//     brandTitle: 'My custom storybook',
//     brandUrl: 'https://example.com',
//     brandImage: 'https://placehold.it/350x150',
// });


addons.setConfig({
    theme: {
        base: 'dark',

        colorPrimary: 'rgb(226,0,27)',
        colorSecondary: 'deepskyblue',

        // UI
        appBg: 'black',
        appContentBg: 'black',
        appBorderColor: 'black',
        appBorderRadius: 4,

        // Typography
        fontBase: '"Roboto", sans-serif',
        fontCode: 'monospace',

        // Text colors
        textColor: 'white',
        textInverseColor: 'rgba(255,255,255,0.9)',

        // Toolbar default and active colors
        barTextColor: 'silver',
        barSelectedColor: 'black',
        barBg: 'rgb(226,0,27)',

        // Form colors
        inputBg: 'black',
        inputBorder: 'black',
        inputTextColor: 'white',
        inputBorderRadius: 4,

        brandTitle: 'PubNub Chat Components',
        brandUrl: 'https://www.pubnub.com/',
        brandImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fpubnub&psig=AOvVaw039UOomYQJhN-dDYtjW5EZ&ust=1595454050765000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODY4tOn3-oCFQAAAAAdAAAAABAI',
    },
});

// addons.setConfig({
//     theme: themes.dark,
// });