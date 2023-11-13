import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282A36',
    marginTop: 20,
    paddingTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  input: {
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  list: {
    marginHorizontal: 10,
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 4,
  },
  addItemButton: {
    backgroundColor: '#5DAF50',
    width: '15%',
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const listItemStyles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderWidth: 1,
    backgroundColor: '#44475A',
    borderColor: '#44475a',
    borderRadius: 5,
    marginVertical: 4,
  },
  itemText: {
    color: '#8BE9FC',
  },
});
