let express = require('express');
let compression = require('compression');
let helmet = require('helmet');

let app = express();

app.use(compression());
app.use(helmet());

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 8080, () => console.log('Server running!'));
