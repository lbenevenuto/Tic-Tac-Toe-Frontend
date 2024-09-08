<script>
  import { page } from '$app/stores'
  import github from '$lib/images/github.svg'
  import TicTocToe from '$lib/images/tictactoe-white.svg'
</script>

<div class="navbar bg-base-200">
  <div class="navbar-start">
    <button class="btn btn-ghost text-xl">
      <img src="{TicTocToe}" alt="GitHub" />
    </button>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a class={$page.url.pathname === '/' ? 'active' : ''} href="/">Home</a>
      </li>
      <li>
        <a class={$page.url.pathname === '/tic-tac-toe' ? 'active' : ''} href="/tic-tac-toe">Tic Tac Toe</a>
      </li>
    </ul>
  </div>

  <div class="navbar-end">
    <a class="btn btn-ghost btn-circle" href="https://github.com/lbenevenuto" target="_blank">
      <img src="{github}" alt="GitHub" />
    </a>
  </div>
</div>