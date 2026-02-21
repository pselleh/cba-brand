/**
 * CBA Custom Brand for Open edX MFEs
 * Version: 1.0.2
 */

module.exports = {
  brand: {
    // --------------------------------------------------
    // COLORS
    // --------------------------------------------------

    colors: {
      // Primary Brand
      primary: "#0A3D62",            // Deep Navy
      primaryDark: "#06283D",
      primaryLight: "#1B4F72",

      // Secondary Accent
      secondary: "#F39C12",          // CBA Gold
      secondaryDark: "#D68910",
      secondaryLight: "#F8C471",

      // Background
      background: "#F4F6F7",
      surface: "#FFFFFF",

      // Text
      textPrimary: "#1B2631",
      textSecondary: "#566573",
      textInverse: "#FFFFFF",

      // Borders
      borderLight: "#E5E7E9",
      borderDark: "#ABB2B9",

      // Status
      success: "#1E8449",
      warning: "#D68910",
      danger: "#C0392B",
      info: "#2471A3",
    },

    // --------------------------------------------------
    // TYPOGRAPHY
    // --------------------------------------------------

    typography: {
      fontFamilyBase:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

      fontFamilyHeading:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

      fontSizeBase: "16px",

      headings: {
        h1: { fontSize: "2.25rem", fontWeight: 700 },
        h2: { fontSize: "1.875rem", fontWeight: 700 },
        h3: { fontSize: "1.5rem", fontWeight: 600 },
        h4: { fontSize: "1.25rem", fontWeight: 600 },
      },
    },

    // --------------------------------------------------
    // BUTTONS
    // --------------------------------------------------

    buttons: {
      borderRadius: "8px",
      fontWeight: 600,

      primary: {
        backgroundColor: "#0A3D62",
        hoverBackgroundColor: "#06283D",
        color: "#FFFFFF",
      },

      secondary: {
        backgroundColor: "#F39C12",
        hoverBackgroundColor: "#D68910",
        color: "#FFFFFF",
      },
    },

    // --------------------------------------------------
    // SPACING SYSTEM
    // --------------------------------------------------

    spacing: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "48px",
    },

    // --------------------------------------------------
    // BORDERS & RADIUS
    // --------------------------------------------------

    borders: {
      radiusSm: "4px",
      radiusMd: "8px",
      radiusLg: "12px",
    },

    // --------------------------------------------------
    // SHADOWS
    // --------------------------------------------------

    shadows: {
      sm: "0 1px 2px rgba(0,0,0,0.05)",
      md: "0 4px 8px rgba(0,0,0,0.08)",
      lg: "0 10px 20px rgba(0,0,0,0.12)",
    },

    // --------------------------------------------------
    // ACCESSIBILITY
    // --------------------------------------------------

    focus: {
      outline: "3px solid #F39C12",
      outlineOffset: "2px",
    },
  },
};module.exports = {
  APP_BRAND: {
    name: "CBA Education",
    logo: "https://via.placeholder.com/150x50?text=CBA+Education",
  },
};
