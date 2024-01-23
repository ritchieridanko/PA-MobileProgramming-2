import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import MapView from "react-native-maps";

import styles from "./mappage.style";
import { SIZES } from "../../../constants";

const defaultCoordinates = {
  latitude: -6.2088,
  longitude: 106.8456,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

const MapPage = () => {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: SIZES.xxLarge + 10,
      }}
    >
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapWidget}
            region={coordinates}
            onRegionChange={(newRegion) => setCoordinates(newRegion)}
          />
        </View>

        <View style={styles.mapInfoContainer}>
          <View style={styles.mapInfoWrapper}>
            <Text style={styles.mapInfoText}>Latitude</Text>
            <TextInput
              style={styles.mapInfoInput}
              value={
                coordinates.latitude !== null
                  ? coordinates.latitude.toString()
                  : ""
              }
              onChangeText={(text) => {
                const numericText = parseFloat(text);
                const newLatitude =
                  numericText > 90 ? 90 : numericText < -90 ? -90 : numericText;
                setCoordinates({
                  ...coordinates,
                  latitude: newLatitude,
                });
              }}
              placeholder="Enter latitude here"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.mapInfoWrapper}>
            <Text style={styles.mapInfoText}>Longitude</Text>
            <TextInput
              style={styles.mapInfoInput}
              value={
                coordinates.longitude !== null
                  ? coordinates.longitude.toString()
                  : ""
              }
              onChangeText={(text) => {
                const numericText = parseFloat(text);
                const newLongitude =
                  numericText > 180
                    ? 180
                    : numericText < -180
                    ? -180
                    : numericText;
                setCoordinates({
                  ...coordinates,
                  longitude: newLongitude,
                });
              }}
              placeholder="Enter longitude here"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.mapInfoWrapper}>
            <Text style={styles.mapInfoText}>Latitude Delta</Text>
            <TextInput
              style={styles.mapInfoInput}
              value={
                coordinates.latitudeDelta !== null
                  ? coordinates.latitudeDelta.toString()
                  : ""
              }
              onChangeText={(text) => {
                setCoordinates({
                  ...coordinates,
                  latitudeDelta: parseFloat(text),
                });
              }}
              placeholder="Enter latitude delta here"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.mapInfoWrapper}>
            <Text style={styles.mapInfoText}>Longitude Delta</Text>
            <TextInput
              style={styles.mapInfoInput}
              value={
                coordinates.longitudeDelta !== null
                  ? coordinates.longitudeDelta.toString()
                  : ""
              }
              onChangeText={(text) => {
                setCoordinates({
                  ...coordinates,
                  longitudeDelta: parseFloat(text),
                });
              }}
              placeholder="Enter longitude delta here"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MapPage;
