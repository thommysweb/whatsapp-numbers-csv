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
                numbers = numbers + element.title + "\n";
            }
        });
    });
    return numbers;
}
