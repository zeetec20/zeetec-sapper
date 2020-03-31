<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch('blog.json')
		const posts = await res.json()
		return {posts}
	}
</script>

<script>
	import {mode} from '../../store'
	import {getContext} from 'svelte'

	export let posts
	console.log(posts)
	let themeNight = getContext('themeNight')
</script>

<style>
	.title-page{
		width: 100%;
		text-align: center;
		margin-top: 15px;
		margin-bottom: 55px;
	}

	.card{
		padding: 10px;
		/* border: none; */
		border-radius: 0;
		border-color: black;
		box-shadow: 10px 10px 0px 0px yellow;
	}

	.card .date{
		font-size: 11px;
		margin-bottom: 11px;
		color: #787d85;
	}

	.latest-post .title{
		padding: 5px;
		padding-left: 10px;
	}

	.text-latest{
		margin-left: -30px;
	}

	.container-post{
		padding-left: 120px;
		padding-right: 120px;
	}

	.line-start-other-post1{
		width: 88.5%;
		height: 2px;
		background-color: rgb(7, 7, 7);
		margin-top: 70px;
		margin-left: 0px;
		float: left;
		border-radius: 2px;
	}

	.text-older{
		float: left;
		margin-top: 59px;
		margin-left: 20px;
	}

	.post{
		margin: auto;
		margin-top: 40px;
		width: 98%;
	}

	.post-first{
		margin-top: 7px;
	}

	.card .listLabel .label .badge{
		background-color: transparent;
		font-weight: 600;
	}

	.card .listLabel .label{
		float: right;
		position: absolute;
		right: 0;
		margin-top: -15px;
		margin-right: 5px;
		font-size: 14px;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="container-fluid" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">
	<h1 class="title-page">Blog</h1>
	<div class="listPost">
		<div class="container container-post">
			<h3 class="text-latest">Latest Post</h3>
			<div class="row card latest-post" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}; {$mode == 'night' ? 'border-color: white;' : ''}">
				<h6 class="date">Thursday, &nbsp;March 26 2020&nbsp; (5 days ago)</h6>
				<h4 class="title" style="color: {$mode == 'night' ? 'white' : 'black'}">Qui consequat sit officia qui consectetur sunt ut excepteur irure dolore consectetur sunt esse.</h4>
				<div class="row listLabel">
					<h6 class="label" style="color: {$mode == 'night' ? 'white' : 'black'}">
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Website</a></span>
						&nbsp;
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Programing</a></span>
					</h6>
				</div>
			</div>
			<div class="row">
				<div class="row line-start-other-post1" style="background-color: {$mode == 'night' ? themeNight[1] : '#343434'}"></div>
				<h5 class="text-older">Older Post</h5>
			</div>

			<div class="row card post post-first" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}; {$mode == 'night' ? 'border-color: white;' : ''}">
				<h6 class="date">Thursday, &nbsp;March 26th 2020&nbsp; (5 days ago)</h6>
				<h5 style="color: {$mode == 'night' ? 'white' : 'black'}">Qui consequat sit officia qui consectetur sunt ut excepteur irure dolore consectetur sunt esse.</h5>
				<div class="row listLabel">
					<h6 class="label" style="color: {$mode == 'night' ? 'white' : 'black'}">
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Website</a></span>
						&nbsp;
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Programing</a></span>
					</h6>
				</div>
			</div>
			
			<div class="row card post" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}; {$mode == 'night' ? 'border-color: white;' : ''}">
				<h6 class="date">Thursday, &nbsp;March 26th 2020&nbsp; (5 days ago)</h6>
				<h5 style="color: {$mode == 'night' ? 'white' : 'black'}">Qui consequat sit officia qui consectetur sunt ut excepteur irure dolore consectetur sunt esse.</h5>
				<div class="row listLabel">
					<h6 class="label" style="color: {$mode == 'night' ? 'white' : 'black'}">
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Website</a></span>
						&nbsp;
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Programing</a></span>
					</h6>
				</div>
			</div>

			
			<div class="row card post" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}; {$mode == 'night' ? 'border-color: white;' : ''}">
				<h6 class="date">Thursday, &nbsp;March 26th 2020&nbsp; (5 days ago)</h6>
				<h5 style="color: {$mode == 'night' ? 'white' : 'black'}">Qui consequat sit officia qui consectetur sunt ut excepteur irure dolore consectetur sunt esse.</h5>
				<div class="row listLabel">
					<h6 class="label" style="color: {$mode == 'night' ? 'white' : 'black'}">
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Website</a></span>
						&nbsp;
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Programing</a></span>
					</h6>
				</div>
			</div>

			<div class="row card post" style="background-color: {$mode == 'night' ? themeNight[0] : 'white'}; {$mode == 'night' ? 'border-color: white;' : ''}">
				<h6 class="date">Thursday, &nbsp;March 26th 2020&nbsp; (5 days ago)</h6>
				<h5 style="color: {$mode == 'night' ? 'white' : 'black'}">Qui consequat sit officia qui consectetur sunt ut excepteur irure dolore consectetur sunt esse.</h5>
				<div class="row listLabel">
					<h6 class="label" style="color: {$mode == 'night' ? 'white' : 'black'}">
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Website</a></span>
						&nbsp;
						<span class="badge badge-secondary"><a href="blog?label=" style="color: {$mode == 'night' ? 'white' : 'black'}">Programing</a></span>
					</h6>
				</div>
			</div>
		</div>
	</div>
</div>