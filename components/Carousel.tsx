import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const DATA = [
  { id: '1', image: 'https://via.placeholder.com/300x150' },
  { id: '2', image: 'https://via.placeholder.com/300x150' },
  { id: '3', image: 'https://via.placeholder.com/300x150' },
];

export const CarouselComponent = () => {
  const renderItem = ({ item }: { item: { id: string; image: string } }) => (
    <Image source={{ uri: item.image }} style={{ width: screenWidth - 40, height: 150, borderRadius: 10 }} />
  );

  return (
    <View className="mb-4">
      <Carousel
        data={DATA}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        autoplay
        loop
      />
    </View>
  );
}; 