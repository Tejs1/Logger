//create a express server for logging all post requests to /log
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/log', (req, res) => {
	const { body } = req

	fs.appendFile(path.join(__dirname, 'log.txt'), JSON.stringify(body) + '\n', err => {
		if (err) {
			console.log(err)
		}
	})
	res.send('Post request received')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
