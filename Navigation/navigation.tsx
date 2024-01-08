import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import ManageExpenses from "../screens/ManageExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1F2D32",
        },
        headerTintColor: "#87959D",
        tabBarStyle: {
          backgroundColor: "#1F2D32",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#E8ECEF",
        tabBarInactiveTintColor: "#87949C",
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="calendar"
              color={color}
              size={size}
              style={{ marginHorizontal: 10, marginVertical: 5 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="add"
              color="#04A783"
              size={28}
              style={{ marginHorizontal: 10, marginVertical: 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="hourglass"
              color={color}
              size={size}
              style={{ marginHorizontal: 10, marginVertical: 5 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="add"
              color="#04A783"
              size={28}
              style={{ marginHorizontal: 10, marginVertical: 5 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
    </Stack.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
