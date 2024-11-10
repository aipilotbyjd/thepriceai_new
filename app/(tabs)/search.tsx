import { View, Text, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { DiscoverSection } from '../../components/DiscoverSection';

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <View className="flex-1 bg-white p-4">
      <SearchBar query={query} setQuery={setQuery} />
      <DiscoverSection />
    </View>
  );
} 