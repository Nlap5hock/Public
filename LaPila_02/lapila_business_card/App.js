import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function App() {
 
  const handleGithubLink = () => {
    Linking.openURL('https://github.com/Nlap5hock'); 
  };

 
  const handleEmailLink = () => {
    Linking.openURL('mailto:njlapila@gmail.com.com');
  };

  const handlePhoneLink = () => {
    Linking.openURL('tel:+8605106818'); 
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={require('./docs/app_photo.png')} 
      style={styles.profileImage} />

      {/* Name */}
      <Text style={styles.name}>Nathaniel LaPila</Text>

      {/* Email */}
      <TouchableOpacity onPress={handleEmailLink}>
        <Text style={styles.link}>Email: njlapila@gmail.com</Text>
      </TouchableOpacity>

      {/* Phone Number */}
      <TouchableOpacity onPress={handlePhoneLink}>
        <Text style={styles.link}>Phone: +1 860-510-6818</Text>
      </TouchableOpacity>

      {/* GitHub Link */}
      <TouchableOpacity onPress={handleGithubLink}>
        <Text style={styles.link}>GitHub: github.com/Nlap5hock</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1ebbd7',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#005073',
    marginBottom: 10,
  },
});
