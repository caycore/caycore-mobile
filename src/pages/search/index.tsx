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

const Search = ({
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
                    Ara
                </Text>;
            }
        });
    }, []);

    return <View>
        <Text>
            Welcome to Search Page
        </Text>
    </View>;
};
export default Search;
