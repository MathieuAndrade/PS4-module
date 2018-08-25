module.exports = function (sails) {

    var install = require('./lib/install.js');
    var init = require('./lib/init.js');
    var exec = require('./lib/exec.js');
    var uninstall = require('./lib/uninstall.js');

    gladys.on('ready', function(){
        init();
    });

    return {
        install,
        init,
        exec,
        uninstall,
    };
};