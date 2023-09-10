import LanguageSwitcher from "./LanguageSwitcher";
import {useState} from "react";

export default function Page() {

    const [currentLang, setCurrentLang] = useState('ES')
    const displayMessage = () => {
        switch (currentLang) {
            case 'AR': return 'السلام عليكم'
            case 'FR': return 'Bonjour'
            case 'EN': return 'Hello'
            case 'ES': return 'Hola'
        }
    }
    return <>
    <LanguageSwitcher onLanguageChange={value => setCurrentLang(value)} />
        <hr/>
        Current Language: {currentLang}
        <hr/>
        <div className="alert alert-primary" role="alert">
            <strong>{displayMessage()}</strong>
        </div>
    </>
}