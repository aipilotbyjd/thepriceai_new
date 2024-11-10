import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export const ProfileDetails = () => {
  const handleEdit = () => {
    // Handle edit profile
    console.log('Edit profile');
  };

  return (
    <View className="mb-4 items-center">
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        className="w-24 h-24 rounded-full mb-2"
      />
      <Text className="text-xl font-semibold">John Doe</Text>
      <TouchableOpacity onPress={handleEdit} className="mt-2 bg-blue-500 px-4 py-2 rounded-md">
        <Text className="text-white">Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}; 