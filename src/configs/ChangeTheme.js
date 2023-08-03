const ChangeTheme = (theme) => {
  const defaultParams = {
    uncategorizedBg: "rgba(90, 200, 250, 0.20)",
    uncategorized: "rgba(90, 200, 250, 1)",
    travelBg: "rgba(52, 199, 89, 0.20)",
    travel: "rgba(52, 199, 89, 1)",
    workBg: "rgba(255, 59, 48, 0.20)",
    work: "rgba(255, 59, 48, 1)",
    learningBg: "rgba(255, 149, 0, 0.20)",
    learning: "rgba(255, 149, 0, 1)",
  };

  const defaultParamsLight = {
    ...defaultParams,
    divider: "#e8e9ed",
    whitePressed: "#afafaf",
    textMain: "#2c2c2c",
    textSecondary: "#626d7a",
  };
  const defaultParamsDark = {
    ...defaultParams,
    divider: "#252525",
    whitePressed: "#afafaf",
    textMain: "#fff",
    textSecondary: "#929292",
  };

  switch (theme) {
    case "theme_usual":
      return {
        ...defaultParamsLight,
        accent: "#604ae6",
        subAccent: "#7A67EF",
        bgColor: "#e6e6e8",
        container: "#fff",
      };
    case "theme_usual_dark":
      return {
        ...defaultParamsDark,
        accent: "#604ae6",
        subAccent: "#7A67EF",
        bgColor: "#141414",
        container: "#222222",
      };
    case "theme_orange":
      return {
        ...defaultParamsLight,
        accent: "#F16E51",
        subAccent: "#F18E78",
        bgColor: "#e6e6e8",
        container: "#fff",
      };
    case "theme_orange_dark":
      return {
        ...defaultParamsDark,
        accent: "#F16E51",
        subAccent: "#F18E78",
        bgColor: "#141414",
        container: "#222222",
      };
    case "theme_blue":
      return {
        ...defaultParamsLight,
        accent: "#4D5BD8",
        subAccent: "#7E88E0",
        bgColor: "#e6e6e8",
        container: "#fff",
      };
    case "theme_blue_dark":
      return {
        ...defaultParamsDark,
        accent: "#4D5BD8",
        subAccent: "#7E88E0",
        bgColor: "#141414",
        container: "#222222",
      };
    case "theme_red":
      return {
        ...defaultParamsLight,
        accent: "#9E2232",
        subAccent: "#DF6170",
        bgColor: "#e6e6e8",
        container: "#fff",
      };
    case "theme_red_dark":
      return {
        ...defaultParamsDark,
        accent: "#9E2232",
        subAccent: "#DF6170",
        bgColor: "#141414",
        container: "#222222",
      };
    case "theme_green":
      return {
        ...defaultParamsLight,
        accent: "#217547",
        subAccent: "#73A68B",
        bgColor: "#e6e6e8",
        container: "#fff",
      };
    case "theme_green_dark":
      return {
        ...defaultParamsDark,
        accent: "#217547",
        subAccent: "#73A68B",
        bgColor: "#141414",
        container: "#222222",
      };
    case "theme_purple":
      return {
        ...defaultParamsLight,
        accent: "#8E76A9",
        subAccent: "#AC9EBD",
        bgColor: "#e6e6e8",
        container: "#fff",
      };
    case "theme_purple_dark":
      return {
        ...defaultParamsDark,
        accent: "#8E76A9",
        subAccent: "#AC9EBD",
        bgColor: "#141414",
        container: "#222222",
      };
  }
};

export default ChangeTheme;
