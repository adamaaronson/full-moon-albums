import { AlbumCard } from './AlbumCard';
import { Album } from './Album';
import "../css/AlbumGrid.scss"

export interface AlbumSorterProps {
    albums: Album[]
}

export function AlbumGrid({ albums }: AlbumSorterProps) {
    return <div className="album-grid">{ 
        albums.map(album => AlbumCard(album))
    }</div>
}