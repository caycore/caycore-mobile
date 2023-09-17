import React, {
    useState
} from "react";
import {
    View
} from "react-native";
import {
    useNCoreTheme,
    TextInput,
    Button,
    Text
} from "ncore-mobile";
import {
    CompositeScreenProps 
} from "@react-navigation/native";
import stylesheet from "./stylesheet";
import Toast from "react-native-simple-toast";
import {
    SERVER_ADDRESS 
} from "../../constants";
import md5 from "md5";

const Login = ({
    navigation,
    route
}: {
    navigation: CompositeScreenProps<any, any>["navigation"];
    route: CompositeScreenProps<any, any>["route"];
}) => {
    const {
        spaces,
        colors
    } = useNCoreTheme();

    const [loading, setLoading] = useState(false);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    return <View
        style={[
            stylesheet.container,
            {
                backgroundColor: colors.layer1,
                padding: spaces.container
            }
        ]}
    >
        <View
            style={[
                stylesheet.headerContainer,
                {
                    marginBottom: spaces.content * 4
                }
            ]}
        >
            <Text
                variant="header4"
                style={[
                    stylesheet.title,
                    {
                        marginBottom: spaces.content
                    }
                ]}
            >
                Çay Core Admin Paneli
            </Text>
            <Text
                variant="header6"
                style={[
                    stylesheet.welcomeText
                ]}
            >
                Hoş Geldiniz
            </Text>
        </View>
        <TextInput
            title="E - Posta Adresi"
            placeholder="E - Posta adresinizi giriniz."
            initialValue={mail}
            onChangeText={(text) => {
                setMail(text);
            }}
            style={{
                ...stylesheet.input,
                marginBottom: spaces.content * 2
            }}
        />
        <TextInput
            title="Parola"
            placeholder="Parolanızı giriniz."
            initialValue={password}
            onChangeText={(text) => {
                setPassword(text);
            }}
            secureTextEntry={true}
            style={{
                ...stylesheet.input,
                marginBottom: spaces.content * 2
            }}
        />
        <Button
            title="Giriş Yap"
            spreadBehaviour="stretch"
            loading={loading}
            style={[
                {
                    marginTop: spaces.content * 2
                }
            ]}
            onPress={() => {
                setLoading(true);
                fetch(`${SERVER_ADDRESS}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        mail: mail,
                        password: md5(password),
                        lang: "tr"
                    })
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((res) => {
                        if(res.code === 200) {
                            Toast.show(res.message, Toast.SHORT);
                            console.error(res.payload);
                            route.params.setIsAuth(true);
                            navigation.navigate("App");
                        } else {
                            throw res;
                        }
                        setLoading(false);
                    })
                    .catch((err) => {
                        Toast.show(`Oturum Açılamadı. Hata: ${err.message}`, Toast.LONG);
                        setLoading(false);
                    });
            }}
        />
    </View>;
};
export default Login;
