const winston = require('winston');

const logger = winston.createLogger({
    transports: [

      new winston.transports.File({
        filename: 'combined.log',
        format: winston.format.combine(winston.format.timestamp())
      }),

      new winston.transports.File({
        filename: 'info.log',
        level: 'info',
        format: winston.format.combine(winston.format.timestamp(),winston.format.simple())
      }),

      new winston.transports.File({
        filename: 'errors.log',
        level: 'error',
        format: winston.format.combine(winston.format.timestamp(),winston.format.simple())
      }),

      new winston.transports.Http({
        level: 'warn',
        format: winston.format.json()
      }),

      new winston.transports.Console({
        format: winston.format.combine(winston.format.colorize(),winston.format.timestamp(),winston.format.simple())
      })  
    ]
  });

module.exports = logger;
