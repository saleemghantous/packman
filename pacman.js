var context = canvas.getContext("2d");
    var shape = new Object();
    var board;
    var score;
    var pac_color;
    var start_time;
    var time_elapsed;
    var interval;
	//var interval1;
	var interval2;
	var interval3;
	var intervalthegood;
    //saleem 
    var NUMBEROFBALL ; //this all variablse is for the setting of the game "acoording to that you must do the game"
    var NUMBEROFMONSTER;
    var point5;
    var point10;
    var point15 ;
    var TIME; 
    var up ;
    var down ;
    var left; 
    var right ;
    var logout=false;
    var sound =false;    
    var x = document.getElementById("myAudio"); 
    //all this variables for other function
    var expanded = false;
    var UserName =new Array(50);
    var Password =new Array(50);
    UserName[0]="a";
    Password[0]="a";
    counter=1;
    var w = document.getElementById("pop4");
    w.style.display="none";
    about();
    playAudio();
    welcome();
	var interval1;
	var theface;
	var monster1;
	var monster;
	var monster2;
	var timeOfgame
	var maxscore;
	var mylife=3;
	var goodfood;
	var thegoodwaseated;
	monster = new Object();
	monster.x=0;
	monster.y=0;
	monster1 = new Object();
	monster1.x=9;
	monster1.y=0;
	monster2 = new Object();
	monster2.x=0;
	monster2.y=9;
	clock = new Object();
	clock.x=0;
	clock.y=0;
	var myArray = ['red','oragne','green','white','black','fuchsia','grey'];   
    var number=['1','2','3'];

    function random_item(items)
    {
    return items[Math.floor(Math.random()*items.length)];
         
    }
    
function next(){
    NUMBEROFMONSTER = document.getElementById("monster").value;
    if(NUMBEROFMONSTER=="random"){
        NUMBEROFMONSTER=random_item(number)
    }
    NUMBEROFMONSTER=parseInt(NUMBEROFMONSTER);
    point5 = document.getElementById("point5").value;
    point10 = document.getElementById("point10").value;
    point15 = document.getElementById("point15").value;
    NUMBEROFBALL =document.getElementById("NUMBEROFBALL").value;
    NUMBEROFBALL=parseInt(NUMBEROFBALL);
    TIME =document.getElementById("TIME").value;
    TIME=parseInt(TIME);
    up =document.getElementById("up").value;
    up="Key"+up.toUpperCase();
    down =document.getElementById("down").value;
    down="Key"+down.toUpperCase();
    right =document.getElementById("right").value;
    right="Key"+right.toUpperCase();
    left =document.getElementById("left").value;
    left="Key"+left.toUpperCase();
    if(up.length>4){
        alert("to up please choose only one key")
    }    
    else if(down.length>4){
        alert("to down please choose only one key")
    } 
    else if(right.length>4){
        alert("to right please choose only one key")
    }   
    else if(left.length>4){
        alert("to left please choose only one key")
    }  
    else if(NUMBEROFBALL<50||NUMBEROFBALL>90||isNaN(NUMBEROFBALL)){
        alert("please select number of ball between 50-90")
    } 
    else if(TIME<60||isNaN(TIME)){
        alert("please set time more than 60 sec")
    } 
    else{
       hide();
        var w1 = document.getElementById("footer");
        w1.style.display="none";
        var w2 = document.getElementById("menu");
        w2.style.display="none";
        var w = document.getElementById("initial");
        w.style.display="block";
        Start();
    }
}


function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function about(){
       var modal = document.getElementById('myModal');
       var btn = document.getElementById("myBtn");
       var span = document.getElementsByClassName("close")[0];
       btn.onclick = function() {
       modal.style.display = "block";
                    }
        span.onclick = function() {
        modal.style.display = "none";
                    }
        window.onclick = function(event) {
        if (event.target == modal) {
         modal.style.display = "none";
                }
            }
            
            }

