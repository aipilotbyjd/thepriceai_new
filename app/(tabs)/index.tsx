import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { producthunt } from '~/data/producthunt';

export default function Home() {
  const today = new Date();

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header Tabs */}
      <View className="flex-row space-x-3 px-4 py-3">
        <Pressable className="rounded-full bg-gray-900 px-4 py-2">
          <Text className="font-medium text-white">Featured</Text>
        </Pressable>
        <Pressable className="px-4 py-2">
          <Text className="text-gray-600">For you</Text>
        </Pressable>
      </View>

      {/* Featured Section */}
      <View className="px-4 pb-4">
        <Text className="text-gray-500">November 4-10</Text>
        <Text className="text-xl font-bold">Last week's top launches</Text>
      </View>

      {/* Product List */}
      <View className="px-4">
        {producthunt.items.map((item, index) => (
          <Pressable key={index} className="flex-row border-b border-gray-100 py-4">
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
                <Octicons name="triangle-up" size={16} color="#666" />
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
