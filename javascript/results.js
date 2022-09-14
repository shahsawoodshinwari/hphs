function createResultCard(obj) {

    // create a class card that contains position holders
    function createClassResultCard(grade, positionHolders) {

        // create a position holder card
        function createPositionHolderCard(position_holder) {
            return `<div class="col-4 col-md-4"><div class="card"><img src="${position_holder.image}" class="img-fluid card-img-top" alt=""><div class="card-body p-1"><div class="card-text text-center text-truncate">${position_holder.name}</div></div><div class="card-footer"><div class="card-text text-center">${position_holder.position}</div></div></div></div>`;
        }

        var positionHoldersCollection = '';
        positionHolders.forEach(position_holder => {
            positionHoldersCollection += createPositionHolderCard(position_holder);
        });
        return `<div class="col-12 col-md-4"><div class="card" style="border-color:var(--bs-orange);" bgcolor="red"><div class="card-header text-center" style="border-color:var(--bs-orange);">${grade}</div><div class="card-body p-1"><div class="row g-1">${positionHoldersCollection}</div></div></div></div>`;
    }

    var grades = "";
    const keys = Object.keys(obj.classes);
    for (var i = 0; i < keys.length; i++) {
        grades += createClassResultCard(keys[i], obj.classes[keys[i]]);
    }
    return `<div class="col-12"><div class="card" style="border-color:var(--bs-orange);"><div class="card-header text-center" style="border-color:var(--bs-orange);">${obj.year}</div><div class="card-body p-1"><div class="row g-2">${grades}</div></div></div></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    var html = '';
    async function f() {
        results.forEach(result => {
            html += createResultCard(result);
        });
    }
    f().then(() => {
        const target = document.getElementById('result');
        target.innerHTML = html;
    })
});