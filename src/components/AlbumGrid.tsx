import { AlbumCard } from './AlbumCard';
import { Album } from './Album';
import '../css/AlbumGrid.scss';
import { motion } from 'framer-motion';

export interface AlbumGridProps {
    albums: Album[];
    onClickFilter: React.MouseEventHandler<HTMLButtonElement>;
    ranked?: boolean;
    hideYear?: boolean;
}

export function AlbumGrid({
    albums,
    onClickFilter,
    ranked = false,
    hideYear = false,
}: AlbumGridProps) {
    return (
        <div className="album-grid">
            {albums.map((album) => (
                <motion.div
                    layout
                    key={album.title}
                    className="album-card-wrapper"
                >
                    <AlbumCard
                        ranked={ranked}
                        hideYear={hideYear}
                        album={album}
                        onClickFilter={onClickFilter}
                    />
                </motion.div>
            ))}
        </div>
    );
}
