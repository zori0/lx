'use strict';
import React, {Component} from 'react'
import {
    ActivityIndicatorIOS,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text
} from 'react-native'

'use strict';
import Util from './util/Util'
import HeaderUtil from './HeaderUtil'

export default class extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            animating:true,
            control:'不显示'
        };
        this.back = this.back.bind(this);
    }

    back(){
        this.props.navigator.jumpBack();

    }

    control(){
        this.setState({
            animating:!this.state.animating,
            control:this.state.animating?'显示':'不显示'
        })
    }


    render(){

        return(
            <ScrollView>
                <HeaderUtil back={this.back} title="活动指示器"/>

                <View style={[styles.boxContainer]}>
                    <ActivityIndicatorIOS
                        animating={this.state.animating}
                        size="large"
                        color='red'
                    />
                    <TouchableOpacity  onPress={()=>this.control()} style={[styles.control]}>
                        <Text>{this.state.control}</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.boxContainer]}>
                    <ActivityIndicatorIOS
                        animating={this.state.animating}
                        size="small"
                    />
                    <TouchableOpacity  onPress={()=>this.control()} style={[styles.control]}>
                        <Text>{this.state.control}</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )

    }

}

const styles = StyleSheet.create({

    boxContainer:{
        height:100,
        width:Util.size.width,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'black'
    },
    control:{
        borderWidth:Util.pixel,
        borderColor:'black',
        padding:5,
        height:30,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    }
});