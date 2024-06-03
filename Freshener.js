let filterValue3, filterValue6, filterValue5, filterValue7, filterValue8, filterValue10;
let filteredData = [];

function fetchAndFilter() {
  const csvFile = 'Circolante_Lombardia.csv';
  filterValue3 = document.getElementById('filterField3').value.toLowerCase();
  filterValue6 = document.getElementById('filterField6').value.toLowerCase();
  filterValue5 = document.getElementById('filterField5').value.toLowerCase();
  filterValue7 = document.getElementById('filterField7').value.toLowerCase();
  filterValue8 = document.getElementById('filterField8').value.toLowerCase();
  filterValue10 = document.getElementById('filterField10').value.toLowerCase();

  fetchCSV(csvFile, filterValue6, filterValue5, filterValue7, filterValue8, filterValue10);
}

function fetchCSV(csvFile, filterValue6, filterValue5, filterValue7, filterValue8, filterValue10) {
  fetch(csvFile)
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n');
      const header = rows[0].split(',');

      filteredData = [];

      for (const row of rows) {
        const fields = row.split(',');

        if (fields.length >= 11) {
          if (
            (filterValue3 === '' || String(fields[2]).toLowerCase().includes(filterValue3)) &&
            (filterValue6 === '' || String(fields[5]).toLowerCase().includes(filterValue6)) &&
            (filterValue5 === '' || String(fields[4]).toLowerCase().includes(filterValue5)) &&
            (filterValue7 === '' || String(fields[6]).toLowerCase().includes(filterValue7)) &&
            (filterValue8 === '' || String(fields[7]).toLowerCase().includes(filterValue8)) &&
            (filterValue10 === '' || String(fields[9]).toLowerCase().includes(filterValue10))
          ) {
            filteredData.push(row);
          }
        }
      }

      // Chiamiamo la funzione di stampaDati
      stampaDati();
    })
    .catch(error => {
      console.error('Errore nel recupero del file CSV:', error);
      // In caso di errore, stampa un messaggio vuoto
      document.getElementById('csvData').innerHTML = '';
    });
}

function cambiaColore(buttonId) {
  resettaStati();
  document.getElementById(buttonId).classList.add('active');
}

function resettaStati() {
  var pulsanti = document.querySelectorAll('button');
  pulsanti.forEach(function(pulsante) {
    pulsante.classList.remove('active');
  });
}

function stampaDati() {
  // Visualizza dati filtrati sulla pagina web
  document.getElementById('csvData').innerHTML = '<pre>' + filteredData.join('\n') + '</pre>';
}

// Chiamiamo la funzione fetchAndFilter all'inizio
fetchAndFilter();
