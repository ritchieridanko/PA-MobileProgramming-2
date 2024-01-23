import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  welcome: {
    width: "100%",
    marginLeft: SIZES.medium,
    marginTop: SIZES.small,
    marginBottom: SIZES.xxLarge,
  },
  welcomeText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
  },
  imageContainer: {
    width: "100%",
    height: 374,
    marginBottom: SIZES.xxLarge,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  paragraph: {
    width: "100%",
    marginBottom: SIZES.xxLarge,
  },
  paragraphText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    textAlign: "justify",
    letterSpacing: 1,
    lineHeight: 25,
  },
  socials: {
    width: "100%",
  },
  socialsText: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: SIZES.xSmall,
  },
  socialsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: SIZES.xxLarge + 40,
    marginBottom: SIZES.xxLarge,
  },
  socialsBtn: {
    height: SIZES.xxLarge + 35,
    width: SIZES.xxLarge + 35,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  socialsIcon: {
    height: "80%",
    width: "80%",
  },
});

export default styles;
