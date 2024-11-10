import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

export const HelpSupport = () => {
  const openFAQ = () => {
    // Open FAQ link
    Linking.openURL('https://thepriceai.com/faq');
  };

  const contactSupport = () => {
    // Open contact support email or form
    Linking.openURL('mailto:support@thepriceai.com');
  };

  const sendFeedback = () => {
    // Open feedback form
    Linking.openURL('https://thepriceai.com/feedback');
  };

  return (
    <View className="mb-4">
      <Text className="mb-2 text-lg font-semibold">Help & Support</Text>
      <TouchableOpacity onPress={openFAQ} className="mb-2">
        <Text className="text-blue-500">FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={contactSupport} className="mb-2">
        <Text className="text-blue-500">Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendFeedback}>
        <Text className="text-blue-500">Send Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};
