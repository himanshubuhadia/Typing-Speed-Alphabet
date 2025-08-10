function btn1() {
  let log = document.getElementById("input").value;
  console.log(`${log} is new player`);

  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let tamelagega = 10;
  let randomvalue = "";
  let score = 0;

  const outputElement = document.getElementById("output");
  outputElement.textContent = `Score = ${score}`;
  
  // Random initial value
  let pick = Math.floor(Math.random() * alphabets.length);
  randomvalue = alphabets[pick];
  document.getElementById("value").innerHTML = randomvalue;

  let timer;          // for 10 sec round timer
  let gameTimer;      // for 60 sec full game timer

  // Start the 10 sec round timer
  function starttimer() {
    timer = setInterval(function () {
      document.getElementById("count").innerText = tamelagega;
      tamelagega--;

      if (tamelagega < 0) {
        let pick = Math.floor(Math.random() * alphabets.length);
        randomvalue = alphabets[pick];
        document.getElementById("value").innerHTML = randomvalue;

        tamelagega = 10;
      }
    }, 1000);
  }

  // Start 60 sec game timer
  gameTimer = setTimeout(function () {
    clearInterval(timer); // stop the round timer
    document.removeEventListener("keydown", keyHandler); // stop key input
    document.getElementById("value").innerHTML = "Game Over!";
    document.getElementById("count").innerText = "";
  }, 60000); // 60 sec = 60000 ms

  // Keyboard input handler
  function keyHandler(event) {
    let pressedKey = event.key.toUpperCase();
    if (pressedKey === randomvalue) {
      score += 1;
    } else {
      score -= 1;
    }

    outputElement.textContent = `Score = ${score}`;

    // Reset next round
    clearInterval(timer);
    tamelagega = 10;
    let pick = Math.floor(Math.random() * alphabets.length);
    randomvalue = alphabets[pick];
    document.getElementById("value").innerHTML = randomvalue;
    starttimer();
  }

  document.addEventListener("keydown", keyHandler);

  // Start the first round
  starttimer();
}

["ashraf", ]