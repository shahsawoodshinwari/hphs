root = 'images/'
function createNewsCard(news) {
    function createNewsCardLink(arg) {
        return `<a href="${arg.href}" class="card-link">${arg.text}</a>`
    }

    card_links = '';
    news.links.forEach(link => {
        card_links += createNewsCardLink(link);
    });

    return `<div class="col-12 col-md-6 col-lg-4"><div class="card h-100 border shadow" style="--bs-border-color: var(--bs-orange)!important;"><img src="${root}${news.image}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${news.title}</h5><h6 class="card-subtitle mb-2 text-muted">${news.sub_title}</h6><p class="card-text">${news.description}</p>${card_links}</div></div></div>`
}
document.addEventListener('DOMContentLoaded', () => {
    e = ''
    async function f() {
        latest_news.forEach(news => {
            e += createNewsCard(news);
        });
    }

    f().then(() => {
        document.querySelector('#spinner').insertAdjacentHTML('afterend', e);
    })
});