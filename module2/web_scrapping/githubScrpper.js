const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
let xlsx = require("json-as-xlsx");

const link = "https://github.com/topics";
let gitData = [];
let counter = 0;

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let topics = document.querySelectorAll('.no-underline.d-flex.flex-column.flex-justify-center');
        let topicName = document.querySelectorAll('.f3.lh-condensed.text-center.Link--primary.mb-0.mt-1');
        for (let i = 0; i < 1; i++) {
            let completeLink = "https://github.com" + topics[i].href;
            console.log("completeLink -> " + completeLink);
            let fullTopicName = topicName[i].textContent.trim();
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
        for (let i = 0; i < 1; i++) {
            let issueLink = repositoryMenu[i].querySelectorAll('.tabnav-tab.f6.px-2.py-1');
            let completeIssueLink = "https://github.com" + issueLink[1].href;
            console.log("completeIssueLink -> " + completeIssueLink);
            request(completeIssueLink, cb3);
        }
        counter++;



    }
}

function cb3(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let repoName = document.querySelector('.url.fn');
        console.log(repoName.textContent);
        let issueName = document.querySelectorAll('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
        for (let i = 0; i < 1; i++) {
            if (issueName[i] && issueName[i].textContent && issueName[i].href) {
                console.log(issueName[i].textContent);
                console.log("https://github.com" + issueName[i].href);
            } else {
                console.log("Not Found");
            }
        }
        counter--;
    }
}


function processRepo(repoName, issueName, issueLink) {
    for (let i = 0; i < gitData.length; i++) {
        let playerObj = gitData[i];
        if (playerObj.repoName == repoName) {
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        repoName: repoName,
        issueName: issueName,
        issueLink: issueLink,
    }
    gitData.push(obj);
}