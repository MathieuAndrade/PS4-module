const Promise = require('bluebird')
const shared = require('./shared.js')
const {Device} = require("ps4-waker");

module.exports = function init(){

    shared.ps4 = new Device({
        address: config.address,
        credentials: config.creds,
        timeout: 5000
    })

    return Promise.resolve()
}