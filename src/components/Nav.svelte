<script>
	import {createEventDispatcher, onMount} from 'svelte'
	import {mode} from '../store'
	export let themeNight

	const dispatch = createEventDispatcher();
	let ready = false

	onMount(async () => {
		ready = true
	})

	function buttonAdjust() {
		dispatch('adjust', {})
	}

	function buttonNav() {
		dispatch('nav', {})
	}

	function buttonSearch(params) {
		dispatch('search', {})
	}

	let navbar = false
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(66, 66, 66, 0.1);
		font-weight: 400;
		padding: 0 1em;
		font-family: ubuntu !important;
		/* padding-left: 95px;
		padding-right: 95px; */
	}

	nav ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	nav ul::after {
		content: '';
		display: block;
		clear: both;
	}

	nav li {
		display: block;
		float: left;
	}

	nav .menu {
		padding: 1em 0.5em;
		display: block;
		/* font-weight: bold; */
		font-size: 20px;
		font-family: ubuntu !important;
		cursor: pointer;
		/* margin: 8px auto; */
	}

	nav .menu a{
		text-decoration: none;
	}

	nav .icon{
		cursor: pointer;
	}

	nav .icon span{
		display: block;
		height: 2px;
		width: 20px;
		border-radius: 10px;
	}

	nav .icon span:nth-child(1){
		margin-top: 4px;
	}

	nav .icon span:nth-child(2){
		margin-top: 5px;
	}

	nav .icon span:nth-child(3){
		margin-top: 5px;
	}

	.right{
		float: right;
	}

	.navbar{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 2;
		margin-left: -100%;
		transition: all 0.8s;
	}

	.navbar ul{
		list-style: none;
	}

	.navbar .menu{
		margin-bottom: 30px;
		font-size: 45px;
	}
</style>

<nav style="{navbar ? 'border: none;' : ''}">
	<ul>
		<li><h6 class="menu"><a href="/" style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important">Zeetec</a></h6></li>
		<li class="right"><h6 class="menu">
			<div class="icon" on:click={() => {setTimeout(() => {navbar = !navbar}, 400); buttonNav()}}>
				<span style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></span>
				<span style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></span>
				<span style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></span>
			</div>
		</h6></li>
		<li class="right" style="{navbar ? 'display: none;' : ''}"><h6 class="menu" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}" on:click={buttonAdjust}><i class="fas fa-sun"></i></h6></li>
	</ul>
</nav>
<div class="navbar" style="{navbar ? 'margin-left: 0%;' : ''} background-color: {$mode == 'night' ? `${themeNight[0]};` : 'white;'}">
	<ul>
		<li>
			<a href="/" class="menu" on:click={() => {navbar = false}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;">Home</a>
		</li>
		<li>
			<a href="/blog" class="menu" on:click={() => {navbar = false}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;">Blog</a>
		</li>
		<li>
			<a href="/" class="menu" on:click={() => {navbar = false}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;">Contact</a>
		</li>
		<li>
			<a href="/" class="menu" on:click={() => {navbar = false}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;">About Blog</a>
		</li>
	</ul>
</div>
