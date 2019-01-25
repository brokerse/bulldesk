'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
var axios_1 = require('axios')
var bulldesk = function(token) {
  return axios_1.default.create({
    baseURL: 'https://api.bulldesk.com.br',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    timeout: 1000,
  })
}
exports.conversion = function(lead, token) {
  return bulldesk(token)
    .post('/conversion', __assign({}, lead, { token: token }))
    .then(function(result) {
      return result
    })
    .catch(function(err) {
      return err
    })
}
exports.getLeads = function(page, token) {
  if (page === void 0) {
    page = 0
  }
  return bulldesk(token)
    .get('/lead?page=' + page)
    .then(function(result) {
      return result
    })
    .catch(function(err) {
      return err
    })
}
module.exports = {
  conversion: exports.conversion,
  getLeads: exports.getLeads,
}
