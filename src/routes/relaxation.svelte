<!-- <script>
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

</script> -->
<!-- <div class="fixed -z-15 top-0 left-0">
  <canvas class="webgl" ></canvas>
</div> -->
<!-- <nav class="absolute top-0 text-white">
  <a href="/">Home | </a>
  <a href="/hypnotherapy">Hypnotherapy | </a>
  <a href="/relaxation">Relaxation</a>
</nav> -->
<section class="absolute z-20 top-0 w-screen overflow-x-hidden overscroll-none">
  <div class="grid h-screen w-screen grid-rows-4 grid-cols-1">
    <div class="grid row-start-3 row-end-4 items-end">
      <h1 class="font-Eiko-Thin text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl pl-3 sm:pl-3 md:pl-4 lg:pl-6 2xl:pl-10">Relaxation Therapy</h1>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 lg:grid-cols-5">
    <div class="grid h-screen col-span-1 row-span-1 lg:col-start-2 lg:col-end-6 items-center m-1 p-1">
      <p class="font-Eiko-Thin text-md">Hypnotherapy not for you? I've got you covered.</p>
      <h2 class="text-4xl pr-2 sm:text-6xl sm:mb-20 md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-right font-Eiko-Italic md:pr-4 lg:pr-6 2xl:pr-8">
        Discover all about your wonderful Parasympathetic nervous system, learn new skills on how to shift out of the dreaded STRESS RESPONSE of the sympathetic 
        nervous system and feel more relaxed more of the time. 
      </h2>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"><span class="text-5xl md:text-6xl lg:text-6xl">Relaxation</span> therapy has been 
        specifically designed for Anxiety and Stress relief. It helps reduce muscle tension and stress, lowers blood pressure, and controls pain.
      </p>
    </div>
  </div>
  
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <!-- <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> What happens during the relaxation response? Your Heart Rate Slows
        This "fight or flight" response sends out hormones called catecholamines to speed up your heart. But relaxation lets your body know it's OK to save energy and even begin to access a healing 
        and recovery response. Your parasympathetic system takes over and releases a hormone called acetylcholine. That slows your heart rate down.
      </p><br> -->
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> <span class="text-5xl md:text-6xl lg:text-6xl">What is deep relaxation therapy?</span>The relaxation response is a technique 
        designed to elicit a state of deep relaxation in which breathing, pulse rate, blood pressure and metabolism are decreased. Training our bodies on a daily basis to achieve this state of relaxation 
        can lead to enhanced mood, lowered blood pressure and reduction of lifestyle stress.
      </p><br>
      <ul>
        <li>Techniques used are visual imagery and body awareness to move a person into a deep state of relaxation, involving:

        </li>
        <li>Breathwork Techniques</li>
        <li>Progressive muscle relaxation</li>
        <li>Meditation</li>
        <li>Guided imagery</li>
      </ul>
    </div>
  </div>
  <h2 class="text-green-main text-4xl m-1 p-1 sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-right font-Eiko-Italic md:p-4 lg:p-6 2xl:p-8">
    If you think Relaxation therapy can help you or someone you know, just go ahead and contact me.<br/> £35 for a 30 min or £45 for 40min online session's.
  </h2>
  
  
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation | </a>
    <a href="/cbt">CBT | </a>
    <a href="/aboutjh">About JH</a>
  </nav>
</section>