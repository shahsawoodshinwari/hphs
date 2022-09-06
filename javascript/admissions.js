function create_accordion_item(qNo, question, answer) {
    return `<div class="accordion-item">\
    <h2 class="accordion-header" id="flush-heading${ qNo }">\
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${ qNo }" aria-expanded="false" aria-controls="flush-collapse${ qNo }">\
    ${ qNo }. ${ question }\
    </button>\
    </h2>\
    <div id="flush-collapse${ qNo }" class="accordion-collapse collapse" aria-labelledby="flush-heading${ qNo }" data-bs-parent="#faqsAccordionFlush">\
    <div class="accordion-body">\
    ${ answer }\
    </div>\
    </div>\
    </div>`
}

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#faqsAccordionFlush');
    questions.forEach(obj => {
        parent.innerHTML += create_accordion_item(obj.id, obj.question, obj.answer)
    });
});