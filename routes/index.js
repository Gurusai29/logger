var express = require('express');
const winston = require('winston/lib/winston/config');
var router = express.Router();
var logger = require('../logger')

/* GET home page. */
router.get('/', function (req, res, next) {
  logger.info('user to test-logger')
  res.render('index', { title: 'Express' });
});

router.get('/form', function (req, res) {
  try {
    logger.log('info', 'hello world');
    if (req.query.id === 1) {
      logger.info(`${req.query.id}`);
      return;
    } else {
      logger.error('invalid input')
    }
  } catch (error) {
    logger.error(`${error.message}`);
    return;
  }
});

module.exports = router;
