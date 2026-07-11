import { View, Text, StyleSheet, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🚀 Starter App</Text>
        <Text style={styles.subtitle}>
          Cross-platform scaffold — ready for widgets & notifications.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Next steps</Text>
          <Text style={styles.cardItem}>• src/services/notifications — push & local notifications</Text>
          <Text style={styles.cardItem}>• targets/widget — iOS home-screen widget (SwiftUI)</Text>
          <Text style={styles.cardItem}>• android-native/…/widget — Android App Widget (Kotlin)</Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>It runs! ✅</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b0f19" },
  content: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 16 },
  title: { fontSize: 32, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 16, color: "#9aa4b2", textAlign: "center" },
  card: {
    backgroundColor: "#151b2b",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    gap: 8,
    marginTop: 12,
  },
  cardTitle: { fontSize: 18, fontWeight: "600", color: "#fff", marginBottom: 4 },
  cardItem: { fontSize: 14, color: "#c3cad6", lineHeight: 20 },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
})