function checkUser(){
        var inputText = document.getElementById('USERNAME').value;
        var inputText1 =document.getElementById("PASSWORD").value;
        var check =0;
        for(var i=0; i<UserName.length; i++) {
        if(UserName[i]!=null){
        if(inputText==UserName[i]&&inputText1==Password[i]){
        logout=true;
        setting();
        check =1 ;
        break;
        }
         }
        }
        if(check==0){
        alert("The User Name Or The Password Is Incorccet! ");
        }
    }

function play(){
    logout=true;
    hide();
    var x = document.getElementById("initial");
    x.style.display="block";
    Start();
    }     


function hide(){
    if(logout==true){
        var w = document.getElementById("pop1");
        w.style.display="none";
        var z = document.getElementById("pop2");
        z.style.display="none";
        var zz = document.getElementById("pop3");
        zz.style.display="none";
        var ww = document.getElementById("pop4");
        ww.style.display="block";
    }
    else{
        var w = document.getElementById("pop1");
        w.style.display="block";
        var z = document.getElementById("pop2");
        z.style.display="block";
        var zz = document.getElementById("pop3");
        zz.style.display="block";
        var ww = document.getElementById("pop4");
        ww.style.display="none";
    }
    var x = document.getElementById("initial");
    x.style.display="none";
    var y = document.getElementById("welcome");
    y.style.display="none";
    var xx = document.getElementById("login");
    xx.style.display="none";
    var zxx = document.getElementById("register");
    zxx.style.display="none";
    var wwe = document.getElementById("setting");
    wwe.style.display="none";
    var wwr = document.getElementById("result");
    wwr.style.display="none";
    var w1 = document.getElementById("footer");
        w1.style.display="block";
        var w2 = document.getElementById("menu");
        w2.style.display="block";
}

function welcome(){
    hide();
    var y = document.getElementById("welcome");
    y.style.display="block";   
}

function login(){
        hide();
        var z = document.getElementById("login");
        z.style.display="block";
    }

function register(){
         hide();
        var z = document.getElementById("register");
        z.style.display="block";
}

function setting(){
hide();

var x = document.getElementById("setting");
        x.style.display="block";
}



/////

$(document).ready(function() {
      $('.error').hide();
      $('#submit').click(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var password =$('#password').val();
        var password2 =$('#password2').val();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        if(name== ''||email== ''||password== ''||password2== ''||fname== ''||lname== ''){
          alert("Please Fill All Fields")
        }
        else if(IsEmail(email)==false){  //check if the mail is valid mail
          alert("Please Enter Valid  Email")
         }
         else if(legalname(fname)==true){  //check if the mail is valid mail
          alert("Please Enter First Name Without Numbers")
         }
         else if(legalname(lname)==true){  //check if the mail is valid mail
          alert("Please Enter First Name Without Numbers")
         }
         else if(password!==password2){  //check if the mail is valid mail
          alert("The Passwords Not Matches")
         }
         else if(legalPassword(password)==false||legalname(password)==false||password.length<8){  //check if the mail is valid mail
          alert("The Password Need To Contains Characters And Numbers ,Length 8 ")
         }
         else{
             add(name,password);
            alert("Your Registration Is Done!!")
            logout=true;
            hide();
            var x = document.getElementById("setting");
             x.style.display="block";
         }
        $.post("", $("#myform").serialize(),  function(response) {
          $('#myform').fadeOut('slow',function(){
          $('#correct').html(response);
          $('#correct').fadeIn('slow');
       });
     });
    return false;
  });
 });
 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

function add(name ,password){
    UserName[counter]=name;
    Password[counter]=password;
    counter++;
}

function legalname(name){
    var regex = RegExp('0');
    var regex1 = RegExp('1');
    var regex2 = RegExp('2');
    var regex3 = RegExp('3');
    var regex4 = RegExp('4');
    var regex5 = RegExp('5');
    var regex6 = RegExp('6');
    var regex7 = RegExp('7');
    var regex8 = RegExp('8');
    var regex9 = RegExp('9');
    return regex.test(name)||regex1.test(name)||regex2.test(name)||regex3.test(name)||regex4.test(name)||regex5.test(name)||regex6.test(name)||regex7.test(name)||regex8.test(name)||regex9.test(name);
}

