let cups= document.querySelectorAll('.little-cup')

    cups.forEach(cup => {
        cup.addEventListener('click', function(){
            let next = this.nextElementSibling
            let prev=this
           let count=0
            while(prev!=null){
                prev.classList.add('fill')
                prev=prev.previousElementSibling
                count++
                let height=1.64*count

                document.querySelector('.big-cup-fill').style.height = height+'rem'
                if(height>6.56){
                    document.querySelector('h4').style.color='white'
                    document.querySelector('h6').style.color='white'
                } else {
                    document.querySelector('h4').style.color='blue'
                    document.querySelector('h6').style.color='blue'
                }

            }
            while(next!=null){
                next.classList.remove('fill')
                next=next.nextElementSibling
               
            }
         
        }
        
    )}); 
    






    // let c1 = document.getElementById('c1')
    // let c2 = document.getElementById('c2')
    // let c3 = document.getElementById('c3')
    // let c4 = document.getElementById('c4')
    // let c5 = document.getElementById('c5')
    // let c6 = document.getElementById('c6')
    // let c7 = document.getElementById('c7')
    // let c8 = document.getElementById('c8')

    // c1.addEventListener('click', function () {
    //     c1.classList.add('fill')
    // })

    // c2.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')

    // })


    // c3.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')
    //     c3.classList.add('fill')

    // })

    // c4.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')
    //     c3.classList.add('fill')
    //     c4.classList.add('fill')

    // })

    // c5.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')
    //     c3.classList.add('fill')
    //     c4.classList.add('fill')
    //     c5.classList.add('fill')

    // })

    // c6.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')
    //     c3.classList.add('fill')
    //     c4.classList.add('fill')
    //     c5.classList.add('fill')
    //     c6.classList.add('fill')

    // })

    // c7.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')
    //     c3.classList.add('fill')
    //     c4.classList.add('fill')
    //     c5.classList.add('fill')
    //     c6.classList.add('fill')
    //     c7.classList.add('fill')

    // })

    // c8.addEventListener('click', function () {
    //     c1.classList.add('fill')
    //     c2.classList.add('fill')
    //     c3.classList.add('fill')
    //     c4.classList.add('fill')
    //     c5.classList.add('fill')
    //     c6.classList.add('fill')
    //     c7.classList.add('fill')
    //     c8.classList.add('fill')

    // })