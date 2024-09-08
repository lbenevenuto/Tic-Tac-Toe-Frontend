<script>
  import { page } from '$app/stores'
  import github from '$lib/images/github.svg'
  import TicTocToe from '$lib/images/tictactoe-white.svg'
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <img src="{TicTocToe}" alt="Tic Tac Toe" />
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a class={$page.url.pathname === '/' ? 'active' : ''} href="/">Home</a>
        </li>
        <li>
          <a class={$page.url.pathname === '/tic-tac-toe' ? 'active' : ''} href="/tic-tac-toe">Tic Tac Toe</a>
        </li>
      </ul>
      <div tabindex="0" role="button" class="btn btn-ghost invisible lg:visible">
        <img src="{TicTocToe}" alt="Tic Tac Toe" />
      </div>
    </div>
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