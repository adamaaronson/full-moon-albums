import React from "react"
import { Album } from "./Album"

export enum Sort {
    RecentlyAdded,
    OldestToNewest,
    NewestToOldest,
    AlbumName,
    ArtistName
}

export function getSortedAlbums(albums: Album[], sort: Sort): Album[] {
    switch (sort) {
        case Sort.RecentlyAdded:
            return albums.sort((a: Album, b: Album) => b.date_added.localeCompare(a.date_added))
        case Sort.OldestToNewest:
            return albums.sort((a: Album, b: Album) => parseInt(a.year) - parseInt(b.year))
        case Sort.NewestToOldest:
            return albums.sort((a: Album, b: Album) => parseInt(b.year) - parseInt(a.year))
        case Sort.AlbumName:
            return albums.sort((a: Album, b: Album) => a.title.localeCompare(b.title))
        case Sort.ArtistName:
            return albums.sort((a: Album, b: Album) => a.artist.localeCompare(b.artist))
    }
}

export interface AlbumSorterProps {
    changeSort: (sort: Sort) => void
}

export function AlbumSorter({ changeSort }: AlbumSorterProps) {
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeSort(parseInt(event.target.value))
    }

    return <div className="album-sorter">
        <select id="album-sorter-select" onChange={onChange} defaultValue="0">
            <option value={Sort.RecentlyAdded}>Recently added</option>
            <option value={Sort.OldestToNewest}>Oldest to newest</option>
            <option value={Sort.NewestToOldest}>Newest to oldest</option>
            <option value={Sort.AlbumName}>Album name</option>
            <option value={Sort.ArtistName}>Artist name</option>
        </select>
    </div>
}