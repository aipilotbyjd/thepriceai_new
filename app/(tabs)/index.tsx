import { Octicons } from '@expo/vector-icons';
import { Pressable, ScrollView, TextInput, View, Text, Image, RefreshControl } from 'react-native';
import { CarouselComponent } from '~/components/Carousel';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: '999.99',
    rating: 4.8,
    discount: '10%',
    image: 'https://via.placeholder.com/400',
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: '1299.99',
    rating: 4.9,
    discount: '5%',
    image: 'https://via.placeholder.com/400',
  },
  // Add more products...
];

const categories = [
  { id: 1, name: 'Electronics', icon: '🔌', color: 'bg-blue-100' },
  { id: 2, name: 'Fashion', icon: '👕', color: 'bg-pink-100' },
  { id: 3, name: 'Home', icon: '🏠', color: 'bg-green-100' },
  { id: 4, name: 'Beauty', icon: '💄', color: 'bg-purple-100' },
  { id: 5, name: 'Sports', icon: '⚽', color: 'bg-orange-100' },
];

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Add your refresh logic here
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <ScrollView 
      className="flex-1 bg-gray-50"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Header */}
      <View className="bg-white px-4 pt-4 pb-2">
        {/* Search Bar */}
        <View className="flex-row items-center rounded-full bg-gray-100 px-4 py-2 mb-4">
          <Octicons name="search" size={20} color="#666" />
          <TextInput
            placeholder="Search products"
            className="ml-2 flex-1 text-base"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Carousel */}
      <CarouselComponent />

      {/* Categories */}
      <View className="px-4 py-6 bg-white rounded-t-3xl -mt-4">
        <Text className="text-lg font-bold mb-4">Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <Pressable
              key={category.id}
              className={`mr-4 h-20 w-20 items-center justify-center rounded-2xl ${category.color}`}>
              <Text className="text-2xl mb-1">{category.icon}</Text>
              <Text className="text-xs font-medium">{category.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Featured Products */}
      <View className="p-4 bg-white">
        <Text className="text-lg font-bold mb-4">Featured Products</Text>
        <View className="flex-row flex-wrap justify-between">
          {products.map((product) => (
            <Pressable 
              key={product.id} 
              className="mb-4 w-[48%] rounded-2xl bg-white shadow-md overflow-hidden"
            >
              <View className="relative">
                <Image 
                  source={{ uri: product.image }} 
                  className="h-40 w-full"
                />
                {product.discount && (
                  <View className="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded-full">
                    <Text className="text-white text-xs font-bold">-{product.discount}</Text>
                  </View>
                )}
              </View>
              <View className="p-3">
                <Text className="text-sm font-medium mb-1">{product.name}</Text>
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-bold text-blue-500">${product.price}</Text>
                  <View className="flex-row items-center">
                    <Text className="text-yellow-500 mr-1">★</Text>
                    <Text className="text-sm text-gray-600">{product.rating}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
