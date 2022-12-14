import csv
import json
import apiconfig
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

edge_cases = {
    ('De La Soul', '3 Feet High and Rising'): {
        'album_url': '',
        'image_url': '3feethighandrising.jpg'
    },
    ('Slum Village', 'Fantastic, Vol. 2'): {
        'album_url': 'https://open.spotify.com/album/22IhsI5JpldSrE7vhidAja',
        'image_url': 'https://i.scdn.co/image/ab67616d0000b2733999c60eca1a87fd7e7868bc'
    }
} 

client_credentials_manager = SpotifyClientCredentials(client_id=apiconfig.CLIENT_ID, client_secret=apiconfig.CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def get_album_urls(artist, album):
    """ 
    Use Spotify API to search "[artist] [album]" and return the album URL and image URL
    """
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

def read_albums_from_csv(csv_file, json_file=None):
    """
    Read albums from CSV file, optionally preserving the data from the JSON file
    """
    if json_file:
        with open(json_file, 'r') as f:
            json_data = json.load(f)
            albums_in_json = {}
            for album in json_data:
                albums_in_json[album["artist"], album["title"]] = album
    
    with open(csv_file) as f:
        reader = csv.reader(f)
        albums = []
        for row in reader:
            album, artist, year, descriptors, song1, song2, date_added = row

            if (artist, album) in albums_in_json:
                albums.append(albums_in_json[artist, album])
                continue

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
    
    return albums

albums = read_albums_from_csv('full-moon-albums.csv', 'full-moon-albums.json')

# write albums to JSON
with open('full-moon-albums.json', 'w') as f:
    json.dump(albums, f, indent=4)