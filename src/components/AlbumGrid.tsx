import { AlbumCard, AlbumCardProps } from './AlbumCard';
import { Album } from './Album';
import '../css/AlbumGrid.scss';
import { motion } from 'framer-motion';

export interface AlbumGridProps {
    albums: Album[];
    onClickFilter: React.MouseEventHandler<HTMLButtonElement>;
    ranked?: boolean;
}

export function AlbumGrid({
    albums,
    onClickFilter,
    ranked = false,
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
                        album={album}
                        onClickFilter={onClickFilter}
                    />
                </motion.div>
            ))}
        </div>
    );
}
