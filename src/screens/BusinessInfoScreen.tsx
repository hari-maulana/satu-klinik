// screens/BusinessInfoScreen.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface FormComponentProps {
  onButtonClick: () => void;
}

const BusinessInfoScreen: React.FC<FormComponentProps> = ({ onButtonClick }) => {
  const [isChecked, setChecked] = React.useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informasi Usaha</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Pemilik Klinik</Text>
        <TextInput style={styles.input} placeholder="Masukkan nama pemilik klinik" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nomor WhatsApp</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
            // value={value}
            // onChangeText={handleInputChange}
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
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Masukkan email pemilik klinik" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama Klinik</Text>
        <TextInput style={styles.input} placeholder="Masukkan nama klinik" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alamat</Text>
        <TextInput style={styles.input} placeholder="" />
      </View>

      <TouchableOpacity
            style={[styles.button, !isChecked && styles.buttonDisabled]}
            onPress={onButtonClick}
          >
            <Text style={styles.buttonText}>Lanjutkan</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  header: {
    fontSize: 24,
    color: "#30564e",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 9,
  },
  button: {
    backgroundColor: "#2e584e", 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 10, 
    elevation: 3, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4,
    width: '100%',
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

export default BusinessInfoScreen;
