import { ThemeInterface } from '../types';

export const theme: ThemeInterface = {
    colors: {
        orange: "#D74E09",
        darkGreen: "#0F574E",
        lightGreen: "#136F63",
        black: "#06080F",
        white: "#F0EBD8",
    },
    typography: {
        body: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.25em'
        },
        bodyBold: {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '1.25em'
        },
        subheader: {
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.5em'
        },
        subheaderBold: {
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '1.5em'
        },
        header: {
            fontSize: '32px',
            fontWeight: '400',
            lineHeight: '1.75em'
        },
        headerBold: {
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.75em'
        },
        large: {
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '2em'
        },
        largeBold: {
            fontSize: '40px',
            fontWeight: '700',
            lineHeight: '2em'
        },
        caption: {
            fontSize: '12px',
            fontWeight: '300',
            lineHeight: '1.75em'
        },
    }
};