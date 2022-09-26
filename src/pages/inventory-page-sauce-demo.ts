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

  