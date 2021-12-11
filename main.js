import './style.css'
import 'jquery'
import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

camera.position.setZ(30);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const geo = new THREE.BoxGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xFF6347,
  wireframe: true,
});
const shape = new THREE.Mesh(geo, material);

scene.add(shape);

repaint();

function repaint(){
  requestAnimationFrame(repaint);
  shape.rotation.x += 0.01;
  shape.rotation.y += 0.05;
  renderer.render(scene, camera);
}
