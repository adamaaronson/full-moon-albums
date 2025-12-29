export interface Album {
    title: string;
    artist: string;
    year: string;
    descriptors: Array<string>;
    tracks: Array<string>;
    album_url: string;
    image_url: string;
    date_added: string;
    rank?: string;
    country?: string;
}
