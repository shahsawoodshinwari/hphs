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
    test_marks = form.querySelector('#test_marks').value;
    school = form.querySelector('#school').value;
    address = form.querySelector('#address').value;
    bodyHTML = `<ul><li>first name: ${first_name}</li><li>last name: ${last_name}</li><li>father name: ${father_name}</li><li>phone number: ${phone_number}</li><li>email: ${email}</li><li>date of birth: ${date_of_birth}</li><li>current class: ${current_class}</li><li>new class: ${new_class}</li><li>Address: ${address}</li><li>test marks: ${test_marks}</li><li>school: ${school}</li></ul>`;
    key = "047559F4F417EA2B3399709C81F1D8239D6D41BDDECC661AA5020D861730341426BE42E3CF775B04BC317344F3112A5E"
    url = `https://api.elasticemail.com/v2/email/send?apikey=${key}&subject=${first_name} ${last_name} applied onlinee&from=shahsawooddelta446@gmail.com&msgTo=shahsawood@lastwavetechnology.com&bodyHTML=${bodyHTML}`
    console.log(url)
    fetch(url, {
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success == true) {
                console.log('form submit');
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

function load_grades(e) {
    console.log(e.target);
    classes.forEach(obj => {
        e.target.innerHTML += `<option value="${obj.grade}">${obj.grade}</option>`;
    })
} 

document.addEventListener('DOMContentLoaded', () => {
    try {
        document.forms[0].addEventListener('submit', sendAdmissionForm);
    } catch (e) {
        console.log(e);
    }
    const t = document.querySelector('#school');
    t.addEventListener('click', () => {
        // load schools
        schools.forEach(school => {
            t.innerHTML += `<option value="${school.name}">${school.name}</option>`;
        });
    }, { once: true });

    const parent = document.querySelector('#nav-faqs-tab');
    parent.addEventListener('click', () => {
        questions.forEach(obj => {
            const id = parent.dataset.bsTarget;
            const accordionFlush = document.querySelector(id).querySelector('.accordion-flush');
            accordionFlush.innerHTML += create_accordion_item(obj.id, obj.question, obj.answer);
        });
    }, { once: true });

    document.querySelector("#new_class").addEventListener('focus', load_grades, {once:true});
    document.querySelector("#current_class").addEventListener('focus', load_grades, {once:true});
});