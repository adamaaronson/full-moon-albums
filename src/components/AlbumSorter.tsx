import React, { useState } from "react"
import { Album } from "./Album"
import "../css/AlbumSorter.scss"
import { capitalizeFirstLetter } from "./AlbumCard";

export enum Sort {
    RecentlyAdded,
    OldestToNewest,
    NewestToOldest,
    AlbumName,
    ArtistName,
    Random
}

// https://stackoverflow.com/questions/34347008/how-can-i-sort-a-javascript-array-while-ignoring-articles-a-an-the
function titleComparator(a: string, b: string) {
    var articles = ['a', 'an', 'the'],
        re = new RegExp('^(?:(' + articles.join('|') + ') )(.*)$'), // e.g. /^(?:(foo|bar) )(.*)$/
        replacer = function ($0: string, $1: string, $2: string) {
            return $2 + ', ' + $1;
        };
    a = a.toLowerCase().replace(re, replacer);
    b = b.toLowerCase().replace(re, replacer);
    return a.localeCompare(b);
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array: Array<any>) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function getSortedAlbums(albums: Album[], sort: Sort): Album[] {
    switch (sort) {
        case Sort.RecentlyAdded:
            return albums.sort((a: Album, b: Album) => b.date_added.localeCompare(a.date_added))
        case Sort.OldestToNewest:
            return albums.sort((a: Album, b: Album) => a.year.localeCompare(b.year))
        case Sort.NewestToOldest:
            return albums.sort((a: Album, b: Album) => b.year.localeCompare(a.year))
        case Sort.AlbumName:
            return albums.sort((a: Album, b: Album) => titleComparator(a.title, b.title))
        case Sort.ArtistName:
            return albums.sort((a: Album, b: Album) => titleComparator(a.artist, b.artist))
        case Sort.Random:
            return shuffle(albums)
    }
}

export const ALL_ALBUMS = "All"

export interface Filter {
    name: string,
    count: number
}

export function getFilterList(albums: Album[]) {
    let filters: { [key: string]: number } = {}
    for (let album of albums) {
        for (let descriptor of album.descriptors) {
            if (descriptor in filters) {
                filters[descriptor] += 1
            } else {
                filters[descriptor] = 1
            }
        }
    }

    let filterList: Filter[] = []
    for (let filter of Object.keys(filters)) {
        filterList.push({
            name: filter,
            count: filters[filter]
        })
    }
    filterList.push({
        name: ALL_ALBUMS,
        count: albums.length
    })

    filterList.sort((a: Filter, b: Filter) => a.name.localeCompare(b.name))
    filterList.sort((a: Filter, b: Filter) => b.count - a.count)

    return filterList
}

export interface AlbumSorterProps {
    changeSort: (sort: Sort) => void,
    changeFilter: (filterName: string) => void,
    currentFilter: string,
    filterList: Filter[]
}

export function AlbumSorter({ changeSort, changeFilter, currentFilter, filterList }: AlbumSorterProps) {
    const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeSort(parseInt(event.target.value))
    }

    const onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeFilter(event.target.value)
    }

    return <div className="album-sorter">
        <div className="sort-by">
            <label htmlFor="album-sorter-select" className="nice-select-label">Sort by:</label>
            <select id="album-sorter-select" className="nice-select" onChange={onChangeSort} defaultValue="0">
                <option value={Sort.RecentlyAdded}>Recently added</option>
                <option value={Sort.OldestToNewest}>Oldest to newest</option>
                <option value={Sort.NewestToOldest}>Newest to oldest</option>
                <option value={Sort.AlbumName}>Album name</option>
                <option value={Sort.ArtistName}>Artist name</option>
                <option value={Sort.Random}>Random</option>
            </select>
        </div>
        <div className="filter-by">
            <label htmlFor="album-filterer-select" className="nice-select-label">Filter by:</label>
            <select id="album-filterer-select" className="nice-select" onChange={onChangeFilter} value={currentFilter} defaultValue={ALL_ALBUMS}>
                {filterList.map((filter: Filter) =>
                    <option value={filter.name} key={filter.name}>{capitalizeFirstLetter(filter.name)} ({filter.count})</option>
                )}
            </select>
        </div>
    </div>
}