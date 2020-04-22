<script>
	import {createEventDispatcher, onMount} from 'svelte'
	import {mode, loading} from '../store'
	import {css} from 'emotion'
	
	export let themeNight
	export let segment
	
	const dispatch = createEventDispatcher();

	function buttonAdjust() {
		dispatch('adjust', {})
	}

	function buttonNav() {
		dispatch('nav', {})
	}

	function buttonSearch() {
		dispatch('search', {})
	}

	function enableLoading() {
		loading.set(true)
	}

	let navbar = false
	let navbar_arrow = [false, false, false, false]
	$: picture_navbar = css`
		background-image: url('${segment == undefined ? 'home.jpg' : segment == 'blog' ? 'blog.jpg' : segment == 'contact' ? 'contact.jpg' : '' }');
	`
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(66, 66, 66, 0.1);
		font-weight: 400;
		padding: 0 1em;
		font-family: ubuntu !important;
		/* padding-left: 95px;
		padding-right: 95px; */
		background-color: black;
		z-index: 3;
		position: fixed;
		border: none;
		width: 100% !important;
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

	nav .loading{
		background-color: white;
		height: 1px;
		width: 100%;
		position: absolute;
		left: 0;
		transition: all 0.5s;
		animation: loading_animation 0.6s infinite;
	}

	@keyframes loading_animation{
		from{
			left: -100%;
		}
		to{
			left: 100%;
		}
	}

	.right{
		float: right;
	}

	.navbar{
		padding-top: 8%;
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 2;
		margin-left: -100%;
		transition: all 0.8s;
		overflow: hidden;
	}

	.navbar ul{
		list-style: none;
		margin-top: -40px;
		margin-left: 60px;
	}

	.navbar li{
		margin-bottom: 50px;
	}

	.navbar .menu{
		/* margin-bottom: 180px; */
		font-size: 35px;
		text-decoration: none;
	}

	.navbar .menu:hover{
		font-weight: bold;
	}

	.picture{
		position: absolute;
		right: 0;
		width: 310px;
		height: 420px;
		top: 0;
		bottom: 0;
		margin: auto;
		margin-right: 120px;
		background-size: auto 100%;
		background-position: center;
		background-repeat: no-repeat;
		/* filter: grayscale(100%); */
		border: solid 3px;
	}

	.picture .text{
		padding: 10px;
		padding-left: 14px;
		color: white;
		font-weight: bold;
	}
</style>

<nav id="nav" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}">
	<ul>
		<li><h6 class="menu"><a href="/" style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important" on:click={enableLoading}>Zeetec</a></h6></li>
		<li class="right"><h6 class="menu">
			<div class="icon" on:click={() => {setTimeout(() => {navbar = !navbar}, 400); buttonNav()}}>
				<span style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></span>
				<span style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></span>
				<span style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></span>
			</div>
		</h6></li>
		<li class="right" style="{navbar ? 'display: none;' : ''}"><h6 class="menu" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}" on:click={buttonAdjust}><i class="fas fa-sun"></i></h6></li>
	</ul>
	<div class="loading" style="background-color: {$mode == 'night' ? themeNight[1] : '#131418'}; {$loading ? '' : 'display: none'}"></div>
</nav>

<div class="navbar" style="{navbar ? 'margin-left: 0%;' : ''} background-color: {$mode == 'night' ? `${themeNight[0]};` : 'white;'}">
	<ul>
		<li>
			<a on:mouseenter={() => navbar_arrow[0] = true} on:mouseleave={() => navbar_arrow[0] = false} href="/" class="menu" on:click={() => {navbar = false; enableLoading()}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;"><span style="{navbar_arrow[0] ? '' : 'display: none;'}">></span> Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
		</li>
		<li>
			<a on:mouseenter={() => navbar_arrow[1] = true} on:mouseleave={() => navbar_arrow[1] = false} href="/blog" class="menu" on:click={() => {navbar = false; enableLoading()}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;"><span style="{navbar_arrow[1] ? '' : 'display: none;'}">></span> Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
		</li>
		<li>
			<a on:mouseenter={() => navbar_arrow[2] = true} on:mouseleave={() => navbar_arrow[2] = false} href="/contact" class="menu" on:click={() => {navbar = false; enableLoading()}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;"><span style="{navbar_arrow[2] ? '' : 'display: none;'}">></span> Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
		</li>
		<li>
			<a on:mouseenter={() => navbar_arrow[3] = true} on:mouseleave={() => navbar_arrow[3] = false} href="/" class="menu" on:click={() => {navbar = false; enableLoading()}} style="color: {$mode == 'night' ? themeNight[1] : '#343434'} !important;"><span style="{navbar_arrow[3] ? '' : 'display: none;'}">></span> About Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
		</li>
	</ul>

	<div class="picture {picture_navbar}" style="border-color: {$mode == 'night' ? themeNight[1] : themeNight[0]}">
		<h4 class="text">{segment == undefined ? 'Home' : segment == 'blog' ? 'Blog' : segment == 'contact' ? 'Contact' : 'Not Found'}</h4>
	</div>
</div>
