const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let topics = document.querySelectorAll('.no-underline.d-flex.flex-column.flex-justify-center');
        for (let i = 0; i < 1; i++) {
            let completeLink = "https://github.com" + topics[i].href;
            request(completeLink, cb2);

        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let repositoryMenu = document.querySelectorAll('.tabnav.px-3.mb-0');
        for (let i = 0; i < 8; i++) {
            let issueLink = repositoryMenu[i].querySelectorAll('.tabnav-tab.f6.px-2.py-1');
            let completeIssueLink = "https://github.com" + issueLink[1].href;
            request(completeIssueLink, cb3);
        }
    }
}

function cb3(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let issueName = document.querySelectorAll('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
        console.log(issueName[1].textContent);
        console.log("https://github.com" + issueName[1].href);
    }
}