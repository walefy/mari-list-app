import { useMMKV, useMMKVString } from 'react-native-mmkv';
import { ListItemType } from '../types';

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

  return {
    storage,
    itemsArray,
    addItemIntoArray,
    removeItemIntoArray,
  };
};
