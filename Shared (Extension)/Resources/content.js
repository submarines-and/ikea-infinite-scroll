/** Throttle scrolling */
function debounce(func, wait) {
    let timeout;

    // default to 50ms
    wait = wait ?? 50;

    return () => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(func, wait)
    }
}

/** Check if "load more" button is visible */
function elementIsVisible(element) {
    if (!element) {
        return false;
    }

    const bounds = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(bounds.bottom < 0 || bounds.top - viewHeight >= 0);
}

/** Main listener */
function listener() {
    
    /** Change this selector if ikea.com changes the button class name */
    const buttonSelector = ".catalog-bottom-container a, .ofeed-btn";
    const moreButton = document.querySelector(buttonSelector);

    // click button if visible
    if (elementIsVisible(moreButton)) {
        moreButton.click();
    }
}




// register after a small timeout to allow reasonable time for ikea to load
setTimeout(()=> document.addEventListener("scroll", debounce(listener)), 100);
