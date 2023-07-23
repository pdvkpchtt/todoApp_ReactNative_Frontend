const ChangeTheme = (theme) => {
  const defaultParamsLight = {
    divider: "#e8e9ed",
    textMain: "#2c2c2c",
    textSecondary: "#626d7a",
  };
  const defaultParamsDark = {
    divider: "#252525",
    textMain: "#fff",
    textSecondary: "#929292",
  };

  switch (theme) {
    case "theme_usual":
      return {
        ...defaultParamsLight,
        accent: "#477dbb",
        bgColor: "#edeef0",
        container: "#fff",
      };
    case "theme_usual_dark":
      return {
        ...defaultParamsDark,
        accent: "#6495cc",
        bgColor: "#141414",
        container: "#222222",
      };
  }
};

export default ChangeTheme;
