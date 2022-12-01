import "../css/Header.scss"

export function Header() {
    return <div className="header">
        <div className="moon-image">
            <img src="fullmoon.svg" className="full-moon-emoji"></img>
            <img src="moonburst-dark.svg" className="moonburst"></img>
        </div>
        <h1 className="header-title">
            Full<br/>
            Moon<br/>
            Albums
        </h1>
    </div>
}