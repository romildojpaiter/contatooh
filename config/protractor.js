// com protractor você remove o seleniumAdress
var config = require('./config')();
exports.config = { 
  sauceUser : config.sauceUser, 
  sauceKey : config.sauceKey, 
  capabilities : {
    'name': config.sauceTestName,
    'browserName': 'chrome',
    'tunnel-identifier': config.travisJobNumber,
    'build': config.travisBuild
  },

  specs: ['../test/e2e/**/*Spec.js'],
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.get('http://localhost:3000');
    browser.sleep(10000);
    element(by.id('entrar')).click(); 
    element(by.id('login_field')).sendKeys(config.seleniumUser);
    element(by.id('password')).sendKeys(config.seleniumUserPassword);
    element(by.name('commit')).click();
    browser.ignoreSynchronization = false;
  }
};