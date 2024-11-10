import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const dailyDeals = [
  { id: '1', name: 'Deal 1', image: 'https://via.placeholder.com/100', price: '$50' },
  { id: '2', name: 'Deal 2', image: 'https://via.placeholder.com/100', price: '$30' },
  // Add more daily deals
];

export const DailyDeals = () => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Daily Deals</Text>
      <FlatList
        data={dailyDeals}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View className="mr-4 items-center">
            <Image source={{ uri: item.image }} className="w-24 h-24 rounded-md" />
            <Text className="mt-2">{item.name}</Text>
            <Text className="text-green-600">{item.price}</Text>
            <TouchableOpacity className="mt-1 bg-blue-500 px-4 py-2 rounded-md">
              <Text className="text-white text-sm">Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}; 