// DOM - Document Object Model

// Accessing the DOM
// document.getElementById('id')


document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const text = document.getElementById("text");


    // console.log(title);
// 
    // console.log(text.innerText);

    // getElementsByClassName
    const paragraphs = document.getElementsByClassName("paragraph");
    // console.log(paragraphs);

    // const mypar =  Array.from(paragraphs).find((p) => p.id === 'par');
    // console.log(mypar);
    

    const par = document.getElementById("par");
    // console.log(par);
    
    
    // getElementsByTagName

    const paragraphs2 = document.getElementsByTagName("p");
    // console.log(paragraphs2);
    
    // querySelector
    const allLiEls = document.getElementsByClassName("list_item");
    // console.log(allLiEls); 
    const firstLiEl = document.querySelector(".list2 .first");
    // console.log(firstLiEl);
    

    // Mofiying the DOM
    title.textContent = "Hello World 123";
    // const newHtml = {innerHTML: "<h3> My containr </h3> <h4>inner title</h4>"};
    // container = newHtml + container.innerHTML ;

    // console.log(container);
    
    container.setAttribute('class', 'my-container')
    title.setAttribute('class', 'my-title')
    title.style.color = "pink";
    title.style.backgroundColor = "black";
    title.style.borderRadius = "10px";

    // const btn = this.getElementsByTagName("button")[0];
    // btn.removeAttribute('disabled');
    // background-color



    // Events

    //click

    function sum(a, b) {
        return a + b;
    }


    const toggleContainer = (event) => {
        console.log(event);
        
        if(container.style.visibility === "hidden"){
            container.style.visibility = "visible";
        } else{
            container.style.visibility = "hidden";
        }  
    }
    
    btn.addEventListener("click", toggleContainer);

    select.addEventListener("change", toggleContainer);

    // mouseover
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "red";
    });
    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = "unset";
    });

    // keydown
    // keyup
        
    input.addEventListener("keydown", function (event) {
        console.log('keydown code: ', event.code);
    });
    
    input.addEventListener("keyup", function (event) {
        console.log('keyup code: ', event.code);
    });


    // Submit

    const form = document.getElementById("my_form");
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const result = document.getElementById("form_result");
    const submitBtn = document.getElementById("submit_btn");

    
    submitBtn.addEventListener("click", handleSubmit)
    form.addEventListener("submit", handleSubmit)

    function handleSubmit(event){
        event.preventDefault();

        const name = nameInput.value;

        if(name.length < 3){
            nameInput.style.border = "2px solid red";
            result.textContent = `Field 'Name' should have 3 or more letters`
        } else {
            nameInput.style.border = "2px solid green";
            result.textContent = `Hello ${name} ${surnameInput.value}`
        }
        
    }
});

// innerText

