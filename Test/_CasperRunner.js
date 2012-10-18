if (phantom.args.length < 2) {
    console.log('Usage: _CasperRunner.js <casperPath> <CasperJS tests to run>');
    phantom.exit(-1);
}
phantom.casperPath = phantom.args[0];
phantom.injectJs(phantom.casperPath + '\\bin\\bootstrap.js');

var casper = require('casper').create({
    clientScripts: ['include/jquery.js'], //, 'include/underscore.js'],
    verbose: false,
    logLevel: "info"
    
});

console.log();
console.log('[Start Test] ' + phantom.args[1]);

// Skip the casperPath
for (var i = 1; i < phantom.args.length; i++) {
    phantom.injectJs(phantom.args[i]);
}