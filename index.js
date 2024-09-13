document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
                button.textContent = `Hide ${button.textContent.split(' ')[1]}`;
            } else {
                targetElement.style.display = 'none';
                button.textContent = `Show ${button.textContent.split(' ')[1]}`;
            }
        });
    });
});
