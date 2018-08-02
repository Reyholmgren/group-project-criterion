module.exports = {
    beforeEach : browser => {
        browser.url('https://www.criterion.com/')
   
    },

    after : browser => {
        browser.end()
    },

    

    'login and wishlist add check': browser => {
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
            .expect.element('@movieTitle').to.be.visible.before(10000)
        pageObjects 
            .click('@wishListBtn') 
            .expect.element('@accountHeader').to.be.visible.before(10000) 
        
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


    },

    'wishlist remove check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@accountWishList')
            .expect.element('@wishListRemove1').to.be.visible.before(5000)
        pageObjects
            .click('@wishListRemove1')
            .click('@wishListRemove2') 
            .click('@wishListRemove3') 
            .click('@wishListRemove4')
            .click('@accountWishList')
            browser.pause(5000)


    },
    'search all by year check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@homeBtn') 
            .click('@shopBtn')
            .expect.element('@shopTitle').text.to.equal('Shop the Collection')
        pageObjects
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
        pageObjects
            .click('select[class="filterbut"] option[value="year"]')
        browser.pause(5000)
        pageObjects
            .waitForElementVisible('@year1921', 15000)          

    },

    'search all by director check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@homeBtn') 
            .click('@shopBtn')
            .expect.element('@shopTitle').text.to.equal('Shop the Collection')
        pageObjects
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
        pageObjects
            .click('select[class="filterbut"] option[value="sort_director"]')
        browser.pause(5000)
        pageObjects
            .waitForElementVisible('@directorAkerman', 15000)          

    },
    
    'shopping cart add check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@homeBtn') 
            .click('@shopBtn')
        .expect.element('@shopTitle').text.to.equal('Shop the Collection')
         pageObjects
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
         pageObjects
            .click('@spine2')
            .expect.element('@movieTitle').to.be.visible.before(5000)
        pageObjects
            .click('@addToCartBtn')
            .waitForElementPresent('@viewCart', 5000)
            browser.pause(5000)    

        pageObjects.click('@viewCart')
            .waitForElementVisible('@cartHeader', 15000)
        pageObjects          
            .click('@homeBtn') 
            .click('@shopBtn')
        .expect.element('@shopTitle').text.to.equal('Shop the Collection')
        pageObjects
            .click('@allFilms') 
            .expect.element('@shopAllTitle').text.to.equal('SHOP ALL FILMS') 
         pageObjects
            .click('@spine3')
            .expect.element('@movieTitle').to.be.visible.before(5000)
        pageObjects
            .click('@addToCartBtn')
            .waitForElementPresent('@viewCart', 5000)
            browser.pause(5000)        
            pageObjects.click('@viewCart')
            .waitForElementVisible('@cartHeader', 15000)
        pageObjects
            .clearValue('@cartQuantityInput')
            .setValue('@cartQuantityInput', '5')
            .click('@quantityUpdate')
            browser.pause(2500)
        pageObjects
            .clearValue('@cartQuantityInput')
            .setValue('@cartQuantityInput', '1')
            .click('@quantityUpdate')
            browser.pause(10000)
    },


    'Filters': browser => {
        let pageObjects = browser.page.pageObjects()
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
    },


    'logout check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@logoutBtn') 
            .waitForElementVisible('@homeHeader', 15000)  
        browser.pause(5000)        

    }


}