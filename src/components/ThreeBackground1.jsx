import React,{useRef,useEffect,} from 'react'
import * as THREE from 'three'
const ThreeBackground1 = () => {
    const mountRef = useRef(null);

    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
        const renderer = new THREE.WebGLRenderer({antialias:true});

        // set renderer size and attach to the dom
        renderer.setSize(Window.innerWidth,window.innerHeight)
        mountRef.current.appendChild(renderer.domElement);
        
        // Geometry and material
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color:0x00ff00});
        const cube = new THREE.Mesh(geometry,material);
        scene.add(cube);
        // position the camera 
        camera.position.z = 5;
        
        // animation loop
        const animate = () =>{
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene,camera)
        };
        animate()

        // cleanup on unmount
        // return () => {
        //     mountRef.current.removeChild(renderer.domElement);
        // }
    },[])
  return (
    <div ref={mountRef }style={{position:'fixed',top:0,left:0,zIndex:-1}}>
      
    </div>
  )
}

export default ThreeBackground1
