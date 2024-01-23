import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: SIZES.large,
  },
  inputText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  inputBox: {
    marginTop: SIZES.xxSmall,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    width: "100%",
    height: 35,
    paddingHorizontal: SIZES.xSmall,
    backgroundColor: "#FFF",
    borderWidth: SIZES.xxxSmall,
    borderRadius: SIZES.xxSmall,
    borderColor: COLORS.primary,
  },
});

export default styles;
