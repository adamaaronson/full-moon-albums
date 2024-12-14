import { useEffect } from 'react';
import fullMoonAlbums from '../../data/full-moon-albums.json';
import { AlbumGrid } from '../AlbumGrid';
import '../../css/BestOf.scss';

export default function BestAlbumsOf2024() {
    useEffect(() => {
        document.title = 'Best Albums of 2024';
    }, []);
    return (
        <div className="best-albums-of-year">
            <header className="best-albums-header">
                <div className="best-albums-header-contents">
                    <h1 className="best-albums-title">
                        Best Albums of&nbsp;2024
                    </h1>
                    <h2 className="best-albums-byline">
                        by <a href="https://aaronson.org">Adam Aaronson</a>
                    </h2>
                    <p className="best-albums-description">
                        I listened to over 250 albums that came out this year,
                        and these are my&nbsp;favorites.
                        For&nbsp;my&nbsp;favorite albums of all time, check out{' '}
                        <a href="/">Full Moon Albums</a>!
                    </p>
                </div>
            </header>
            <main className="best-albums-body">
                <AlbumGrid
                    ranked
                    albums={fullMoonAlbums}
                    onClickFilter={() => {}}
                />
            </main>
        </div>
    );
}
