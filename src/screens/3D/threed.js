
import ExpoTHREE, { THREE } from 'expo-three';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native'

import { GLView } from "expo-gl";




 class threed extends React.Component {

  render() {
      return (
          <GLView
            onContextCreate={this.onContextCreate}
            onRender={this.onRender}
          />
      )
  }
  onContextCreate = async ({
    gl,
    width,
    height,
    scale: pixelRatio,
  }) => {
    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0x000000)
    this.renderer.capabilities.maxVertexUniforms = 52502;


    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    this.camera.position.set(0,6,12);
    this.camera.lookAt(0,0,0);

    this.setupScene();
    await this.loadModelsAsync();
  };

  setupScene = () => {
    // scene
    this.scene = new THREE.Scene();
    this.setupLights();
  };

  setupLights = () => {
    // lights
    const directionalLightA = new THREE.DirectionalLight(0xffffff);
    directionalLightA.position.set(1, 1, 1);
    this.scene.add(directionalLightA);

    const directionalLightB = new THREE.DirectionalLight(0xffeedd);
    directionalLightB.position.set(-1, -1, -1);
    this.scene.add(directionalLightB);

    const ambientLight = new THREE.AmbientLight(0x222222);
    this.scene.add(ambientLight);
  };

  loadModelsAsync = async () => {
    const model = {
      'man.obj': require('../../../assets/man.obj'),
      
    };

    const mesh = await ExpoTHREE.loadAsync(
      [model['man.obj']],
      null,
      name => {
        // `name` must be a loaded image and already existing in the model object.
        return model[name]
      },
    );

    ExpoTHREE.utils.scaleLongestSideToSize(mesh, 5);
    ExpoTHREE.utils.alignMesh(mesh, { x: 0.5 });

    this.scene.add(mesh);
    this.mesh = mesh;
  };

  onRender = delta => {
    this.mesh.rotation.y += 0.3 * delta;
    this.renderer.render(this.scene, this.camera);
  };
}

export default threed;

/*import * as React from "react";
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
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import ExpoTHREE from "expo-three";





global.THREE = global.THREE || THREE;



class threed extends React.Component{

  
  
    render() {
      


let cameraInitialPositionX = 5;
let cameraInitialPositionY = 5;
let cameraInitialPositionZ = 5;
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
        
            const spotLight = new SpotLight(0xff0000, 0.5);
            spotLight.position.set(0, 500, 100);
            spotLight.lookAt(scene.position);
            scene.add(spotLight);
            
            function update() {
              cube.rotation.y += 0.05;
              cube.rotation.x += 0.025;
            }
        
            // Add sphere object instance to our scene
            const geometry = new THREE.BoxGeometry( 5, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );




/// Get all the files in the mesh
const model = {
  'freedam.obj': require('../../../assets/freedam.obj'),
  'freedam.mtl': require('../../../assets/freedam.mtl'),
  
};
console.log("added")
/// Load model!
const mesh = await ExpoTHREE.loadAsync(
  [model['freedam.obj'], model['freedam.mtl']],
  null,
  name => {
    // `name` must be a loaded image and already existing in the model object.
    return model[name]
  },
);
console.log("added")
/// Update size and position
ExpoTHREE.utils.scaleLongestSideToSize(mesh, 5);
ExpoTHREE.utils.alignMesh(mesh, { y: 1 });
/// Smooth mesh
// ExpoTHREE.utils.computeMeshNormals(mesh);

/// Add the mesh to the scene
this.scene.add(mesh);
console.log("added")
/// Save it so we can rotate
this.mesh = mesh;

  




            
        
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
              
              update()
            };
            render();
          }}
        />
        
        );
      }
      
}


export default threed;*/

