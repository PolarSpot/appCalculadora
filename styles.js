import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    expressionContainer: {
      flex: 2,
      backgroundColor: '#444',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 10,
    },
    expressionText: {
      fontSize: 24,
      color: '#fff',
    },
    resultContainer: {
      flex: 1,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 10,
    },
    resultText: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
    },
    buttonContainer: {
      flex: 7,
      backgroundColor: '#333',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#fff',
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  