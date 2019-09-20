const webdriver = require('selenium-webdriver');
const { Builder, By, until, Key } = require("selenium-webdriver");

describe("Google Search", function() {
  let driver;

  before(async function() {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
  });

  after(async function() {
  });

  it("searchCheese", async function() {
    await driver.get("https://google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("Cheese", Key.RETURN);
    await driver.wait(until.titleIs("Cheese - Google Search"));
  });

  it.only("fontTest", async function() {
    await driver.get("https://google.com/ncr");
    let fontSize = await driver.findElement(By.name('btnK')).getCssValue('font-size');
    let color = await driver.findElement(By.name('btnK')).getCssValue('color');
    console.group('fontTest');
    console.log(fontSize);
    console.log(color);
  });
});
