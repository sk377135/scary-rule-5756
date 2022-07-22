    /////////main..ads array stored///////////
    let imgeLinks=["https://modesens.com/banner/12542/getimg/?img=%2Fbanner%2F20220711-modesens-Farfetch-1140x400-EN.jpg",

    "https://modesens.com/banner/11846/getimg/?img=%2Fbanner%2F20220713-modesens-Sale-1140x400-EN.jpg",
    "https://modesens.com/banner/12477/getimg/?img=%2Fbanner%2F20220719-modesens-SSENSE-1140x400-H-EN.jpg",
];


let leftBtn=document.querySelector("#leftbtn");

/////////////////////////////////
let rightBtn=document.querySelector("#rightbtn");
let crouser=document.querySelector("#crouser");

let imageState=0;
rightBtn.addEventListener("click",function(){
    imageState++;
    console.log(imageState) 
    if(imageState>imgeLinks.length-1){
        imageState=0;
        crouser.src=imgeLinks[imageState];
    }
    else{
        crouser.src=imgeLinks[imageState];
    }
})
leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imgeLinks.length-1;
        crouser.src=imgeLinks[imageState];
    }
    else{
        crouser.src=imgeLinks[imageState];
    }
})