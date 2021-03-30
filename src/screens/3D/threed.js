import React from 'react';
import {View} from 'react-native'
import { Renderer } from 'expo-three';
import { THREE } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';

global.THREE = global.THREE || THREE;

class threed extends React.Component{
    render() {
        return (
            <GLView
            style={{ flex: 1 }}
            
            
          />
        );
      }
}


export default threed;