import { defineConfig } from 'windicss/helpers';
import aspectRatio from 'windicss/plugin/aspect-ratio';


const range = (size, startAt = 1): Array<any> => {
    return Array.from(Array(size).keys()).map(i => i + startAt);
};

// https://windicss.org/guide/configuration.html
export default defineConfig({
    darkMode: 'class',
    // Scanning
    // https://windicss.org/guide/extractions.html#scanning
    extract: {
        include: [
            'src/**/*.{vue,ts,js}',
            './../../Views/**/*.tw.vm',
        ],
        exclude: [
            'src/assets/**/*',
            'src/locales/**/*',
            'src/routes/**/*',
            'src/services/**/*',
        ]
    },
    safelist: [
        range(13).map(i => `col-span-${i} md:col-span-${i}`),
        'flex-row',
        'flex-row-reverse',
        'flex-col',
        'font-normal',
        'mr-3',
        'line-trough',
        'opacity-50',
        // Profile image 
        'w-100px',
        // task priority colors
        'border-gray-300',
        'border-red-600',
        'border-orange-600',
        'border-yellow-600',
        'border-blue-600'
    ],
    preflight: false,
    // preflight: {
    //     /**
    //      * Default is true, so we need to first set this to false in order for us to get 
    //      * fine-grain control over includeGlobal and includeBase
    //      */
    //     includeAll: false,
    //     /**
    //      * Include base styles
    //      * setting this to true will include all keys found in preflight.ts. 
    //      * https://github.com/windicss/windicss/blob/db58c5561e43ce91f7156a758633a7c046362e94/src/lib/utilities/preflight.ts
    //      */
    //     includeBase: false,
    //     /**
    //      * global style, such as * or html, body. In order for this to work, 
    //      * includeBase needs to be true
    //      **/ 
    //     includeGlobal: false,
    //     includePlugin: false,
    //     /**
    //      * For some reason this is not respected, 
    //      */
    //     blocklist: ['ul', 'ol', 'div'],
    // },
    plugins: [
        aspectRatio
    ],
    theme: {
        // Same as Bootstrap
        screens: {
            sm: '480px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        variants: {
            extend: {
                colors: ['hover'],
            },
        },
        extend: {
            colors: {

                'orienteering-green': '#4FC343',
                'orienteering-blue': '#069EDB',
                'orienteering-red': '#F7403A',
                'orienteering-black': '#231F20',
                'orienteering-postplukk': '#C3009E',
                'orienteering-orange': '#ff8c3f',


                // DARK
                // highlight
                'sidebar-dark-highlight': '#3398DB',
                'sidebar-dark-highlight-darker': '#217DBA',
                'sidebar-dark-highlight-lighter': '#5FAEE3',
                // dark
                'sidebar-dark-main-dark': '#262626', // top-level-content-bg and headline-group-bg
                'sidebar-dark-main-darker': '#1b1b1b', // top-level-content-active-tab-bg
                'sidebar-dark-main-black': '#000000',
                // light
                'sidebar-dark-main-lighter': '#333333', // top-level-menu-bg
                'sidebar-dark-main-light': '#8d8d8d', // group-headline text
                'sidebar-dark-main-bright': '#ebebeb', // inactive tab color
                // preview dark
                'sidebar-dark-preview': '#4a4a4a',

                // highlight
                'sidebar-highlight': '#3398DB',
                'sidebar-highlight-darker': '#217DBA',
                'sidebar-highlight-lighter': '#5FAEE3',
                // dark
                'sidebar-main-dark': '#d9d9d9', // top-level-content-bg and headline-group-bg
                'sidebar-main-darker': '#e4e4e4', // top-level-content-active-tab-bg
                'sidebar-main-white': '#ffffff',
                // light
                'sidebar-main-lighter': '#cccccc', // top-level-menu-bg
                'sidebar-main-light': '#727272', // group-headline text
                'sidebar-main-bright': '#141414', // inactive tab color
            },
            fontFamily: {
                'main': ['Dosis', 'sans-serif'],
            }
        },
        bloc: {
            // TODO: Add theme vars here, ref https://levelup.gitconnected.com/tailwindcss-with-css-variables-513abe2e9a5
            /* BASE FONT */
            'theme-base-font-family': 'var(--theme-base-font-family)',
            'theme-base-font-size': 'var(--theme-base-font-size)',
            'theme-base-font-style': 'var(--theme-base-font-style)',
            'theme-base-font-weight': 'var(--theme-base-font-weight)',
            'theme-base-font-line-height': 'var(--theme-base-font-line-height)',
            'theme-base-font-letter-spacing':
                'var(--theme-base-font-letter-spacing)',
            'theme-base-font-color': 'var(--theme-base-font-color)',

            /* HEADING */
            'theme-heading-font-style': 'var(--theme-heading-font-style)',
            'theme-heading-font-family': 'var(--theme-heading-font-family)',
            'theme-heading-font-weight': 'var(--theme-heading-font-weight)',
            'theme-heading-font-color': 'var(--theme-heading-font-color)',
            'theme-heading-text-transform':
                'var(--theme-heading-text-transform)',
            'theme-heading-line-height': 'var(--theme-heading-line-height)',
            'theme-heading-letter-spacing':
                'var(--theme-heading-letter-spacing)',

            /* BORDER RADIUS */
            'theme-base-border-radius': 'var(--theme-base-border-radius)',
            'theme-large-border-radius': 'var(--theme-large-border-radius)',
            'theme-small-border-radius': 'var(--theme-small-border-radius)',

            /* FORM INPUTS BORDER RADIUS */
            'theme-form-base-border-radius':
                'var(--theme-form-base-border-radius)',
            'theme-form-large-border-radius':
                'var(--theme-form-large-border-radius)',
            'theme-form-small-border-radius':
                'var(--theme-form-small-border-radius)',

            /* BUTTONS */
            'theme-buttons-default-text-color':
                'var(--theme-buttons-default-text-color)',
            'theme-buttons-default-background-color':
                'var(--theme-buttons-default-background-color)',
            'theme-buttons-default-border-color':
                'var(--theme-buttons-default-border-color)',

            'theme-buttons-primary-text-color':
                'var(--theme-buttons-primary-text-color)',
            'theme-buttons-primary-background-color':
                'var(--theme-buttons-primary-background-color)',
            'theme-buttons-primary-border-color':
                'var(--theme-buttons-primary-border-color)',

            'theme-buttons-success-text-color':
                'var(--theme-buttons-success-text-color)',
            'theme-buttons-success-background-color':
                'var(--theme-buttons-success-background-color)',
            'theme-buttons-success-border-color':
                'var(--theme-buttons-success-border-color)',

            'theme-buttons-info-text-color':
                'var(--theme-buttons-info-text-color)',
            'theme-buttons-info-background-color':
                'var(--theme-buttons-info-background-color)',
            'theme-buttons-info-border-color':
                'var(--theme-buttons-info-border-color)',

            'theme-buttons-warning-text-color':
                'var(--theme-buttons-warning-text-color)',
            'theme-buttons-warning-background-color':
                'var(--theme-buttons-warning-background-color)',
            'theme-buttons-warning-border-color':
                'var(--theme-buttons-warning-border-color)',

            'theme-buttons-danger-text-color':
                'var(--theme-buttons-danger-text-color)',
            'theme-buttons-danger-background-color':
                'var(--theme-buttons-danger-background-color)',
            'theme-buttons-danger-border-color':
                'var(--theme-buttons-danger-border-color)',

            /* Gender */
            'theme-link-undefined-gender-color':
                'var(--theme-link-undefined-gender-color)',
            'theme-link-male-color': 'var(--theme-link-male-color)',
            'theme-link-female-color': 'var(--theme-link-female-color)',

            /* Theme Link Model */
            'theme-link-color': 'var(--theme-link-color)',
            'theme-link-hover-color': 'var(--theme-link-hover-color)',
            'theme-link-active-color': 'var(--theme-link-active-color)',
            'theme-link-visited-color': 'var(--theme-link-visited-color)',
            'theme-link-hover-decoration': 'var(--theme-link-hover-decoration)',

            /* Canvas background */
            'theme-site-container-background-color':
                'var(--theme-site-container-background-color)',

            /* Background */
            'theme-bg-image': 'var(--theme-bg-image)',
            'theme-bg-image-max-2048': 'var(--theme-bg-image-max-2048)',
            'theme-bg-image-max-768': 'var(--theme-bg-image-max-768)',
            'theme-bg-image-max-420': 'var(--theme-bg-image-max-420)',
            /* Background for Retina */
            'theme-bg-image-max-3200': 'var(--theme-bg-image-max-3200)',
            'theme-bg-image-max-1536': 'var(--theme-bg-image-max-1536)',
            'theme-bg-image-max-840': 'var(--theme-bg-image-max-840)',

            'theme-bg-color': 'var(--theme-bg-color)',
            'theme-bg-repeat': 'var(--theme-bg-repeat)',
            'theme-bg-position': 'var(--theme-bg-position)',
            'theme-bg-attachment': 'var(--theme-bg-attachment)',
            'theme-bg-size': 'var(--theme-bg-size)',

            /* BACKGROUND */
            /* Page background*/
            'theme-page-bg-color': 'var(--theme-page-bg-color)',

            'theme-page-bg-repeat': 'var(--theme-page-bg-repeat)',
            'theme-page-bg-position': 'var(--theme-page-bg-position)',
            'theme-page-bg-attachment': 'var(--theme-page-bg-attachment)',
            'theme-page-bg-size': 'var(--theme-page-bg-size)',
            'theme-page-bg-image': 'var(--theme-page-bg-image)',
            'theme-page-bg-image-max-2048':
                'var(--theme-page-bg-image-max-2048)',
            'theme-page-bg-image-max-768': 'var(--theme-page-bg-image-max-768)',
            'theme-page-bg-image-max-420': 'var(--theme-page-bg-image-max-420)',
            /* Background for Retina */
            'theme-page-bg-image-max-3200':
                'var(--theme-page-bg-image-max-3200)',
            'theme-page-bg-image-max-1536':
                'var(--theme-page-bg-image-max-1536)',
            'theme-page-bg-image-max-840': 'var(--theme-page-bg-image-max-840)',

            /* LOGO */
            /* Logo image properties */
            'theme-logo-wrapper-bg-image': 'var(--theme-logo-wrapper-bg-image)',
            'theme-logo-wrapper-bg-repeat':
                'var(--theme-logo-wrapper-bg-repeat)',
            'theme-logo-wrapper-bg-position':
                'var(--theme-logo-wrapper-bg-position)',
            'theme-logo-wrapper-bg-attachment':
                'var(--theme-logo-wrapper-bg-attachment)',
            'theme-logo-wrapper-bg-size': 'var(--theme-logo-wrapper-bg-size)',

            /* Logo wrapper */
            'theme-logo-wrapper-width': 'var(--theme-logo-wrapper-width)',
            'theme-logo-wrapper-margin-right':
                'var(--theme-logo-wrapper-margin-right)',
            'theme-logo-wrapper-margin-left':
                'var(--theme-logo-wrapper-margin-left)',
            'theme-logo-wrapper-bg-color': 'var(--theme-logo-wrapper-bg-color)',
            'theme-logo-wrapper-margin-top':
                'var(--theme-logo-wrapper-margin-top)',
            'theme-logo-wrapper-margin-bottom':
                'var(--theme-logo-wrapper-margin-bottom)',

            /* Logo container */
            'theme-logo-logo-container-float':
                'var(--theme-logo-logo-container-float)',
            'theme-logo-container-width': 'var(--theme-logo-container-width)',

            /* Canvas model needs to be cleaned up. In frontend.less they're used on #content, but in the code they're used on #content > .layout-canvas > .row or something like that. */
            'theme-content-size': 'var(--theme-content-size)',
            'theme-content-float': 'var(--theme-content-float)',

            'theme-content-padding-top': 'var(--theme-content-padding-top)',
            'theme-content-padding-left': 'var(--theme-content-padding-left)',
            'theme-content-padding-right': 'var(--theme-content-padding-right)',
            'theme-content-padding-bottom':
                'var(--theme-content-padding-bottom)',

            /* Topbar */
            'theme-topbar-bg-color': 'var(--theme-topbar-bg-color)',
            'theme-topbar-bg-hover-color': 'var(--theme-topbar-bg-hover-color)',
            'theme-topbar-link-color': 'var(--theme-topbar-link-color)',
            'theme-topbar-link-hover-color':
                'var(--theme-topbar-link-hover-color)',

            /* NAVIGATION */

            /* Size */
            'theme-mainmenu-height': 'var(--theme-mainmenu-height)',
            'theme-mainmenu-width': 'var(--theme-mainmenu-width)',
            'theme-mainmenu-outer-width': 'var(--theme-mainmenu-outer-width)',
            'theme-mainmenu-outer-margin-top':
                'var(--theme-mainmenu-outer-margin-top)',
            'theme-mainmenu-outer-margin-bottom':
                'var(--theme-mainmenu-outer-margin-bottom)',
            'theme-mainmenu-inner-width': 'var(--theme-mainmenu-inner-width)',
            /* Font */
            'theme-mainmenu-font-size': 'var(--theme-mainmenu-font-size)',
            'theme-mainmenu-font-family': 'var(--theme-mainmenu-font-family)',
            'theme-mainmenu-font-weight': 'var(--theme-mainmenu-font-weight)',
            'theme-mainmenu-text-transform':
                'var(--theme-mainmenu-text-transform)',
            'theme-mainmenu-color': 'var(--theme-mainmenu-color)',
            /* Background */
            'theme-mainmenu-background-image':
                'var(--theme-mainmenu-background-image)',

            'theme-mainmenu-background': 'var(--theme-mainmenu-background)',
            /* Border */
            'theme-mainmenu-border': 'var(--theme-mainmenu-border)',
            'theme-mainmenu-border-radius':
                'var(--theme-mainmenu-border-radius)',
            'theme-mainmenu-border-width': 'var(--theme-mainmenu-border-width)',
            /* Brand */
            'theme-mainmenu-brand-margins':
                'var(--theme-mainmenu-brand-margins)',
            'theme-mainmenu-brand-hover-color':
                'var(--theme-mainmenu-brand-hover-color)',
            'theme-mainmenu-brand-hover-background':
                'var(--theme-mainmenu-brand-hover-background)',
            'theme-mainmenu-mobile-brand-margins':
                'var(--theme-mainmenu-mobile-brand-margins)',
            /* Link */
            'theme-mainmenu-link-color': 'var(--theme-mainmenu-link-color)',
            'theme-mainmenu-link-hover-color':
                'var(--theme-mainmenu-link-hover-color)',
            'theme-mainmenu-link-hover-background':
                'var(--theme-mainmenu-link-hover-background)',
            'theme-mainmenu-link-active-color':
                'var(--theme-mainmenu-link-active-color)',
            'theme-mainmenu-link-active-background':
                'var(--theme-mainmenu-link-active-background)',
            /* Toggle */
            'theme-mainmenu-toggle-border-color':
                'var(--theme-mainmenu-toggle-border-color)',
            'theme-mainmenu-toggle-hover-background':
                'var(--theme-mainmenu-toggle-hover-background)',
            /* Padding */
            'theme-mainmenu-padding-top': 'var(--theme-mainmenu-padding-top)',
            'theme-mainmenu-padding-bottom':
                'var(--theme-mainmenu-padding-bottom)',
            'theme-mainmenu-padding-left': 'var(--theme-mainmenu-padding-left)',
            'theme-mainmenu-padding-right':
                'var(--theme-mainmenu-padding-right)',
            /* Margin */
            'theme-mainmenu-margin-top': 'var(--theme-mainmenu-margin-top)',
            'theme-mainmenu-margin-bottom':
                'var(--theme-mainmenu-margin-bottom)',
            'theme-mainmenu-margin-left': 'var(--theme-mainmenu-margin-left)',
            'theme-mainmenu-margin-right': 'var(--theme-mainmenu-margin-right)',
            /* Submenu */
            'theme-mainmenu-submenu-width':
                'var(--theme-mainmenu-submenu-width)',
            /* Logo */
            'theme-mainmenu-logo-height': 'var(--theme-mainmenu-logo-height)',
            'theme-mainmenu-toggle-icon-bar-background':
                'var(--theme-mainmenu-toggle-icon-bar-background)',

            /* Widget */
            'theme-widget-base-font-color':
                'var(--theme-widget-base-font-color)',
            'theme-widget-border-radius': 'var(--theme-widget-border-radius)',
            'theme-widget-bg-color': 'var(--theme-widget-bg-color)',
            'theme-widget-border-width': 'var(--theme-widget-border-width)',
            'theme-widget-border-style': 'var(--theme-widget-border-style)',
            'theme-widget-border-color': 'var(--theme-widget-border-color)',

            'theme-widget-header-font-size':
                'var(--theme-widget-header-font-size)',
            'theme-widget-header-link-color':
                'var(--theme-widget-header-link-color)',
            'theme-widget-header-padding-top':
                'var(--theme-widget-header-padding-top)',
            'theme-widget-header-padding-right':
                'var(--theme-widget-header-padding-right)',
            'theme-widget-header-padding-bottom':
                'var(--theme-widget-header-padding-bottom)',
            'theme-widget-header-padding-left':
                'var(--theme-widget-header-padding-left)',
            'theme-widget-header-border-width':
                'var(--theme-widget-header-border-width)',
            'theme-widget-header-border-style':
                'var(--theme-widget-header-border-style)',
            'theme-widget-header-border-color':
                'var(--theme-widget-header-border-color)',
            'theme-widget-header-bg-color':
                'var(--theme-widget-header-bg-color)',
            'theme-widget-header-font-color':
                'var(--theme-widget-header-font-color)',
            'theme-widget-header-text-align':
                'var(--theme-widget-header-text-align)',
            'theme-widget-header-font-weight':
                'var(--theme-widget-header-font-weight)',
            'theme-widget-header-font-family':
                'var(--theme-widget-header-font-family)',

            /* Widget content */
            'theme-widget-content-border-width':
                'var(--theme-widget-content-border-width)',
            'theme-widget-content-border-style':
                'var(--theme-widget-content-border-style)',
            'theme-widget-content-border-color':
                'var(--theme-widget-content-border-color)',
            'theme-widget-content-padding':
                'var(--theme-widget-content-padding)',
            'theme-widget-content-padding-top':
                'var(--theme-widget-content-padding-top)',
            'theme-widget-content-padding-right':
                'var(--theme-widget-content-padding-right)',
            'theme-widget-content-padding-bottom':
                'var(--theme-widget-content-padding-bottom)',
            'theme-widget-content-padding-left':
                'var(--theme-widget-content-padding-left)',
        },
    },
});

