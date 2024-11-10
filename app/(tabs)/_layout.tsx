import { Tabs } from 'expo-router';
import { HeaderButton } from '../../components/HeaderButton';
import { Platform } from 'react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { TabBarIcon } from '../../components/TabBarIcon';

const TAB_SCREENS = [
  {
    name: 'index',
    label: 'Home',
    icon: 'home',
  },
  {
    name: 'search',
    label: 'Track',
    icon: 'search',
  },
  {
    name: 'trending',
    label: 'Trending',
    icon: 'flame',
  },
  {
    name: 'alerts',
    label: 'Alerts',
    icon: 'bell',
  },
  {
    name: 'account',
    label: 'Account',
    icon: 'person',
  },
] as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? SPACING.tabBarHeight.ios : SPACING.tabBarHeight.android,
          paddingBottom:
            Platform.OS === 'ios' ? SPACING.tabBarPadding.ios : SPACING.tabBarPadding.android,
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.gray[100],
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray[400],
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerTitleStyle: {
          color: COLORS.secondary,
          fontWeight: 'bold',
        },
      }}>
      {TAB_SCREENS.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.label,
            tabBarIcon: ({ color }) => <TabBarIcon name={screen.icon} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
