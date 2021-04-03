import * as React from "react";

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
import ExpoTHREE, { THREE } from 'expo-three';
import { Asset } from 'expo-asset';

//import {DeviceOrientationControls} from 'three/examples/jsm/controls/DeviceOrientationControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';







global.THREE = global.THREE || THREE;



class threed extends React.Component{
state={
  camera:'',
  
}
  
  
    render() {
      


let cameraInitialPositionX = -10;
let cameraInitialPositionY = 5;
let cameraInitialPositionZ = -15;
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
            
            //const controls = new OrbitControls(camera, renderer.domElement)

            //  function update() {
             //  model.rotation.y += 0.01;
             //  model.rotation.x += 0.01;
                
        //   }
            
          
        
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
            
            

            const controls = new OrbitControls(camera, renderer.domElement);
           

            //controls.touches = {
             //      ONE: THREE.TOUCH.ROTATE,
            //     TWO: THREE.TOUCH.DOLLY_PAN
            //   }
            const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
           //    controls.addEventListener('change', () => console.log("Controls Change")) //this line is unnecessary if you are already re-rendering within the animation loop 
    //   controls.addEventListener('start', () => console.log("Controls Start Event"))
      //  controls.addEventListener('end', () => console.log("Controls End Event"))
         controls.autoRotate = true
         controls.autoRotateSpeed = 10
        controls.enableDamping = true
        controls.dampingFactor = .01
        controls.enableKeys = true
        controls.keys = {
            LEFT: 37, //left arrow
            UP: 38, // up arrow
           RIGHT: 39, // right arrow
            BOTTOM: 40 // down arrow
         }
         controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
           RIGHT: THREE.MOUSE.PAN
         }
         controls.touches.ONE = THREE.TOUCH.PAN; 
         controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE; 
        controls.screenSpacePanning = true
        
        
               
               
            camera.lookAt(0,0,0);
            
            


            
            
            // Render function
            const render = () => {
              requestAnimationFrame(render);
              
              renderer.render(scene, camera);
              gl.endFrameEXP();
             controls.update()
             
             
             //update()
            };
            render();
          }}
        />
        
        );
      }
      
}




export default threed;

