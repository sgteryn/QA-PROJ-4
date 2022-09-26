import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('login button is present', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.wait(until.elementLocated(By.xpath("//*[@id='login-button']")))
   var loginExists = driver.findElement(By.xpath("//*[@id='login-button']")); 
    
    //     let value = await driver.findElement(By.xpath("//*[@id='login-button']")).getText()
    // let value = driver.wait(until.elementLocated(By.xpath("//*[@id='login-button']")),20000)
    // .then(()=>{
    //      return driver.findElement(By.xpath("//*[@id='login-button']"));
    // }).then((element)=>{
    //      // Perform any operation what you to do.
    //      console.log('Element exists');
    // }).catch(()=>{
    //        console.log('Element not found');
    // })
     expect(loginExists).toBeTruthy()
})

test('username textbox is present', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.wait(until.elementLocated(By.id('user-name')))
        let usernameTextBoxExists = await driver.findElement(By.id('user-name'))
    expect(usernameTextBoxExists).toBeTruthy()
})

test('password textbox is present', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.wait(until.elementLocated(By.id('password')))
        let passwordTextBoxExists = await driver.findElement(By.id('password'))
        expect(passwordTextBoxExists).toBeTruthy()
})

test('ability to login', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.findElement(By.id('user-name')).sendKeys('standard_user\n')
    await driver.findElement(By.id('password')).sendKeys('secret_sauce\n')
    await driver.findElement(By.xpath("//*[@id='login-button']")).click()
    let loggedIn = driver.findElement(By.xpath("//*[@id='login-button']")).click()
    expect(loggedIn).toBeTruthy()
})


test('user at inventory after logging in', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.findElement(By.css("input[name='user-name']")).sendKeys('standard_user\n')
    await driver.findElement(By.css("input[name='password']")).sendKeys('secret_sauce\n')
    await driver.findElement(By.id("login-button")).click()
    function loggedInAtInventoryPage() {
        let loggedIn = driver.findElement(By.id("login-button")).click()
        let atInventoryPage = driver.get('https://www.saucedemo.com/inventory.html')
    if(loggedIn === atInventoryPage) {
        console.log(true)
    }} 
    expect(loggedInAtInventoryPage).toBeTruthy()

})

afterAll(async () => {
    await driver.quit()
})
