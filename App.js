import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "green", padding: 16, borderRadius: 12 }}>
        <Text>Gg</Text>
      </View>
      <Text>klk Dariel el mejor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
