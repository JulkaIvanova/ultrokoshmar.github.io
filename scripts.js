// function output(textId){
//     let text = document.getElementById(textId);
//     text.style.display = blok;
// }


// function animation(objekt_of_zagruzki){
//     let body = document.querySelector(body);
//     body.style.display = None;
//     anime({
//         targets: objekt_of_zagruzki,
//         duration: 300,
//         rotate: 360,
//         easing: "linear"
//     }).finished.then(function(){
//         objekt_of_zagruzki.style.transform = "rotate(0deg)";
//         body.style.display = blok;
//     });
// }


// function calc_price(fistid, secondid) {
//     let fist = document.getElementById(fistid).value;
//     let second = document.getElementById(secondid).value;
//     if(fist == ""){
//         let r = document.querySelector(fistid);
//         r.style.border = "1px solid #AD4851";
//         setTimeout(function(){
//             let r = document.querySelector(fistid);
//             r.style.border = "#979797 3px solid";
//         }, 2000);

//     }
//     if(second == "" || second.lenth() < 8){
//         let r = document.querySelector(second);
//         r.style.border = "1px solid #AD4851";
//         setTimeout(function(){
//             let r = document.querySelector(second);
//             r.style.border = "#979797 3px solid";
//         }, 2000);
//     }           
// }

function output(textId){
    let text = document.getElementById(textId);
    text.style.display = blok;
}


function animation(objekt_of_zagruzki, b){
    let b = document.querySelector(b);
    b.style.display = none;
    let objekt = document.getElementById(objekt_of_zagruzki);
    objekt.style.display = blok;
    anime({
        targets: objekt,
        duration: 300,
        rotate: 360,
        easing: "linear"
    }).finished.then(function(){
        objekt.style.transform = "rotate(0deg)";
        b.style.display = blok;
        objekt.style.display = none;
    });
}


function calc_price(fistid, secondid) {
    let fist = document.getElementById(fistid).value;
    let second = document.getElementById(secondid).value;
    if(fist == "" || fist.length < 8){
        let r = document.getElementById(fistid);
        r.style.border = "1px solid #AD4851";
        setTimeout(function(){
            let r = document.getElementById(fistid);
            r.style.border = "#979797 3px solid";
        }, 2000);

    }
    if(second == '' || second.length < 8){
        let z = document.getElementById(secondid);
        z.style.border = "1px solid #AD4851";
        setTimeout(function(){
            let z = document.getElementById(secondid);
            z.style.border = "#979797 3px solid";
        }, 2000);
    }           
}