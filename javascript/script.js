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
function create_footer() {
    return `<div class="container">
            <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card bg-transparent h-100">
                        <div class="card-header text-center">Important Links</div>
                        <div class="card-body">
                            <div class="card-text my-1">
                                <a data-nav="yes" class="btn btn-outline-dark btn-sm w-100">Home</a>
                            </div>
                            <div class="card-text my-1">
                                <a data-nav="yes" class="btn btn-outline-dark btn-sm w-100">Overview</a>
                            </div>
                            <div class="card-text my-1">
                                <a data-nav="yes" class="btn btn-outline-dark btn-sm w-100">Alumni</a>
                            </div>
                            <div class="card-text my-1">
                                <a data-nav="yes" class="btn btn-outline-dark btn-sm w-100">Admissions</a>
                            </div>
                            <div class="card-text my-1">
                                <a data-nav="yes" class="btn btn-outline-dark btn-sm w-100">Events</a>
                            </div>
                            <div class="card-text my-1">
                                <a data-nav="yes" class="btn btn-outline-dark btn-sm w-100">Results</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card bg-transparent h-100">
                        <div class="card-header text-center">contact us</div>
                        <div class="card-body">
                            <div class="card-text my-1">
                                <a href="https://facebook.com/hamzapublichighschool" class="btn btn-info btn-sm w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    Facebook
                                </a>
                            </div>
                            <div class="card-text my-1">
                                <a href="https://m.me/hamzapublichighschool" class="btn btn-info btn-sm w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
                                        <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                                    </svg>
                                    Messenger
                                </a>
                            </div>
                            <div class="card-text my-1">
                                <a href="https://wa.me/923460149720" class="btn btn-info btn-sm w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    Whatsapp
                                </a>
                            </div>
                            <div class="card-text my-1">
                                <a href="03460149720" class="btn btn-info btn-sm w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    Cell
                                </a>
                            </div>
                            <div class="card-text my-1">
                                <a href="03460149720" class="btn btn-info btn-sm w-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    Address
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card h-100 bg-transparent">
                        <div class="card-header text-center">Leave a comment</div>
                        <div class="card-body">
                            <form action="#" class="needs-validation" novalidate>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control bg-transparent" required id="username" name="username" placeholder="name@example.com">
                                    <label for="username">Your name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control bg-transparent" required name="email" id="email" placeholder="name@example.com">
                                    <label for="email">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control bg-transparent" placeholder="Leave your comments here" id="comments" name="comments" required></textarea>
                                    <label for="comments">Leave a comment</label>
                                </div>
                                <input type="submit" class="btn btn-success btn-sm" value="Send">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

function create_toast() {
    return `<div class="toast-container position-fixed end-0 p-3">
        <div id="thanksToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Thanks for your feedback!
            </div>
        </div>
    </div>`;
}
document.addEventListener('DOMContentLoaded', function() {
    try {
        const nav = document.querySelectorAll('body nav')[0];
        nav.classList.add("navbar", "navbar-expand-sm", "sticky-top", "shadow");
        nav.style.backgroundColor = 'var(--bs-orange)';
        nav.innerHTML = create_navbar();
        nav.insertAdjacentHTML('afterend', create_toast());
        document.querySelector('footer').innerHTML = create_footer();
        document.querySelector('footer form').addEventListener('submit', sendFeedback);
    } catch (e) {
        console.log(e);
    }
    document.querySelectorAll('.navbar [data-nav]').forEach(function(element) {
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