var ifttt = require('node-ifttt-maker');

module.exports = {
  _ctx: null,

  _shutdown: function() {
  },

  _getStatus: function() {
    if(this._ctx == null)
      return {status: 1, msg: 'token is not set or wrong'};
    else
      return {status: 2, msg: 'Ready'};
  },

  setToken: function(token) {
    this._ctx = new ifttt(token);
  },

  post: function(event, val1, val2, val3) {
    this._ctx.request({
      event: event,
      method: 'GET',
      params: {
        'value1': val1,
        'value2': val2,
        'value3': val3
      }
    }, function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
};
