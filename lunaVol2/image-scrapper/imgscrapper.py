from requests import get
from bs4 import BeautifulSoup

base_url = "https://weworkremotely.com/remote-jobs/search?term="
search_trem = "python"

# f-string
response = get(f"{base_url}{search_trem}")

if response.status_code != 200:
    print("Cant`t request")
else:
    soup = BeautifulSoup(response.text, "html.parser")
    print(soup.find_all('title'))
