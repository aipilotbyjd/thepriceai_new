import { View, Text, FlatList } from 'react-native';
import { WishlistItem } from '../../components/WishlistItem';
import { AlertSettingsButton } from '../../components/AlertSettingsButton';

export default function Alerts() {
  const wishlistData = [
    // Sample data
    { id: '1', category: 'Electronics', name: 'Smartphone' },
    { id: '2', category: 'Fashion', name: 'Shoes' },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      {['Electronics', 'Fashion'].map((category) => (
        <View key={category} className="mb-4">
          <Text className="text-lg font-semibold">{category}</Text>
          <FlatList
            data={wishlistData.filter(item => item.category === category)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row justify-between items-center p-2">
                <WishlistItem name={item.name} image="url" price="$100" />
                <AlertSettingsButton itemId={item.id} />
              </View>
            )}
          />
        </View>
      ))}
    </View>
  );
} 