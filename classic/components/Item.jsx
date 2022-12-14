import { StyleSheet, Text, View } from "react-native";
import { useTheme } from '@react-navigation/native';

export default Item = (props) => {
  const { name, description } = props.route.params;
  const { colors } = useTheme();
  
  return (
    <View>
      <Text style={{...styles.title, color: colors.text}}>{name}</Text>
      <Text style={{...styles.description, color: colors.text}}>{description}</Text>
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
