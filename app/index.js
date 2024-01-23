import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from "../constants";
import { HomePage, FormPage, MapPage, MenuFooter } from "../components";

const defaultData = {
  firstName: "Ritchie",
  lastName: "Ridanko",
  age: "24",
  city: "Jakarta",
  college: {
    university: "Bina Nusantara",
    studentId: "2401991062",
    major: "Computer Science",
    currentSemester: "6",
    gpa: "3.8",
  },
};

const Home = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState("home");
  const [userData, setUserData] = useState(defaultData);

  const displayPageContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage userData={userData} />;
      case "form":
        return <FormPage userData={userData} setUserData={setUserData} />;
      case "map":
        return <MapPage />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "AboutMe",
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          {displayPageContent()}
        </View>
      </ScrollView>

      <MenuFooter activePage={activePage} setActivePage={setActivePage} />
    </SafeAreaView>
  );
};

export default Home;
