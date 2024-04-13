document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.answer-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
            button.textContent = answer.classList.contains('show') ? '-' : '↴';
        });
    });
});
