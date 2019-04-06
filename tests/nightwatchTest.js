var commonFunctions = require('../utility/commonFunctions');
var nightwatchPage = require('../pages/nightwatchPage');
var propertyFile = require('../data/propertyFile');

module.exports = {

'Home Page Nightwatch' : function (browser) {
      commonFunctions.getBrowser(browser, selectors.urlNightwatch);
},

'Verify Home Page': function (browser) {
      nightwatchPage.getHomePageVerify(browser);
      browser.end;
},

/*'Home Page Guru99' : function (browser) {
      commonFunctions.getBrowser(browser, 'https://www.guru99.com/');
      browser.pause(2000);
      var set = new Set();
      browser.elements('css selector', 'div.col-md-3:nth-child(1)>div.featured-box.cloumnsize1>ul#java_technologies:nth-child(2)>li', function(result){ 
            var length = result.value.length;
            for (var i=1; i<=length; i++){
                  var tempElement = "div.col-md-3:nth-child(1)>div.featured-box.cloumnsize1>ul#java_technologies:nth-child(2)>li:nth-child(";
                  var tempOne = ")";   
                  var final =  tempElement+i+tempOne;  
                     
                  browser.getText(final, function(result){
                        // console.log(result.value);
                        set.add(result.value);
                  })
            }
      });
      console.log(set);
}*/
};