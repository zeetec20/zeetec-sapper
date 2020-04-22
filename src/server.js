import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import bcrypt from 'bcrypt'

import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const app = express()

const plain_api_key = process.env.api_key

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware(
		{
			session: (req, res) => ({
				api_key: req.app.get('api_key')
			})
		}
	)
)
.listen(PORT, err => {
	if (err) console.log('error', err);
});

app.set('api_key', bcrypt.hashSync(plain_api_key, 10))
app.set('plain_api_key', plain_api_key)