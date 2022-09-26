import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

export class loginPage {
    pDriver: WebDriver; 
    url: string = 'https://www.saucedemo.com'

    loginBtn = driver.findElement(By.xpath("//*[@id='login-button']"))

    usernameTextBox = driver.findElement(By.css("input[name='user-name']"))

    passwordTextBox = driver.findElement(By.css("input[name='password']"))

    constructor(pDriver: WebDriver, url: string) {
        this.pDriver = pDriver 
        this.url = url 
    }
    async navigate() {
        await this.pDriver.get(this.url)
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.pDriver.wait(until.elementLocated(elementBy))
        let element = await this.pDriver.findElement(elementBy)
        await this.pDriver.wait(until.elementIsVisible(element))
        return element
    } async setInput(elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }
    async sendKeys(elementBy: By, keys) {
      await this.pDriver.wait(until.elementLocated(elementBy))
      return driver.findElement(elementBy).sendKeys(keys)
    }
// async getText(elementBy: By) {
//     await this.pDriver.wait(until.elementLocated(elementBy))
//     return this.pDriver.findElement(elementBy).getText()
// }

}
