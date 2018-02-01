  let interval = setInterval(count, 1000);

  function count() {
    let counter = parseInt(document.getElementById('counter').innerHTML);
    counter += 1;
    document.getElementById('counter').innerHTML = `${counter}`;
    return counter;
  }

  let negSymbol = document.getElementById('-');
  negSymbol.addEventListener('click', negative);

  function negative() {
    let counter = parseInt(document.getElementById('counter').innerHTML);
    counter -= 1;
    document.getElementById('counter').innerHTML = `${counter}`;
    return counter;
  }

  let posSymbol = document.getElementById('+');
  posSymbol.addEventListener('click', positive)

  function positive() {
    let counter = parseInt(document.getElementById('counter').innerHTML);
    counter += 1;
    document.getElementById('counter').innerHTML = `${counter}`;
    return counter;
  }

  let heartSymbol = document.getElementById('<3');
  heartSymbol.addEventListener('click', heart);

  function heart() {
    let number = document.getElementById('counter').innerHTML;
    let li = document.getElementById(`${number}`)
    if (li) {
      let splitArr = li.innerHTML.split(" ");
      heartCounter = parseInt(splitArr[4]);
      heartCounter += 1;
      li.innerHTML = `${number} has been liked ${heartCounter} times`;
    } else {
      let heartCounter = 1
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.setAttribute("id", `${number}`)
      li.innerHTML = `${number} has been liked ${heartCounter} times`;
      ul.append(li);
    }
  }

  let pauseButton = document.getElementById('pause');
  pauseButton.addEventListener('click', pauseGame);

  function pauseGame() {
    let pause = document.getElementById('pause');
    if (pause.innerHTML === ' pause ') {
      clearInterval(interval);
      pause.innerHTML = ' resume ';
    } else {
      interval = setInterval(count, 1000);
      pause.innerHTML = ' pause ';
    }
  };

  let commentTime = document.getElementById('submit');
  commentTime.addEventListener('click', function(event){
    event.preventDefault();
  });
  commentTime.addEventListener('click', comment);

  function comment() {
    var input = document.getElementsByTagName('input')[0];
    var text = input.value;
    let div = document.getElementById('list');
    let li = document.createElement('li');
    li.innerHTML = text;
    div.append(li);
    input.value = " "
  };
  
