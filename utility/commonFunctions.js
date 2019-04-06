module.exports = {

    // Function to get the browser open
    getBrowser(browser, url){
        try{
        browser.timeouts('implicit', 18000, function(result){});
        browser.url(url);
        browser.maximizeWindow();
        browser.timeouts('implicit', 18000, function(result){});
        return browser;
        }
        catch(e){
            console.log(e);
        }
    },

    // Function to click the element
    getClick(browser, element){
        try{
        browser.timeouts('implicit', 18000, function(result){});
        browser.waitForElementVisible(element, 18000);
        if(browser.expect.element(element).to.be.enabled){
        browser.click(element);
        }
        return browser;
    }
    catch(e){
        console.log("Error Message" +e)
    }
    },

    // Function to click the element
    getTextVerify(browser, element, text){
        try{
        browser.timeouts('implicit', 18000, function(result){});
        browser.waitForElementVisible(element, 18000);
        if(browser.expect.element(element).to.be.enabled){
            browser.assert.containsText(element, text);
        }
        return browser;
    }
    catch(e){
        console.log("Error Message" +e)
    }
    }
};
