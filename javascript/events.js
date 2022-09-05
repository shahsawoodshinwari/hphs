function create_card(title, images) {
    const col = document.createElement('div');
    col.classList.add('col-12');

    const card = document.createElement('div');
    card.classList.add('card');

    const card_header = document.createElement('div');
    card_header.classList.add('card-header');
    card_header.innerText = title;

    const card_body = document.createElement('div');
    card_body.classList.add('card-body');

    const row = document.createElement('div');
    row.classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-lg-4", "g-1", "align-items-center");

    console.log(images.length)
    images.forEach((image, index) => {
        const innerCol = document.createElement('div');
        innerCol.classList.add('col')

        const img = document.createElement('img');
        img.classList.add('img-fluid', 'rounded');
        img.setAttribute('src', image);
        img.setAttribute('alt', '...');

        innerCol.append(img);

        row.append(innerCol);
    })

    card_body.appendChild(row)
    card.appendChild(card_header)
    card.appendChild(card_body)
    col.appendChild(card)

    document.querySelector('#events').appendChild(col);
} // create card
document.addEventListener('DOMContentLoaded', () => {
    events.forEach(obj => {
        create_card(obj.card_header, obj.images);
        // console.log(obj.images);
    })
})