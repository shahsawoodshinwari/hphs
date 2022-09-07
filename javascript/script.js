pages = {
    'about': 'about.html',
    'admissions': 'admissions.html',
    'alumni': 'alumni.html',
    'events': 'events.html',
    'home': 'index.html',
    'overview': 'overview.html',
    'results': 'results.html'
}
document.addEventListener('DOMContentLoaded', function() {
    try {
        document.querySelector('footer form').addEventListener('submit', sendEmail);
    } catch (e) {
        // statement
    }

    document.querySelectorAll('[data-nav]').forEach(function(element) {
        if (element.innerText.toLowerCase() in pages)
            element.setAttribute('href', pages[element.innerText.toLowerCase()]);
        else
            element.setAttribute('href', pages.home);
    });
});

function sendEmail(e) {
    e.preventDefault();
    form = e.target;
    name = form.querySelector('[name="username"]').value;
    from = form.querySelector('[name="email"]').value;
    comment = form.querySelector('[name="comments"]').value;
    bodyHTML = `<div style="font-family: Arial; padding:0 5rem"><div style="border: 1px solid rgba(0, 0, 0, 0.175); padding: 0.3rem;border-top-left-radius: 0.25rem;border-top-right-radius: 0.25rem; background-color: rgba(0, 0, 0, 0.03);"><span style="color:blue;">From:</span> ${from}</div><div style="border: 1px solid rgba(0, 0, 0, 0.175); border-top:none;padding: 0.3rem; border-bottom-right-radius: 0.25rem;border-bottom-left-radius: 0.25rem;">${comment}</div></div>`;
    key = "047559F4F417EA2B3399709C81F1D8239D6D41BDDECC661AA5020D861730341426BE42E3CF775B04BC317344F3112A5E"
    url = `https://api.elasticemail.com/v2/email/send?apikey=${key}&subject=${name} sent feedback about Website&from=shahsawooddelta446@gmail.com&msgTo=shahsawood@lastwavetechnology.com&bodyHTML=${bodyHTML}`
    fetch(url, {
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success == true) {
                const thanksToast = document.getElementById('thanksToast')
                const toast = new bootstrap.Toast(thanksToast)
                toast.show()
                form.reset();
            }
        });
}