import { Album } from "./Album"
import "../css/AlbumCard.scss"
import { useState } from "react";

export interface AlbumCardProps {
    album: Album,
    onClickFilter: React.MouseEventHandler<HTMLButtonElement>
}

export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function isRecentlyAdded(album: Album) {
    const albumAddDate = new Date(Date.parse(album.date_added));
    const aWeekAgo = new Date(Date.now() - 604800000);
    return albumAddDate > aWeekAgo;
}

function getAddedDateString(album: Album) {
    return new Date(Date.parse(album.date_added)).toLocaleDateString('en-us', {
        timeZone: 'UTC',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).replaceAll('/', '-')
}

export function AlbumCard({ album, onClickFilter }: AlbumCardProps) {
    const [showingNewDate, setShowingNewDate] = useState(false);

    return <div className={"album-card" + (isRecentlyAdded(album) ? " album-card-recent" : "")}
                onMouseOver={() => setShowingNewDate(true)}
                onMouseOut={() => setShowingNewDate(false)}>
        <div className={"album-date-label" + (isRecentlyAdded(album) ? " album-date-label-new" : "")}>
            <img className="album-date-label-moon" src="fullmoon.png" />
            <div className="album-date-label-text">
                {isRecentlyAdded(album) && !showingNewDate ? "NEW" : getAddedDateString(album)}
            </div>
        </div>
        <div className="album-info">
            <img src={album.image_url} className="album-image" width="200px"></img>
            <h2 className="album-title">
                {album.title}
            </h2>
            <h3 className="album-artist">
                {album.artist}
            </h3>
            <h4 className="album-year">
                {album.year.split('-')[0]}
            </h4>
            <div className="album-descriptors-list">
                {album.descriptors.map(filter => 
                    <button className="album-descriptor" key={filter} value={filter} onClick={onClickFilter}>
                        {capitalizeFirstLetter(filter)}
                    </button>
                )}
            </div>
        </div>
        <div className="album-tracks">
            <div className="album-tracks-text">
                <h4 className="album-tracks-header">
                    Favorite tracks:
                </h4>
                <ul className="album-tracks-list">
                    {album.tracks.map(track => 
                        <li className="album-track" key={track}>
                            {track}
                        </li>
                    )}
                </ul>
            </div>
            <div className="album-link">
                {album.album_url == '' ?
                    <img className="spotify-logo no-spotify" src="spotify.png"></img>
                :
                    <a href={album.album_url} target="_blank" rel="noopener noreferrer">
                        <img className="spotify-logo" src="spotify.png"></img>
                    </a>
                    
                }
            </div>
        </div>
    </div>
}