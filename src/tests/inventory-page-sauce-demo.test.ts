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

afterAll(async () => {
    await driver.quit()
})