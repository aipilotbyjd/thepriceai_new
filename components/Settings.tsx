import React from 'react';
import { View, Text, Switch } from 'react-native';

export const Settings = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View className="mb-4">
      <Text className="text-lg font-semibold mb-2">Settings</Text>
      <View className="flex-row justify-between items-center mb-2">
        <Text>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
      <View className="flex-row justify-between items-center">
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}; 