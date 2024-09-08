import type { PageServerLoad } from './$types'
import { API_BASE_URL } from '$env/static/private'

export const load = (async ({ fetch }) => {
  const res = await fetch(API_BASE_URL, {
    method: 'GET',
    credentials: 'include', // Ensures cookies are included
  });
  const gameState = await res.json();
  return { gameState };

}) satisfies PageServerLoad
