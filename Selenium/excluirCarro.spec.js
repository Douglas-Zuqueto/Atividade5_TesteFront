// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Excluir_Carro', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Excluir_Carro', async function() {
    await driver.get("https://cadastrocars.vercel.app/")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.css(".carItem:nth-child(2) .pointButton")).click()
    await driver.findElement(By.css(".pointWindowBtn:nth-child(2)")).click()
    assert(await driver.switchTo().alert().getText() == "Tem certeza que deseja excluir?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css(".carItem:nth-child(3) > .options")).click()
    await driver.findElement(By.css(".carItem:nth-child(3) .pointButton")).click()
    await driver.findElement(By.css(".pointWindowBtn:nth-child(2)")).click()
    assert(await driver.switchTo().alert().getText() == "Tem certeza que deseja excluir?")
    await driver.switchTo().alert().accept()
  })
})
