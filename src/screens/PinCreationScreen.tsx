// screens/PinCreationScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PinCreationScreen: React.FC = () => {
  const [pin, setPin] = useState<string[]>([]);
  const [inputedPin, setInputedPin] = useState<string>('');

  const handlePress = (value: string) => {
    if (pin.length < 6) {
      setPin([...pin, value]);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 6) {
      alert(`Your PIN is: ${pin.join('')}`);
      setPin([]);
    }
  }, [pin]);

  return (

    <View style={styles.container}>
      <Text style={styles.header}>Buat kode akses (PIN)</Text>
      <Text style={styles.subHeader}>Kode akses ini akan digunakan untuk setiap kali akan melakukan transaksi.</Text>
      <View style={styles.pinContainer}>
        {Array(6).fill('').map((_, index) => (
          <View key={index} style={[styles.pinDot, pin.length > index && styles.filledPinDot]} />
        ))}
      </View>
      <View>
        <Text>hihi</Text>
      </View>
      <View style={styles.keypad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '0'].map((num) => (
          <TouchableOpacity key={num} style={styles.keypadButton} onPress={() => handlePress(num)}>
            <Text style={styles.keypadButtonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.keypadButton} onPress={handleDelete}>
          <Text style={styles.keypadButtonText}>⌫</Text>
        </TouchableOpacity>
      </View>


      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004B23',
    marginTop: 32,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 72,
  },
  pinDot: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#ccc',
  },
  filledPinDot: {
    backgroundColor: '#004B23',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '80%',
  },
  keypadButton: {
    width: 76,
    height: 76,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 76 / 2,
    marginBottom: 15,
    backgroundColor: '#f8f9fe',
  },
  keypadButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PinCreationScreen;
