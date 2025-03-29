        let display = document.getElementById('display'); // Gets the display element
        let calculator = document.querySelector('.btns'); // Selects the button container

        // Event listener for button clicks using event delegation
        calculator.addEventListener('click', (event) => {
            // Checks if the clicked element is actually a button
            if (!event.target.classList.contains('btn')) return;
            
            const value = event.target.textContent; // Gets the button's text

            // If 'C' is clicked, clear the display
            if (value === 'C') {
                display.value = '';
            }
            // If '=' is clicked, evaluate the entered mathematical expression
            else if (value === '=') {
                try {
                    display.value = eval(display.value); // Evaluates the expression safely
                } catch {
                    display.value = 'Error'; // Displays 'Error' for invalid inputs
                }
            }
            // Otherwise, append the clicked button's value to the display
            else {
                display.value += value;
                adjustFontSize(); // Adjust font size dynamically
            }
        });

        // Function to reduce font size when input gets too long
        function adjustFontSize() {
            if (display.value.length > 10) {
                display.style.fontSize = "1.2em"; // Decrease font size
            } else {
                display.style.fontSize = "1.5em"; // Reset to default font size
            }
        }