// Globale Übersetzungen für die Hochzeitswebsite
let currentLanguage = 'de';

const translations = {
    de: {
        // Navigation
        navTodo: 'Dein Todo',
        navInfos: 'Infos',
        navBilder: 'Fotos',
        
        // Index/RSVP Seite
        title: 'Wir heiraten!',
        subtitle: 'Wir freuen uns sehr, diesen besonderen Tag mit dir zu teilen!',
        rsvpInfo: 'Hey! Bitte sag uns Bescheid, ob du dabei bist! Falls du mit Familie oder Partner kommst, gib uns einfach Bescheid mit wievielen Personen und deren Namen.',
        nameLabel: 'Dein vollständiger Name',
        statusLabel: 'Kommst du zur Hochzeit?',
        statusYes: 'Ja, ich komme!',
        statusNo: 'Nein, leider nicht',
        guestCountLabel: 'Mit wie vielen Personen kommst du? (Falls du alleine kommst, bitte hier nichts machen) (optional)',
        guestCountPlaceholder: 'Bitte wählen...',
        guestNamesLabel: 'Namen aller Personen, die mitkommen:',
        allergiesLabel: 'Hast du/ihr Allergien oder Unverträglichkeiten beim Essen, die wir beachten sollen? (optional)',
        allergiesPlaceholder: 'z.B. Nüsse, Laktose, Gluten...',
        messageLabel: 'Möchtest du uns sonst noch etwas mitteilen? (optional)',
        messagePlaceholder: 'Deine Nachricht...',
        musicLabel: 'Falls du/ihr einen Musikwunsch für die Party am Abend habt, könnt ihr ihn hier eintragen (optional)',
        musicPlaceholder: 'Interpret - Titel',
        submitButton: 'Antwort absenden',
        thankYouTitle: 'Danke für deine Antwort! 🎉',
        thankYouMessage: 'Wir freuen uns sehr über deine Rückmeldung!',
        thankYouYes: 'Danke für deine Antwort. Wir freuen uns sehr über deine Rückmeldung, {name}. Wir freuen uns riesig darauf, diesen besonderen Tag mit dir zu teilen!',
        thankYouNo: 'Schade dass es nicht klappt, wir werden trotzdem an diesem Tag an dich denken.',
        closeButton: 'Schließen',
        alreadySubmitted: 'Du hast bereits eine Antwort abgeschickt! Falls du deine Antwort ändern möchtest, kontaktiere uns bitte direkt.',
        submittedInfo: 'Du hast uns bereits Rückmeldung gegeben - danke!',
        submittedInfoSub: 'Falls du noch was ändern möchtest, ruf uns gerne einfach an oder schreib uns :)',
        submittedDetails: 'Deine abgeschickten Informationen:',
        submittedName: 'Name:',
        submittedStatus: 'Kommst du zur Hochzeit?',
        submittedGuestCount: 'Wieviele Personen bringst du mit?',
        submittedGuestNames: 'Namen:',
        submittedAllergies: 'Allergien:',
        submittedMusic: 'Musikwunsch:',
        notProvided: 'Nicht angegeben',
        nothingProvided: 'Nichts angegeben',
        
        // Infos Seite
        infosTitle: 'Alle Infos für den Hochzeitstag',
        countdownTitle: 'Countdown zur Hochzeit',
        days: 'Tage',
        hours: 'Stunden',
        minutes: 'Minuten',
        seconds: 'Sekunden',
        dateLabel: 'Datum',
        locationLabel: 'Ort',
        routeText: 'Route',
        dresscodeLabel: 'Dresscode',
        dresscodeText: 'Smart casual / sommerlich-festlich',
        scheduleLabel: 'Ablauf',
        arrivalText: 'Ankunft',
        ceremonyText: 'Trauung',
        receptionText: 'Sektempfang mit anschließendem Kaffee & Kuchen',
        barnText: 'Einzug in die Tenne',
        dinnerText: 'Abendessen',
        partyText: 'Party',
        witnessesLabel: 'Trauzeugen',
        weatherLabel: 'Wetter für die Hochzeit',
        weatherLoading: 'Lade Wetterdaten...',
        weatherPlaceholder: '🌤️ Wettervorhersage wird ab 15.08.2026 hier angezeigt',
        accommodationLabel: 'Übernachtungsmöglichkeiten',
        hotelDescription: '⭐ Biohotel mit Tradition • 1,7 km von der Location',
        giftsLabel: 'Geschenke',
        giftsText: '... und noch was: macht euch die Geschenkesuche nicht zur Qual, Geld ist für uns die beste Wahl!',
        
        // Bilder Seite
        bilderTitle: 'Fotos',
        bilderSubtitle: 'Hier werden Fotos von unserer Hochzeitsfeier abrufbar sein',
        comingSoon: 'COMING SOON',
        
        // Fehlermeldungen
        nameError: 'Bitte gib deinen Namen ein',
        statusError: 'Bitte wähle aus, ob du kommst oder nicht',
        guestNameError: 'Bitte gib den Namen für Person {number} ein',
        required: '*'
    },
    en: {
        // Navigation
        navTodo: 'Your Todo',
        navInfos: 'Info',
        navBilder: 'Photos',
        
        // Index/RSVP Seite
        title: 'We are getting married!',
        subtitle: 'We are very excited to share this special day with you!',
        rsvpInfo: 'Hey! Please let us know if you\'re coming! If you\'re coming with family or partner, just let us know how many people and their names.',
        nameLabel: 'Your Full Name',
        statusLabel: 'Are you coming to the wedding?',
        statusYes: 'Yes, I\'m coming!',
        statusNo: 'No, unfortunately not',
        guestCountLabel: 'How many people are you bringing? (If you\'re coming alone, please leave this empty) (optional)',
        guestCountPlaceholder: 'Please choose...',
        guestNamesLabel: 'Names of all people coming:',
        allergiesLabel: 'Do you/they have any food allergies or intolerances we should be aware of? (optional)',
        allergiesPlaceholder: 'e.g. nuts, lactose, gluten...',
        messageLabel: 'Would you like to tell us anything else? (optional)',
        messagePlaceholder: 'Your message...',
        musicLabel: 'If you/they have a music request for the evening party, you can enter it here (optional)',
        musicPlaceholder: 'Artist - Title',
        submitButton: 'Send Response',
        thankYouTitle: 'Thank you for your response! 🎉',
        thankYouYes: 'Thank you for your response. We are very happy about your feedback, {name}. We are really looking forward to sharing this special day with you!',
        thankYouNo: 'Too bad it doesn\'t work out, we will still think of you on this day.',
        closeButton: 'Close',
        alreadySubmitted: 'You have already submitted a response! If you want to change your response, please contact us directly.',
        submittedInfo: 'You have already given us feedback - thank you!',
        submittedInfoSub: 'If you want to change something, feel free to call us or write to us :)',
        submittedDetails: 'Your submitted information:',
        submittedName: 'Name:',
        submittedStatus: 'Are you coming to the wedding?',
        submittedGuestCount: 'How many people are you bringing?',
        submittedGuestNames: 'Names:',
        submittedAllergies: 'Allergies:',
        submittedMusic: 'Music request:',
        notProvided: 'Not provided',
        nothingProvided: 'Nothing provided',
        
        // Infos Seite
        infosTitle: 'All Information for the Wedding Day',
        countdownTitle: 'Countdown to the Wedding',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        dateLabel: 'Date',
        locationLabel: 'Location',
        routeText: 'Route',
        dresscodeLabel: 'Dress Code',
        dresscodeText: 'Smart casual / summerly festive',
        scheduleLabel: 'Schedule',
        arrivalText: 'Arrival',
        ceremonyText: 'Ceremony',
        receptionText: 'Champagne Reception with Coffee & Cake',
        barnText: 'Entering the Barn',
        dinnerText: 'Dinner',
        partyText: 'Party',
        witnessesLabel: 'Best Men & Maids of Honor',
        weatherLabel: 'Weather for the Wedding',
        weatherLoading: 'Loading weather data...',
        weatherPlaceholder: '🌤️ Weather forecast will be displayed here from 15.08.2026',
        accommodationLabel: 'Accommodation',
        hotelDescription: '⭐ Bio hotel with tradition • 1.7 km from the venue',
        giftsLabel: 'Gifts',
        giftsText: '... and one more thing: don\'t make gift hunting a torture, money is the best choice for us!',
        
        // Bilder Seite
        bilderTitle: 'Photos',
        bilderSubtitle: 'Here will be photos from our wedding celebration',
        comingSoon: 'COMING SOON',
        
        // Fehlermeldungen
        nameError: 'Please enter your name',
        statusError: 'Please choose whether you are coming or not',
        guestNameError: 'Please enter the name for person {number}',
        required: '*'
    }
};

