import "../css/Header.scss"

export function Header() {
    return <div className="header">
        <div className="moon-image-wrapper">
            <div className="rotator-wrapper moon-wrapper">
                <div className="rotator moon-rotator">
                    <img src="fullmoon.svg" className="full-moon-emoji"></img>
                </div>
            </div>
            <div className="rotator-wrapper moonburst-wrapper moonburst-dark-wrapper">
                <div className="rotator">
                    <img src="moonburst-dark.svg" className="moonburst moonburst-dark"></img>
                </div>
            </div>
            <div className="rotator-wrapper moonburst-wrapper moonburst-bright-wrapper">
                <div className="rotator">
                    <img src="moonburst-bright.svg" className="moonburst moonburst-bright"></img>
                </div>
            </div>
            <svg className="header-title-svg">
                <g>
                    <clipPath id="title-clip">
                        <text x="0" y="0" dy="0" className="title-text">
                            <tspan x="0" dy="-1em" className="header-title" dominantBaseline="central">Full </tspan>
                            <tspan x="0" dy="1em" className="header-title" dominantBaseline="central">Moon </tspan>
                            <tspan x="0" dy="1em" className="header-title" dominantBaseline="central">Albums</tspan>
                        </text>
                    </clipPath>
                </g>
            </svg>
        </div>
        <div className="header-description">
            <p>
                I listen to a lot of music. Since 2020, I've been keeping track
                of every album I listen to and rating each one with a <strong>moon emoji</strong>:
            </p>
            <ul className="moon-rating-list">
                <li className="moon-rating">
                    <span className="moon-rating-description">
                        <img src="crescent.png" className="moon-rating-image"></img> <strong>Crescent</strong> Okay, at least I finished it
                    </span>
                </li>
                <li className="moon-rating">
                    <span className="moon-rating-description">
                        <img src="halfmoon.png" className="moon-rating-image"></img> <strong>Half Moon</strong> Pretty good, mostly enjoyable
                    </span>
                </li>
                <li className="moon-rating">
                    <span className="moon-rating-description">
                        <img src="gibbous.png" className="moon-rating-image"></img> <strong>Gibbous</strong> Great, overall enjoyable
                    </span>
                </li>
                <li className="moon-rating">
                    <span className="moon-rating-description">
                        <img src="fullmoon.png" className="moon-rating-image"></img> <strong>Full Moon</strong> All bangers, no skips
                    </span>
                </li>
            </ul>
            <p>
                After rating <strong>900+</strong> albums,
                these are the ones I keep coming back to,
                the ones to play in the car from beginning to end,
                the ones that earned themselves a <strong>Full Moon</strong>.
            </p>
        </div>
    </div>
}