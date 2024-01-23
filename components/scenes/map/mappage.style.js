import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  mapContainer: {
    width: "100%",
    height: 290,
    borderRadius: SIZES.small,
    borderWidth: SIZES.xxSmall - 3,
    borderColor: COLORS.primary,
    overflow: "hidden",
  },
  mapWidget: {
    width: "100%",
    height: "100%",
  },
  mapInfoContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    marginVertical: SIZES.xxLarge,
  },
  mapInfoWrapper: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: SIZES.large,
  },
  mapInfoText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  mapInfoInput: {
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
