import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const coupons = [
  { id: '1', code: 'SAVE10', description: '10% off on electronics' },
  { id: '2', code: 'FASHION20', description: '20% off on fashion items' },
  // Add more coupons
];

export const Coupons = () => {
  const redeemCoupon = (code: string) => {
    // Handle coupon redemption logic
    console.log(`Redeemed coupon: ${code}`);
  };

  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Coupons</Text>
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-4 bg-gray-100 rounded-md mb-2">
            <Text className="text-md font-semibold">{item.code}</Text>
            <Text className="text-sm text-gray-600">{item.description}</Text>
            <TouchableOpacity
              onPress={() => redeemCoupon(item.code)}
              className="mt-2 bg-green-500 px-4 py-2 rounded-md">
              <Text className="text-white text-sm">Redeem</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}; 