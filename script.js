document.querySelector('#getWeekday').addEventListener('click', findMusic)

function findMusic(){
  let weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'Thursady', 'friday', 'saturday']
  const d = new Date("June 25,2022");
  let day = weekday[d.getDay()]
  document.querySelector('#todayIs').innerText = `Today is ${day}. Here is some music for you`

  switch(d.getDay()){
    case 0:
      document.querySelector('#sunday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60')"
      document.querySelector('body').style.color = 'white'
      break;
    case 1:
      document.querySelector('#monday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1537812430632-e7759a1802fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60')"
      document.querySelector('body').style.color = 'white'
      break;
    case 2:
      document.querySelector('#tuesday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1540040599774-639d4a254c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
      document.querySelector('body').style.color = 'white'
      break;
    case 3:
      document.querySelector('#wednesday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1540202404-d0c7fe46a087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
      document.querySelector('body').style.color = 'white'
      break;
    case 4:
      document.querySelector('#thursday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80')"
      document.querySelector('body').style.color = 'white'
      break;
    case 5:
      document.querySelector('#friday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1540303795566-d6d68e274b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
      document.querySelector('body').style.color = 'white'
      break;
    case 6:
      document.querySelector('#saturday').classList.toggle('hidden')
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1540040599774-639d4a254c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')"
      document.querySelector('body').style.color = 'white'
      break;
  }
}

