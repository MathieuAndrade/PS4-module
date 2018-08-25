const Promise = require('bluebird')
const shared = require('./shared.js')
const ps4 = shared.ps4;

module.exports = function exec(options){

    let title = params.deviceType.deviceTypeIdentifier
    let state = params.state.value

    if(title) {
        return startTitle(title)
            .then(() => {
                return Promise.resolve()
            })
            .catch((err) => {
                return Promise.reject(err)
            });
    }else{
        return power(state)
            .then(() => {
                return Promise.resolve()
            })
            .catch((err) => {
                return Promise.reject(err)
            });
    }
}

function power(state){

    if(state == 1){

        ps4.turnOn()
            .then(() => {
                ps4.close();
                return Promise.resolve()
            })
            .catch((err) => {
                ps4.close();
                return Promise.reject(err)
            });

    }else if(state == 0){

        ps4.turnOff()
            .then(() => {
                ps4.close();
                return Promise.resolve()
            })
            .catch((err) => {
                ps4.close();
                return Promise.reject(err)
            });
    }
}

function startTitle(title){

    ps4.startTitle(title)
        .then(() => {
            ps4.close()
            return Promise.resolve()
        })
        .catch((err) => {
            ps4.close()
            return Promise.reject(err)
        });
}