import {writable} from 'svelte/store';
import {browser} from '$app/env'

export const hasVisited = writable(browser && (sessionStorage.getItem('hasVisited') || false));
hasVisited.subscribe((val) => browser && sessionStorage.setItem('hasVisited', val));