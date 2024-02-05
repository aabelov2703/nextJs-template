const stylesColorMap = (theme: string, color: string): any => {
  return {
    bgColor:
      color === "success"
        ? theme === "dark"
          ? "var(--dark-success)"
          : "var(--light-success)"
        : color === "error"
        ? theme === "dark"
          ? "var(--dark-error)"
          : "var(--light-error)"
        : color === "warning"
        ? theme === "dark"
          ? "var(--dark-warning)"
          : "var(--light-warning)"
        : theme === "dark"
        ? "var(--dark)"
        : "var(--light)",
    color:
      color === "success"
        ? theme === "dark"
          ? "var(--light-success)"
          : "var(--dark-success)"
        : color === "error"
        ? theme === "dark"
          ? "var(--light-error)"
          : "var(--dark-error)"
        : color === "warning"
        ? theme === "dark"
          ? "var(--light-warning)"
          : "var(--dark-warning)"
        : theme === "dark"
        ? "var(--light)"
        : "var(--dark)",
  };
};

const stylesPaddingMap = (size: string): string => {
  return size === "small"
    ? "4px 6px"
    : size === "large"
    ? "12px 24px"
    : "4px 16px";
};

const stylesFontSize = (size: string): string => {
  return size === "small" ? "14px" : size === "large" ? "20px" : "16px";
};

export const calcBtn = (theme: string, props: any | undefined): any => {
  const color = props?.color || "";
  const variant = props?.variant || "outlined";
  const size = props?.size || "";
  const isHover = props?.isHover;
  const colors = stylesColorMap(theme, color);
  const padding = stylesPaddingMap(size);
  const fontSize = stylesFontSize(size);

  const hoverColors = isHover && {
    backgroundColor: colors.color,
    color: colors.bgColor,
  };

  return {
    backgroundColor: colors.bgColor,
    color: colors.color,
    border: variant === "outlined" ? `${colors.color} solid 1px` : "none",
    padding,
    fontSize,
    transition: "background-color 0.5s, color 0.3s",
    ":hover": {
      backgroundColor: colors.color,
      color: colors.bgColor,
    },
    ...hoverColors,
  };
};

export const calcSwitch = (theme: string) => {
  const colors = stylesColorMap(theme, "");
  const outterStyles = {
    shadow: `inset 0px 0px 2px 0px ${colors.color}`,
  };
  const innerStyles = {
    bgColor: theme === "dark" ? "var(--dark)" : "var(--light)",
    shadow: `inset ${theme === "dark" ? "-" : ""}4px 1px 10px ${colors.color}`,
  };

  return {
    inner: {
      backgroundColor: innerStyles.bgColor,
      boxShadow: innerStyles.shadow,
    },
    outter: {
      backgroundColor: colors.bgColor,
      boxShadow: outterStyles.shadow,
    },
  };
};