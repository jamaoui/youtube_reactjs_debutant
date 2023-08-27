export default function LanguageSwitcher({onLanguageChange}) {

    const handleLangChange = (e) => {
        e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang)
    }
    return  <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" data-lang='AR' href="#" onClick={handleLangChange}>العربية</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" data-lang='FR' onClick={handleLangChange}>Français</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" data-lang='EN' onClick={handleLangChange}>English</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" data-lang='ES' onClick={handleLangChange}>Español</a>
            </li>
        </ul>
    </>
}