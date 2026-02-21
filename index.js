/**
 * CBA Production Brand
 * Compatible with Open edX Ulmo MFEs
 * Version: 1.0.0
 */

const brand = {
  colors: {
    primary: "#0A3D62",
    "primary-700": "#06283D",
    "primary-500": "#1B4F72",

    secondary: "#F39C12",
    "secondary-700": "#D68910",
    "secondary-500": "#F8C471",

    background: "#F4F6F7",
    surface: "#FFFFFF",

    "text-primary": "#1B2631",
    "text-secondary": "#566573",
    "text-inverse": "#FFFFFF",

    success: "#1E8449",
    warning: "#D68910",
    danger: "#C0392B",
    info: "#2471A3",
  },

  typography: {
    "font-family-base":
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

    "font-size-base": "16px",
  },

  spacing: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "48px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },

  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 8px rgba(0,0,0,0.08)",
    lg: "0 10px 20px rgba(0,0,0,0.12)",
  },
};

module.exports = brand;
