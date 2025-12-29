import sys
from process_albums import read_albums_from_csv, write_albums_to_json


if __name__ == '__main__':
    if len(sys.argv) < 2:
        raise ValueError('No year provided')

    year = sys.argv[1]

    csv = f'best-of/best-albums-of-{year}.csv'
    json = f'best-of/best-albums-of-{year}.json'

    albums = read_albums_from_csv(csv, json)
    write_albums_to_json(albums, json)
