if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

// Packages and services
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')
// require('./auth/auth')

// Routers
const apiRouter = require('./routes/index')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
const db = mongoose.connection
db.on('error', (error) => console.error('❌ Database connection\n', error))
db.on('open', () => console.log('✅ Database connection'))

// Endpoints
app.use('/api', apiRouter)

// Serve client from backend in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./frontend/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
	})
}

// Error handling
app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.json({ error: `${err}` })
})

// Server
app.listen(process.env.PORT, () =>
	console.log(`✅ Server [👂:${process.env.PORT}]`)
)
