let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
    let lst=document.createElement("li");
    lst.innerText=inp.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText="Delete";
    dltbtn.classList.add("delete");

    lst.appendChild(dltbtn);
    ul.appendChild(lst);
    console.log(inp.value);
    inp.value="" //to empty after take input
});

ul.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        let parentLi=e.target.parentElement;
        console.log(parentLi.innerText );
        parentLi.remove();
    }
});
