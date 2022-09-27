interface Typography {
    fontWeight: string;
    fontSize: string;
    lineHeight?: string;
}

export interface ThemeInterface {
    colors: {
        orange: string;
        green: string;
        black: string;
        blue: string;
        white: string;
    };
    typography: {
        body: Typography;
        bodyBold: Typography;
        header: Typography;
        headerBold: Typography;
        large: Typography;
        caption: Typography;
    }
}

export type Colors = keyof ThemeInterface['colors'];
export type FontTypography = keyof ThemeInterface['typography'];