// Sprach-Umschaltung Funktion
function toggleLanguage() {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    
    // Sprache im localStorage speichern
    localStorage.setItem('selectedLanguage', currentLanguage);
    
    // Button-Text ändern
    const langDe = document.getElementById('lang-de');
    const langEn = document.getElementById('lang-en');
    if (langDe && langEn) {
        langDe.style.display = currentLanguage === 'de' ? 'inline' : 'none';
        langEn.style.display = currentLanguage === 'en' ? 'inline' : 'none';
    }
    
    // Alle Texte übersetzen
    translatePage();
}

// Haupt-Übersetzungsfunktion
function translatePage() {
    // Alle Elemente mit data-translate Attribut übersetzen
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            let text = translations[currentLanguage][key];
            
            // Platzhalter ersetzen
            if (element.hasAttribute('data-name')) {
                text = text.replace('{name}', element.getAttribute('data-name'));
            }
            if (element.hasAttribute('data-number')) {
                text = text.replace('{number}', element.getAttribute('data-number'));
            }
            
            element.textContent = text;
        }
    });
    
    // Placeholder für Input-Felder übersetzen
    const inputs = document.querySelectorAll('[data-translate-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            input.placeholder = translations[currentLanguage][key];
        }
    });
    
    // Optionen für Select-Felder übersetzen
    const selects = document.querySelectorAll('[data-translate-options]');
    selects.forEach(select => {
        const optionsKey = select.getAttribute('data-translate-options');
        const options = translations[currentLanguage][optionsKey];
        if (options) {
            select.innerHTML = '';
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                select.appendChild(optionElement);
            });
        }
    });
}

