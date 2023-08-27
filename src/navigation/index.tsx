import React from "react";
import {
    NavigationContainer 
} from '@react-navigation/native';
import {
    createNativeStackNavigator
} from "@react-navigation/native-stack";

import LoginPage from "../pages/login";
import HomePage from "../pages/home";

const RootStack = createNativeStackNavigator();

const Navigation = () => {
    return <NavigationContainer>
        <RootStack.Navigator
            initialRouteName="Login"
        >
            <RootStack.Screen
                name="Login"
                component={LoginPage}
                options={{
                    headerShown: false
                }}
            />
            <RootStack.Screen
                name="Home"
                component={HomePage}
            />
        </RootStack.Navigator>
    </NavigationContainer>;
};
export default Navigation;
