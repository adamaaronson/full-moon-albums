import albums from '../data/full-moon-albums.json';
import { AlbumCard } from './AlbumCard';

export function AlbumGrid() {
    return <div>{ 
        albums.map(album => AlbumCard(album))
    }</div>
}