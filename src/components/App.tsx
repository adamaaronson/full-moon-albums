import { useEffect, useState } from 'react'
import { AlbumGrid } from './AlbumGrid'
import "../css/App.scss"
import fullMoonAlbums from '../data/full-moon-albums.json';
import { Sort, getSortedAlbums, AlbumSorter, AlbumSorterProps } from './AlbumSorter'

function App() {
    const [albums, setAlbums] = useState(getSortedAlbums(fullMoonAlbums, Sort.RecentlyAdded))


    const handleSortChange = (sort: Sort) => {
        const newAlbums = getSortedAlbums(albums, sort)
        setAlbums([...newAlbums])
    }

    return (
        <div className="app">
            <h1 className="app-header">
                Full Moon Albums
            </h1>
            <main className="app-body">
                <AlbumSorter changeSort={handleSortChange} />
                <AlbumGrid albums={albums} />
            </main>
        </div>
    )
}

export default App