function toggleButton(){   
     
    const sideButton = document.getElementById('sidenav');
     const visibleNavbutton = sideButton.classList.toggle('sidenav-visible');
    
}

// let isElement1Visible = true;

//  function toggleElement(){
//    const element1 = document.getElementById('element1');
//    const element2 = document.getElementById('element2');
//    if (isElement1Visible){
//      element2.classList.add('slide-out');
//      element2.classList.remove('slide-in');
//       element1.classList.add('slide-in');
//       element1.classList.remove('slide-out');
//    }
//       else{
//         element1.classList.add('slide-out');
//         element1.classList.remove('slide-in');
//         element2.classList.add('slide-in')
//         element2.classList.remove('slide-out')
//    }
//    isElement1Visible =!isElement1Visible;
//  }
function toggleElement(){
  const hidebutton = document.querySelector('.secondInner-mobile');
 const itishidden = hidebutton.style.display ='flex'
}