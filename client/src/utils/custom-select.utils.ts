export const CUSTOM_SELECT_STYLE = {
  option: (provided: any, { isDisabled, data }: any) => ({
    ...provided,
    color: data.color || "black",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "16px",
    backgroundColor: isDisabled ? "#EFEFEF" : "white",
    cursor: isDisabled ? "not-allowed" : "default",
    pointerEvents: data.value === "menuHeader" ? "none" : "auto",
    "&:active": {
      backgroundColor:
        data.value === "menuHeader" ? "transparent" : isDisabled ? "#EFEFEF" : "#D6E4F4"
    },
    "&:hover": {
      backgroundColor:
        data.value === "menuHeader" ? "transparent" : isDisabled ? "#EFEFEF" : "#D6E4F4"
    }
  }),
  control: (base: any) => ({
    ...base,
    height: "2.5em",
    width: "100%",
    border: "1px solid #f2f2f2",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "28px",
    paddingLeft: "0.5em",
    boxShadow: "none",
    backgroundColor: "#F2F2F2",
    "&:hover": {
      border: "1px solid #731054",
      backgroundColor: "#ffffff"
    },
    "&:focus-within": {
      border: "1px solid #731054",
      backgroundColor: "#ffffff"
    }
  }),
  menu: (provided: any) => ({
    ...provided,
    border: "1px solid #ffffff",
    borderRadius: "4px",
    filter: "drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.1))",
    zIndex: "100"
  }),
  menuList: (provided: any, state: any, base: any) => ({
    ...base,
    ...provided,
    overflowY: "auto",
    maxHeight: "13em",
    scrollbarWidth: "thin",
    webkitScrollbar: {
      width: "4px",
      scrollbarWidth: "thin",
      scrollbarColor: "#C2C2C2 transparent",
      backgroundClip: "padding-box"
    },
    "::-webkit-scrollbar": {
      width: "4px",
      borderRadius: "16px",
      backgroundClip: "padding-box"
    },
    webkitScrollbarTrack: {
      borderRadius: "16px",
      backgroundClip: "padding-box"
    },
    "::-webkit-scrollbar-track": {
      borderRadius: "16px",
      backgroundClip: "padding-box"
    },
    webkitScrollbarThumb: {
      backgroundColor: "#731054",
      borderRadius: "16px",
      backgroundClip: "padding-box"
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#C2C2C2",
      width: "4px",
      borderRadius: "16px",
      backgroundClip: "padding-box"
    }
  })
};
