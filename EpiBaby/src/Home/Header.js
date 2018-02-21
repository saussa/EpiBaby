import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Logo = require("../Home/Asset/Logo.png");

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ flex: 1, width: "40%" }}
                    resizeMode="contain"
                    source={Logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        height:90,
        paddingTop: 10,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        elevation: 20,
        shadowOpacity: 0.1,
        shadowRadius: 30,
        shadowOffset: { height: 10, width: 0 }
    }
});