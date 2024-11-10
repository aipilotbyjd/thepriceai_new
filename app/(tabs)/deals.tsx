import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { DailyDeals } from '~/components/DailyDeals';
import { WeeklyDeals } from '~/components/WeeklyDeals';
import { Coupons } from '~/components/Coupons';
import { ShareButton } from '~/components/ShareButton';

export default function Deals() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <DailyDeals />
      <WeeklyDeals />
      <Coupons />
      <ShareButton />
    </ScrollView>
  );
} 