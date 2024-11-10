import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const recommendations = [
  { id: '1', name: 'Product A', image: 'https://via.placeholder.com/100', price: '$100' },
  { id: '2', name: 'Product B', image: 'https://via.placeholder.com/100', price: '$150' },
  // Add more recommended products
];

export const Recommendations = () => {
  return (
    <View>
      <Text className="text-lg font-semibold mb-2">Recommended for You</Text>
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mr-4 items-center">
            <Image source={{ uri: item.image }} className="w-24 h-24 rounded-md" />
            <Text className="mt-2">{item.name}</Text>
            <Text className="text-green-600">{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}; 