import { ListItemType } from '../types';

export const sortByCompleted = (items: ListItemType[]) => {
	return items.sort((a, b) => {
		if (a.completed === b.completed) return 0;
		if (a.completed) return 1;
		return -1;
	});
};
