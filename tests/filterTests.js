let pageObjects = {}
module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Filters': browser => {
        // Setting preconditions
        browser.url('https://www.criterion.com/shop/browse/list?sort=spine_number')
        //    Avant-Garde Filter
        pageObjects
            .click('@filterButton')
            .click('@avantGarde')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Grand Illusion"]', 1000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("9 RESULTS")
        // Wes Anderson Filter
        pageObjects
            .click('@filterButton')
            .click('@resetButton')
            .click('@wesAnderson')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Eraserhead"', 1000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("8 RESULTS")
        // OOP Filter
        pageObjects
            .click('@filterButton')
            .click('@resetButton')
            .click('@OOP')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Rushmore"', 1000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("108 RESULTS")
        // OOP Bluray only Filter
        pageObjects
            .click('@filterButton')
            .click('@bluray')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Grand Illusion"]', 1000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("9 RESULTS")
    }
}