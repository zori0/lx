import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

'use strict';
import Util from './Util'
import Header from './Header'


export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return (
            <View></View>
        )
    }

}

const styles = StyleSheet.create({

    flex_row:{
        flex:1,
        flexDirection:'row'
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    }
});