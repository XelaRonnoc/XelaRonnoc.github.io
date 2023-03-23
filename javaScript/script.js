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

window.addEventListener("scroll", reveal); // checks for event scroll
// document
//     .getElementsByClassName("header-container__nav-bar--icon")
//     .addEventListener("click", close);

// function close() {
//     let dropDown = document.getElementsByClassName(
//         "header-container__nav-bar--group"
//     );
//     if (dropDown.style.visibility !== "hidden") {
//         dropDown.style.visibility = "visible";
//     }
// }

// To check the scroll position on page load
reveal();
