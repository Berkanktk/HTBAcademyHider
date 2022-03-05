function hider() {

    const a = document.querySelector(".btn-light.btn-sm").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

    if (a !== undefined) {
        a.remove();
    }

    requestAnimationFrame(hider);
}

hider()
