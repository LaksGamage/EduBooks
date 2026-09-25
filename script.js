const search = document.getElementById('search');
search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);

    let book_name = document.querySelectorAll('h2.bname');
});