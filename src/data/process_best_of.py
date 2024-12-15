from process_albums import read_albums_from_csv, write_albums_to_json

CSV = 'best-of/best-albums-of-2024.csv'
JSON = 'best-of/best-albums-of-2024.json'

if __name__ == '__main__':
    albums = read_albums_from_csv(CSV, JSON)
    write_albums_to_json(albums, JSON)