window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

    const from = localStorage.getItem('from');
    const to = localStorage.getItem('to');
    const date = localStorage.getItem('date')
    const select = localStorage.getItem('select')
    // const trainClass = JSON.parse(localStorage.getItem('train-class'))
    // console.log(trainClass);

    const trainSelect = document.getElementById('Trainclass');
    const trainSelectText = trainSelect.options[trainSelect.selectedIndex].text;
    // console.log(trainSelect, trainSelectText);

    document.getElementById('result-from').innerHTML = from;
    document.getElementById('result-to').innerHTML = to;
    document.getElementById('result-date').innerHTML = date;
    document.getElementById('result-class').innerText = trainSelectText;
    document.getElementById('result-select').innerHTML = select;

})

// document.getElementById('book-now').addEventListener('click', function(){
// const from = document.getElementById('result-from').innerText;
// const to = document.getElementById('result-to').innerText;
// const date = document.getElementById('result-date').innerText;
// const trainClass = document.getElementById('result-class').innerText;
// const select = document.getElementById('result-select').innerText;
// const ticketPrice = document.getElementById('total').innerText;
// })
function handlebooknow() {
    const from = document.getElementById('result-from').innerText;
    const to = document.getElementById('result-to').innerText;
    const date = document.getElementById('result-date').innerText;
    const trainClass = document.getElementById('result-class').innerText;
    const select = document.getElementById('result-select').innerText;
    const ticketPrice = document.getElementById('total').innerText;


    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */

    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("date", date);
    localStorage.setItem("trainClass", trainClass);
    localStorage.setItem("ticketPrice", ticketPrice);
    localStorage.setItem("select", select);

    return;
}
