import os
import requests

def download_file(url, save_dir, filename=None):
    # Ensure the save directory exists
    os.makedirs(save_dir, exist_ok=True)
    
    # Get the file name from the URL if not provided
    if not filename:
        filename = os.path.basename(url)
    
    # Full path for saving the file
    file_path = os.path.join(save_dir, filename)
    
    try:
        # Send a GET request to the URL
        response = requests.get(url, stream=True)
        response.raise_for_status()  # Check for request errors
        
        # Write the content to the file in chunks
        with open(file_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
                
        print(f"Downloaded file saved to {file_path}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download file: {e}")

# Example usage
url = "http://link.amexgiftcard.com/ss/c/u001.kTSTY7zjlQ0bjaV1_3uRVbBnp0V-JnStRYzBrtyfG3q66GObTTyxFTaaA7tMR2TLSuo9GXjj7Hho7GpPsNW8dOJk1gapuTVnMWAL9L3oIVTWXi3Cb2qoVWvsB4lEU8QU6HOBVW0A1sct-QfYl3s1_h85Pj8HAxpYM7n9n52mfx3GP4VAOUnJuz5Z7RRqKPC_RJTHU-xnaXuD5yLYtaCyxIehJUgNtAOLCHSvIOZSjhIuZOIjHVvEkh_KNK42zuGED3EVp63pp2et1PhHy3Tiuu_lrMFYN7PprGwmM1__jLXX39Pp-0ci9opB5GYusRyBBpJ6zTwYA__iwqIXTV_lwLW47IFLCOVy9_buPxHRpOnblmLe3FBjiFVLl3YZjfwHKidpxeKqrpJQH6_x8Kbo6Q/470/tNdDdlFUQa-WvRzAfWTV3w/h1/h001.4QGGjsVDV-IMKPtRUWbTV64SYRwednlU8WXdFETWX7E"
save_dir = './downloads'
# filename = 'downloaded_file.txt'  # Optional, can be omitted

download_file(url, save_dir)
