import { StyleSheet, Text, View } from 'react-native';

export default Home = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.text}>Home.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32
  }
});
