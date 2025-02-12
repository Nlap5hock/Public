import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
// initiates respose to the user
const ResponseModal = ({ visible, question, response, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.question}>Your Question: {question}</Text>
          <Text style={styles.response}>The magic 8 Ball says: {response}</Text>
          <Button title="Close App" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
// decorates ResponseModal
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  response: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ResponseModal;
