const numerosLength = document.querySelectorAll('.number').length;


for(i=0;i<numerosLength;i++){
    document.querySelectorAll('.number')[i].addEventListener('click',function(e){

        const numero = parseInt(this.innerHTML);

        const ShowNumber = document.querySelector('.Show');
     
       
        switch(numero){
            case 1 :
            ShowNumber.innerHTML+= 1;
            break;
        }


    });
}
