document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe.height = iframe.contentWindow.document.body.scrollHeight;
    })
})