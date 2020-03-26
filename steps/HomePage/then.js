const { Then } = require('cucumber');
const assert = require('assert');

Then(/^links related to "(.*)" are shown into the results page$/, keyword => {
    const links = $$('.LC20lb');
    links.forEach(link => {
        const linkText = link.getText().toLowerCase();
        if(linkText){
            assert(
                linkText.includes(keyword),
                `Link Text does not include ${keyword}`
            )
        }
    });
})