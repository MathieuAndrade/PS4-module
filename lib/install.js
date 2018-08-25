const Promise = require('bluebird')

module.exports = function install(){

    return createDevice()
        .then(() => {
            return Promise.resolve()
        })
        .catch((err) => {
            return Promise.reject(err)
        })

}

function createDevice(){

    var newDevice = {
        device : {
	        name: 'Playstation 4',
	        protocol: 'ps4',
	        service: 'ps4',
	    },
	    types : [{
            name: 'PS4 - state',
            type: 'binary',
            unit: '',
            sensor: false,
            min: 0,
            max: 1,
        }]
    };

	sails.log.info('PS4 module: Creating device PS4...');

    return gladys.device.create(newDevice)
        .then(() => {
            sails.log.info('PS4 module: PS4  device created !');
            return Promise.resolve()
        })
        .catch((err) => {return Promise.reject(err)})
}