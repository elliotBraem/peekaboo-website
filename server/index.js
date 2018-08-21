let express = require('express');
let path = require('path');
let compression = require('compression');
let helmet = require('helmet');
let debug = require('debug')('app');

let isDev = (process.env.NODE_ENV || 'development') === 'development';
let app = express();
try {
  debug('Hello, I am debugging');
  debug('isDev: %s', isDev);
  if (isDev) {
    let webpack = require('webpack');
    let webpackConfig = require('../webpack.config');
    let compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath,
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }

  process.on('uncaughtException', function(er) {
    debug('Error: %o', er.stack);
    console.error(er.stack);
    process.exit(1);
  });

  app.use(compression());
  app.use(helmet());
  app.set('view engine', 'pug');
  app.set('views', path.resolve(__dirname, 'views'));

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.listen(process.env.PORT || 8080, () => console.log('Server running!'));
} catch (err) {
  debug('Error: %o', err);
}
