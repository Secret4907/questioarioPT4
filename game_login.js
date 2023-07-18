function login(){
  const jogador1 = document.getElementById("p1Nome").value;
  const jogador2 = document.getElementById("p2Nome").value;
  
  if (jogador1 && jogador2 && jogador1 != jogador2) {
  localStorage.setItem("p1Nome", jogador1)
  localStorage.setItem("p2Nome", jogador2)
  
  location = "game.html"
}}