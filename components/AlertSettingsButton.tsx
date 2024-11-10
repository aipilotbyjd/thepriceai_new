import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface AlertSettingsButtonProps {
  itemId: string;
}

export const AlertSettingsButton = ({ itemId }: AlertSettingsButtonProps) => {
  const handlePress = () => {
    // Handle alert settings logic
    console.log(`Adjust alert settings for item ${itemId}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Octicons name="settings" size={20} color="gray" />
    </TouchableOpacity>
  );
}; 