import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
  } from "selenium-webdriver";
import { titleIs } from "selenium-webdriver/lib/until";

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  export class cartPage {
    driver: WebDriver; 
    url: string = 'https://www.saucedemo.com/checkout-step-one.html'


    async navigateToCartPage(elementBy: By){
        await driver.get('https://www.saucedemo.com')
        await driver.findElement(By.id('user-name')).sendKeys('standard_user\n')
        await driver.findElement(By.id('password')).sendKeys('secret_sauce\n')
        await driver.findElement(By.xpath("//*[@id='login-button']")).click()
        await driver.findElement(By.css("a[class='shopping_cart_link']")).click()
        let pageTitle = await driver.findElement(By.css("span[class='title']")).getText()
        
        expect(pageTitle).toBe('Your Cart')
    }   
}


