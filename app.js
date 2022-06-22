

let calc = document.getElementById("govno")
let resulttt = document.getElementById("result")
let  equals = document.getElementById("five")

calc.addEventListener("click" , function (event) {


    if (    event.target.dataset.rtx    ) {


        resulttt.innerText = resulttt.innerText.substring(0, resulttt.innerText.length - 1)

    }


    else  if (  !event.target.classList.contains("btn")      )

    {
        return;

    }


    else if (event.target.dataset.box       ) {

        resulttt.innerText =   eval(resulttt.innerText).toFixed(2)
    }

    else  if (event.target.dataset.vrot       ) {

        resulttt.innerText =   " "
    }


    else {

        resulttt.innerText = resulttt.innerText +  event.target.value

    }

})


