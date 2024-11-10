import { ScrollView } from 'react-native';
import { CarouselComponent } from '~/components/Carousel';
import { CategoryShortcuts } from '~/components/CategoryShortcuts';
import { Recommendations } from '~/components/Recommendations';

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <CarouselComponent />
      <CategoryShortcuts />
      <Recommendations />
    </ScrollView>
  );
} 