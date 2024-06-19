let deepu = document.getElementById('deepuBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i>success';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>error'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>invalid'

function click(mgs){
    let deepu = document.createElement('div')
    deepu.classList.add('deepu')
    deepu.innerHTML=msg;
    deepuBox.appendchild(deepu)

    if(msg.includes('error')){
        deepu.classList.add('error');

    }
    else if(msg.includes('invalid')){
        deepu.classList.add('invalid');
    }
    setTimeout(()=>{
        deepu.remove();
    },6000);
    
}