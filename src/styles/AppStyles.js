import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AppStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  avatarContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  avatarInitialsContainer: {
    backgroundColor: '#dddfe2',
  },
  avatarInitialText: {
    fontSize: 18,
    color: Colors.gray,
    fontWeight: 'bold',
  },
  splashScreen: {
    backgroundColor: '#62b849',
  },
  vSpaceSeparator: {
    height: 10,
  },
  card: {
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: 'ghostwhite',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  teamListItemContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  }
});

export default AppStyles;