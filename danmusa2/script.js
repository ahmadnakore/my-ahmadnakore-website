document.getElementById('volunteerForm').addEventListener('submit',function(e){
e.preventDefault();
alert('Volunteer registration submitted. Connect EmailJS to send emails.');
});
const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});