<script>
import { onMount } from 'svelte';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

onMount(() => {
  // Canvas
  const canvas = document.querySelector('canvas.webgl');
  // Scene
  const scene = new THREE.Scene();
  // Geometry
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
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
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(3, 4, 3)
  scene.add(camera)
  // Controls
  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  /**
   * Renderer
    */
  const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      autoClear: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
})

</script>
<!-- <div class="fixed -z-15 top-0 left-0">
  <canvas class="webgl" ></canvas>
</div> -->
<!-- <nav class="absolute top-0 text-white">
  <a href="/">Home | </a>
  <a href="/hypnotherapy">Hypnotherapy | </a>
  <a href="/relaxation">Relaxation</a>
</nav> -->