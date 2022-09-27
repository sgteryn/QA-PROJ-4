import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('ability to login', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.findElement(By.id('user-name')).sendKeys('standard_user\n')
    await driver.findElement(By.id('password')).sendKeys('secret_sauce\n')
    await driver.findElement(By.xpath("//*[@id='login-button']")).click()
})

test('ability to get to Sauce Labs Backpack product page and see add cart btn', async () => {
    await driver.findElement(By.xpath("//*[contains(text(),'Sauce Labs Backpack')]")).click()
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Add to cart')]")))
    
    let addCartBtn = await driver.findElement(By.xpath("//*[contains(text(),'Add to cart')]"))

    await driver.get('https://www.saucedemo.com/inventory.html')
   
    expect(addCartBtn).toBeTruthy()
})

test('add Sauce labs backpack to cart', async () => {
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Sauce Labs Backpack')]"))).click()
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Add to cart')]"))).click()
    return await driver.get('https://www.saucedemo.com/inventory.html')
})


test('ability to get to Sauce Labs Bike Light product page and see add cart btn', async () => {
    await driver.findElement(By.xpath("//*[contains(text(),'Sauce Labs Bike Light')]")).click()
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Add to cart')]")))
    
    let addCartBtn = await driver.findElement(By.xpath("//*[contains(text(),'Add to cart')]"))

    await driver.get('https://www.saucedemo.com/inventory.html')
   
    expect(addCartBtn).toBeTruthy()
})

test('add Sauce labs Bike Light to cart', async () => {
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Sauce Labs Bike Light')]"))).click()
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Add to cart')]"))).click()
    return await driver.get('https://www.saucedemo.com/inventory.html')
})

test('basket contains two items in cart', async () => {
    await driver.wait(until.elementLocated(By.css("span[class='shopping_cart_badge']")))
    let twoInCart = await driver.findElement(By.css("span[class='shopping_cart_badge']")).getText()
   
    expect(twoInCart).toBe('2')
})

test('basket contains three items in cart', async () => {
    await driver.wait(until.elementLocated(By.css('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]'))).click()
    await driver.wait(until.elementLocated(By.css("span[class='shopping_cart_badge']")))
    let threeInCart = await driver.findElement(By.css("span[class='shopping_cart_badge']")).getText()
   
    expect(threeInCart).toBe('3')
})

test('sauce lab shirt removed from cart and only backpack and bike light remain', async () => {
    await driver.findElement(By.css("a[class='shopping_cart_link']")).click()
    await driver.findElement(By.css('button[name="remove-sauce-labs-t-shirt"]')).click()
    let cart = await driver.findElement(By.css("div[class='cart_list']")).getText()
   
    expect(cart).toContain('Sauce Labs Bike Light')
    expect(cart).toContain('Sauce Labs Backpack')
})

test('click continue shopping, remove bike light from inventory page, navigate to cart Page and verify only backpack remains in cart', async () => {
    await driver.findElement(By.css("button[id='continue-shopping']")).click()
    await driver.findElement(By.css('button[id="remove-sauce-labs-bike-light"]')).click()
    await driver.findElement(By.css("a[class='shopping_cart_link']")).click()
    let cart = await driver.findElement(By.css("div[class='cart_list']")).getText()
   
    expect(cart).toContain('Sauce Labs Backpack')
})

test('click checkout page, at chekout page', async () => {
    await driver.findElement(By.css('button[id="checkout"]')).click()
   let pageTitle = await driver.findElement(By.css("span[class='title']")).getText()
        
        expect(pageTitle).toBe('Checkout: Your Information')
})

test('Locate First Name, Last Name and Postal Code text box elements and verify that they are present on the page', async () => {
    await driver.wait(until.elementLocated(By.id("first-name")))
    await driver.wait(until.elementLocated(By.id("last-name")))
    await driver.wait(until.elementLocated(By.id("postal-code")))
    let firstNameBox = await driver.findElement(By.id("first-name"))
    let lastNameBox = await driver.findElement(By.id("last-name"))
    let postalCodeBox = await driver.findElement(By.id("postal-code"))
        
        expect(firstNameBox && lastNameBox && postalCodeBox).toBeTruthy()
})

test('provide users information', async () => {
    await driver.findElement(By.id("first-name")).sendKeys('John\n')
    await driver.findElement(By.id("last-name")).sendKeys('Jingleheimerschmidt\n')
    await driver.findElement(By.id("postal-code")).sendKeys('48233\n')
    await driver.findElement(By.id("continue")).click()
})

afterAll(async () => {
    await driver.quit()
})