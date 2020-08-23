import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    padding: 40,
    alignItems: 'center'
  },

  logo:{
    height: 250,
    width: 250,
    marginBottom: 80
  },

  title:{
    color: '#264653',
    fontWeight:'bold',
    fontSize: 25,
  },

  button: {
    width: 300,
    margin: 10,
    backgroundColor: "#2A9D8F",
    padding: 10,
    borderRadius: 8,
    alignItems:'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  },
});

export default styles;