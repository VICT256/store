import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin, urlparse

def download_image(url, folder):
    if not os.path.exists(folder):
        os.makedirs(folder)
    
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        filename = os.path.join(folder, url.split("/")[-1])
        with open(filename, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
        print(f"Downloaded {url}")
    else:
        print(f"Failed to download {url}")

def scrape_images_from_page(url, folder="images"):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Download images from the page
    for img_tag in soup.find_all("img"):
        img_url = img_tag.get("src")
        if img_url:
            img_url = urljoin(url, img_url)
            download_image(img_url, folder)

    # Find and scrape images from linked pages
    for a_tag in soup.find_all("a", href=True):
        linked_url = urljoin(url, a_tag['href'])
        if is_same_domain(url, linked_url):
            scrape_images_from_page(linked_url, folder)

def is_same_domain(url1, url2):
    return urlparse(url1).netloc == urlparse(url2).netloc

# Example usage
start_url = "http://link.amexgiftcard.com/ss/c/u001.kTSTY7zjlQ0bjaV1_3uRVbBnp0V-JnStRYzBrtyfG3q66GObTTyxFTaaA7tMR2TLSuo9GXjj7Hho7GpPsNW8dOJk1gapuTVnMWAL9L3oIVTWXi3Cb2qoVWvsB4lEU8QU6HOBVW0A1sct-QfYl3s1_h85Pj8HAxpYM7n9n52mfx3GP4VAOUnJuz5Z7RRqKPC_RJTHU-xnaXuD5yLYtaCyxIehJUgNtAOLCHSvIOZSjhIuZOIjHVvEkh_KNK42zuGED3EVp63pp2et1PhHy3Tiuu_lrMFYN7PprGwmM1__jLXX39Pp-0ci9opB5GYusRyBBpJ6zTwYA__iwqIXTV_lwLW47IFLCOVy9_buPxHRpOnblmLe3FBjiFVLl3YZjfwHKidpxeKqrpJQH6_x8Kbo6Q/470/tNdDdlFUQa-WvRzAfWTV3w/h1/h001.4QGGjsVDV-IMKPtRUWbTV64SYRwednlU8WXdFETWX7E"
# start_url="https://venxis.com.ng"
scrape_images_from_page(start_url)
