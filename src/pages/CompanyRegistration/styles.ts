import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#f1f1f1',
    // justifyContent: 'center',
    padding: 40,
    // alignItems: 'center'
  },

  title:{
    textAlign: 'center',
    color: '#264653',
    fontWeight:'bold',
    fontSize: 30,
  },

  image:{
    borderRadius: 90,
    width: 150,
    height: 150,
  },

  button: {
    marginTop: 20,
    width: 200,
    margin: 10,
    backgroundColor: "#2A9D8F",
    padding: 10,
    borderRadius: 25,
    alignItems:'center'
    
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default styles;