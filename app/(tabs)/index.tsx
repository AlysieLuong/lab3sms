import { Link } from "expo-router";
import * as SMS from "expo-sms";
import React from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function HomeScreen() {
  const id = ["0466477688"]; //change these phone numbers
  const [text, onChangeText] = React.useState(
    "Hello: My lecturer is the greatest!!",
  );

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
      text,
      /* { attachments: {
          uri: "https://www.latrobe.edu.au/",
          mimeType: "image/png",
          filename: "myfile.png",
        },
      }, */
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
        <Button title="send SMS" onPress={() => askToSend()} />

        <Link href="./contacts" asChild>
          <Button title="contacts"></Button>
        </Link>
      </View>
      <TextInput onChangeText={onChangeText} value={text} />
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
