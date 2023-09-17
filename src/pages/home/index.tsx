import React, {
    useEffect,
    useState
} from "react";
import {
    FlatList,
    View
} from "react-native";
import {
    CompositeScreenProps
} from "@react-navigation/native";
import {
    Button,
    SearchBox,
    StateCard,
    Text,
    useNCoreTheme
} from "ncore-mobile";
import {
    TodoCard 
} from "../../components";
import stylesheet from "./stylesheet";
import storage from "../../storage";

type Todo = {
    title: string;
};

const Home = ({
    navigation
}: {
    navigation: CompositeScreenProps<any, any>["navigation"];
}) => {
    const {
        colors,
        spaces
    } = useNCoreTheme();

    const [todos, setTodos] = useState<Array<Todo> | []>([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => {
                return <Text
                    variant="header5"
                >
                    Çay Core - Todo List
                </Text>;
            }
        });

        const initialTodos = storage.getString("todos");
        if(initialTodos) setTodos(JSON.parse(initialTodos));
    }, []);

    const updateStorageForTodos = (data: any) => {
        storage.set("todos", JSON.stringify(data));
    };

    const createTodo = () => {
        let _todos = JSON.parse(JSON.stringify(todos));

        _todos.push({
            title: searchText
        });

        setTodos(_todos);

        updateStorageForTodos(_todos);
    };

    const deleteTodo = (index: number) => {
        let _todos = JSON.parse(JSON.stringify(todos));

        _todos.splice(index, 1);

        setTodos(_todos);

        updateStorageForTodos(_todos);
    };

    const renderTodos = ({
        item,
        index
    }: {
        item: Todo;
        index: number;
    }) => {
        return <TodoCard
            title={item.title}
            onClose={() => {
                deleteTodo(index);
            }}
            style={{
                marginBottom: index === todos.length - 1 ? 0 : spaces.content * 1.5
            }}
        />;
    };

    const renderEmptyTodos = () => {
        return <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1
            }}
        >
            <StateCard
                title="Not Bulunamadı"
                content="Listelenecek hiç not bulunamadı. Hemen bir not ekleyebilirsiniz."
            />
        </View>;
    };

    return <View
        style={[
            stylesheet.container,
            {
                backgroundColor: colors.layer1,
                padding: spaces.container
            }
        ]}
    >
        <Text
            style={[
                {
                    marginBottom: spaces.content * 2
                }
            ]}
        >
            Welcome to Home Page
        </Text>
        <View
            style={[
                stylesheet.searchContainer,
                {
                    marginBottom: spaces.content * 2
                }
            ]}
        >
            <SearchBox
                placeholder="Hemen not oluştur."
                cleanable={true}
                onChangeText={(text) => {
                    setSearchText(text);
                }}
                style={{
                    marginRight: spaces.content / 2,
                    ...stylesheet.searchBar
                }}
            />
            <Button
                spreadBehaviour="free"
                title="Oluştur"
                onPress={() => {
                    createTodo();
                }}
                style={{
                    marginLeft: spaces.content / 2
                }}
            />
        </View>
        <FlatList
            data={todos}
            renderItem={renderTodos}
            ListEmptyComponent={renderEmptyTodos}
            contentContainerStyle={{
                flexGrow: todos.length ? undefined : 1
            }}
        />
    </View>;
};
export default Home;
