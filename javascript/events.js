function create_card(title, images) {
    var cols = "";
    images.forEach(image => {
        cols += `<div class="col"><a href="${image}"><img class="img-fluid rounded" src="${image}" alt="..."></a></div>`;
    })
    const card = `<div class="col-12"><div class="card"><div class="card-header">${ title }</div><div class="card-body"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 align-items-center">${cols}</div></div></div></div>`

    return card;
} // create card
document.addEventListener('DOMContentLoaded', () => {
    e = '<div class="col-12"><div class="text-center text-info fs-2">Events</div></div>';
    async function f() {
        events.forEach(obj => {
            e += create_card(obj.card_header, obj.images);
        })
    }
    f().then(() => {
        const target = document.querySelector('#events');
        target.innerHTML = e;
    })
})