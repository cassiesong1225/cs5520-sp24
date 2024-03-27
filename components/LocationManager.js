import { View, Button, Image, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import { MapApiKey } from "@env";

export default function LocationManager() {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState(null);
  async function verifyPermission() {
    if (status.granted) {
      return true;
    }
    try {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    } catch (err) {
      console.log(err);
    }
  }
  async function locateUserHandler() {
    // call verifypermission

    try {
      const havePermission = await verifyPermission();
      if (!havePermission) {
        Alert.alert("You need to give permission");
        return;
      }
      const receivedLocation = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: receivedLocation.coords.latitude,
        longitude: receivedLocation.coords.longitude,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View>
           <Button title="Locate me" onPress={locateUserHandler} />
    
          {location && (
              <Image
                  style={styles.image}
                  source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${MapApiKey}` }} />)}
    </View>
  )
}

const styles = StyleSheet.create({
    image: { width: Dimensions.get("screen").width, height: 200 },
})




