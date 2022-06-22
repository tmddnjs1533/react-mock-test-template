import React, { FC } from "react";
import { CSSProperties } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
declare module "@mui/material/styles" {
  /**
   * 신규 Typography 속성 정의
   */
  interface TypographyVariants {
    strong: CSSProperties;
  }
  interface TypographyVariantsOptions {
    strong?: CSSProperties;
  }

  /**
   * 신규 palette color 정의
   * * 신규 color 를 정의할 때는 기존 palette 를 복사해서 정의한다
   */
  interface Palette {
    borderGrey: Palette["primary"];
  }
  interface PaletteOptions {
    borderGrey: PaletteOptions["primary"];
  }
}

/**
 * 신규 Typography 속성 정의
 */
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    strong: true;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0078",
    },
    success: {
      main: "#2fa539",
    },
    borderGrey: {
      main: "#999",
      light: "#999",
      dark: "#999",
    },
  },
  breakpoints: {
    values: {
      // xs: 0,
      // sm: 600,
      // md: 900,
      // lg: 1200,
      // xl: 1536,
      xs: 0,
      sm: 3441,
      md: 3441,
      lg: 3441,
      xl: 3441,
    },
  },
  typography: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      color: "#666",
    },
    body2: {
      color: "#888",
    },
    strong: {
      color: "#333",
      fontWeight: 700,
    },
    button: {},
    fontSize: 12,
    fontFamily: [
      '"Nanum Gothic"',
      "Noto Sans KR",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Malgun Gothic"',
      '"맑은 고딕"',
      "helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: false, // 물결 효과 제거
      },
    },
  },
});
const GlobalThemeProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
