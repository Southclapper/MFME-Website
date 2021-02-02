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
  ngOnInit() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    const light = new THREE.AmbientLight( 0x404040 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);

    camera.rotation.y = 45/180*Math.PI;
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 450);
    document.body.appendChild(renderer.domElement);
    
    const controls = new OrbitControls( camera, renderer.domElement );

    let loader = new GLTFLoader();
    loader.load('../assets/underground_shelter/scene.gltf', 
    
                function(gltf){
                    let object1 = gltf.scene.children[0];
                    
                    scene.add(gltf.scene, light);
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

/*
    let scene, camera, hlight, object1;
    // creation scene et camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    //const controls = new THREE.OrbitControls();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //camera = new THREE.PerspectiveCamera( 40, 800 / 600, 0.1, 1000 );
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800
    camera.position.y = 100;
    camera.rotation.z = 1000;

    hlight = new THREE.AmbientLight(0x404040, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // chargement du model
    let loader = new THREE.GLTFLoader();
    loader.load('../assets/underground_shelter/scene.gltf', 
    function(gltf){
        object1 = gltf.scene.children[0];

        scene.add(gltf.scene);
        renderer.render(scene, camera);
    });*/
  }
}

/*
export class Scene3dComponent implements AfterViewInit {

  // propriété de l'env
  private camera: THREE.PerspectiveCamera;

    // element canvas
  private get canvas(): HTMLCanvasElement{
    return this.canvasRef.nativeElement;
  }

  @ViewChild('canvas')
  private canvasRef: ElementRef;
  private mesh: THREE.Mesh;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;

// propriété de l'objet
  @Input()
  public rotationSpeedX: number = 0.005;

  @Input()
  public rotationSpeedY: number = 0.01;

  @Input()
  public size: number = 0.005;

  @Input()
  public texture: string = '../../assets/textures/nyancat.gif';

// propriété de la scene
  @Input()
  public cameraZ: number = 400;

  @Input()
  public fov: number = 70;

  @Input()
  public nearClippingPane: number = 1;

  @Input()
  public farClippingPane: number = 1000;

// propriété d'animation
  private animationMesh(){
    this.mesh.rotation.x += this.rotationSpeedX;
    this.mesh.rotation.y += this.rotationSpeedY;
  }

// création de la scene
  private createScene(){
    // scene
    this.scene = new THREE.Scene();

    // caméra
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

// rendu en boucle
  private startRenderingLoop(){
    // renderer | utilise l'élement canvas pour le rendu
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas })
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth/100, this.canvas.clientHeight/100);

    let component: Scene3dComponent = this;
    (function render(){
      requestAnimationFrame(render);
      component.animationMesh();
      component.renderer.render(component.scene, component.camera);
    })
  }

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}*/