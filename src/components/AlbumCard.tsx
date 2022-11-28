import { Album } from "./Album"
import { useEffect, useState } from "react"

export function AlbumCard(album: Album) {
    const [imageUrl, setImageUrl] = useState('')
    
    return <div key={album.title}>
        {album.title} by {album.artist} ({album.year})
    </div>
}