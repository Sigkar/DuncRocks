interface Typography {
    fontWeight: string;
    fontSize: string;
    lineHeight?: string;
}

export interface ThemeInterface {
    colors: {
        orange: string;
        darkGreen: string;
        lightGreen: string;
        black: string;
        white: string;
    };
    typography: {
        body: Typography;
        bodyBold: Typography;
        header: Typography;
        headerBold: Typography;
        large: Typography;
        largeBold: Typography;
        caption: Typography;
        subheader: Typography;
        subheaderBold: Typography;
    }
}

export type Colors = keyof ThemeInterface['colors'];
export type FontTypography = keyof ThemeInterface['typography'];
