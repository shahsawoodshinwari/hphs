function setCoverHeight(selector) {
    const screen_height = window.innerHeight;
    const nav = document.querySelector('nav');
    const navbar_height = nav.offsetHeight;
    const other_height = document.querySelector('div#cover div.col-12.d-block.d-md-none').offsetHeight;
    const cover_height = screen_height - (navbar_height + other_height);
    const cover = document.querySelector(selector);
    cover.setAttribute('style', `height:${cover_height}px !important; width:100% !important;`);
    return cover;
}

document.addEventListener('DOMContentLoaded', () => {
    setCoverHeight('#cover img');
});
window.onresize = setCoverHeight('#cover img');