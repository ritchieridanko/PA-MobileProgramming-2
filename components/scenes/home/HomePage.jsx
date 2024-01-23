import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./homepage.style";
import { SIZES, icons, images } from "../../../constants";

const HomePage = ({ userData }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: SIZES.xxLarge + 10,
      }}
    >
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Hi, Everyone!</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={styles.image}
          />
        </View>

        <View style={styles.paragraph}>
          <Text style={styles.paragraphText}>
            {"  "}I'm {userData.firstName} {userData.lastName} and I'm{" "}
            {userData.age} years old from {userData.city}. I'm currently
            enrolled at {userData.college.university} University with a major in{" "}
            {userData.college.major} and I'm on semester{" "}
            {userData.college.currentSemester} with a GPA of{" "}
            {userData.college.gpa}.
          </Text>
        </View>

        <View style={styles.socials}>
          <Text style={styles.socialsText}>Reach Out To Me On</Text>

          <View style={styles.socialsContainer}>
            <TouchableOpacity style={styles.socialsBtn}>
              <Image
                source={icons.linkedin}
                resizeMode="contain"
                style={styles.socialsIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialsBtn}>
              <Image
                source={icons.slack}
                resizeMode="contain"
                style={styles.socialsIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialsBtn}>
              <Image
                source={icons.twitter}
                resizeMode="contain"
                style={styles.socialsIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialsBtn}>
              <Image
                source={icons.twitch}
                resizeMode="contain"
                style={styles.socialsIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
