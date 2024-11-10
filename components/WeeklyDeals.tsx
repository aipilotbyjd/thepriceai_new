import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const weeklyDeals = [
  { id: '1', name: 'Weekly Deal 1', image: 'https://via.placeholder.com/100', price: '$70' },
  { id: '2', name: 'Weekly Deal 2', image: 'https://via.placeholder.com/100', price: '$40' },
  // Add more weekly deals
];

export const WeeklyDeals = () => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Weekly Top Deals</Text>
      <FlatList
        data={weeklyDeals}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="flex-1 items-center mb-4">
            <Image source={{ uri: item.image }} className="w-24 h-24 rounded-md" />
            <Text className="mt-2">{item.name}</Text>
            <Text className="text-green-600">{item.price}</Text>
            <TouchableOpacity className="mt-1 bg-blue-500 px-4 py-2 rounded-md">
              <Text className="text-white text-sm">Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}; 