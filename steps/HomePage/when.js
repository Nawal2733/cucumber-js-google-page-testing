const { When } = require('cucumber');

When(/^The user enters "(.*)" into the search bar$/, keyword=> {
    $(".gLFyf.gsfi").waitForDisplayed(10000);
    $(".gLFyf.gsfi").click();
    $(".gLFyf.gsfi").setValue(keyword);
    $(".aajZCb .gNO89b").waitForDisplayed(10000);
    $(".aajZCb .gNO89b").click();
})