function legalPassword(password){
    var regex =/[a-zA-Z]*$/
    return regex.test(password)
}

var myAudio = document.getElementById("music");
var isPlaying = false;

function logOff(){
    logout=false;
    hide();
    welcome();
    document.getElementById("USERNAME").value='';
    document.getElementById("PASSWORD").value='';
    document.getElementById("up").value='';
    document.getElementById("down").value='';
    document.getElementById("left").value='';
    document.getElementById("right").value='';
    document.getElementById("point5").value='random';
    document.getElementById("point10").value='random';
    document.getElementById("point15").value='random';
    document.getElementById("monster").value='random';
    document.getElementById("name").value='';
    document.getElementById("password").value='';
    document.getElementById("password2").value='';
    document.getElementById("fname").value='';
    document.getElementById("lname").value='';
    document.getElementById("TIME").value='';
    document.getElementById("email").value='';
    document.getElementById("NUMBEROFBALL").value='';
    document.getElementById("date").value='2000-01-01';
}

function playAudio() { 
    if(sound==true){
          x.play(); 
         sound=false;
    }
    else{
        x.pause();
        sound=true;
    }
} 

//////

function Start() {
	    //console.log(NUMBEROFMONSTER);
		     window.clearInterval(interval);
			window.clearInterval(interval1);
			window.clearInterval(interval2);
			 window.clearInterval(interval3);
             window.clearInterval(intervalthegood);	
        board = new Array();
		thegoodwaseated=false;
        score = 0;
		mylife=3;
		//time_elapsed=0;
        pac_color = "yellow";
		timeOfgame=TIME;
        var cnt =100 ;
        var food_remain = NUMBEROFBALL;
		//console.log(NUMBEROFBALL);
		var food_point5= food_remain*0.6;
		var food_point10= food_remain*0.3;
		var food_point15= food_remain*0.1;
		maxscore=5*food_point5+10*food_point10+15*food_point15;
		//console.log(food_point15);	 
        var pacman_remain = 1;
        start_time = new Date();
        for (var i = 0; i < 10; i++) {
            board[i] = new Array();
            //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
            for (var j = 0; j < 10; j++) {
                if ((i === 2 && j === 3) || (i === 3 && j === 3) || (i === 7 && j === 3) || (i === 8 && j === 3) || (i === 2 && j ===7 ) ||(i === 3 && j ===7 ) ||(i === 7 && j ===7 ) ||(i === 8 && j ===7 )) {
                    board[i][j] = 4;
                } else {
					
					var randomNum = Math.random();
                    if (randomNum <= 1.0 * food_remain / cnt) {
						if(food_point5>0){
                        food_remain--;
						food_point5--;
                        board[i][j] = 1;
						}else if(food_point10>0){
                         food_remain--;
						 food_point10--;
                         board[i][j] = 1.1;
						}else if(food_point15 >0){
							food_remain--;
							food_point15--;
							board[i][j]=1.2;
						}
                    } else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
                        shape.i = i;
                        shape.j = j;
                        pacman_remain--;
                        board[i][j] = 2;
                    } else {
                        board[i][j] = 0;
                    }
                    cnt--;
                }
            }
        }
		var empty= findRandomEmptyCell(board);
		goodfood = new Object();
	    goodfood.x=empty[0];
	    goodfood.y=empty[1];
		 empty= findRandomEmptyCell(board);
		//	console.log(embpy);
		board[empty[0]][empty[1]] = 5;
        while (food_remain > 0) {
            var emptyCell = findRandomEmptyCell(board);
				if(food_point5>0){
                        food_remain--;
						food_point5--;
                        board[emptyCell[0]][emptyCell[1]] = 1;
						}else if(food_point10>0){
                         food_remain--;
						 food_point10--;
                         board[emptyCell[0]][emptyCell[1]] = 1.1;
						}else if(food_point15 >0){
							food_remain--;
							food_point15--;
							//console.log(board);
							//console.log(emptyCell);
							board[emptyCell[0]][emptyCell[1]]=1.2;
						}
            /*board[emptyCell[0]][emptyCell[1]] = 1;
            food_remain--;*/
        }
        keysDown = {};
        addEventListener("keydown", function (e) {
            keysDown[e.code] = true;
        }, false);
        addEventListener("keyup", function (e) {
            keysDown[e.code] = false;
        }, false);
		        addEventListener("keypress", function (e) {
            keysDown[e.code] = true;
        }, true);
        interval = setInterval(UpdatePosition, 150);
		interval1 = setInterval(Drawthemonster, 300);
		if(NUMBEROFMONSTER>1)
		interval2 = setInterval(Drawthemonster1, 300);
	    if(NUMBEROFMONSTER>2)
		interval3 = setInterval(Drawthemonster2, 300);
	    intervalthegood= setInterval(DrawThegood,300);
    }


    function findRandomEmptyCell(board) {
        var i = Math.floor((Math.random() * 9) + 1);
        var j = Math.floor((Math.random() * 9) + 1);
		//console.log(i);
		//console.log(j);
		//console.log(board);
        while (board[i][j] !== 0) {
            i = Math.floor((Math.random() * 9) + 1);
            j = Math.floor((Math.random() * 9) + 1);
        }
		//console.log[i,j];
        return [i, j];
    }

    /**
     * @return {number}
     */
    function GetKeyPressed() {
        if (keysDown['ArrowUp']|| keysDown[up]) {
            return 1;
        }
        if (keysDown['ArrowDown']|| keysDown[down]) {
            return 2;
        }
        if (keysDown['ArrowLeft']|| keysDown[left]) {
            return 3;
        }
        if (keysDown['ArrowRight']|| keysDown[right]) {
            return 4;
        }
    }

    function Draw() {

	
	/*var img=new Image();
        img.src="monster1.jpg"; */
        console.log(mylife);
		var imgofclock = new Image();
		imgofclock.src="clock.jpg";	
        context.clearRect(0, 0, canvas.width, canvas.height); //clean board
        lblScore.value = score;
        lblTime.value = time_elapsed;
        document.getElementById("demo").innerHTML =  mylife;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var center = new Object();
                center.x = i * 60 + 30;
                center.y = j * 60 + 30;
				
				//monster11.x=60*i;
				//monster11.y=60*j;
				//context.drawImage(img,monster11.x, monster11.y, 50,50  );
                if (board[i][j] === 2) {
					//context.drawImage(img,monster1.x*60, monster1.y*60, 50,50  );
                    context.beginPath();
					if(theface===4){
				    context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
					}else
                    if(theface===3){
						context.arc(center.x-3, center.y, 30, Math.PI-(0.15 * Math.PI), 1.2*Math.PI, true); // half circle
						context.lineTo(center.x, center.y);
                        context.fillStyle = pac_color; //color
						context.fill();
						context.beginPath();
						context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
						context.fillStyle = "black"; //color
						context.fill();
					}else
				    if(theface===1){
						context.arc(center.x-3, center.y, 30, -0.3*Math.PI, 1.3*Math.PI); // half circle // half circle
						context.lineTo(center.x, center.y);
                        context.fillStyle = pac_color; //color
						context.fill();
						context.beginPath();
						context.arc(center.x + 12, center.y +5, 5, 0, 2 * Math.PI); // circle
						context.fillStyle = "black"; //color
						context.fill();
					}else
				   /* if(keysDown['ArrowDown'])*/{
						context.arc(center.x-3, center.y, 30, 0.4*Math.PI,0.7*Math.PI, true); // half circle // half circle
						context.lineTo(center.x, center.y);
                        context.fillStyle = pac_color; //color
						context.fill();
						context.beginPath();
						context.arc(center.x + 12, center.y +5, 5, 0, 2 * Math.PI); // circle
						context.fillStyle = "black"; //color
						context.fill();
					}
                } else if (board[i][j] === 1 || board[i][j] === 1.1 || board[i][j] === 1.2 ) {
                    context.beginPath();
                    context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
                    if(board[i][j] === 1){
                    if(point5=="random"){
                        point5=random_item(myArray);
                    }
                    else{
                    context.fillStyle = point5	; //color
                    }
                }
					if(board[i][j] === 1.1){
                        if(point10=="random"){
                            point10=random_item(myArray);
                        }
                        else{
                        context.fillStyle = point10	; //color
                        }
                    }
					if(board[i][j] === 1.2){
                        if(point15=="random"){
                            point15=random_item(myArray);
                        }
                        else{
                        context.fillStyle = point15	; //color
                        }
                    }
                    context.fill();
                } else if (board[i][j] === 4) {
                    context.beginPath();
                    context.rect(center.x - 30, center.y - 30, 60, 60);
                    context.fillStyle = "grey"; //color
                    context.fill();
                }else if(board[i][j]===5){
					context.drawImage(imgofclock,i*60, j*60, 50,50  );
				}
            }
        }


    }

    function UpdatePosition() {
        board[shape.i][shape.j] = 0;
        var x = GetKeyPressed();
		
        if (x === 1) {
            if (shape.j > 0 && board[shape.i][shape.j - 1] !== 4) {
				theface=x;
                shape.j--;
            }
        }
        if (x === 2) {
            if (shape.j < 9 && board[shape.i][shape.j + 1] !== 4) {
				theface=x;
                shape.j++;
            }
        }
        if (x === 3) {
            if (shape.i > 0 && board[shape.i - 1][shape.j] !== 4) {
				theface=x;
                shape.i--;
            }
        }
        if (x === 4) {
            if (shape.i < 9 && board[shape.i + 1][shape.j] !== 4) {
				theface=x;
                shape.i++;
            }
        }
        if (board[shape.i][shape.j] === 1) {
            score=score+5;
        }
		if (board[shape.i][shape.j] === 1.1) {
            score=score+10;
        }
		if (board[shape.i][shape.j] === 1.2) {
            score=score+15;
        }
		if (board[shape.i][shape.j] === 5)
			timeOfgame=timeOfgame+10;
        board[shape.i][shape.j] = 2;
        var currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 20 && time_elapsed <= 10) {
            pac_color = "green";
        }
		if(time_elapsed >= timeOfgame){
			 window.clearInterval(interval);
			 window.clearInterval(interval1);
			 window.clearInterval(interval2);
			 window.clearInterval(interval3);
			 window.clearInterval(intervalthegood);			 
            window.alert("You can do better");
            othergame();

		}
		if(mylife==0){
			 window.clearInterval(interval);
			 window.clearInterval(interval1);
			  window.clearInterval(interval2);
			 window.clearInterval(interval3);
			 window.clearInterval(intervalthegood);	
            window.alert("You Lost!");
            othergame();

		}
        if (score === maxscore) {
            window.clearInterval(interval);
			window.clearInterval(interval1);
			window.clearInterval(interval2);
			 window.clearInterval(interval3);
             window.clearInterval(intervalthegood);	
             alert("We have a Winner!!!");
            othergame();
        } else {
			//console.log(x);
            Draw();		
        }
    }
    
    
    function othergame(){
        hide();
        document.getElementById("USERNAME").value='';
    document.getElementById("PASSWORD").value='';
    document.getElementById("up").value='';
    document.getElementById("down").value='';
    document.getElementById("left").value='';
    document.getElementById("right").value='';
    document.getElementById("point5").value='random';
    document.getElementById("point10").value='random';
    document.getElementById("point15").value='random';
    document.getElementById("monster").value='random';
    document.getElementById("name").value='';
    document.getElementById("password").value='';
    document.getElementById("password2").value='';
    document.getElementById("fname").value='';
    document.getElementById("lname").value='';
    document.getElementById("TIME").value='';
    document.getElementById("email").value='';
    document.getElementById("NUMBEROFBALL").value='';
    document.getElementById("date").value='2000-01-01';
        var wwe = document.getElementById("result");
        wwe.style.display="block";
    
    }

	function Drawthemonster(){
		//console.log("dd");
		var img=new Image();
        img.src="monster1.jpg"; 
		//console.log(shape.i);
		var emm=updatepositonofmonster(monster1.x,monster1.y);
		monster1.x=emm[0];
		monster1.y=emm[1];
		//console.log(monster1.x);
			context.drawImage(img,monster1.x*60, monster1.y*60, 50,50  );
			if(board[monster1.x][monster1.y] === 2){
				monster.x=0;
				monster.y=0;
				monster1.x=9;
				monster1.y=0;
				monster2.x=0;
				monster2.y=9;
				//do it random...
				board[shape.i][shape.j]=0;
			    var emptyCell = findRandomEmptyCell(board);
            //board[emptyCell[0]][emptyCell[1]] = 1;
				shape.i=emptyCell[0];
				shape.j=emptyCell[1];
				board[shape.i][shape.j]=2;
				score=score-10;
				maxscore=maxscore-10;
				mylife--;
				//Start();
			}
				
			//context.drawImage(img,9*60, 9*60, 50,50  );
		
	}
	
	
	
	////////////
	
	
	
		function Drawthemonster1(){
		//console.log("dd");
		var img1=new Image();
        img1.src="monster.png"; 
		//console.log(shape.i);
		var emm=updatepositonofmonster(monster.x,monster.y);
		monster.x=emm[0];
		monster.y=emm[1];
		//console.log(monster1.x);
			context.drawImage(img1,monster.x*60, monster.y*60, 50,50  );
			if(board[monster.x][monster.y] === 2){
				monster.x=0;
				monster.y=0;
				monster1.x=9;
				monster1.y=0;
				monster2.x=0;
				monster2.y=9;
				//do it random...
				board[shape.i][shape.j]=0;
			    var emptyCell = findRandomEmptyCell(board);
            //board[emptyCell[0]][emptyCell[1]] = 1;
				shape.i=emptyCell[0];
				shape.j=emptyCell[1];
				board[shape.i][shape.j]=2;
				mylife--;
								score=score-10;
				maxscore=maxscore-10;
				//Start();
			}
				
			//context.drawImage(img,9*60, 9*60, 50,50  );
		
	}
	
	
	
	function Drawthemonster2(){
		//console.log("dd");
		//console.log(monster2);
		var img2=new Image();
        img2.src="monster2.png"; 
		//console.log(shape.i);
		var emm=updatepositonofmonster(monster2.x,monster2.y);
		monster2.x=emm[0];
		monster2.y=emm[1];
		//console.log(monster1.x);
			context.drawImage(img2,monster2.x*60, monster2.y*60, 50,50  );
			if(board[monster2.x][monster2.y] === 2){
				monster.x=0;
				monster.y=0;
				monster1.x=9;
				monster1.y=0;
				monster2.x=0;
				monster2.y=9;
				//do it random.
				//do it random...
				board[shape.i][shape.j]=0;
			    var emptyCell = findRandomEmptyCell(board);
            //board[emptyCell[0]][emptyCell[1]] = 1;
				shape.i=emptyCell[0];
				shape.j=emptyCell[1];
				board[shape.i][shape.j]=2;
				mylife--;
				score=score-10;
				maxscore=maxscore-10;
				//Start();
			}
				
			//context.drawImage(img,9*60, 9*60, 50,50  );
		
	}
	
	
		function updatepositonofmonster(i,j){
		var disx = i- shape.i;
		var disy= j-shape.j;
		//console.log(monster1.x+"x");
		//console.log(monster1.y+"y");
		if(disx>0&&disy>0){
			
			if(disx>disy   ){
				if(inrange(i-1,j)){
				        i=i-1;
				}else {
					var em= randommove(i,j,i-1,j);
					i=em[0];
					j=em[1];
					}
			}else{
				if( inrange(i,j-1)){
				j--;
				}else {
					var em= randommove(i,j,i,j-1);

					i=em[0];
					j=em[1];
				}
			}
		}else if(disx<0 && disy<0){
	
			if(disx>disy){
				if(inrange(i+1,j)){
				i++;
				}else{
					var em= randommove(i,j,i+1,j);
					i=em[0];
					j=em[1];
				}
			}else{
				if( inrange(i,j+1)){
				j++;
				}else{
				    var em= randommove(i,j,i,j+1);
					i=em[0];
					j=em[1];
				}
			}
		}else if(disx>0){
			
			if(disx>disy*-1 ){
				if(inrange(i-1,j)){
				i--;
				}else {
					var em= randommove(i,j,i-1,j);
					i=em[0];
					j=em[1];
					}
			}else{
				if( inrange(i,j+1)){
				j++;
				}else{
					var em= randommove(i,j,i,j+1);
					i=em[0];
					j=em[1];
				}
			}
		}else {
			if(disx*-1>disy  ){
				if(inrange(i+1,j)){
				i++;
				}else {					
				var em= randommove(i,j,i+1,j);
					i=em[0];
					j=em[1];
					}
			}else{
				if( inrange(i,j-1)){
				j--;
				}else{
					var em= randommove(i,j,i,j-1);
					i=em[0];
					j=em[1];
				}
			}
		}
		return [i,j];
	}
	
		function DrawThegood(){
			//console.log("ff");
		var imggood=new Image();
        imggood.src="good.jpg"; 
		var x = Math.floor((Math.random() * 4) + 1);
		//console.log(x);
		var i;
		var j;
		if(x==4){
			i=goodfood.x +1;
			j=goodfood.y ;
		}
		if(x==1){
			i=goodfood.x ;
			j=goodfood.y+1 ;
		}
		if(x==2){
			i=goodfood.x-1 ;
			j=goodfood.y ;
		}
		if(x==3){
			i=goodfood.x ;
			j=goodfood.y-1 ;
		}
		while(!inrange(i,j)){
		 x = Math.floor((Math.random() * 3) + 1);
		  if(x==0){
			i=goodfood.x +1;
			j=goodfood.y ;
		  }
		  if(x==1){
			i=goodfood.x ;
			j=goodfood.y+1 ;
		  }
		  if(x==2){
			i=goodfood.x-1 ;
			j=goodfood.y ;
		  }
		  if(x==3){
			i=goodfood.x ;
			j=goodfood.y-1 ;
		  }
		}
		goodfood.x=i;
		goodfood.y=j;
		if(!thegoodwaseated)
		context.drawImage(imggood,goodfood.x*60, goodfood.y*60, 50,50  );
		
		if(board[goodfood.x][goodfood.y] === 2){
			maxscore=maxscore+50;
			score=score+50;
			thegoodwaseated=true;
		}
	}
	
			function randommove(x,y,z,w){
			i=z;
			j=w;
		while(!inrange(i,j)){
		 xx = Math.floor((Math.random() * 3) + 1);
		  if(xx==0){
			i=x +1;
			j=y;
		  }
		  if(xx==1){
			i=x ;
			j=y+1 ;
		  }
		  if(xx==2){
			i=x-1 ;
			j=y ;
		  }
		  if(xx==3){
			i=x ;
			j=y-1 ;
		  }
		}
		return [i,j];
		
	}
	
	function inrange(x,y){
		if(x>=0 && y>= 0 && x< 10 && y< 10 && board[x][y] !== 4 ){
			return true
		}else
			return false;
	}
