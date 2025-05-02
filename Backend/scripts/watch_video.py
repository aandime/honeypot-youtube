# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.chrome.options import Options
# from webdriver_manager.chrome import ChromeDriverManager
# import time

# chrome_options = Options()
# chrome_options.add_argument("--disable-infobars")
# chrome_options.add_argument("--mute-audio")
# chrome_options.add_argument("--start-maximized")
# service = Service(ChromeDriverManager().install())
# driver  = webdriver.Chrome(service=service, options=chrome_options)

# try:
#     video_url = ""
#     driver.get(video_url)
#     time.sleep(5)
# finally:
#     driver.quit()

import time
from datetime import datetime
import itertools

INTERVAL = 0.10 

CLICK_EVENTS = [
    "clicked on video",
    "clicked on home",
]

def main():
    event_cycle = itertools.cycle(CLICK_EVENTS)
    tick = 0
    try:
        while True:
            now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            event = next(event_cycle)
            print(f"[{now}] {event}")
            tick += 1
            time.sleep(INTERVAL)
    except KeyboardInterrupt:
        print("clicker session ended.")

if __name__ == "__main__":
    main()
