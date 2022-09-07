function create_card(title, images) {
    var cols = "";
    images.forEach(image => {
        cols += `<div class="col"><a href="${image}"><img class="img-fluid rounded" src="${image}" alt="..."></a></div>`;
    })
    const card = `<div class="col-12"><div class="card"><div class="card-header">${ title }</div><div class="card-body"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 align-items-center">${cols}</div></div></div></div>`

    document.querySelector('#events').innerHTML += card;
} // create card
document.addEventListener('DOMContentLoaded', () => {
    events.forEach(obj => {
        create_card(obj.card_header, obj.images);
        // console.log(obj.images);
    })
})
