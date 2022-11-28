import csv
import json

with open('full-moon-albums.csv') as f:
    reader = csv.reader(f)
    albums = []
    for row in reader:
        album, artist, year, descriptors, song1, song2 = row
        if album == 'Album' and artist == 'Artist':
            continue
        albums.append({
            "title": album,
            "artist": artist,
            "year": year,
            "descriptors": descriptors.split(', '),
            "songs": [song1, song2]
        })

with open('full-moon-albums.json', 'w') as f:
    json.dump(albums, f, indent=4)