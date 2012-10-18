phantom.casperPath = 'C:\\arasmussen\\PhantomGit\\lib\\CasperJS';
phantom.injectJs(phantom.casperPath + '\\bin\\bootstrap.js');

var casper = require('casper').create({
    exitOnError: false,
    logLevel: "info",
    verbose: true
});

casper.on('http.status.404', function (resource) {
    this.test.fail('URL encountered a 404 response: ' + resource.url);
});

casper.on('http.status.500', function (resource) {
    this.test.fail('URL encountered a 500 response: ' + resource.url);
});

casper.start();

// Will fail
casper.thenOpen('http://localhost:3852/500.aspx');

casper.thenOpen('http://localhost:3852/Form.aspx', function () {
    this.fill('form#form1', {
        'username': 'Hey, this is me!'
    }, true);
});
casper.then(function () {
    this.test.assertSelectorHasText('#username', 'Hey, this is me!');
});

casper.thenOpen('http://localhost:3852/ActivateSession.aspx', function () {
    this.test.assertTitleMatch(/Activate Session/, 'Title should match \'/Activate Session/\'.');
});
casper.thenOpen('http://localhost:3852/Session.aspx', function () {
    this.test.assertTitleMatch(/Session/, 'Title should match \'/Session/\' was ' + casper.getTitle() +'.');
});

casper.run(function () {
    this.test.renderResults(true, this.test.testResults.failed);
});