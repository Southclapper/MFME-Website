import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-scene3d',
  templateUrl: './scene3d.component.html',
  styleUrls: ['./scene3d.component.scss']
})

export class Scene3dComponent implements OnInit {

  @Input() meshPath: string = "../assets/underground_shelter/scene.gltf";
  @Input() xLarge: number = 800;
  @Input() yLarge: number = 450;

  
  ngOnInit() {

    // creation scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    const light = new THREE.AmbientLight( 0x404040 );

    // stop lumineux
    let directionalLight = new THREE.DirectionalLight(0x404040, 15);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    
    // creation camera
    //const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const camera = new THREE.PerspectiveCamera(75, 1920/1080, 0.1, 2000);

    // position camera
    camera.position.x = 50;
    camera.position.y = 30;
    
    // moteur de rendu three
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(this.xLarge, this.yLarge);
    document.body.appendChild(renderer.domElement);
    
    const controls = new OrbitControls( camera, renderer.domElement );

    // Chargeur du modele
    let loader = new GLTFLoader(); 
    loader.load(this.meshPath, 
    
                function(gltf){
                    let object1 = gltf.scene.children[0];
                    
                    scene.add(gltf.scene, light, directionalLight);
                    renderer.render(scene, camera);
                }
      );
    
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    camera.position.z = 5;
    renderer.render(scene, camera);
    animate();
  }
}