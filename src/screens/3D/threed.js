import * as React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import {
  AmbientLight,
  SphereGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  
} from "three";

import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import ExpoTHREE from "expo-three";
import { Asset } from 'expo-asset';





global.THREE = global.THREE || THREE;



class threed extends React.Component{

  
  
    render() {
      


let cameraInitialPositionX = 20;
let cameraInitialPositionY = 20;
let cameraInitialPositionZ = 20;
        return (
          

          
          <GLView
          style={{ flex: 1 }}
          onContextCreate={async (gl) => {
            // GL Parameter disruption
            const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
            
        
            // Renderer declaration and set properties
            const renderer = new Renderer({ gl });
            renderer.setSize(width, height);
            renderer.setClearColor("#fff");
        
            // Scene declaration, add a fog, and a grid helper to see axes dimensions
            const scene = new Scene();
            scene.fog = new Fog("#3A96C4", 1, 10000);
            scene.add(new GridHelper(10, 10));
        
            // Add all necessary lights
            const ambientLight = new AmbientLight(0x101010);
            scene.add(ambientLight);
        
            const pointLight = new PointLight(0xffffff, 2, 1000, 1);
            pointLight.position.set(0, 200, 200);
            scene.add(pointLight);
        
            const spotLight = new SpotLight(0xffffff, 0.5);
            spotLight.position.set(0, 500, 100);
            spotLight.lookAt(scene.position);
            scene.add(spotLight);
            
           // function update() {
             // cube.rotation.y += 0.05;
          //    cube.rotation.x += 0.025;
          //  }
        
            // Add sphere object instance to our scene
          //  const geometry = new THREE.BoxGeometry( 5, 1, 1 );
//const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );


const asset = Asset.fromModule(require('./Lamp.obj'));
await asset.downloadAsync();
const loader = new OBJLoader();
loader.load(asset.uri, group =>{
    model= group
    scene.add(model)
})

            
        
            // Set camera position and look to sphere
            const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
            
            camera.position.set(
              cameraInitialPositionX,
              cameraInitialPositionY,
              cameraInitialPositionZ
            );

            camera.lookAt(0,0,0);
           
            // Render function
            const render = () => {
              requestAnimationFrame(render);
              renderer.render(scene, camera);
              gl.endFrameEXP();
              
              //update()
            };
            render();
          }}
        />
        
        );
      }
      
}


export default threed;

