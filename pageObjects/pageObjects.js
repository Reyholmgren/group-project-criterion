module.exports = {
    url: 'https://cards-beta.devclock.com/',
    elements: {
        'shopBtn' : 'a[href="https://www.criterion.com/shop"]',
        'allFilms' : 'h3[class="header_lvl2 tussock"]',
        'spine1':{
            selector:'(//tr[@class="gridFilm is-initialized"])[1]',
            locateStrategy:'xpath'
        },
        'spine2':{
            selector:'(//td[@class="g-spine"])[2]',
            locateStrategy:'xpath'
        },
        'spine3':{
            selector:'(//td[@class="g-spine"])[3]',
            locateStrategy:'xpath'
        },
        'spine4':{
            selector:'(//td[@class="g-spine"])[4]',
            locateStrategy:'xpath'
        },
        'outOfPrintWishList' : 'button[type="button"]',
        //'button[class="button__secondary"]',
        'homeBtn' : 'a[class="homelink"]',
        'shopTitle' : 'h1[class="header__primarytitlealt "]',
        'shopAllTitle' : 'h1[class="header__primary__gothamnarrowbold header-shop-all"]',
        'movieTitle' : 'h1[class="header__primarytitle"]',
        'accountHeader' : 'h1[class="myaccount__header_title"]',
        'menuBtn' : 'svg[class="burger"]',
        'yourAccount':{
            selector: '(//a[@href="https://www.criterion.com/account"])[2]',
            locateStrategy:'xpath'
        },
        'emailIn' : 'input[name="email"]',
        'passwordIn' : 'input[name="password"]',
        'signIn' : 'button[type="submit"]',
        'sideBar' : 'div[class="global-nav__sidebar"]',
        'signInPage' : 'div[class="content"]',
        'wishListBtn' : 'button[class="button__secondary"]'
    }
}