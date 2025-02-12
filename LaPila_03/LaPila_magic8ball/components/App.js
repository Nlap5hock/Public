import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import QuestionInput from './components/InputQuestion';
import ResponseModal from './components/ResponseModal.js';
//
export default function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
// 8 Ball's reponses
  const responses = [
   "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
// 
  const handleSubmit = () => {
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setResponse(randomResponse);
    setModalVisible(true);
  };
// returns user qu
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magic 8 Ball</Text>
      <QuestionInput question={question} setQuestion={setQuestion} />
      <Button title="Ask the Magic 8 Ball" onPress={handleSubmit} />
      
      <ResponseModal
        visible={modalVisible}
        question={question}
        response={response}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0e7826',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

