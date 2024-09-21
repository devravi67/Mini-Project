document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerHTML;

            switch (value) {
                case '=':
                    try {
                        expression = eval(expression).toString();
                    } catch {
                        expression = "Error";
                    }
                    input.value = expression;
                    break;
                case 'AC':
                    expression = "";
                    input.value = expression;
                    break;
                case 'DEL':
                    expression = expression.slice(0, -1);
                    input.value = expression;
                    break;
                default:
                    expression += value;
                    input.value = expression;
                    break;
            }
        });
    });
});
