import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
// initias the user's queation input
const InputQuestion = ({ question, setQuestion }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Ask a question..."
      value={question}
      onChangeText={setQuestion}
    />
  );
};
// decorates InputQuestion
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#503c9a',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default InputQuestion;
