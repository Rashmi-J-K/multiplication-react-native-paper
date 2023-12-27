import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { DataTable } from 'react-native-paper';

const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = (text) => {
    setInputNumber(text);
  };

  const handleSubmit = () => {
    const number = parseInt(inputNumber, 10);

    if (!isNaN(number)) {
      const newData = [];
      for (let i = 1; i <= 10; i++) {
        newData.push({
          name: inputNumber,
          index: i,
          result: number * i,
        });
      }
      setData(newData);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter a number"
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={handleInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Index</DataTable.Title>
          <DataTable.Title>Result</DataTable.Title>
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.index}</DataTable.Cell>
            <DataTable.Cell>{item.result}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default App;

