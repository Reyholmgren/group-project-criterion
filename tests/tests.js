module.exports = {
    beforeEach : browser => {
        browser.url('https://www.criterion.com/')
   
    },

    after : browser => {
        browser.end()
    },

    //login check. CRIT-8 Rey
    'login check': browser => {
        let pageObjects = browser.page.pageObjects()
        browser.url('https://www.criterion.com/account')
        pageObjects
        .setValue('@emailIn', 'devmountainqa6@gmail.com')
        .setValue('@passwordIn', 'DevMountain')
        .click('@signIn')    
        .expect.element('@accountHeader').to.be.visible.before(20000)    

    },
    
    // //CRIT-3 Rey
    'wishlist add check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects
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
            .expect.element('@accountHeader').to.be.visible.before(20000)    
        
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
            .expect.element('@movieTitle').to.be.visible.before(20000)
        pageObjects 
            .click('@wishListBtn') 
            .expect.element('@accountHeader').to.be.visible.before(20000) 
        
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
    // CRIT-4 Rey
    'wishlist remove check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@accountWishList')
            .expect.element('@wishListRemove1').to.be.visible.before(5000)
        pageObjects
            .click('@wishListRemove1')
            .waitForElementNotPresent('@spine4', 5000)
            .click('@wishListRemove2') 
            .waitForElementNotPresent('@spine3', 5000)
            .click('@wishListRemove3') 
            .waitForElementNotPresent('@spine4', 5000)
            .click('@wishListRemove4')
            .waitForElementNotPresent('@spine1', 5000)
            .click('@accountWishList')

    },
    //CRIT-6 Rey
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
        pageObjects
            .waitForElementVisible('@year1921', 20000)          

    },
    //CRIT-7 Rey
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
        pageObjects
            .waitForElementVisible('@directorAkerman', 20000)          

    },
    //CRIT-10 Rey
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

        .waitForElementPresent('@addToCartBtn', 20000)
        pageObjects.click('@addToCartBtn')
        browser.pause(1000) //it wouldn't run without this pause, the site is too slow!
        // pageObjects.click('@viewCart')
        browser.url('https://www.criterion.com/shop/cart')
     //CRIT-11 Rey
        pageObjects
        // .waitForElementVisible('@cartHeader', 20000)
            .waitForElementVisible('@cartQuantityInput', 20000)
            .clearValue('@cartQuantityInput')
            .setValue('@cartQuantityInput', '5')
            .click('@quantityUpdate')
            .expect.element('@freeShipping').text.to.contain('Your order qualifies for free shipping**.', 20000) 
            
        pageObjects
            .clearValue('@cartQuantityInput')
            .setValue('@cartQuantityInput', '1')
            .click('@quantityUpdate')
            .waitForElementPresent('@quantity1', 20000)
            .expect.element('@freeShipping').text.to.contain('Spend $10.03 more to qualify for free shipping**', 20000) 


    },

    //CRIT-5 Erik
    'Filters': browser => {
        let pageObjects = browser.page.pageObjects()
        // Setting preconditions
        browser.url('https://www.criterion.com/shop/browse/list?sort=spine_number')
        //    Avant-Garde Filter
        pageObjects
            .click('@filterButton')
            .click('@avantGarde')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Grand Illusion"]', 10000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("9 RESULTS")
        // Wes Anderson Filter
        pageObjects
            .click('@filterButton')
            .click('@resetButton')
            .click('@wesAnderson')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Eraserhead"', 10000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("8 RESULTS")
        // OOP Filter
        pageObjects
            .click('@filterButton')
            .click('@resetButton')
            .click('@OOP')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Rushmore"', 10000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("108 RESULTS")
        // OOP Bluray only Filter
        pageObjects
            .click('@filterButton')
            .click('@bluray')
            .click('@applyButton')
            .waitForElementNotPresent('img[alt="Grand Illusion"]', 10000)
        pageObjects
            .expect.element('@resultsNumber').text.to.equal("9 RESULTS")
    },

    //CRIT-9 Rey
    'logout check': browser => {
        let pageObjects = browser.page.pageObjects()
        pageObjects          
            .click('@logoutBtn') 
            .waitForElementVisible('@homeHeader', 20000)  

    }


}