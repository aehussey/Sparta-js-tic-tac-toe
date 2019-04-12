$(function(){

function play() {
  goes = 0;
  var turn = "X";
  var player = "O";
  $("td").each(function(index, div) {
  $(div).on("click", function () {
    if (this.innerHTML == ("")) {
    this.innerHTML = turn
    this.className = turn
    $(".playerTurn")[0].innerHTML = "It is " + player + "'s turn";

    turn == "X" ? turn = "O" : turn = "X"
    goes ++
    player == "O" ? player = "X" : player = "O"


    result();
    }

    
    })
      })}



function result() {
  var tdArray = document.getElementsByTagName("td");

  if ((tdArray[0].innerHTML == "X" && tdArray[3].innerHTML == "X" && tdArray[6].innerHTML == "X" ) || (tdArray[1].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[7].innerHTML == "X" ) || (tdArray[2].innerHTML == "X" && tdArray[5].innerHTML == "X" && tdArray[8].innerHTML == "X" )
  || (tdArray[0].innerHTML == "X" && tdArray[1].innerHTML == "X" && tdArray[2].innerHTML == "X" ) ||(tdArray[3].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[5].innerHTML == "X" ) || (tdArray[6].innerHTML == "X" && tdArray[7].innerHTML == "X" && tdArray[8].innerHTML == "X" )
  || (tdArray[0].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[8].innerHTML == "X" ) ||(tdArray[2].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[6].innerHTML == "X" )) {
    $("td").html("X wins!") }

  else if ((tdArray[0].innerHTML == "O" && tdArray[3].innerHTML == "O" && tdArray[6].innerHTML == "O" ) || (tdArray[1].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[7].innerHTML == "O" ) || (tdArray[2].innerHTML == "O" && tdArray[5].innerHTML == "O" && tdArray[8].innerHTML == "O" )
  || (tdArray[0].innerHTML == "O" && tdArray[1].innerHTML == "O" && tdArray[2].innerHTML == "O" ) ||(tdArray[3].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[5].innerHTML == "O" ) || (tdArray[6].innerHTML == "X" && tdArray[7].innerHTML == "X" && tdArray[8].innerHTML == "X" )
  || (tdArray[0].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[8].innerHTML == "O" ) ||(tdArray[2].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[6].innerHTML == "O" )) {
    $("td").html("O wins!")}

  else if (goes == 9){
    $("td").html("It's a tie!")
  }
}



$("#reset").on("click", function () {

  $("td").html(" ")
  $("td").removeClass("X")
  goes = 0;

})


play();


})
