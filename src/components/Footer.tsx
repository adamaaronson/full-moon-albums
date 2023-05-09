import "../css/Footer.scss"

export function Footer() {
    return <div className="app-footer-text">
        © {new Date().getFullYear()} <a href="https://aaronson.org" rel="noreferrer noopener" target="_blank" className="hover-blue">
            Adam Aaronson
        </a> · <a href="https://github.com/adamaaronson/full-moon-albums" rel="noreferrer noopener" target="_blank" className="hover-blue">
            GitHub
        </a> · <a href="https://twitter.com/aaaronson" rel="noreferrer noopener" target="_blank" className="hover-blue">
            Twitter
        </a> · <a href="https://aaronson.org/blog/full-moon-albums" rel="noreferrer noopener" target="_blank" className="hover-blue">
            Learn more
        </a>
    </div>
}