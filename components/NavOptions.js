import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Svg, Path } from 'react-native-svg'; // Importa Svg y Path
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen'
    }
];

const NavOptions = () => {

    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={()=> navigation.navigate(item.screen)} 
                    style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
                        <View>
                            <Image
                                style={{ width: 150, height: 150, resizeMode: 'contain' }}
                                source={{ uri: item.image }}
                            />
                        </View>
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        {/* Usa el componente Svg para el ícono */}
                        <Svg width={30} height={30} viewBox="0 0 30 30" style={{ marginTop: 10, backgroundColor: 'black', padding: 5, borderRadius: 999 }}>
    <Path
        d="M24.5 15L15 7v6H7v6h8v6l9.5-8z"
        fill="white" // Cambia el color de relleno a blanco
        stroke="black" // Cambia el color del borde a negro
        strokeWidth={2} // Ancho del borde
        strokeLinecap="round" // Estilo de los extremos de la línea
        strokeLinejoin="round" // Estilo de las intersecciones de líneas
    />
</Svg>

                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NavOptions;


