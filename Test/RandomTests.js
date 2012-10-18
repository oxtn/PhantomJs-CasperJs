phantom.casperPath = 'C:\\arasmussen\\PhantomGit\\lib\\CasperJS';
phantom.injectJs(phantom.casperPath + '\\bin\\bootstrap.js');

var casper = require("casper").create({
    verbose: true,
    exitOnError: true
});

var countLinks = function () {
    return document.querySelectorAll('a').length;
};

var suites = [
    function () {
        this.echo("Suite 1");
        this.start("http://google.com/", function () {
            this.echo("Page title: " + (this.getTitle()));
        });
        this.then(function () {
            this.echo((this.evaluate(countLinks)) + " links");
        });
    }, function () {
        this.echo("Suite 2");
        this.start("http://yahoo.com/", function () {
            this.echo("Page title: " + (this.getTitle()));
        });
        this.then(function () {
            this.echo((this.evaluate(countLinks)) + " links");
        });
    }, function () {
        this.echo("Suite 3");
        this.start("http://bing.com/", function () {
            this.echo("Page title: " + (this.getTitle()));
        });
        this.then(function () {
            this.echo((this.evaluate(countLinks)) + " links");
        });
    }
];

casper.start();

casper.then(function () {
    this.echo("Starting");
});

var currentSuite = 0;

var check = function () {
    if (suites[currentSuite]) {
        suites[currentSuite].call(this);
        currentSuite++;
        casper.run(check);
    } else {
        this.echo("All done.");

        this.exit(this.test.testResults.failed);
    }
};

casper.run(check);

