const puppeteer = require("puppeteer");
const user = "SussyOnniMan";
const pass = "F6kBdgAwSUvxRwG";
const code = require("./code");

let browserPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-fullscreen"],
});
let page;
browserPromise
  .then(function (browser) {
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
  })
  .then(function (pageInstance) {
    console.log("Page is opened");
    page = pageInstance;
    let urlPromise = page.goto("https:leetcode.com/");
    return urlPromise;
  })
  .then(function () {
    let signInPromise = page.evaluate(function () {
      let navBar = document.querySelector(".nav-right");
      let navBarButtons = navBar.querySelectorAll("a");
      navBarButtons[navBarButtons.length - 1].click();
      return;
    });
    return signInPromise;
  })
  .then(function () {
    let waitPromise = page.waitForSelector("#id_login");
    return waitPromise;
  })
  .then(function () {
    let wait = page.waitForTimeout(4000);
    return wait;
  })
  .then(function () {
    let userTypedPromise = page.type("#id_login", user, { delay: 250 });
    return userTypedPromise;
  })
  .then(function () {
    let passTypedPromise = page.type("#id_password", pass, { delay: 250 });
    return passTypedPromise;
  })
  .then(function () {
    let wait = page.waitForTimeout(4000);
    return wait;
  })
  .then(function () {
    let clickPromse = page.click("#signin_btn");
    return clickPromse;
  })

  .then(function () {
    let waitPromise = page.waitForSelector('[class="nav-item__5BvG"]');
    return waitPromise;
  })
  .then(function () {
    let wait = page.waitForTimeout(4000);

    return wait;
  })
  .then(function () {
    let problemsPage = page.evaluate(function () {
      let navBarButtons = document.querySelectorAll('[class="nav-item__5BvG"]');
      navBarButtons[2].click();
      return;
    });
    return problemsPage;
  })
  .then(function () {
    let waitPromise = page.waitForSelector(
      '[class="h-5 hover:text-primary-s dark:hover:text-dark-primary-s"]'
    );
    return waitPromise;
  })

  .then(function () {
    let arrPromise = page.evaluate(function () {
      let arr = [];
      let aTags = document.querySelectorAll(
        '[class="h-5 hover:text-primary-s dark:hover:text-dark-primary-s"]'
      );
      for (let i = 0; i < 5; i++) {
        let link = aTags[i].href;
        arr.push(link);
      }
      return arr;
    });
    return arrPromise;
  })
  .then(function (questionsArr) {
    console.log(questionsArr);
    console.log(code.answers.length);
    let questionPromise = questionSolver(questionsArr[0], code.answers[0]);
    for (let i = 1; i < questionsArr.length; i++) {
      questionPromise = questionPromise.then(function () {
        let nextQuestionPromise = questionSolver(
          questionsArr[i],
          code.answers[i]
        );
        return nextQuestionPromise;
      });
    }
    return questionPromise;
  })
  .then(function () {
    console.log("All the warm up questions have been submitted!!!");
  });

function waitAndClick(selector) {
  return new Promise(function (resolve, reject) {
    let waitPromise = page.waitForSelector(selector);
    waitPromise
      .then(function () {
        let clickPromise = page.click(selector);
        return clickPromise;
      })
      .then(function () {
        resolve();
      });
  });
}

function questionSolver(question, answer) {
  return new Promise(function (resolve, reject) {
    let linkPromise = page.goto(question);
    linkPromise
      .then(function () {
        let wait = page.waitForTimeout(4000);
        return wait;
      })
      .then(function () {
        return waitAndClick(".custom-testcase__2ah7");
      })
      .then(function () {
        return waitAndClick(".editor-container__QkHu");
      })

      .then(function () {
        let holdControl = page.keyboard.down("Control");
        return holdControl;
      })
      .then(function () {
        let pressA = page.keyboard.press("A");
        return pressA;
      })
      .then(function () {
        let upControl = page.keyboard.up("Control");
        return upControl;
      })

      .then(function () {
        let pressSpace = page.keyboard.press(" ");
        return pressSpace;
      })

      .then(function () {
        let typePromise = page.type(".editor-container__QkHu", answer, {
          delay: 1,
        });
        return typePromise;
      })
      .then(function () {
        let holdControl = page.keyboard.down("Control");
        return holdControl;
      })
      .then(function () {
        let pressA = page.keyboard.press("A");
        return pressA;
      })
      .then(function () {
        let pressX = page.keyboard.press("X");
        return pressX;
      })
      .then(function () {
        let pressA = page.keyboard.press("A");
        return pressA;
      })
      .then(function () {
        let pressA = page.keyboard.press(" ");
        return pressA;
      })
      .then(function () {
        let upControl = page.keyboard.up("Control");
        return upControl;
      })
      .then(function () {
        return waitAndClick(".CodeMirror-lines");
      })
      .then(function () {
        let holdControl = page.keyboard.down("Control");
        return holdControl;
      })
      .then(function () {
        let pressA = page.keyboard.press("A");
        return pressA;
      })
      .then(function () {
        let pressV = page.keyboard.press("V");
        return pressV;
      })
      .then(function () {
        let upControl = page.keyboard.up("Control");
        return upControl;
      })
      .then(function () {
        return waitAndClick(".submit__2ISl.css-ieo3pr");
      })
      .then(function () {
        console.log("questions submitted success");
        resolve();
      });
  });
}
