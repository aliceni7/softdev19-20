var fact = function(n){
  if (n == 1){
    return 1;
  }
  return n * fact(n - 1);
}

var fib = function(n){
    if (n > 1){
	return fib(n-1) + fib(n-2);
    }
    if (n == 1){
	return 1;
    }
    return 0;
}

var gcd = function(a,b){
    while( b ){
	var x = b;
	b = a % x;
	a = x;
    }
    return a;
}

var randomStudent = function(a){
    var studentlist = ["Bob", "Jane", "Ed", "Chan", "Jason", "Hoiley", "TP", "Steve", "Vivi"];
    var l = studentlist.length;
    var rand = Math.floor(Math.random(l) * l + 1);
    return studentlist[rand - 1];
}

var eventHelper = function(btn) {
    var ans;
    if (btn == "fxn1"){
	ans = fib(5);
	document.getElementById("p1").innerHTML = "fib(5) = " + ans;
    }
    else if (btn == "fxn2"){
	ans = gcd(15, 12);
	document.getElementById("p2").innerHTML = "gcd(15, 12) = " + ans;
    }
    else if (btn == "fxn3"){
	ans = randomStudent();
	document.getElementById("p3").innerHTML = "randomStudent() = " + ans;
    }
    console.log(ans);
};

var btn1 = document.getElementById("fxn1");
btn1.addEventListener('click', function(){
    eventHelper(btn1.id);
});

var btn2 = document.getElementById("fxn2");
btn2.addEventListener('click', function(){
    eventHelper(btn2.id);
});

var btn3 = document.getElementById("fxn3");
btn3.addEventListener('click', function(){
    eventHelper(btn3.id);
});
