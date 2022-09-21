function createBatchCard(obj) {
    var studentz = '';
    obj.students.forEach(student => {
        studentz += `<div class="col"><div class="card h-100" style="border-color:var(--bs-orange)"><img src="${student.image}" class="card-img-top" alt=${student.name}"><div style="border-color:var(--bs-orange)" class="card-footer text-center text-truncate">${student.name}</div></div></div>`;
    })
    return `<div class="col arise"><div class="card shadow" style="border-color:var(--bs-orange)"><div class="card-header text-center" style="border-color:var(--bs-orange)">${obj.batch}</div><div class="card-body p-2"><div class="row row-col-3 row-cols-sm-4 row-cols-md-6 row-cols-lg-7 g-2">${studentz}</div></div></div></div>`;
}
document.addEventListener('DOMContentLoaded', () => {
    var html = '';
    async function f() {
        alumni.forEach(batch => {
            html += createBatchCard(batch);
        });
    }
    f().then(() => {
        const target = document.querySelector('#batch-gallary');
        setTimeout(() => {
            target.innerHTML = html;
        }, 1500);
    })
});