// function for filtering store items on the page.
function filterItems(){
    let input, filter, parent, i;
    input = document.getElementById('siteFilter');
    filter = input.value.toUpperCase();
    parent = document.getElementsByClassName('sr-item');


    for (i=0; i < parent.length; i++){
        let item = parent[i].getElementsByClassName('sr-name')[0];
        if(item){
            if(item.innerHTML.toUpperCase().indexOf(filter) > -1){
                parent[i].style.display = "initial";
            } else {
                parent[i].style.display = "none";
            }
        }
    }
}

function filterItems1(){
    let input, filter, parent, i;
    input = document.getElementById('siteFilter1');
    filter = input.value.toUpperCase();
    parent = document.getElementsByClassName('sr-item');


    for (i=0; i < parent.length; i++){
        let item = parent[i].getElementsByClassName('sr-name')[0];
        if(item){
            if(item.innerHTML.toUpperCase().indexOf(filter) > -1){
                parent[i].style.display = "initial";
            } else {
                parent[i].style.display = "none"
            }
        }
    }
}


function outOfStock(){
    let qty, span;
    qty = document.getElementsByClassName('sr-quantity');
    span = document.getElementsByClassName('out');

    if(qty.length.value === 0){
        qty.innerHTML = " ";
        span.innerHTML = "Out of Stock";
    }
}
outOfStock();


//AJAX