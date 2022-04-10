import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto.js';
import Topo from './componentes/Topo.js';
import Detalhes from './componentes/Detalhes.js';
import Item from './componentes/Item.js';

export default function Cesta({ topo, detalhes, itens }) {

    //usar a FlatList como componente principal da aplicação para que ela renderize apenas os elementos visíveis na tela
    //e o ListHeaderComponent renderiza os outros elementos da tela
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        />

    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

});