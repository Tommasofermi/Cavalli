// Funzione per mostrare la popup
function showPopupsi() {
    document.getElementById('popupsi').style.display = 'block';
}

// Funzione per mostrare la popup
function showPopupno() {
    document.getElementById('popupno').style.display = 'block';
}

// Funzione per nascondere la popup
function hidePopupsi() {
    document.getElementById('popupsi').style.display = 'none';
}

function hidePopupno() {
    document.getElementById('popupno').style.display = 'none';
}

// Gestione del modulo di contatto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito di invio del modulo

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulazione invio del modulo (qui si potrebbe inviare una richiesta AJAX)
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    // Mostra un messaggio di conferma
    document.getElementById('form-response').innerText = 'Grazie per averci contattato, ' + name + '! Risponderemo al più presto.';
    
    // Resetta il modulo
    document.getElementById('contact-form').reset();
});
