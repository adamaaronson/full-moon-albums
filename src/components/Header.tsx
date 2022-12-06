import "../css/Header.scss"

export function Header() {
    return <div className="header">
        <div className="moon-image">
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
        </div>
        <div className="header-title-wrapper">
            <svg className="header-title-svg">
                <clipPath id="title-clip">
                    <text x="0" y="0" dy="0" className="title-text">
                        <tspan x="0" dy="-1em" className="header-title" dominantBaseline="central">Full </tspan>
                        <tspan x="0" dy="1em" className="header-title" dominantBaseline="central">Moon </tspan>
                        <tspan x="0" dy="1em" className="header-title" dominantBaseline="central">Albums</tspan>
                    </text>
                </clipPath>
            </svg>
        </div>
            
    </div>
}