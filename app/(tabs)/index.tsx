import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { producthunt } from '~/data/producthunt';

export default function Home() {
  const today = new Date();

  return (
    <ScrollView className="flex-1" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Product List */}
      <View className="px-4 shadow-md">
        {producthunt.items.map((item, index) => (
          <Pressable
            key={index}
            className="mb-3 flex-row rounded-lg border-b border-gray-100 bg-white p-3 py-4 shadow-md">
            {/* Product Icon */}
            <View className="mr-3 h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
              <Image
                source={{ uri: `https://picsum.photos/200?random=${index}` }}
                className="h-full w-full"
              />
            </View>

            {/* Product Info */}
            <View className="flex-1 justify-center">
              <Text className="text-base font-semibold">{item.name}</Text>
              <Text className="text-sm text-gray-500">{item.tagline}</Text>
              {item.category && <Text className="mt-1 text-xs text-gray-400">{item.category}</Text>}
            </View>

            {/* Upvote Button */}
            <View className="ml-2 items-end justify-center">
              <Pressable className="items-center">
                <Octicons name="heart-fill" size={20} color="#666" />
                <Text className="mt-1 text-sm text-gray-600">{item.value}</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}
      </View>

      {/* See More Button */}
      <Pressable className="mb-4 px-4 py-3">
        <Text className="text-center text-gray-600">See more products</Text>
      </Pressable>
    </ScrollView>
  );
}
