let main = document.querySelector('.main');

window.addEventListener('beforeunload', () => {
    main.innerHTML = `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `;
});








