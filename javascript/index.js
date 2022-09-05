function setIframeHeight(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('iframe').forEach(iframe => {
        setIframeHeight(iframe);
    })
})