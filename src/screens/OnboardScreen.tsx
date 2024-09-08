import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Checkbox } from "react-native-paper";
import MyCarousel from "../components/carousel/MyCarousel";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Link } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";



type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

function OnboardScreen({ navigation }: Props) {
  const [isChecked, setChecked] = useState(true);
  const [value, setValue] = useState("");
  const handleInputChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setValue(numericValue);
  };


  return (
    <View>
      <View style={styles.intro}>
        {/* <Mycarousel /> */}
        <MyCarousel />
      </View>
      <View id="content" style={styles.content}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textBig}>
            Selamat Datang di{" "}
            <Text style={styles.textBigYellow}>Satu Klinik</Text>
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 8,
              borderRadius: 9,
              marginRight: 12,
              width: "20%",
              color: "black",
            }}
            value="🇮🇩 +62"
            editable={false}
          />
          <TextInput
            value={value}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 8,
              borderRadius: 9,
              width: "77%",
            }}
            placeholder="Masukkan nomor WA"
          />
        </View>
        <View
          id="checkbox"
          style={{ display: "flex", flexDirection: "row", marginTop: 22 }}
        >
          <Checkbox
            color="#FFC700"
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!isChecked);
            }}
          />
          <Text>
            Saya telah membaca dan menyetuju <Link to="#" style={{ color: "#f9b341" }}>Syarat & Ketentuan</Link> dan <Link to="#" style={{ color: "#f9b341" }}> Kebijakan
            Privasi.</Link>
          </Text>
        </View>
        <View
          id="button"
          style={{ display: "flex", flexDirection: "column", marginTop: 32 }}
        >
          <TouchableOpacity
            style={[styles.button, !isChecked && styles.buttonDisabled]}
            onPress={isChecked ? () => navigation.navigate('Register')  : undefined}
            disabled={!isChecked}
          >
            <Text style={styles.buttonText}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    height: "66%",
    backgroundColor: "#f8f9fe",
  },
  content: {
    fontSize: 24,
    marginLeft: 20,
    marginRight: 20,
    height: "34%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  textBig: {
    fontSize: 24,
    color: "#30564e",
    fontWeight: "600",
  },
  textBigYellow: {
    fontSize: 24,
    color: "#f9b341",
    fontWeight: "semibold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#2e584e", // Background color of the button
    paddingVertical: 12, // Vertical padding inside the button
    paddingHorizontal: 24, // Horizontal padding inside the button
    borderRadius: 10, // Rounded corners
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 16, // Font size
    fontWeight: "bold", // Font weight
    textAlign: "center", // Center the text
  },
  buttonDisabled: {
    backgroundColor: "#c0c0c0",
  },
});

export default OnboardScreen;
