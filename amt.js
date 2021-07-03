 let nameText = document.getElementById('name').value;
 let btn = document.getElementById('btn');
 let rate = 6;
 let sp = document.getElementById('#span');
 let namelen;
 let finVal;

 function calc() {
     if (nameText === "") {
         console.log("please enter value")
     } else {
         namelen = nameText.length;
         sp.innerHTML = "Pay this amount: " + parseInt(namelen) * rate;


     }

 }



 btn.addEventListener('click', calc());