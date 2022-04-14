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
        let bowlersTable = document.querySelectorAll('[class="ds-w-full ds-table ds-table-xs ds-table-fixed"] tbody');
        for (let i = 0; i < bowlersTable.length; i++) {
            let max = 0;
            let maxN = "";
            let rows = bowlersTable[i].querySelectorAll('[class="ds-border-b ds-border-line ds-text-tight-s"]');
            for (let j = 0; j < rows.length; j++) {
                let tds = rows[j].querySelectorAll("td");
                let name = tds[0].textContent;
                let wicket = tds[4].textContent;
                console.log("Name -> ", name, "     Wickets -> ", wicket);
                if (max < wicket) {
                    max = wicket;
                    maxN = name;
                }
            }
            console.log("max wickets taken in match", i, "-> ", max, "       by->", maxN);
        }
    }
}