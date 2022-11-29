import { Album } from "./Album"
import "../css/AlbumCard.scss"

export function AlbumCard(album: Album) {
    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return <div className="album-card" key={album.title}>
        <div className="album-info">
            <img src={album.image_url} className="album-image" width="200px"></img>
            <h2 className="album-title">
                {album.title}
            </h2>
            <h3 className="album-artist">
                {album.artist}
            </h3>
            <h4 className="album-year">
                {album.year}
            </h4>
            <ul className="album-descriptors-list">
                {album.descriptors.map(des => 
                    <li className="album-descriptor" key={des}>
                        {capitalizeFirstLetter(des)}
                    </li>
                )}
            </ul>
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
                    <a href={album.album_url}>
                        <img className="spotify-logo" src="spotify.png"></img>
                    </a>
                    
                }
            </div>
        </div>
    </div>
}