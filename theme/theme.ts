import { ThemeInterface } from '../types';

export const theme: ThemeInterface = {
    colors: {
        orange: "#ff8c42",
        green: "#136f63",
        black: "#0e131f",
        blue: "#6699cc",
        white: "#f7fff7",
    },
    typography: {
        body: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.5em'
        },
        bodyBold: {
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '1.5em'
        },
        header: {
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '2em'
        },
        headerBold: {
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '2em'
        },
        large: {
            fontSize: '40px',
            fontWeight: '700',
            lineHeight: '2.25em'
        },
        caption: {
            fontSize: '12px',
            fontWeight: '300',
            lineHeight: '1.75em'
        },
    }
};