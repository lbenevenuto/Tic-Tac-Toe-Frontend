<script lang="ts">
  import type { GameStateType } from '$lib/types'

  import { PUBLIC_API_BASE_URL } from '$env/static/public'
  import toast, { Toaster } from 'svelte-french-toast'

  /** @type {import('./$types').PageData} */
  export let data
  let gameState: GameStateType
  $: gameState = data.gameState

  async function placePiece(piece: 'x' | 'o', x: number, y: number) {
    try {
      const res = await fetch(`${PUBLIC_API_BASE_URL}/${piece}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Ensure cookies are sent
        body: JSON.stringify({ x, y })
      })
      const resJson = await res.json()
      if (res.ok) {
        toast.success('Piece placed')
        gameState = resJson // Update the game state
        if (gameState.victory !== '') {
          toast.success(`Player ${gameState.victory} won!`)
        }
      } else {
        toast.error(resJson.error)
      }
    } catch (error) {
      console.error('error >>>', error)
      toast.error('Error placing piece')
    }
  }

  async function restartGame() {
    try {
      const res = await fetch(`${PUBLIC_API_BASE_URL}/restart`, {
        method: 'POST',
        credentials: 'include' // Ensure cookies are sent
      })
      if (res.ok) {
        gameState = await res.json() // Update the game state
        toast.success('Game restarted')
      }
    } catch (error) {
      console.error('error >>>', error)
      toast.error('Error restarting game')
    }
  }

  async function resetGame() {
    try {
      const res = await fetch(`${PUBLIC_API_BASE_URL}`, {
        method: 'DELETE',
        credentials: 'include' // Ensure cookies are sent
      })
      if (res.ok) {
        gameState = await res.json() // Update the game state
        toast.success('Game reset')
      }
    } catch (error) {
      console.error('error >>>', error)
      toast.error('Error resetting game')
    }
  }
</script>

<svelte:head>
  <title>Tic Tac Toe</title>
  <meta name="description" content="Tic tac toe" />
</svelte:head>

<Toaster />

<div class="grid grid-cols-1 justify-center mt-16 gap-10">
  <div class="text-center">
    <div class="mb-10"><p class="text-4xl">Current Turn: <span class="text-6xl">[ {gameState.currentTurn} ]</span></p></div>
    <div>
      <table class="table border text-center text-3xl">
        <tr class="border">
          <th rowspan="2">Score</th>
          <th>Player [ x ]</th>
          <th>Player [ o ]</th>
        </tr>
        <tr>
          <td>{gameState.score.x}</td>
          <td>{gameState.score.o}</td>
        </tr>
      </table>
    </div>
  </div>
  <div>
    <table class="table table-zebra border-collapse border-2 border-gray-400">
      <tbody>
      {#each gameState.board as row, rowIndex}
        <tr>
          {#each row as cell, colIndex}
            <td
              class="border border-gray-400 w-24 h-24 cursor-pointer text-center text-3xl hover:bg-gray-200"
              on:click={() => placePiece(gameState.currentTurn, rowIndex, colIndex)}
            >
              {cell}
            </td>
          {/each}
        </tr>
      {/each}
      </tbody>
    </table>
  </div>

</div>

<button class="btn btn-primary mt-8" on:click={() =>restartGame()}>Restart</button>
<button class="btn btn-primary mt-8" on:click={() =>resetGame()}>Reset</button>