import {Builder, By, Capabilities, WebDriver, until, WebElement} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('login button is present', async () => {
    await driver.findElement(By.xpath("//*[@id='login-button']")).then(function(WebElement) {
        console.log('present');
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('Element not found');
             }
            });
        let loginBtn = driver.findElement(By.xpath("//*[@id='login-button']"))
    expect(loginBtn).toBe('present')
})

test('username textbox is present', async () => {
    await driver.findElement(By.css("input[name='user-name']")).then(function(WebElement) {
        console.log('present');
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('Element not found');
             }
            });
        let usernameTextBox = driver.findElement(By.css("input[name='user-name']"))
    expect(usernameTextBox).toBe('present')
})

test('password textbox is present', async () => {
    await driver.findElement(By.css("input[name='password']")).then(function(WebElement) {
        console.log('present');
        }, function(err) {
            if (err.state && err.state === 'no such element') {
                console.log('Element not found');
             }
            });
          let  passwordTextBox = driver.findElement(By.css("input[name='password']"))
    expect(passwordTextBox).toBe('present')
})

test('ability to login', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.findElement(By.css("input[name='user-name']")).sendKeys('standard_user\n')
    await driver.findElement(By.css("input[name='password']")).sendKeys('secret_sauce\n')
    await driver.findElement(By.xpath("//*[@id='login-button']")).click()
    let loggedIn = driver.findElement(By.xpath("//*[@id='login-button']")).click()
    expect(loggedIn).toBe(true)
})


test('user at inventory after logging in', async () => {
    await driver.get('https://www.saucedemo.com')
    await driver.findElement(By.css("input[name='user-name']")).sendKeys('standard_user\n')
    await driver.findElement(By.css("input[name='password']")).sendKeys('secret_sauce\n')
    await driver.findElement(By.xpath("//*[@id='login-button']")).click()
    let loggedIn = driver.findElement(By.xpath("//*[@id='login-button']")).click()

    expect(loggedIn).toBe(true)
})

afterAll(async () => {
    await driver.quit()
})
