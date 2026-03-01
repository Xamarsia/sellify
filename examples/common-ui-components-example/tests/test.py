from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def test_eight_components():
    driver = setup()

    title = driver.title
    assert title == "Common ui components library"

    teardown(driver)

def setup():
    chrome_options = Options()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.accept_insecure_certs = True

    driver = webdriver.Chrome(
        options=chrome_options,
    )
    driver.get("http://localhost:3000/")
    return driver


def teardown(driver):
    driver.quit()
