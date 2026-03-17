import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import React from "react";
import {
    Button,
    StyleSheet
} from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      Stack.Screen options={{ title: "Oops!" }}
      <ThemedView style={styles.containerRow}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="../(tabs)/home" asChild>
          <Button title="Go to Home" />
        </Link>
      </ThemedView>
    </>
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
