const VALIDPREFIXES = [
    '+49', 
    '+41', 
    '+43'
];
const FILENAME = 'whatsappNumbers_' + new Date(Date.now()).toISOString().replace('T', '_').substring(0, 16) + '.csv'

function getNumbers() {
    numbers = "";
    elements = document.querySelectorAll('span[title]');
    elements.forEach(element => {
        VALIDPREFIXES.forEach(prefix => {
            if (element.title.startsWith(prefix)) {
                numbers = numbers + element.title + '\n';
            }
        });
    });
    return numbers;
}

function downloadCSV(content) {
    var csv = new Blob([content], { type: 'text/csv' });
    var link = document.createElement('a');
    link.style.display = 'none';
    link.download = FILENAME;
    link.href = window.URL.createObjectURL(csv);
    document.body.appendChild(link);
    link.click();
}
