const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanTable = document.querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed ci-scorecard-table"] tbody');
        for (let i = 0; i < batsmanTable.length; i++) {
            console.log("team number -> ", i + 1);
            let rows = batsmanTable[i].querySelectorAll('[class="ds-border-b ds-border-line ds-text-tight-s"] a');
            for (let j = 0; j < rows.length - 1; j++) {
                let link = rows[j].href;
                let completeLink = "https://www.espncricinfo.com" + link;
                // console.log(completeLink);
                request(completeLink, cb2);
            }
        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetails = document.querySelector('[class="ds-grid lg:ds-grid-cols-3 ds-grid-cols-2 ds-gap-4 ds-mb-8"] h5');
        console.log(playerDetails.textContent);
    }
}