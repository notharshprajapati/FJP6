const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let one = document.querySelectorAll('[class="ds-flex ds-mx-4 ds-pt-2 ds-pb-3 ds-space-x-4 ds-border-t ds-border-line-default-translucent"]');
        for (let i = 0; i < one.length; i++) {
            let two = one[i].querySelectorAll('[class="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"]');
            let completeLink = "https://www.espncricinfo.com" + two[2].href;
            console.log(completeLink);
        }
    }
}




