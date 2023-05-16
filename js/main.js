document.addEventListener("DOMContentLoaded", ()=> {
    const inputTextareas = document.querySelectorAll('.contenedor-formularios input, .contenedor-formularios textarea');
    inputTextareas.forEach(inputTextarea => {
        inputTextarea.addEventListener('keyup', inputTextareaHandler);
        inputTextarea.addEventListener('blur', inputTextareaHandler);
        inputTextarea.addEventListener('focus', inputTextareaHandler);
    });

    function inputTextareaHandler(event) {
        const inputTextarea = event.target;
        const label = inputTextarea.previousElementSibling;
        const isEmpty = inputTextarea.value === '';
        label.classList.toggle('active', !isEmpty);
        label.classList.toggle('highlight', !isEmpty && event.type !== 'blur');
    }

    const tabLinks = document.querySelectorAll('.tab a');
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function (event) {
            event.preventDefault();
            const clickedTab = event.target.parentElement;
            clickedTab.classList.add('active');
            const siblingTabs = [...clickedTab.parentElement.children].filter(child => child !== clickedTab);
            siblingTabs.forEach(siblingTab => siblingTab.classList.remove('active'));
            const targetContent = document.querySelector(this.getAttribute('href'));
            const contentToHide = [...targetContent.parentElement.children].filter(child => child !== targetContent);
            contentToHide.forEach(content => content.style.display = 'none');
            targetContent.style.display = 'block';
        });
    });
});
