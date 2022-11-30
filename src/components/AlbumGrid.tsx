import { AlbumCard, AlbumCardProps } from './AlbumCard';
import { Album } from './Album';
import "../css/AlbumGrid.scss"
import { motion } from 'framer-motion';

export interface AlbumGridProps {
    albums: Album[],
    onClickFilter: React.MouseEventHandler<HTMLButtonElement>
}

export function AlbumGrid({ albums, onClickFilter }: AlbumGridProps) {
    return <div className="album-grid">
        {albums.map(album => 
            <motion.div layout key={album.title} className="album-card-wrapper">
                <AlbumCard album={album} onClickFilter={onClickFilter} />
            </motion.div>
        )}
    </div>
}