import { writable } from 'svelte/store';

export const mode = writable('day')
export const post = writable('')
export const loading = writable(false)