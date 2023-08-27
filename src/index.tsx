import React from "react";
import {
    NCoreProvider
} from 'ncore-mobile';
import {
    GestureHandlerRootView
} from "react-native-gesture-handler";
import stylesheet from "./stylesheet";
import Navigation from "./navigation";

const NCoreContextAPI = () => {
    return <Navigation/>;
};

const App = () => {
    return <GestureHandlerRootView
        style={stylesheet.container}
    >
        {/* @ts-ignore */}
        <NCoreProvider>
            <NCoreContextAPI/>
        </NCoreProvider>
    </GestureHandlerRootView>;
};
export default App;
