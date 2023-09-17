import React from "react";
import Svg, {
    Path 
} from "react-native-svg";

const Close = ({
    color = "#000",
    size = 21,
    ...props
}: {
    color?: string;
    size?: number;
}) => {
    const pathScale = 21 / size;

    return <Svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            d="M10.5 1A9.442 9.442 0 0 0 1 10.5c0 5.293 4.207 9.5 9.5 9.5s9.5-4.207 9.5-9.5S15.793 1 10.5 1Zm3.664 14.25L10.5 11.586 6.836 15.25 5.75 14.164 9.414 10.5 5.75 6.836 6.836 5.75 10.5 9.414l3.664-3.664 1.086 1.086-3.664 3.664 3.664 3.664-1.086 1.086Z"
            scale={1 / pathScale}
        />
    </Svg>;
};
export default Close;
