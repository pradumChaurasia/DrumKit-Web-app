let drums = document.querySelectorAll('.btn').length;


for (let i = 0; i < drums; i++) {

    let db = document.querySelectorAll('.btn')[i]
    db.addEventListener('click', function() {

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML)


       
    });

    document.addEventListener('keypress',(event)=>{
        makeSound(event.key)
        addAnimation(event.key)
    })

    function makeSound(key){
        switch (key) {
            case "w":
                let audio1 = new Audio('tom-1.mp3');
                audio1.play();
                break;

            case "a":
                let audio2 = new Audio('tom-2.mp3');
                audio2.play();
                break;
            case "s":
                let audio3 = new Audio('tom-3.mp3');
                audio3.play();
                break;

            case "d":
                let audio4 = new Audio('tom-4.mp3');
                audio4.play();
                break;

            case "j":
                let audio5 = new Audio('snare.mp3');
                audio5.play();
                break;

            case "k":
                let audio6 = new Audio('crash.mp3');
                audio6.play();
                break;

            case "l":
                let audio7 = new Audio('kick-bass.mp3');
                audio7.play();
                break;
            default:
                console.log(key)
                
        }
    }

    function addAnimation(currentKey){

        var activeButton = document.querySelector("."+currentKey)
        activeButton.classList.add('animation')
        setTimeout(() => {
           activeButton.classList.remove('animation') 
        }, 100);
    }
}
