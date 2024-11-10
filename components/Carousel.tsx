import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const DATA = [
  { id: '1', image: 'https://via.placeholder.com/300x150' },
  { id: '2', image: 'https://via.placeholder.com/300x150' },
  { id: '3', image: 'https://via.placeholder.com/300x150' },
];

export const CarouselComponent = () => {
  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth - 40}
        height={150}
        loop
        autoPlay={true}
        data={DATA}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <Image
            key={DATA[index].id}
            source={{ uri: DATA[index].image }}
            style={styles.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  image: {
    width: screenWidth - 40,
    height: 150,
    borderRadius: 10,
  },
}); 