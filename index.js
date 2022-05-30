window.addEventListener("load", function () {
    var box1 = document.getElementsByClassName("sub-container")[0];
    var box2 = document.getElementsByClassName("sub-container")[1];
    var box3 = document.getElementsByClassName("sub-container")[2];
    var box4 = document.getElementsByClassName("sub-container")[3];
    var box5 = document.getElementsByClassName("sub-container")[4];
    var box6 = document.getElementsByClassName("sub-container")[5];
    var box7 = document.getElementsByClassName("sub-container")[6];
    var box8 = document.getElementsByClassName("sub-container")[7];
    var box9 = document.getElementsByClassName("sub-container")[8];
    box1.addEventListener("click", playBox1);
    box2.addEventListener("click", playBox2);
    box3.addEventListener("click", playBox3);
    box4.addEventListener("click", playBox4);
    box5.addEventListener("click", playBox5);
    box6.addEventListener("click", playBox6);
    box7.addEventListener("click", playBox7);
    box8.addEventListener("click", playBox8);
    box9.addEventListener("click", playBox9);
    var player1 = true;
    function playBox1() {
        if(player1){
            if(box1.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box1.innerHTML = "X";
                player1 = false;
            }
        }
        else{
            if(box1.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box1.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500)
    }
    
    function playBox2() {
        if(player1){
            if(box2.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box2.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box2.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box2.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    
    function playBox3() {
        if(player1){
            if(box3.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box3.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box3.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box3.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    
    function playBox4() {
        if(player1){
            if(box4.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box4.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box4.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box4.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    
    function playBox5() {
        if(player1){
            if(box5.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box5.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box5.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box5.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    
    function playBox6() {
        if(player1){
            if(box6.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box6.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box6.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box6.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    
    function playBox7() {
        if(player1){
            if(box7.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box7.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box7.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box7.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    
    function playBox8() {
        if(player1){
            if(box8.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box8.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box8.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box8.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }

    function playBox9() {
        if(player1){
            if(box9.innerHTML== "O"){
                window.alert("Cannot Overwrite")
            }
            else {
                box9.innerHTML = "X"
                player1 = false;
            }
        }
        else{
            if(box9.innerHTML== "X"){
                window.alert("Cannot Overwrite")
            }
            else{
                box9.innerHTML = "O"
                player1 = true
            }
        }
        setTimeout(()=>{
            checkResult();
        }, 500) 
    }
    function checkResult() {
        if((box1.innerHTML=="X" && box2.innerHTML=="X" && box3.innerHTML=="X") || (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") || (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") || (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X") || (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") || (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") || (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X")){
            if(confirm("Player 1 has won, Let's play Again?")){
                box1.innerHTML = null;
                box2.innerHTML = null;
                box3.innerHTML = null;
                box4.innerHTML = null;
                box5.innerHTML = null;
                box6.innerHTML = null;
                box7.innerHTML = null;
                box8.innerHTML = null;
                box9.innerHTML = null;
                player1 = true;
            }
        } 
        else if((box1.innerHTML=="O" && box2.innerHTML=="O" && box3.innerHTML=="O") || (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") || (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") || (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O") || (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") || (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") || (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O")){
            if(confirm("Player 2 has won, Let's play again")){
                box1.innerHTML = null;
                box2.innerHTML = null;
                box3.innerHTML = null;
                box4.innerHTML = null;
                box5.innerHTML = null;
                box6.innerHTML = null;
                box7.innerHTML = null;
                box8.innerHTML = null;
                box9.innerHTML = null;
                player1 = true;
            }
        }
        else if((box1.innerHTML == "X" || box1.innerHTML == "O") && (box2.innerHTML == "X" || box2.innerHTML == "O") && (box3.innerHTML == "X" || box3.innerHTML == "O") && (box4.innerHTML == "X" || box4.innerHTML == "O") && (box5.innerHTML == "X" || box5.innerHTML == "O") && (box6.innerHTML == "X" || box6.innerHTML == "O") && (box7.innerHTML == "X" || box7.innerHTML == "O") && (box8.innerHTML == "X" || box8.innerHTML == "O") && (box9.innerHTML == "X" || box9.innerHTML == "O")){
            if(confirm("It's draw, Let's play again")){
                box1.innerHTML = null;
                box2.innerHTML = null;
                box3.innerHTML = null;
                box4.innerHTML = null;
                box5.innerHTML = null;
                box6.innerHTML = null;
                box7.innerHTML = null;
                box8.innerHTML = null;
                box9.innerHTML = null;
                player1 = true;
            }
        }     
    }
})