<svelte:head>
	<title>Zeetec</title>
</svelte:head>

<script>
	import {onMount, getContext} from 'svelte'
	import {getCookie} from '../cookie'
	import {mode} from '../store'

	let themeNight = getContext('themeNight')
	let nameTyping = ''
	let jobTyping = ''

	onMount(async () => {
		let i = 0
		let speedType = 180

		function typeWriter() {
			let name = 'Firman Justisio Lestari'
			if (i < name.length) {
				nameTyping += name.charAt(i);
				i += 1;
				setTimeout(typeWriter, speedType);
			}
		}
		typeWriter()

		let jobScope = ['Pelajar', 'Web Developer']
		let job = jobScope[0]
		let funcJobType = () => {
			if (job.length != jobTyping.length) {
				jobTyping += job[jobTyping.length]
			} else {
				// clearInterval(startJob)
			}
		}

		setInterval(funcJobType, speedType);

		setInterval(() => {
			if (job == jobScope[0]) {
				jobTyping = ''
				job = jobScope[1]
			} else if (job == jobScope[1]) {
				jobTyping = ''
				job = jobScope[0]
			}
		}, 3800);
	})
</script>

<style>
	h1, h3{
		font-weight: 300 !important;
	}

	.name{
		/* text-decoration: underline;
		text-decoration-color: yellow; */
		background-color: black;
		color: yellow;
		letter-spacing: 3px;
		padding: 5px;
		font-size: 28px;
	}

	.job{
		/* text-decoration: underline;
		text-decoration-color: yellow; */
		background-color: black;
		color: yellow;
		letter-spacing: 3px;
		padding: 5px;
		font-size: 20px;
	}

	.container-fluid{
		margin-top: 7%;
	}
</style>

<div class="container-fluid" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">
	<div class="col-lg-8">
		<h1 class="mb-4">Hi, nama saya <span class="name">&nbsp;{nameTyping}&nbsp;</span></h1>
		<h3>Saya adalah <span class="job">&nbsp;{jobTyping}&nbsp;</span> asal banyuwangi, blog ini saya buat untuk documentasi tentang perjalan programming dan experiment.</h3>
	</div>
	<div class="col-lg-4">
	
	</div>
</div>