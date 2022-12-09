import "../css/Footer.scss"

export function Footer() {
    return <div className="app-footer-text">
        © {new Date().getFullYear()} <a href="https://aaronson.org" rel="noreferrer noopener" target="_blank" className="hover-blue">
            Adam Aaronson
        </a> · See the <a href="https://github.com/adamaaronson/full-moon-albums" rel="noreferrer noopener" target="_blank" className="hover-blue">
            source code
        </a> · Got recs? <a href="https://twitter.com/aaaronson" rel="noreferrer noopener" target="_blank" className="hover-blue">
            Message me
        </a>!
    </div>
}