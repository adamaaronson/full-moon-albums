import { useEffect } from 'react';
import bestAlbumsOf2024 from '../../data/best-of/best-albums-of-2024.json';
import { AlbumGrid } from '../AlbumGrid';
import '../../css/BestOf.scss';
import { Album } from '../Album';

export default function BestAlbumsOf2024() {
    useEffect(() => {
        document.title = 'Best Albums of 2024';
    }, []);

    return (
        <div className="app best-albums-of-year">
            <div className="pattern"></div>
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
                        <a href="/full-moon-albums/">Full Moon Albums</a>!
                    </p>
                </div>
            </header>
            <main className="best-albums-body">
                <AlbumGrid
                    ranked
                    hideYear
                    albums={bestAlbumsOf2024.map(
                        (album: Album, index: number) => ({
                            rank: (index + 1).toString(),
                            ...album,
                        })
                    )}
                    onClickFilter={() => {}}
                />
            </main>
        </div>
    );
}