/*function Start() {
        board = new Array();
        score = 0;
        pac_color = "yellow";
        var cnt = TIME;
        var food_remain = NUMBEROFBALL;
        var pacman_remain = 1;
        start_time = new Date();
        for (var i = 0; i < 10; i++) {
            board[i] = new Array();
            //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
            for (var j = 0; j < 10; j++) {
                if ((i === 3 && j === 3) || (i === 3 && j === 4) || (i === 3 && j === 5) || (i === 6 && j === 1) || (i === 6 && j === 2)) {
                    board[i][j] = 4;
                } else {
                    var randomNum = Math.random();
                    if (randomNum <= 1.0 * food_remain / cnt) {
                        food_remain--;
                        board[i][j] = 1;
                    } else if (randomNum < 1.0 * (pacman_remain + food_remain) / cnt) {
                        shape.i = i;
                        shape.j = j;
                        pacman_remain--;
                        board[i][j] = 2;
                    } else {
                        board[i][j] = 0;
                    }
                    cnt--;
                }
            }
        }
        while (food_remain > 0) {
            var emptyCell = findRandomEmptyCell(board);
            board[emptyCell[0]][emptyCell[1]] = 1;
            food_remain--;
        }
        keysDown = {};
        addEventListener("keydown", function (e) {
            keysDown[e.code] = true;
        }, false);
        addEventListener("keyup", function (e) {
            keysDown[e.code] = false;
        }, false);
        interval = setInterval(UpdatePosition, 250);
    }





    function findRandomEmptyCell(board) {
        var i = Math.floor((Math.random() * 9) + 1);
        var j = Math.floor((Math.random() * 9) + 1);
        while (board[i][j] !== 0) {
            i = Math.floor((Math.random() * 9) + 1);
            j = Math.floor((Math.random() * 9) + 1);
        }
        return [i, j];
    }

    /**
     * @return {number}
     */
   /* function GetKeyPressed() {
        if (keysDown['ArrowUp']) {
            return 1;
        }
        if (keysDown['ArrowDown']) {
            return 2;
        }
        if (keysDown['ArrowLeft']) {
            return 3;
        }
        if (keysDown['ArrowRight']) {
            return 4;
        }
    }

    function Draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); //clean board
        lblScore.value = score;
        lblTime.value = time_elapsed;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var center = new Object();
                center.x = i * 60 + 30;
                center.y = j * 60 + 30;
                if (board[i][j] === 2) {
                    context.beginPath();
                    context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                    context.lineTo(center.x, center.y);
                    context.fillStyle = pac_color; //color
                    context.fill();
                    context.beginPath();
                    context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
                    context.fillStyle = "black"; //color
                    context.fill();
                } else if (board[i][j] === 1) {
                    context.beginPath();
                    context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                    context.fillStyle = point5; //color
                    context.fill();
                } else if (board[i][j] === 4) {
                    context.beginPath();
                    context.rect(center.x - 30, center.y - 30, 60, 60);
                    context.fillStyle = "red"; //color of the wall
                    context.fill();
                }
            }
        }
    }

    function UpdatePosition() {
        board[shape.i][shape.j] = 0;
        var x = GetKeyPressed();
        if (x === 1) {
            if (shape.j > 0 && board[shape.i][shape.j - 1] !== 4) {
                shape.j--;
            }
        }
        if (x === 2) {
            if (shape.j < 9 && board[shape.i][shape.j + 1] !== 4) {
                shape.j++;
            }
        }
        if (x === 3) {
            if (shape.i > 0 && board[shape.i - 1][shape.j] !== 4) {
                shape.i--;
            }
        }
        if (x === 4) {
            if (shape.i < 9 && board[shape.i + 1][shape.j] !== 4) {
                shape.i++;
            }
        }
        if (board[shape.i][shape.j] == 1) {
            score=score+5;
            NUMBEROFBALL--;
        }
        board[shape.i][shape.j] = 2;
        var currentTime = new Date();
        time_elapsed = (currentTime - start_time) / 1000;
        if (score >= 20 && time_elapsed <= 10) {
            pac_color = "green";
        }
        if (0==NUMBEROFBALL) {
            window.clearInterval(interval);
            window.alert("Game completed");
        } else {
            Draw();
        }
    }*/
