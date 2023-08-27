import React, {
    useEffect
} from "react";
import {
    View,
    Text
} from "react-native";
import {
    CompositeScreenProps
} from "@react-navigation/native";
import {
    Button
} from "ncore-mobile";

const Home = ({
    navigation
}: {
    navigation: CompositeScreenProps<any, any>["navigation"];
}) => {
    useEffect(() => {
        navigation.setOptions({
            title: "Ana Sayfa234 23423",
            headerLeft: () => {
                return <View>
                    <Button
                        title="Geri"
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </View>
            }
        });
    }, []);

    return <View>
        <Text>
            Welcome to Home Page
        </Text>
    </View>;
};
export default Home;
