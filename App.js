import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Restaurant, OrderDelivery, Home } from "./screens";
import Tabs from "./navigation/tabs";
import { StatusBar } from "react-native";

// Creating a stack navigator for the app
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Setting the status bar configuration */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
      {/* Configuring the stack navigator */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        {/* Defining the different screens */}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
