import csv
import json
import apiconfig
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

edge_cases = {
    ('Slum Village', 'Fantastic, Vol.\u00a02'): {
        'album_url': 'https://open.spotify.com/album/22IhsI5JpldSrE7vhidAja',
        'image_url': 'https://i.scdn.co/image/ab67616d0000b2733999c60eca1a87fd7e7868bc'
    },
    ('Todd Edwards', 'Prima Edizione'): {
        'album_url': 'https://open.spotify.com/album/6SRbCAQ1zu2r47Bi771rAs',
        'image_url': 'primaedizione.jpg'
    },
} 

non_breaking_strings = (
    ('Vol. ', 'Vol.\u00A0'),
    ('Brasil \'66', 'Brasil\u00A0\'66')
)

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

            for from_string, to_string in non_breaking_strings:
                album = album.replace(from_string, to_string)
                artist = artist.replace(from_string, to_string)

            if album == 'Album' and artist == 'Artist':
                continue
                
            if (artist, album) in albums_in_json:
                album_url = albums_in_json[artist, album]['album_url']
                image_url = albums_in_json[artist, album]['image_url']
            elif (artist, album) in edge_cases:
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

def write_albums_to_json(albums, json_file):
    """
    Write album data to JSON file.
    """
    with open(json_file, 'w') as f:
        json.dump(albums, f, indent=4)


if __name__ == '__main__':
    albums = read_albums_from_csv('full-moon-albums.csv', 'full-moon-albums.json')
    write_albums_to_json(albums, 'full-moon-albums.json')