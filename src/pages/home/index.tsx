import React, {
    useEffect
} from "react";
import {
    View
} from "react-native";
import {
    CompositeScreenProps
} from "@react-navigation/native";
import {
    Button,
    Text
} from "ncore-mobile";

const Home = ({
    navigation
}: {
    navigation: CompositeScreenProps<any, any>["navigation"];
}) => {
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => {
                return <Text
                    variant="header5"
                >
                    Ana Sayfa234 23423
                </Text>;
            },
            headerLeft: () => {
                return <View>
                    <Button
                        title="Geri"
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </View>;
            },
            headerBackVisible: false
        });
    }, []);

    return <View>
        <Text>
            Welcome to Home Page
        </Text>
    </View>;
};
export default Home;
