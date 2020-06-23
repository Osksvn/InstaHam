import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import OwnProfileScreen from "../screens/OwnProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-phone-landscape" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-heart-empty" />
          ),
        }}
      />
      <BottomTab.Screen
        name="OwnProfile"
        component={OwnProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-man" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
