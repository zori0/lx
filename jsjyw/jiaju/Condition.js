import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

'use strict';
import Util from '../Home/Util'


export default class extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
        this.render = this.render.bind(this);
    }

    getConditions(){
        let url = "http://m.jyall.com/jyhouse-api/v1/basicCondition/getNewHouseCondition?cityId=10002";
        fetch(url).then((response)=>{
            if(response.status==200){
                response.json().then((responseData)=>{
                    this.props.setNewHouseCondition(responseData);
                });
            }
        })
    }

    componentDidMount() {
        this.getConditions();
    }

    render() {
        return (
            <View>
                <View style={[styles.container]}>
                    <TouchableOpacity style={[styles.flex_row,styles.condition_content]}
                                      onPress={()=>this.props.areaClick()}>
                        <Text style={[styles.condition_text]}>区域</Text>
                        <View style={[styles.down]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex_row,styles.condition_content]}
                                      onPress={()=>this.props.priceClick()}>
                        <Text>均价</Text>
                        <View style={[styles.down]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex_row,styles.condition_content]}
                                      onPress={()=>this.props.roomClick()}>
                        <Text>户型</Text>
                        <View style={[styles.down]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex_row,styles.condition_content]}
                                      onPress={()=>this.props.moreClick()}>
                        <Text>更多</Text>
                        <View style={[styles.down]}></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex_row:{
        flex:1,
        flexDirection:'row',
        borderBottomWidth:Util.pixel*2,
        borderBottomColor:'#eee',
        paddingBottom:10
    },
    flex_column:{
        flex:1,
        flexDirection:'column'
    },
    container:{
        flex:1,
        height:30,
        flexDirection:'row'
    },down:{
        borderLeftColor:'transparent',
        borderRightWidth:4,
        borderRightColor:'transparent',
        borderTopWidth:5,
        borderLeftWidth:4,
        position:'relative',
        top:3,
        left:5
    },
    condition_content:{
        justifyContent:'center',
        alignItems:'center'
    },
    condition_text:{
        textAlign:'center'
    }

});

