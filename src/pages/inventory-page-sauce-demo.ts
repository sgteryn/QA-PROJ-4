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

export class inventoryPage {
    driver: WebDriver; 
    url: string = 'https://www.saucedemo.com/inventory.html'
    
    backpack: By = By.xpath("//*[contains(text(),'Sauce Labs Backpack')]")
    bikeLight: By = By.xpath("//*[contains(text(),'Sauce Labs Bike Light')]")
    fleeceJacket: By = By.xpath("//*[contains(text(),'Sauce Labs Fleece Jacket')]")

    basket:  By = By.xpath("//*[@id='shopping_cart_container']/a")

    constructor(driver: WebDriver, url: string) {
        this.driver = driver 
        this.url = url 
    }

    async navigate() {
        await this.driver.get(this.url)
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    } async setInput(elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }
    async sendKeys(elementBy: By, keys) {
      await this.driver.wait(until.elementLocated(elementBy))
      return driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy: By) {
       await this.driver.wait(until.elementLocated(elementBy))
       return this.driver.findElement(elementBy).getText()
}


}