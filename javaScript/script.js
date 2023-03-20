function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementBottom = reveals[i].getBoundingClientRect().bottom;
        const elementVisibleDownwards = 150; // determines range within which the element is visible
        const elementVisibleUpwards = 900; // determines range within which the element is visible
        if (
            elementTop < windowHeight - elementVisibleDownwards &&
            elementBottom > windowHeight - elementVisibleUpwards
        ) {
            reveals[i].classList.add("active"); // adds the .active class to end of .reveal to add that functionality
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
