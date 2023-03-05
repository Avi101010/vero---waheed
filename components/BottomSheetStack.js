import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/Home/HomeScreen";
import BuyScreen from "../screens/modal/BuyScreen";
import EarnScreen from "../screens/modal/EarnScreen";
import ReceiveScreen from '../screens/modal/ReceiveScreen';
import SendScreen from '../screens/modal/SendScreen';
import SwapScreen from '../screens/modal/SwapScreen';
import BridgeScreen from '../screens/modal/BridgeScreen';

const Stack = createNativeStackNavigator();

export default function BottomSheetStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Wallets" component={HomeScreen} />
          <Stack.Screen name="Buy" component={BuyScreen} />
          <Stack.Screen name="Earn" component={EarnScreen} />
          <Stack.Screen name="Receive" component={ReceiveScreen} />
          <Stack.Screen name="Send" component={SendScreen} />
          <Stack.Screen name="Swap" component={SwapScreen} />
          <Stack.Screen name="Bridge" component={BridgeScreen} />
      </Stack.Navigator>
    );
  }