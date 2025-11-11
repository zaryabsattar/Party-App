import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function keyboardScrollVeiw ({
  children,
  style,
  contentContainerStyle,
  horizontal = false,
  showsHorizontalScrollIndicator = false,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={style}
        contentContainerStyle={contentContainerStyle}
        keyboardShouldPersistTaps="handled"
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={!horizontal} // Optional: logic to hide vertical scroll if horizontal
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}