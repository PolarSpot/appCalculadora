import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
    
  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Invalid Expression');
  }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression(expression + value);
        }
  };

  //Melhoria futura: adicionar funcionalidade para os botões "Del" e "%"
  const buttons = [
    ['C', 'DEL', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '=', ''],
  ];
            
    return (
    <View style={styles.container}>
      <View style={styles.expressionContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, index) => {
          return (
            <View key={index} style={styles.row}>
              {row.map((buttonValue) => {
                return (
                  <TouchableOpacity
                    key={buttonValue}
                    style={styles.button}
                    onPress={() => handleButtonPress(buttonValue)}>
                    <Text style={styles.buttonText}>{buttonValue}</Text>
                </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
            </View>
        </View>
    );
};