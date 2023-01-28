function debounce(func, wait) {
    wait = wait ?? 50;
    
    let timeout;
    
    return () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(func, wait)
    }
}

function elementIsVisible(element) {
  if (!element) {
    return false;
  }

  const bounds = element.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(bounds.bottom < 0 || bounds.top - viewHeight >= 0);
}



document.addEventListener("scroll", debounce(() => {
    const moreButton = document.querySelector(".catalog-bottom-container a");
    
    let isLoading = false;
    if(elementIsVisible(moreButton) && !isLoading){
        isLoading = true;
        moreButton.click();
        
        // throttling
        setTimeout(() => {
            isLoading = false;
        }, 100);
    }
}))
