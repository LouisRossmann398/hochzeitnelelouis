// Navigation Script
function createNavigation() {
    // Verbesserte Seitenerkennung
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentPageClean = currentPage.toLowerCase();
    
    const navigation = `
        <nav class="navbar">
            <ul class="nav-list">
                <li><a href="index.html" ${currentPageClean === 'index.html' || currentPageClean === '' ? 'class="active"' : ''}>DeinToDo</a></li>
                <li><a href="infos.html" ${currentPageClean === 'infos.html' ? 'class="active"' : ''}>Infos</a></li>
                <li><a href="bilder.html" ${currentPageClean === 'bilder.html' ? 'class="active"' : ''}>Bilder</a></li>
            </ul>
        </nav>
    `;
    
    // Finde das page-wrapper Element und füge die Navigation vor dem main-container hinzu
    const pageWrapper = document.querySelector('.page-wrapper');
    if (pageWrapper) {
        pageWrapper.insertAdjacentHTML('afterbegin', navigation);
    }
}

// Führe die Navigation aus, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', createNavigation); 