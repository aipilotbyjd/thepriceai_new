import React from 'react';
import { View, Text, Image } from 'react-native';

interface WishlistItemProps {
  name: string;
  image: string;
  price: string;
}

export const WishlistItem = ({ name, image, price }: WishlistItemProps) => {
  return (
    <View className="flex-row items-center p-2 border-b border-gray-200">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-md mr-4" />
      <View className="flex-1">
        <Text className="text-lg">{name}</Text>
        <Text className="text-green-600">{price}</Text>
      </View>
    </View>
  );
}; 