const Promise = require('bluebird')
const shared = require('./shared.js')

module.exports = function exec(params){

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
    let ps4 = shared.ps4;

    if(state == 1){

        return ps4.turnOn()
            .then(() => {
                ps4.close();
                return Promise.resolve()
            })
            .catch((err) => {
                ps4.close();
                return Promise.reject(err)
            });

    }else if(state == 0){

        return ps4.turnOff()
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
    let ps4 = shared.ps4;
    
    return ps4.startTitle(title)
        .then(() => {
            ps4.close()
            return Promise.resolve()
        })
        .catch((err) => {
            ps4.close()
            return Promise.reject(err)
        });
}