import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";

const GameOverScene = (props) => {
    const {navigation} = props;
    return (
        <View style={{
            flex:1
        }}
        >
            <ImageBackground
                source={{uri: 'https://wallpaperaccess.com/full/3147153.jpg'}}
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                imageStyle={{opacity:0.5}}
            >
                <Image
                    source={require('../../source/images/game-over.png')}
                    style={{
                        width: '60%',
                        height: 190
                    }}
                />
                <View style={{
                    borderWidth:1,
                    backgroundColor:'orange',
                    padding:8,
                    borderRadius:10,
                    marginTop:32
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={{
                            textTransform:'uppercase',
                            fontSize:24,
                            fontWeight:'bold'
                        }}>
                            Play Again
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
export default GameOverScene;