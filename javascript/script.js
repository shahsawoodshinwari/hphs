pages = {
    'about': 'about.html',
    'admissions': 'admissions.html',
    'alumni': 'alumni.html',
    'events': 'events.html',
    'home': 'index.html',
    'overview': 'overview.html',
    'results': 'results.html'
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-nav]').forEach( function(element) {
        if (element.innerText.toLowerCase() in pages)
            element.setAttribute('href', pages[element.innerText.toLowerCase()]);
        else
            element.setAttribute('href', pages.home);
    });
});