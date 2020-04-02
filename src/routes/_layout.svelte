<script>
	import Nav from '../components/Nav.svelte';
	import {onMount, setContext} from 'svelte'
	import {createCookie, getCookie} from '../cookie'
	import {mode} from '../store'
	
	export let segment

	let changeMode
	let themeNight = ['#131418', '#f0f8fe']
	let show_transition

	onMount(async () => {
		if (getCookie('mode') == 'night') {
			mode.set('night')
		}

		show_transition = () => {
			document.getElementById('transition_black').style.display = 'block'
			document.getElementById('transition_white').style.display = 'block'
			document.getElementById('transition_yellow').style.display = 'block'
			setTimeout(() => {
				document.getElementById('transition_black').style.display = 'none'
				document.getElementById('transition_white').style.display = 'none'
				document.getElementById('transition_yellow').style.display = 'none'
			}, 1200);
		}

		changeMode = () => {
			show_transition()
			if (getCookie('mode') == '') {
				createCookie('mode', 'night', 30)
				setTimeout(() => {
					mode.set('night')
				}, 400);
			} else if (getCookie('mode') == 'night') {
				createCookie('mode', 'day', 30)
				setTimeout(() => {
					mode.set('day')
				}, 400);
			} else if (getCookie('mode') == 'day') {
				createCookie('mode', 'night', 30)
				setTimeout(() => {
					mode.set('night')
				}, 400);
			}
		}
	})
	setContext('themeNight', themeNight)
</script>

<style>
	:global(body) {
		overflow-x: hidden;
    	height: 100%;
	}

	.wrap{
		position: absolute;
		min-height: 100%;
		width: 100%;
		height: auto;
	}

	main{
		padding-top: 20px;
		padding-left: 90px;
		padding-right: 90px;
		color: #343434;
		font-family: ubuntu !important;
	}

	.sosmed{
		position: fixed;
		left: 50px;
		bottom: 35px;
	}

	.sosmed .icon-sosmed{
		font-size: 20px;
		margin-top: 30px;
		color: black;
		background-color: yellow;
		/* border-radius: 50%; */
		width: 30px;
		height: 30px;
		clip-path: circle(50% at 50% 50%);
		text-align: center;
	}

	.transition .white{
		background-color: white;
	}

	.transition .black{
		background-color: black;
	}

	.transition .yellow{
		background-color: yellow;
	}

	.transition .white, .transition .black, .transition .yellow{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		z-index: 99999;
		top: 100%;
		display: none;
	}

	.animation1{
		animation: transition 0.8s;
	}

	.animation2{
		animation: transition 0.8s;
		animation-delay: 0.2s;
	}

	.animation3{
		animation: transition 0.8s;
		animation-delay: 0.4s;
	}

	.footer{
		position: relative;
		margin-top: 50px;
	}

	.footer p{
		width: 100%;
		text-align: center;
		font-size: 12px;
	}

	@keyframes transition{
		from{
			top: 100%;
		}
		to{
			top: -100%;
		}
	}
</style>

<div class="wrap" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}">
	<Nav on:adjust={changeMode} segment={segment} mode={$mode} themeNight={themeNight} on:nav={show_transition()} />
	<main>
		<div class="sosmed">
			<div class="row">
				<a class="icon-sosmed" href="https://www.facebook.com/firman.lestari.12" target="_blank" rel="noopener noreferrer" style="color: {$mode == 'night' ? 'yellow' : 'black'}; background-color: {$mode == 'night' ? 'black' : 'yellow'}">
					<i class="fab fa-facebook-square"></i>
				</a>
			</div>

			<div class="row">
				<a class="icon-sosmed" href="https://github.com/zeetec20" target="_blank" rel="noopener noreferrer" style="color: {$mode == 'night' ? 'yellow' : 'black'}; background-color: {$mode == 'night' ? 'black' : 'yellow'}">
					<i class="fab fa-github"></i>
				</a>
			</div>

			<div class="row">
				<a class="icon-sosmed" href="https://www.instagram.com/firmanjl363/" target="_blank" rel="noopener noreferrer" style="color: {$mode == 'night' ? 'yellow' : 'black'}; background-color: {$mode == 'night' ? 'black' : 'yellow'}">
					<i class="fab fa-instagram"></i>
				</a>
			</div>

			<div class="row">
				<a class="icon-sosmed" href="https://twitter.com/firmanjusles" target="_blank" rel="noopener noreferrer" style="color: {$mode == 'night' ? 'yellow' : 'black'}; background-color: {$mode == 'night' ? 'black' : 'yellow'}">
					<i class="fab fa-twitter"></i>
				</a>
			</div>
		</div>
		
		<slot></slot>

		<div class="transition">
			<div class="white animation2" id="transition_white"></div>
			<div class="black animation1" id="transition_black"></div>
			<div class="yellow animation3" id="transition_yellow"></div>
		</div>

		<div class="footer" style="color: {$mode == 'night' ? themeNight[1] : '#343434'};">
			<p>Built by Firman Justisio Lestari © 2020</p>
		</div>
	</main>
</div>