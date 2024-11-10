import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ProfileDetails } from '../../components/ProfileDetails';
import { Settings } from '../../components/Settings';
import { SavedSearches } from '../../components/SavedSearches';
import { HelpSupport } from '../../components/HelpSupport';

export default function Account() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <ProfileDetails />
      <Settings />
      <SavedSearches />
      <HelpSupport />
    </ScrollView>
  );
} 