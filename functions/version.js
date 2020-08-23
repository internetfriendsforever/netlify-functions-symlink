const version = require('./utils/version')

exports.handler = function(event, context, callback) {
  return {
    body: version
  }
}
