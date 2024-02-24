const req = fetch('http://localhost:3000/log', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({ name: 'John Doe' }),
})
console.log(req)
