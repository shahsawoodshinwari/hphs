pages = {
    'about': 'about.html',
    'admissions': 'admissions.html',
    'alumni': 'alumni.html',
    'events': 'events.html',
    'home': 'index.html',
    'overview': 'overview.html',
    'results': 'results.html'
}
function create_navbar() {
    return `<div class="container-fluid">
            <a class="navbar-brand" data-nav="yes">
                <img src="images/logo.png" alt="logo" class="rounded-circle" width="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <div class="d-none d-lg-block fs-4 typing">Hamza Public High School</div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">Overview</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">Alumni</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">Admissions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">Results</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-nav="yes">About</a>
                    </li>
                </ul>
            </div>
        </div>`;
}
document.addEventListener('DOMContentLoaded', function() {
    try {
        document.querySelector('footer form').addEventListener('submit', sendFeedback);
    } catch (e) {
        // statement
    }
    document.querySelector('nav.navbar').innerHTML = create_navbar();
    document.querySelectorAll('[data-nav]').forEach(function(element) {
        if (element.innerText.toLowerCase() in pages)
            element.setAttribute('href', pages[element.innerText.toLowerCase()]);
        else
            element.setAttribute('href', pages.home);
    });

    const title = document.querySelector('title').textContent.toLowerCase();
    document.querySelectorAll('nav.navbar li.nav-item a.nav-link').forEach(tab => {
        if (title.search(tab.textContent.toLowerCase()) > 0) {
            tab.classList.add('active', 'text-white', 'px-2');
        }
    });
});

function sendFeedback(e) {
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