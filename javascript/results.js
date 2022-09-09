function create_result_card(obj) {
    grades = "";
    obj.classes.forEach(grade => {
        //
    });
    const card = `<div class="col-12"><div class="card" style="border-color:var(--bs-orange);"><div class="card-header" style="border-color:var(--bs-orange);">${obj.year}</div><div class="card-body"><div class="row g-2"><div class="col-12 col-md-4"><div class="card" style="border-color:var(--bs-orange);"><div class="card-header text-center" style="border-color:var(--bs-orange);">Prep</div><div class="row g-1"><div class="col-md-4"><img src="images/default.jpg" class="img-fluid" alt=""><div class="card-text text-center">1st</div></div><div class="col-md-4"><img src="images/default.jpg" class="img-fluid" alt=""><div class="card-text text-center">2nd</div></div><div class="col-md-4"><img src="images/default.jpg" class="img-fluid" alt=""><div class="card-text text-center">3rd</div></div></div></div></div></div></div></div></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    results.forEach(result => {
        create_result_card(result);
    });
});