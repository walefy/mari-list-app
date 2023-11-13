import React from 'react';
import { ListItemType } from '../types';
import { Pressable, Text, Alert } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { listItemStyles } from '../styles/styles';
import { useItems } from '../hooks/useItems';

type ListItemProps = {
  item: ListItemType;
};

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
	const { toggleCompletedItem, removeItemIntoArray } = useItems();

	const showConfirmDeleteModal = (id: string) => {
		Alert.alert('Delete item', 'would you like to delete this?', [
			{
				text: 'Cancel',
				style: 'cancel',
			},
			{
				text: 'Yes',
				onPress: () => removeItemIntoArray(id),
				style: 'destructive',
			},
		]);
	}; 
  
	return (
		<Pressable
			style={listItemStyles.listItem}
			onLongPress={ () => showConfirmDeleteModal(item.id) }
		>
			<Text style={listItemStyles.itemText}>{ item.title }</Text>
			<BouncyCheckbox
				fillColor="#5DAF50"
				aria-label="checkbox item"
				onPress={(checked) => toggleCompletedItem(checked, item.id)}
			/>
		</Pressable>
	);
};
