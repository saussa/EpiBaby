import React from "react"
import { StyleSheet, View} from "react-native"

import ChallengerListComponent from "../ChallengerList/Challengers";
import Header from "../Home/Header";

export default class Final extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={{flex: 8 }}>
                    <ChallengerListComponent/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});