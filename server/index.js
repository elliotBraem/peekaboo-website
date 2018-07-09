const express = require('express')
const path = require('path')
const app = express()

//app.set('views', './views');
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080, () => console.log('Server running!'))