// Sprach-Switch Button erstellen
function createLanguageSwitch() {
    const switchButton = document.createElement('div');
    switchButton.className = 'language-switch';
    switchButton.onclick = toggleLanguage;
    switchButton.innerHTML = `
        <span id="lang-de">🇩🇪 DE</span>
        <span id="lang-en" style="display: none;">🇺🇸 EN</span>
    `;
    document.body.appendChild(switchButton);
}

// CSS für Sprach-Switch
function addLanguageSwitchCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .language-switch {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background: #fff;
            border: 2px solid #ffd700;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9em;
            font-weight: 500;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
            transition: all 0.3s ease;
        }
        .language-switch:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }
        .language-switch:active {
            transform: translateY(0) scale(0.95);
        }
        @media (max-width: 767px) {
            .language-switch {
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                font-size: 0.8em;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    // Gespeicherte Sprache aus localStorage laden
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    addLanguageSwitchCSS();
    createLanguageSwitch();
    
    // Button-Text entsprechend der aktuellen Sprache setzen
    const langDe = document.getElementById('lang-de');
    const langEn = document.getElementById('lang-en');
    if (langDe && langEn) {
        langDe.style.display = currentLanguage === 'de' ? 'inline' : 'none';
        langEn.style.display = currentLanguage === 'en' ? 'inline' : 'none';
    }
    
    translatePage();
}); 