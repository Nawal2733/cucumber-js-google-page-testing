const  {Given} = require('cucumber')

Given("a web browser is at the Google home page", ()=> {
    browser.url("/")
})