import {writable} from 'svelte/store';
import {browser} from '$app/env';

const facts = [
  'You stay completely awake during hypnosis.',
  'The average person experiences hypnosis at least twice a day.',
  'Hypnosis has been recognised since the 18th century.',
  'Hypnosis can be used as an anaesthetic.',
  'Stage hypnosis and clinical hypnosis are very different.',
  'Hypnosis has a wide range of applications.',
  'Hypnosis only brings about memory loss if that is an intended goal.',
  'Your brain works differently while in a hypnotised state.',
  'Hypnosis feels different to different people.',
  'You can hypnotise yourself.'
]
const storedFacts = JSON.parse(browser && sessionStorage.getItem('hasArrayOfFacts') || JSON.stringify(facts));
export const hasArrayOfFacts = writable(browser && storedFacts);
hasArrayOfFacts.subscribe((val) => browser && (sessionStorage.hasArrayOfFacts = JSON.stringify(val)));

export const hasVisited = writable(browser && (sessionStorage.getItem('hasVisited') || false));
hasVisited.subscribe((val) => browser && sessionStorage.setItem('hasVisited', val));


