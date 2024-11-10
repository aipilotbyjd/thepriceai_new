import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const discoverData = [
  { id: '1', name: 'Popular Product 1', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Popular Product 2', image: 'https://via.placeholder.com/100' },
  // Add more discover items
];

export const DiscoverSection = () => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Discover</Text>
      <FlatList
        data={discoverData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="flex-1 items-center mb-4">
            <Image source={{ uri: item.image }} className="w-24 h-24 rounded-md" />
            <Text className="mt-2 text-center">{item.name}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}; 