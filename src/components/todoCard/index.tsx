import React from "react";
import {
    TouchableOpacity,
    StyleProp,
    TextStyle,
    ViewStyle
} from "react-native";
import stylesheet from "./stylesheet";
import {
    useNCoreTheme,
    Text
} from "ncore-mobile";
import {
    CloseIcon 
} from "../../assets/svg";

const TodoCard = ({
    backgroundColor,
    titleStyle,
    onClose,
    onPress,
    title,
    style
}: {
    titleStyle?: StyleProp<TextStyle>;
    backgroundColor?: string;
    onClose?: () => void;
    onPress?: () => void;
    style?: ViewStyle;
    title: string;
}) => {
    const {
        radiuses,
        spaces,
        colors
    } = useNCoreTheme();

    return <TouchableOpacity
        onPress={() => {
            if(onPress) onPress();
        }}
        style={[
            stylesheet.container,
            {
                backgroundColor: backgroundColor ? backgroundColor : colors.layer2,
                borderRadius: radiuses.half,
                padding: spaces.container
            },
            style
        ]}
    >
        <Text
            style={[
                stylesheet.title,
                titleStyle
            ]}
        >
            {title}
        </Text>
        <TouchableOpacity
            onPress={() => {
                if(onClose) onClose();
            }}
            style={{
                padding: spaces.container / 8
            }}
        >
            <CloseIcon
                size={25}
            />
        </TouchableOpacity>
    </TouchableOpacity>;
};
export default TodoCard;
