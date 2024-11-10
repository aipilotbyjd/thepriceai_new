import React from 'react';
import { View, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons';

interface SearchBarProps {
  query: string;
  setQuery: (text: string) => void;
}

export const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-gray-200 rounded-md p-2 mb-4">
      <Octicons name="search" size={20} color="gray" className="mr-2" />
      <TextInput
        placeholder="Paste product link or search"
        value={query}
        onChangeText={setQuery}
        className="flex-1"
      />
    </View>
  );
}; 