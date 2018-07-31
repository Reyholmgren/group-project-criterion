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
            .click('@outOfPrintWishList') 
            .expect.element('@accountHeader').to.be.visible.before(10000)    
        
        //spine2
            pageObjects             
            .click('@homeBtn') 
            .click('@shopBtn') 
            .expect.element('@shopTitle').text.to.equal('Shop the Collection') 
        pageObjects 
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
        pageObjects 
            .click('@spine2') 
        pageObjects 
            .expect.element('@movieTitle').to.be.visible.before(5000)
        pageObjects 
            .click('@wishListBtn') 
            .expect.element('@accountHeader').to.be.visible.before(5000) 
        
        //spine3
        pageObjects             
            .click('@homeBtn') 
            .click('@shopBtn') 
            .expect.element('@shopTitle').text.to.equal('Shop the Collection') 
        pageObjects 
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
        pageObjects 
            .click('@spine3') 
        pageObjects 
            .expect.element('@movieTitle').to.be.visible.before(5000)
        pageObjects 
            .click('@wishListBtn') 
            .expect.element('@accountHeader').to.be.visible.before(5000) 

            //spine4
        pageObjects
            .waitForElementVisible('@homeBtn', 5000)          
            .click('@homeBtn') 
            .click('@shopBtn') 
            .expect.element('@shopTitle').text.to.equal('Shop the Collection') 
        pageObjects 
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
        pageObjects 
            .click('@spine4') 
        pageObjects 
            .expect.element('@movieTitle').to.be.visible.before(5000)
        pageObjects 
            .click('@wishListBtn') 
            .expect.element('@accountHeader').to.be.visible.before(5000) 


    }

}