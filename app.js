// chapter 43-48 //
// Q1
function callAlert(){
    alert("Hello!")
}

function purchasing(){
    alert("Thanks for purchasing")
}

let counterValue = 0;
document.getElementById('increase').addEventListener('click', () => {
    counterValue++;
    document.getElementById('counter-value').textContent = counterValue;
});

document.getElementById('decrease').addEventListener('click', () => {
    counterValue--;
    document.getElementById('counter-value').textContent = counterValue;
});

function deleteRow(rowNum) {
    var table = document.getElementById("studentTable");
    table.deleteRow(rowNum);
}

// $(document).ready(function(){
//     $(".delete").click(function(){
//        $(this).closest("tr").remove();
//     });
//    });