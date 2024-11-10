import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const savedSearches = [
  { id: '1', query: 'iPhone 14' },
  { id: '2', query: 'Leather Jacket' },
  // Add more saved searches
];

export const SavedSearches = () => {
  const handleDelete = (id: string) => {
    // Handle deletion of saved search
    console.log(`Deleted search with id: ${id}`);
  };

  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Saved Searches & History</Text>
      <FlatList
        data={savedSearches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center p-2 border-b border-gray-200">
            <Text>{item.query}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text className="text-red-500">Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}; 