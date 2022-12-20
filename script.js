var btn = document.getElementById('btn1')
var count = 0

function toggle(){
    count += 1;
    if(count %2 == 0){
        btn.innerHTML= 'toggle_off'
    }else{
        btn.innerHTML= 'toggle_on'
    }
}

