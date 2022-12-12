import { StyleSheet, Text, View } from "react-native";

export default Item = (props) => {
  const { name, description } = props.route.params;
  
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 32,
    height: 44,
    textAlign: 'center'
  },
  description: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
