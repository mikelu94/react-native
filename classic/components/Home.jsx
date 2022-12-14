import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default Home = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.layout}>
      <Text style={{...styles.text, color: colors.text}}>Home.</Text>
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
