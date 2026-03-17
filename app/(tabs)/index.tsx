import * as SMS from "expo-sms";
import { Alert, Button, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const id = ["0123456789", "9876543210"]; //change these phone numbers

  function askToSend() {
    Alert.alert("SMS Send", "Send: " + id, [
      {
        text: "cancel",
      },
      {
        text: "ok",
        onPress: () => _handlePressButtonAsync(),
      },
    ]);
  }

  async function _handlePressButtonAsync() {
    const { result } = await SMS.sendSMSAsync(
      id,
      "My lecturer is the greatest!!",
      {
        attachments: {
          uri: "https://www.latrobe.edu.au/",
          mimeType: "image/png",
          filename: "myfile.png",
        },
      },
    );
    if (result === "sent") {
      alert("sent");
    } else {
      alert("Error: Check your balance or check phone");
    }
  }
  return (
    <View style={styles.header}>
      <View style={styles.containerRow}>
        <Button title="send SMS" onPress={() => AskToSend()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 40,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
