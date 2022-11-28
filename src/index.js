const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

const hash = require('./hash')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  return res.json({msg: 'It works!'})
});

app.post('/register', (req, res) => {
  console.log(req.body)

  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(422).json({ error: 'Todos os campos precisam ser preenchidos corretamente' })
  }

  setTimeout(() => {
    return res.status(201).send()
  }, 1000);
})

app.post('/auth/token', (req, res) => {
  const { email, password } = req.body

  console.log({ email, password })

  if (email !== 'alves.david@outlook.com' || password !== 'Admin123') {
    return res.status(401).json({error: 'E-mail ou senha inválidos'})
  }

  const data = {
    access_token: hash('sha256'),
    token_type: 'Bearer',
    refresh_token: hash('sha256'),
    scope: 'password'
  }

  return res.status(200).json(data)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
