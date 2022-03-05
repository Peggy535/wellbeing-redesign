import {writable} from 'svelte/store';
import {browser} from '$app/env';

const facts = [
  'A hypnotized person remains in complete control. You are able to clearly hear, comprehend, and later remember what the hypnotist suggests.',
  'The average person experiences hypnosis at least twice a day.',
  'Hypnosis has been recognised since the 18th century. But some of the earliest recorded descriptions of hypnosis date back to ancient Egypt in 1500 B.C.',
  'Hypnosis can be used as an anaesthetic.',
  'Stage hypnosis and clinical hypnosis are very different. Although entertaining, it has little to do with clinical hypnosis.',
  'Hypnosis only brings about memory loss if that is an intended goal.',
  'Your brain works differently while in a hypnotised state. Hypnosis allows the brain to bypass the conscious part of the mind. It “turns off” the desire to ask questions or take note of surroundings. ',
  'Hypnosis can help overcome a bevy of maladies. These include overcoming fears, phobias, weight loss, negative memories, insomnia and smoking.',
  'It’s impossible to become stuck in a hypnotized trance. You are able to come out of the hypnotized state as easily as opening their eyes.'
]
const storedFacts = JSON.parse(browser && sessionStorage.getItem('hasArrayOfFacts') || JSON.stringify(facts));
export const hasArrayOfFacts = writable(browser && storedFacts);
hasArrayOfFacts.subscribe((val) => browser && (sessionStorage.hasArrayOfFacts = JSON.stringify(val)));

export const hasVisited = writable(browser && (sessionStorage.getItem('hasVisited') || false));
hasVisited.subscribe((val) => browser && sessionStorage.setItem('hasVisited', val));


