const Promise = require('bluebird')

module.exports = function install(){

    return deleteDevice()
        .then(() => {
            return Promise.resolve()
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

function deleteDevice(){

    return gladys.device.getByService({'service':'ps4'})
        .then((devices) => {
            devices.forEach(function(device) {
                gladys.device.delete(device)
                    .then(() => {
                        sails.log.info('PS4 module: PS4  device deleted !');
                        return Promise.resolve()
                    })
                    .catch((err) => {
                        return Promise.reject(err)
                    })
            })
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}