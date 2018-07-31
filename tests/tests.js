module.exports = {
    beforeEach : browser => {
        browser.url('https://www.criterion.com/')
   
    },

    after : browser => {
        browser.end()
    },

    'wishlist add check': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://www.criterion.com/account')
        pageObjects
        .setValue('@emailIn', 'devmountainqa6@gmail.com')
            .setValue('@passwordIn', 'DevMountain')
            .click('@signIn')
            .click('@homeBtn')
            .click('@shopBtn')
            .expect.element('@shopTitle').text.to.equal('Shop the Collection')
        pageObjects
            .click('@allFilms')
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS')
        pageObjects
            .click('@spine1')
        pageObjects
            .expect.element('@movieTitle').text.to.equal('Grand Illusion')
        pageObjects
            .click('@addToWishBtn')
        browser.pause(5000)
        pageObjects
            .expect.element('@accountHeader').to.be.visible   
    }

}