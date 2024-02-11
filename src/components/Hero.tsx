import '../css/Hero.scss';

export function Hero() {
    return (
        <div className="header">
            <div className="moon-image-wrapper">
                <div className="rotator-wrapper moon-wrapper">
                    <div className="rotator moon-rotator">
                        <img
                            src="fullmoon.svg"
                            className="full-moon-emoji"
                        ></img>
                    </div>
                </div>
                <div className="rotator-wrapper moonburst-wrapper moonburst-dark-wrapper">
                    <div className="rotator">
                        <img
                            src="moonburst-dark.svg"
                            className="moonburst moonburst-dark"
                        ></img>
                    </div>
                </div>
                <div className="rotator-wrapper moonburst-wrapper moonburst-bright-wrapper">
                    <div className="rotator">
                        <img
                            src="moonburst-bright.svg"
                            className="moonburst moonburst-bright"
                        ></img>
                    </div>
                </div>
                <svg className="header-title-svg">
                    <g>
                        <clipPath id="title-clip">
                            <text x="0" y="0" dy="0" className="title-text">
                                <tspan
                                    x="0"
                                    dy="-1em"
                                    className="header-title"
                                    dominantBaseline="central"
                                >
                                    Full{' '}
                                </tspan>
                                <tspan
                                    x="0"
                                    dy="1em"
                                    className="header-title"
                                    dominantBaseline="central"
                                >
                                    Moon{' '}
                                </tspan>
                                <tspan
                                    x="0"
                                    dy="1em"
                                    className="header-title"
                                    dominantBaseline="central"
                                >
                                    Albums
                                </tspan>
                            </text>
                        </clipPath>
                    </g>
                </svg>
            </div>
            <div className="header-description">
                <p>
                    I listen to a lot of music. Since 2020, I've been keeping
                    track of every album I listen to and rating each one with a{' '}
                    <strong>moon emoji</strong>:
                </p>
                <ul className="moon-rating-list">
                    <li className="moon-rating">
                        <img
                            src="crescent.png"
                            className="moon-rating-image"
                        ></img>
                        <div className="moon-rating-text">
                            <strong>Crescent</strong>
                            <span>Okay, at least I finished it</span>
                        </div>
                    </li>
                    <li className="moon-rating">
                        <img
                            src="halfmoon.png"
                            className="moon-rating-image"
                        ></img>
                        <div className="moon-rating-text">
                            <strong>Half Moon</strong>
                            <span>Pretty good, mostly enjoyable</span>
                        </div>
                    </li>
                    <li className="moon-rating">
                        <img
                            src="gibbous.png"
                            className="moon-rating-image"
                        ></img>
                        <div className="moon-rating-text">
                            <strong>Gibbous</strong>
                            <span>Great, overall enjoyable</span>
                        </div>
                    </li>
                    <li className="moon-rating">
                        <img
                            src="fullmoon.png"
                            className="moon-rating-image"
                        ></img>
                        <div className="moon-rating-text">
                            <strong>Full Moon</strong>
                            <span>All bangers, no skips</span>
                        </div>
                    </li>
                </ul>
                <p>
                    After rating <strong>1,800+</strong> albums, these are the
                    only ones that slap from start to finish, the ones I keep
                    coming back to, the ones that earned themselves a{' '}
                    <strong>Full Moon</strong>.{' '}
                    <a
                        className="learn-more"
                        href="https://aaronson.org/blog/full-moon-albums"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        learn&nbsp;more&nbsp;
                        <span className="learn-more-arrow">→</span>
                    </a>
                </p>
            </div>
            <div className="down-arrow-wrapper">
                <a href="#albums" className="down-arrow">
                    <span className="down-arrow-text">↓</span>
                </a>
            </div>
        </div>
    );
}
