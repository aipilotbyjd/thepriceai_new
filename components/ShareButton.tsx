import React from 'react';
import { TouchableOpacity, Share, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';

export const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this deal on ThePriceAI!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableOpacity
      onPress={onShare}
      className="mt-4 flex-row items-center bg-blue-500 px-4 py-2 rounded-md">
      <Octicons name="share" size={20} color="white" className="mr-2" />
      <Text className="text-white">Share This Deal</Text>
    </TouchableOpacity>
  );
}; 