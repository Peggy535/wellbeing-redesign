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
        specifically designed for Anxiety and Stress relief. It helps reduce muscle tension and stress, lowers blood pressure, and controls pain. It may involve tensing and relaxing muscles throughout the body. 
        It may be used with guided imagery (focusing the mind on positive images) and meditation (focusing thoughts).
      </p>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> What does a relaxation therapist do? A relaxation therapist is someone who 
        knows how to quiet the mind for the purpose of pure relaxation and stress relief. ... A relaxation therapist helps clients make life less stressful through specific techniques. With less stress, 
        people live longer and lead healthier lives.
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> The relaxation response is a way of activating a part of the nervous system called the 
        parasympathetic nervous system. This is the opposite of the sympathetic nervous system, which is that "fight-or-flight" response. When that's activated, we're ready to fight or flee.
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> When the parasympathetic nervous system (PSNS) is activated, 
        it slows our heart and breathing rates, lowers blood pressure and promotes digestion. Our body enters a state of relaxation, and this relaxation breeds recovery. The more time we spend in a PSNS state, the healthier we are.
      </p><br>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> What happens during the relaxation response? Your Heart Rate Slows
        This "fight or flight" response sends out hormones called catecholamines to speed up your heart. But relaxation lets your body know it's OK to save energy and even begin to access a healing 
        and recovery response. Your parasympathetic system takes over and releases a hormone called acetylcholine. That slows your heart rate down.
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> What is deep relaxation therapy?The relaxation response is a technique 
        designed to elicit a state of deep relaxation in which breathing, pulse rate, blood pressure and metabolism are decreased. Training our bodies on a daily basis to achieve this state of relaxation 
        can lead to enhanced mood, lowered blood pressure and reduction of lifestyle stress.
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> There are 3 major types of relaxation techniques:
      </p><br>
      <ul>
        <li>Autogenic training - This technique uses both visual imagery and body awareness to move a person into a deep state of relaxation
        </li>
        <li>Breathing</li>
        <li>Progressive muscle relaxation</li>
        <li>Meditation</li>
        <li>Guided imagery</li>
      </ul>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1">Who is relaxation therapy for? Everyone would benefit from relaxation therapy, 
        especially for anyone who never seems to be able to put the brakes on in life!
      </p>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1">Anyone who needs help with Anxiety and Stress? 
        Relaxation therapy can address anxiety from the standpoint of the body by reducing muscle tension, slowing down breathing, and calming the mind.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1">Relaxation techniques can reduce stress symptoms and help you enjoy a better 
        quality of life, especially if you have an illness. We know people with chronic pain can experience a lot of muscle spasm or tension as a response to their pain. Relaxation therapy can be very 
        helpful in relieving muscle tension and reducing stress. It is a very important coping strategy. If you successfully learn to relax your pain may be reduced.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-4">
    <div class="grid h-fit col-span-1 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-2 m-1 p-1 lg:m-2 lg:p-2 items-end sm:items-center 2xl:place-content-end">
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> People with Long Covid and ME. Relaxation therapy has helped with my own Long 
        Covid journey, in fact the sympathetic nervous system becomes very sensitive after the initial covid infection for many who go onto to develop Long Covid, so moving into the parasympathetic system 
        and staying there as often and for long periods plays a vital role in recovery and managing of the chronic symptoms. 
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> AFTER qualifying as a Curative hypnotherapist & CBT practitioner, and now 
        specialising in Anxiety and Stress Management. I was a very successful health & fitness professional. My previous career spanned across a number of decades. Many of my job roles opened up huge 
        opportunities to work abroad and took me to some amazing countries where I had the privilege of spending time with many diverse groups of people. 
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> THEN, three years ago I decided to close that chapter of my life 
        and change course completely and Justine Hodgson Hypnotherapy was born.
      </p><br>
      <p class="text-lg sm:text-xl md:text2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose m-1 p-1"> MY PRACTICE is growing, and growing up alongside me as I continue to master 
        my craft, maturing and developing and moulding into something very different from just hypnotherapy. Through my clinical hours of practice and over the course of time I’ve recognised this common 
        thread I seem to have naturally propagated towards that I now have a huge desire to focus on. At the root cause of most of my clients' conditions the common thread comes from some form of anxiety 
        and stress usually causing chaos with many sections of their lives and even causing ill health. So putting all of my skill set together from past and present I am now offering ‘Relaxation Therapy’ 
        a combination of relaxation techniques catered for the individual and their own needs and requirements.
      </p><br>
    </div>
  </div>
  <nav>
    <a href="/">Home | </a>
    <a href="/hypnotherapy">Hypnotherapy | </a>
    <a href="/relaxation">Relaxation</a>
  </nav>
</section>