$(function(){

  var turn = "X";
  var player = "Y";





// $("td").each(function(index, div) {
//   $(div).on("click", function () {
//     this.innerHTML = "X"
//     this.addClass = "X"
// })
//   ;})



function makeX() {
$("td").each(function(index, div) {
  $(div).on("click", function () {
    this.innerHTML = turn
    this.className = turn
    $(".playerTurn")[0].innerHTML = "It is " + player + "'s turn";


    console.log(tdArray[0].innerHTML);
    if ((tdArray[0].innerHTML == "X" && tdArray[3].innerHTML == "X" && tdArray[0].innerHTML == "X" ) || (tdArray[1].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[7].innerHTML == "X" ) || (tdArray[2].innerHTML == "X" && tdArray[5].innerHTML == "X" && tdArray[8].innerHTML == "X" )
    || (tdArray[0].innerHTML == "X" && tdArray[1].innerHTML == "X" && tdArray[2].innerHTML == "X" ) ||(tdArray[3].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[5].innerHTML == "X" )
    || (tdArray[0].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[8].innerHTML == "X" ) ||(tdArray[2].innerHTML == "X" && tdArray[4].innerHTML == "X" && tdArray[6].innerHTML == "X" )) {
      $("td").html("X wins!")}


    if ((tdArray[0].innerHTML == "O" && tdArray[3].innerHTML == "O" && tdArray[0].innerHTML == "O" ) || (tdArray[1].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[7].innerHTML == "O" ) || (tdArray[2].innerHTML == "O" && tdArray[5].innerHTML == "O" && tdArray[8].innerHTML == "O" )
    || (tdArray[0].innerHTML == "O" && tdArray[1].innerHTML == "O" && tdArray[2].innerHTML == "O" ) ||(tdArray[3].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[5].innerHTML == "O" )
    || (tdArray[0].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[8].innerHTML == "O" ) ||(tdArray[2].innerHTML == "O" && tdArray[4].innerHTML == "O" && tdArray[6].innerHTML == "O" )) {
      $("td").html("O wins!")}


    turn == "X" ? turn = "O" : turn = "X"
    player == "O" ? player = "X" : player = "O"



})
  ;})}

  var tdArray = document.getElementsByTagName("td");


  // function makeY() {
  // $("td").each(function(index, div) {
  //   $(div).on("click", function () {
  //     this.innerHTML = turn
  //     this.className = turn
  //     turn = "x"
  //
  // })
  //   ;})}

function go () {
  if (turn == "X") {
    makeX()
  }
  else if (turn == "Y") {
    makeY()
  }
}





$("#reset").on("click", function () {

  $("td").html(" ")
  $("td").removeClass("X")
  //remove class
})
// Set up a loop adding 3 and making an array-- if all array is the same there is a winner
// if ($("td").attr("")) {
//   alert("X wins")
// }

go();


})
