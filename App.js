import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Focus } from './src/features/Focus';
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
