document.addEventListener('DOMContentLoaded', function() {
    const showMoreLinks = document.querySelectorAll('.show-more');

    showMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const shortText = this.previousElementSibling.previousElementSibling;
            const longText = this.previousElementSibling;

            if (longText.style.display === 'none' || longText.style.display === '') {
                longText.style.display = 'block';
                this.textContent = 'Show Less';
                shortText.style.display = 'none';
                longText.scrollIntoView({ behavior: 'smooth' });
            } else {
                longText.style.display = 'none';
                this.textContent = 'Show More';
                shortText.style.display = 'block';
            }
        });
    });
});
