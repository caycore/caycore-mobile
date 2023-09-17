import React, {
    useState 
} from "react";
import {
    CompositeScreenProps,
    NavigationContainer 
} from '@react-navigation/native';
import {
    createNativeStackNavigator
} from "@react-navigation/native-stack";
import {
    createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';

import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import SearchPage from "../pages/search";

const RootStack = createNativeStackNavigator();

const AppStack = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

const AuthNav = ({
    route
}: {
    route: CompositeScreenProps<any, any>["route"];
}) => {
    return <AuthStack.Navigator
        initialRouteName="Login"
    >
        <AuthStack.Screen
            name="Login"
            component={LoginPage}
            options={{
                headerShown: false
            }}
            initialParams={route.params}
        />
    </AuthStack.Navigator>;
};

const AppNav = ({
    route
}: {
    route: CompositeScreenProps<any, any>["route"];
}) => {
    return <AppStack.Navigator>
        <AppStack.Screen
            name="Home"
            component={HomePage}
            initialParams={route.params}
        />
        <AppStack.Screen
            name="Search"
            component={SearchPage}
            initialParams={route.params}
        />
    </AppStack.Navigator>;
};

const Navigation = () => {
    const [isAuth, setIsAuth] = useState(false);

    return <NavigationContainer>
        <RootStack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false
            }}
        >
            {
                isAuth ?
                    <RootStack.Screen
                        name="App"
                        component={AppNav}
                        initialParams={{
                            setIsAuth
                        }}
                    />
                    :
                    <RootStack.Screen
                        name="Auth"
                        component={AuthNav}
                        initialParams={{
                            setIsAuth
                        }}
                    />
            }
        </RootStack.Navigator>
    </NavigationContainer>;
};
export default Navigation;
