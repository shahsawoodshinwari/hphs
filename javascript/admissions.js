function sendAdmissionForm(e) {
    e.preventDefault();
    form = e.target;
    first_name = form.querySelector('#first_name').value;
    last_name = form.querySelector('#last_name').value;
    father_name = form.querySelector('#father_name').value;
    phone_number = form.querySelector('#phone_number').value;
    email = form.querySelector('#email').value;
    date_of_birth = form.querySelector('#date_of_birth').value;
    current_class = form.querySelector('#current_class').value;
    new_class = form.querySelector('#new_class').value;
    test_marks = form.querySelector('#test_marks')
    school = form.querySelector('#school')
    bodyHTML = `<table border="1" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td>first name</td><td bgcolor="#f0f0f0">${first_name}</td></tr><tr><td>last name</td><td bgcolor="#f0f0f0">${last_name}</td></tr><tr><td>father name</td><td bgcolor="#f0f0f0">${father_name}</td></tr><tr><td>phone number</td><td bgcolor="#f0f0f0">${phone_number}</td></tr><tr><td>email</td><td bgcolor="#f0f0f0">${email}</td></tr><tr><td>date of birth</td><td bgcolor="#f0f0f0">${date_of_birth}</td></tr><tr><td>current class</td><td bgcolor="#f0f0f0">${current_class}</td></tr><tr><td>new class</td><td bgcolor="#f0f0f0">${new_class}</td></tr><tr><td>test marks</td><td bgcolor="#f0f0f0">${test_marks}</td></tr><tr><td>school</td><td bgcolor="#f0f0f0">${school}</td></tr></tbody></table>`;
    key = "047559F4F417EA2B3399709C81F1D8239D6D41BDDECC661AA5020D861730341426BE42E3CF775B04BC317344F3112A5E"
    url = `https://api.elasticemail.com/v2/email/send?apikey=${key}&subject=${first_name} ${last_name} applied onlinee&from=shahsawooddelta446@gmail.com&msgTo=shahsawood@lastwavetechnology.com&bodyHTML=${bodyHTML}`
    fetch(url, {
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success == true) {
                document.querySelector('a.nav-link[href="index.html"]').click();
            }
        });
}
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
    try {
        document.forms[0].addEventListener('submit', sendAdmissionForm);
    } catch (e) {
        // do nothing
    }
    const parent = document.querySelector('#faqsAccordionFlush');
    questions.forEach(obj => {
        parent.innerHTML += create_accordion_item(obj.id, obj.question, obj.answer)
    });
});
