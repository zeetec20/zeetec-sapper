<svelte:head>
	<title>Zeetec</title>
</svelte:head>

<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch('blog.json')
		const posts = await res.json()
		return {posts}
	}
</script>

<script>
	import {onMount, getContext} from 'svelte'
	import {getCookie} from '../cookie'
	import {mode, loading} from '../store'
	import {css} from 'emotion'

	export let posts
	
	posts = posts.slice(0, 3)
	let themeNight = getContext('themeNight')
	let nameTyping = ''
	let jobTyping = ''

	onMount(async () => {
		let i = 0
		let speedType = 180

		loading.set(false)
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

	$: hover_post = css`
		&:hover {
			color: ${$mode == 'night' ? 'yellow' : 'black'};
			font-weight: bold;
		}
	`
</script>

<style>
	h1, h3{
		font-weight: 300 !important;
	}

	.recent-post{
		margin-top: 0px;
	}

	.recent-post .post{
		/* margin: auto; */
		margin-top: 35px;
		border: none;
		border-radius: 0;
		border: solid 1px black;
		border-left: solid 6px black;
		padding: 5px;
		box-shadow: -4px 1px 0px 0px yellow;
		padding-left: 10px;
		width: 90%;
		border-top: none;
		border-right: none;
		padding-top: 15px;
		cursor: pointer;
	}

	.recent-post .first{
		margin-top: 10px !important;
	}

	.recent-post .post .title{
		font-size: 16px;
		font-weight: 600 !important;
	}

	.recent-post .post .date{
		font-size: 12px;
		font-weight: 400;
	}

	.recent-post .list-label{
		margin-left: 0;
	}

	.recent-post .list-label .badge{
		background-color: #ffffff00 !important;
		font-weight: 400;
		padding: 0;
		margin: 0;
	}

	.recent-post .list-label .badge a{
		text-decoration: underline;
	}

	.recent-post .wrap-post{
		text-decoration: none;
		color: unset;
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

	.container{
		margin-top: 12%;
		padding-left: 5%;
		padding-right: 5%;
	}

	.avatar{
		clip-path: polygon(50% 80%, 0 0, 100% 0);
		width: 320px;
		display: block;
		margin-left: 50px;
		margin-top: -40px;
	}

	.avatar img{
		margin-top: -90px;
		width: 100%;
		filter: grayscale(100%);
	}
</style>

<div class="container" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">
	<div class="row">
		<div class="col-lg-8">
			<h1 class="mb-4">Hi, nama saya <span class="name">&nbsp;{nameTyping}&nbsp;</span></h1>
			<h3>Saya adalah <span class="job">&nbsp;{jobTyping}&nbsp;</span> asal banyuwangi, blog ini saya buat untuk documentasi tentang perjalan programming dan experiment.</h3>
		</div>
		<div class="col-lg-4">
			<div class="avatar-shadow">
				<div class="avatar"><img src="avatar2.jpg" alt=""></div>
			</div>
		</div>
	</div>
	<div class="row recent-post">
		<div class="col-lg-12">
			<h3 class="title">Recent Post &nbsp;</h3>
		</div>
		<div class="col-lg-12 list-recent-post">
			<a href="blog/{posts[0].slug}" class="wrap-post">
				<div class="card post first {hover_post}" style="background-color: {$mode == 'night' ? themeNight[0] : '#f1f1f194'}">
					<h1 class="title">{posts[0].title}</h1>
					<h6 class="date">{posts[0].date}</h6>
					<div class="row list-label">
						<h6 class="label">
							<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">Website</a></span>
							&nbsp;
							<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">Programing</a></span>
						</h6>
					</div>
				</div>
			</a>
			
			{#each posts.slice(1,3) as post}
				<a href="blog/{post.slug}" class="wrap-post">
					<div class="card post {hover_post}" style="background-color: {$mode == 'night' ? themeNight[0] : '#f1f1f194'}">
						<h1 class="title">{post.title}</h1>
						<h6 class="date">{post.date}</h6>
						<div class="row list-label">
							<h6 class="label">
								<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">Website</a></span>
								&nbsp;
								<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">Programing</a></span>
							</h6>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>