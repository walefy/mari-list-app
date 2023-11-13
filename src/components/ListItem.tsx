import React from 'react';
import { ListItemType } from '../types';
import { Pressable, Text, Alert } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { listItemStyles } from '../styles/styles';


type ListItemProps = {
  item: ListItemType;
  handleRemoveItem: (id: string) => void;
};

export const ListItem: React.FC<ListItemProps> = ({ item, handleRemoveItem }) => {
  const showConfirmDeleteModal = (id: string) => {
    Alert.alert('Delete item', 'would you like to delete this?', [
      {
        text: 'Yes',
        onPress: () => handleRemoveItem(id),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      }
    ]);
  }; 
  
  return (
    <Pressable
      style={listItemStyles.listItem}
      onLongPress={ () => showConfirmDeleteModal(item.id) }
    >
      <Text style={listItemStyles.itemText}>{ item.title }</Text>
      <BouncyCheckbox
        fillColor='#5DAF50'
      />
    </Pressable>
  );
};
