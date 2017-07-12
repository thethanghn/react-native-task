
const React = require('react-native');

const { StyleSheet } = React;
export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
  },
  rowFront: {
    backgroundColor: '#fff',
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  approve: {
    flex: 1,
    width: 50,
    alignItems: 'flex-start',
  },
  approveText: {
    color: '#000'
  },
  disapprove: {
    flex: 1,
    width: 50,
    alignItems: 'flex-end',
  },
  disapproveText: {
    color: '#000'
  },
};
