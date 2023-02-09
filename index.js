const container=document.querySelector(".container");
qrInput=container.querySelector("#enter");
generateBtn=container.querySelector(".gen button");
qrImage=container.querySelector(".image img");

generateBtn.addEventListener('click',()=>{
    let qrValue=qrInput.value;  /*value input */
    if(!qrValue) return;   //if input empty then prevent active class
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data="+qrValue;  //1 ghanta lag gaya
    container.classList.add("active");
});