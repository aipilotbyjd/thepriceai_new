import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const categories = [
  { name: 'Electronics', icon: 'device-camera' },
  { name: 'Fashion', icon: 'tag' },
  { name: 'Home', icon: 'home' },
  { name: 'Beauty', icon: 'pencil' },
  // Add more categories as needed
];

export const CategoryShortcuts = () => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Categories</Text>
      <View className="flex-row flex-wrap justify-between">
        {categories.map((category) => (
          <TouchableOpacity key={category.name} className="items-center mb-4 w-16">
            <Octicons name={category.icon as any} size={24} color="black" />
            <Text className="text-sm text-center mt-1">{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}; 