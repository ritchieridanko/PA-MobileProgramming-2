import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./formpage.style";
import { SIZES } from "../../../constants";

const FormPage = ({ userData, setUserData }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: SIZES.xxLarge + 10,
      }}
    >
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>First Name</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.firstName}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                firstName: text,
              });
            }}
            placeholder="Enter your first name here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Last Name</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.lastName}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                lastName: text,
              });
            }}
            placeholder="Enter your last name here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Age</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.age}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                age: text,
              });
            }}
            placeholder="Enter your age here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>City</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.city}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                city: text,
              });
            }}
            placeholder="Enter your city here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>University</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.college.university}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                college: {
                  ...userData.college,
                  university: text,
                },
              });
            }}
            placeholder="Enter your university name here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Student ID</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.college.studentId}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                college: {
                  ...userData.college,
                  studentId: text,
                },
              });
            }}
            placeholder="Enter your student ID here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Major</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.college.major}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                college: {
                  ...userData.college,
                  major: text,
                },
              });
            }}
            placeholder="Enter your major here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>GPA</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.college.gpa}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                college: {
                  ...userData.college,
                  gpa: text,
                },
              });
            }}
            placeholder="Enter your GPA here"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Current Semester</Text>
          <TextInput
            style={styles.inputBox}
            value={userData.college.currentSemester}
            onChangeText={(text) => {
              setUserData({
                ...userData,
                college: {
                  ...userData.college,
                  currentSemester: text,
                },
              });
            }}
            placeholder="Enter your current semester here"
          />
        </View>
      </View>
    </View>
  );
};

export default FormPage;
