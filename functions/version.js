const version = require('./utils/version')

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: `Hello! ${version}`
  })
}
