<script context="module">
	export async function preload(page, session) {
        const api_key = session.api_key
        return {api_key}
	}
</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<script>
    import {onMount, getContext} from 'svelte'
    import {mode, loading} from '../store'

    const themeNight = getContext('themeNight')
    onMount(async () => {
        loading.set(false)
    })

    export let api_key

    function post(form) {
        const action = form.getAttribute('action')
        const data = new FormData(form)
        const method = form.getAttribute('method')
        const dataJSON = {}

        data.forEach((value, key) => dataJSON[key] = value)

        if (method == 'POST') {
            fetch(action, {
                method: method,
                headers: {
                    "Content-Type": 'application/json',
                    "Api-Token": api_key
                },
                body: JSON.stringify(dataJSON)
            }).then(res => {
                console.log(res);
            })
        } else if (method == 'GET') {

        }
    }

</script>

<style>
	.container{
		margin-top: 8%;
		padding-left: 5%;
		padding-right: 5%;
        padding-bottom: 2%;
	}

	.title-page{
		width: 100%;
		text-align: center;
		margin-top: 15px;
		margin-bottom: 55px;
	}

    .yellow{
		background-color: black;
		color: yellow;
		letter-spacing: 3px;
		padding: 5px;
		font-size: 26px;
    }

    .text1 h2{
        margin-left: 15%;
    }

    .sosmed{
        color: unset;
        text-decoration: none;
    }

    .sosmed:hover{
        border: solid black 2px;
        padding: 3px;
    }

    .wrap-message .row, .wrap-message h2, .wrap-message button{
        margin: auto;
    }

    .wrap-message button{
        margin-top: 4%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 1.2%;
        padding-bottom: 1.2%;
        /* font-size: 17px; */
        text-align: center !important;
        border-radius: 0px;
        border: solid 1px black;
        background-color: #ffffff00 !important;
        color: #343434 !important;
        font-weight: bold;
        box-shadow: 5px 5px 0px 0px yellow !important;
        min-width: 40%;
        outline: none !important;
        transition: all 0.5s;
    }

    .wrap-message button:hover{
        box-shadow: 0px 0px 0px 0px yellow !important;
        background-color: yellow !important;
        color: black !important;
    }

    .wrap-message button:focus{
        /* background-color: unset;
        box-shadow: unset; */
        animation: button_bounce 0.5s;
        animation-play-state: running;
    }

    .wrap-message .form-control{
        margin: auto;
        margin-top: 3%;
        border-radius: 0px;
        border-color: #343434;
        outline: unset;
        box-shadow: none;
        width: 90%;
        border-top: none;
        border-left: none;
        border-right: none;
        background-color: #3434340c;
    }

    .wrap-message .form-control::placeholder{
        color: #343434;
    }

    .wrap-message .row{
        width: 100%;
    }

    @keyframes button_bounce{
        0%{
            min-width: 40%;
        }

        25%{
            min-width: 41%;
        }

        50%{
            min-width: 42%;
        }

        75%{
            min-width: 41%;
        }

        100%{
            min-width: 40%;
        }
    }
</style>


<div class="container" style="color: {$mode == 'night' ? themeNight[1] : '#343434'}">
	<!-- <div class="row"> -->
        <h1 class="title-page">Contact</h1>
    <!-- </div> -->
    <div class="row">
        <div class="col-lg-6 wrap-sosmed">
            <div class="row text1">
                <h2 class="title">Don't be <span class="yellow">&nbsp;stranger&nbsp;</span></h2>
            </div>
            <div class="row text2">
                <h2>just say <span class="yellow">&nbsp;hello&nbsp;</span>.</h2>
            </div>
            <div class="row mt-4">
                <h6>Kamu dapat dapat menemukan saya disini.</h6>
            </div>
            <div class="row">
                <ul>
                    <li>Facebook: &nbsp;<a href="a" class="sosmed">Firman Lestari</a></li>
                    <li>Github: &nbsp;<a href="a" class="sosmed">zeetec</a></li>
                    <li>Instagram: &nbsp;<a href="a" class="sosmed">firmanjl363</a></li>
                    <li>Twitter: &nbsp;<a href="a" class="sosmed">.Fearles</a></li>
                    <li>Whatsapp: &nbsp;<a href="a" class="sosmed">082141950044</a></li>
                    <li>Email: &nbsp;<a href="a" class="sosmed">jusles363@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <div class="col-lg-6 wrap-message">
            <div class="row">
                <h2>Any Message ?</h2>
            </div>
            <form action="/api/message" method="POST" id="form_message" on:submit={elmt => {elmt.preventDefault(); post(document.getElementById('form_message'))}}>
                <div class="row">
                    <input type="text" name="name" class="form-control" placeholder="Name">
                </div>
                <div class="row">
                    <input type="email" name="email" class="form-control" placeholder="Email">
                </div>
                <div class="row">
                    <textarea class="form-control" name="message" rows="3" placeholder="message"></textarea>
                </div>
                <div class="row">
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</div>