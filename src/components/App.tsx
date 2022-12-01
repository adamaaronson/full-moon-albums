import { useState } from 'react'
import { AlbumGrid } from './AlbumGrid'
import "../css/App.scss"
import fullMoonAlbums from '../data/full-moon-albums.json';
import { Sort, getSortedAlbums, AlbumSorter, getFilterList, ALL_ALBUMS } from './AlbumSorter'
import { Header } from './Header';

function App() {
    const [albums, setAlbums] = useState(getSortedAlbums(fullMoonAlbums, Sort.RecentlyAdded))
    const [allAlbums] = useState(fullMoonAlbums)
    const [sort, setSort] = useState(Sort.RecentlyAdded)
    const [filter, setFilter] = useState(ALL_ALBUMS)
    const [filterList] = useState(getFilterList(fullMoonAlbums))

    const handleSortChange = (sort: Sort) => {
        setSort(sort)

        const newAlbums = getSortedAlbums(albums, sort)
        setAlbums([...newAlbums])
    }

    const handleFilterChange = (filter: string) => {
        setFilter(filter)

        let newAlbums = allAlbums
        if (filter !== ALL_ALBUMS) {
            newAlbums = allAlbums.filter(album => album.descriptors.includes(filter))
        }
        newAlbums = getSortedAlbums(newAlbums, sort)
        setAlbums([...newAlbums])
    }

    const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
        handleFilterChange((event.target as HTMLButtonElement).value)
    }

    return (
        <div className="app">
            <header className="app-header">
                <Header/>
            </header>
            <main className="app-body">
                <AlbumSorter
                    changeSort={handleSortChange}
                    changeFilter={handleFilterChange}
                    currentFilter={filter}
                    filterList={filterList}
                />
                <AlbumGrid
                    albums={albums}
                    onClickFilter={handleFilterClick}
                />
            </main>
        </div>
    )
}

export default App