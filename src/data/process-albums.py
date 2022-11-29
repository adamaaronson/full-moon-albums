import csv
import json
import apiconfig
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client_credentials_manager = SpotifyClientCredentials(client_id=apiconfig.CLIENT_ID, client_secret=apiconfig.CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# use Spotify API to search "[artist] [album]" and get the album URL that way
def get_album_urls(artist, album):
    results = sp.search(f'{artist} {album}', type='album', limit=1)
    items = results['albums']['items']
    if len(items) == 0:
        return '', ''
    item = items[0]

    album_url = ''
    image_url = ''

    urls = item['external_urls']
    album_url = urls['spotify']

    images = item['images']
    if len(images) > 0:
        image_url = images[0]['url']
    
    return album_url, image_url    

edge_cases = {
    ('De La Soul', '3 Feet High and Rising'): {
        'album_url': '',
        'image_url': '3feethighandrising.jpg'
    }
} 

# read albums from spreadsheet CSV
with open('full-moon-albums.csv') as f:
    reader = csv.reader(f)
    albums = []
    for row in reader:
        album, artist, year, descriptors, song1, song2, date_added = row
        if album == 'Album' and artist == 'Artist':
            continue
        
        if (artist, album) in edge_cases:
            album_url, image_url = edge_cases[artist, album]['album_url'], edge_cases[artist, album]['image_url']
        else:
            album_url, image_url = get_album_urls(artist, album)

        albums.append({
            "title": album,
            "artist": artist,
            "year": year,
            "descriptors": descriptors.split(', '),
            "tracks": [song1, song2],
            "album_url": album_url,
            "image_url": image_url,
            "date_added": date_added
        })

# write albums to JSON
with open('full-moon-albums.json', 'w') as f:
    json.dump(albums, f, indent=4)