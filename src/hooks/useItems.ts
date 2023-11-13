import { useMMKV, useMMKVString } from 'react-native-mmkv';
import { ListItemType } from '../types';
import { sortByCompleted } from '../utils/sortUtils';

export const useItems = () => {
	const storage = useMMKV();
	const [itemsString, setItemsString] = useMMKVString('items', storage);

	const itemsArray: ListItemType[] = itemsString ? JSON.parse(itemsString) : [];

	const addItemIntoArray = (item: ListItemType) => {
		setItemsString(JSON.stringify([...itemsArray, item]));
	};

	const removeItemIntoArray = (itemId: string) => {
		const newItemsArray = itemsArray.filter(({ id }) => id !== itemId);
		setItemsString(JSON.stringify(newItemsArray));
	};

	const toggleCompletedItem = (completed: boolean, itemId: string) => {
		const updatedItems = itemsArray.map((item) => {
			if (item.id !== itemId) return item;

			return { ...item, completed };
		});

		const sortedItems = sortByCompleted(updatedItems);

		setItemsString(JSON.stringify(sortedItems));
	};

	return {
		storage,
		itemsArray,
		addItemIntoArray,
		removeItemIntoArray,
		toggleCompletedItem,
	};
};
