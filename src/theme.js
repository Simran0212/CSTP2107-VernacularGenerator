const THEME_STORAGE_KEY = "theme";

export const getSavedTheme = () => {
  return localStorage.getItem(THEME_STORAGE_KEY) || "system";
};

export const applyTheme = (themeName) => {
  const colorSchemeByTheme = {
    light: "light",
    dark: "dark",
    system: "light dark",
  };
  document.documentElement.style.colorScheme = colorSchemeByTheme[themeName];
  localStorage.setItem(THEME_STORAGE_KEY, themeName);
};

export const applySavedTheme = () => {
  applyTheme(getSavedTheme());
};