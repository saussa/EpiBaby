import React from 'react'
import {StackNavigator} from "react-navigation";
import Page from "./Page/Page";
import Home from "./Home/Home";
import TabNavigator from "react-navigation/src/navigators/TabNavigator";
import ServerPage from "./ServerPage/ServerPage";

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
    },
    Page: {
        screen: Page,
    },
    ServerPage: {
        screen: ServerPage,
    },
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,

});
