function addUser(){
    var player1=document.getElementById("player1_input_name").value
    var player2=document.getElementById("player2_input_name").value
    localStorage.setItem("player1_name",player1)
    localStorage.setItem("player2_name",player2)
    }
    