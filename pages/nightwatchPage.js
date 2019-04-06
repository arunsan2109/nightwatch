var propertyFile = require('../data/propertyFile');
var commonFunctions = require('../utility/commonFunctions');

module.exports = {

    getHomePageVerify(browser){
        if (browser.assert.title(selectors.homePageTitle)){
            commonFunctions.getTextVerify(browser, 'div.parallax:nth-child(3) div.parallax__layer.parallax__layer--0:nth-child(4) div.top-text div.houses-left div.houses-right div.container div.row div.col-md-6:nth-child(1) > h1:nth-child(1)', 'Nightwatch');
            commonFunctions.getClick(browser, selectors.home);
            commonFunctions.getClick(browser, selectors.gettingStarted);
            commonFunctions.getClick(browser, selectors.homeNightwatch);
            commonFunctions.getClick(browser, selectors.developerGuide);
            commonFunctions.getClick(browser, selectors.homeNightwatch);
            commonFunctions.getClick(browser, selectors.apiReferences);
            commonFunctions.getClick(browser, selectors.homeNightwatch);
            commonFunctions.getClick(browser, selectors.contact);
            commonFunctions.getClick(browser, selectors.homeNightwatch);
            commonFunctions.getClick(browser, selectors.blog);
            return browser;
        }
    }
};