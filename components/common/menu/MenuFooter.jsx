import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./menufooter.style";
import { icons } from "../../../constants";

const Footer = ({ activePage, setActivePage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuBtn(activePage, "home")}
        onPress={() => setActivePage("home")}
      >
        <View style={styles.menuWrapper}>
          <Image
            source={
              activePage === "home" ? icons.homeFilled : icons.homeOutline
            }
            resizeMode="contain"
            style={styles.menuIcon(activePage, "home")}
          />
          <Text style={styles.menuText(activePage, "home")}>HOME</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuBtn(activePage, "form")}
        onPress={() => setActivePage("form")}
      >
        <View style={styles.menuWrapper}>
          <Image
            source={
              activePage === "form" ? icons.formFilled : icons.formOutline
            }
            resizeMode="contain"
            style={styles.menuIcon(activePage, "form")}
          />
          <Text style={styles.menuText(activePage, "form")}>FORM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuBtn(activePage, "map")}
        onPress={() => setActivePage("map")}
      >
        <View style={styles.menuWrapper}>
          <Image
            source={activePage === "map" ? icons.mapFilled : icons.mapOutline}
            resizeMode="contain"
            style={styles.menuIcon(activePage, "map")}
          />
          <Text style={styles.menuText(activePage, "map")}>MAP</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
