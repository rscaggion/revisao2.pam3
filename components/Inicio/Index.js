import { Text, View } from "react-native";

import estilo from "./estilo";

export default function inicio(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>Página de Texto</Text>
        </View>
    );
}