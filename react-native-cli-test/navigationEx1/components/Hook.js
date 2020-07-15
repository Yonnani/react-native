import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
    View,
    Text,
    Button,
    FlatList
} from 'react-native';

const Hook: () => React$Node = () => {
    const [name, setName] = useState('yon');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => {
                setUsers(users)
                setLoading(false)
            })
    })

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Hook 테스트입니다.</Text>
            <Button title="이름변경"
                    onPress={() => setName('ddungnani')} />
            <Text>안녕하세요 {name} 님</Text>

            <FlatList
                data={users}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Hook;
