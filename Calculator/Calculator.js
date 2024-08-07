document.addEventListener("DOMContentLoaded", function() {
    let string = "";
    let buttons = document.querySelectorAll('.button, .button-type, .button.equal');
    let previousResult = "";
    
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerHTML;
            const inputField = document.querySelector('input');

            if (value === '=') {
                try {
                    string = eval(string);
                    previousResult = string;
                } catch {
                    string = 'Error';
                }
                inputField.value = string;
            } else if (value === 'Clear') {
                string = "";
                inputField.value = string;
            } else if (value === 'ans') {
                string += previousResult;
                inputField.value = string;
            } else if (value === 'del') {
                string = string.slice(0, -1);
                inputField.value = string;
            } else if (value === '±') {
                if (string) {
                    string = (parseFloat(string) * -1).toString();
                    inputField.value = string;
                }
            } else {
                string += value;
                inputField.value = string;
            }
        });
    });
});
