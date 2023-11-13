import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View
} from 'react-native';
import { randomUUID } from 'expo-crypto';
import { useItems } from './src/hooks/useItems';
import { mainStyles } from './src/styles/styles';
import { ListItem } from './src/components/ListItem';

const App = () => {
  const [itemText, setItemText] = useState('');
  const { itemsArray, addItemIntoArray } = useItems();

  const addItem = (item: string) => {
    if (item.trim() === '') return;

    const id = randomUUID();
    const newItem = { id, title: item.trim(), completed: false };
    addItemIntoArray(newItem);

    setItemText('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={mainStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FlatList
        style={mainStyles.list}
        data={ itemsArray }
        renderItem={({ item }) => <ListItem item={ item } />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={mainStyles.inputContainer}>
        <TextInput
          style={mainStyles.input}
          onChangeText={value => setItemText(value)}
          defaultValue={itemText}
          placeholder='Add a new item'
        />
        <Pressable
          style={mainStyles.addItemButton}
          onPress={() => addItem(itemText)}
        >
          <Ionicons name="add" size={30} color="white" />
        </Pressable>
      </View>
      <StatusBar style="light" backgroundColor='#282A36' />
    </KeyboardAvoidingView>
  );
};

export default App;
