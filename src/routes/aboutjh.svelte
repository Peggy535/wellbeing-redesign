<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import {OrbitControls} from '../../node_modules/three/examples/jsm/controls/OrbitControls';

  onMount(() => {
    // Debug
    //const gui = new dat.GUI()
    // Canvas
    const canvas = document.querySelector('canvas.webgl')
    // Scene
    const scene = new THREE.Scene()

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x353535} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
  
    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 6
    scene.add(camera)
    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        // alpha: true,
        antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor('#fff', 1);
    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
    
        // Update controls
        controls.update()
    
        // Render
        renderer.render(scene, camera)
    
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
    tick()
  });

</script>

<div class="fixed -z-15 top-0 left-0">
  <canvas class="webgl"></canvas>
</div>
<!-- <section class="absolute z-20 top-0 w-screen overflow-x-hidden overscroll-none">
  <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
    <div class="grid row-start-3 row-end-4 items-end">
      <h1 class="font-Eiko-Thin font text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-12xl 2xl:text-14xl pl-3 sm:pl-3 md:pl-4 lg:pl-6 2xl:pl-10">About JH</h1>
    </div>
  </div>
</section> -->