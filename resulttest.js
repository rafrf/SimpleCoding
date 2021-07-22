function validasiBilangan(){
    c=document.getElementById('a').value;
    var hsl,p;
    hsl="";
    p=c.length;
    for(a=p-1;a>=0;a--){
        if(c % 3 == 0){ 
            hsl="Hello";
        } else if (c % 5 == 0){
            hsl="World";
        } else if (c % 15 == 0){ 
            hsl="Hello World";
        }
    }
    document.getElementById('b').value=hsl;
}
function validasiEmail1() {
	var hasil = document.forms["testemail1"]["email1"].value;
	var i = hasil.indexOf("@");
	if (i<1) {
		alert("Alamat email tidak valid.");
		return false;
	} else {
		alert("Alamat email valid.");
	}
}
function validasiEmail2() {
	var hasil = document.forms["testemail2"]["email2"].value;
	var i = hasil.indexOf("@");
	var y = hasil.lastIndexOf(".");
	if (i<1 || y<i+2 || y+2>=hasil.length) {
		alert("Alamat email tidak valid.");
		return false;
	} else {
		alert("Alamat email valid.");
	}
}
function validasiEmail3(){
    var pola_email = /^[a-zA-Z0-9._-]{1,20}+@[a-zA-Z0-9.]+\.[a-zA-Z]$/;
    var email3 = document.getElementById("email3");
    if (email3.value.match(pola_email)){
        alert("Alamat email valid.");
    } else {
        alert("Alamat email tidak valid.");
        return false;
    }
}
function validasiEmail4() {
	var hasil = document.forms["testemail4"]["email4"].value;
	var i = hasil.indexOf(".co.id" || ".id");
	if (!i) {
		alert("Alamat email tidak valid.");
		return false;
	} else {
		alert("Alamat email valid.");
	}
}
function validasiDate(date) {
    var hours = document.getElementById('jam').value;
    var minutes = document.getElementById('menit').value;
    var ampm = hours >= 12 ? 'pm' : 'am';
    if (hours = hours % 12){
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        alert(validasiDate(new Date));
        return strTime;
    } else {
        return false;
    }
}
function validasiKalimat(){
    z=document.getElementById('x').value;
    var hsl,p;
    hsl="";
    p=z.length;
    for(a=p-1;a>=0;a--){
         hsl=hsl+z.charAt(a);
    }
    document.getElementById('y').value=hsl;
}
function palindrome(str) {
    var tr = false;
    var gnjl = 0;
    str = str.toLowerCase();
    str = str.replace(/[\W_]+/g,'');
    
    var strs = str.split("");
    var strl = strs.length;
    var cntr = Math.ceil(strl/2);
    if(strl%2==1) gnjl = 1;
    
    console.log('string: '+strs);
    console.log('length: '+strl);
    console.log('center: '+cntr);
    var str1 = [];
    var str2 = [];
    for(var i=0;i<=cntr-1;i++){
        str1.push(strs[i]);
    }
    
    for(var i=cntr-1;i<strl;i++){
        str2.push(strs[i]);
    }
    
    if(gnjl){

    }else{
        str2.splice(0,1);
    }
    
    str1 = str1.join('');
    str2 = str2.reverse().join('');
    if(str1 == str2) tr =true;
    console.log('apakah '+str1+' = '+str2+'?');
    console.log('hasil: '+tr);
    return tr;
}
function palindrome() {
    var str = document.getElementById("u").value;
    var str = str.replace(/\s/g,'').toLowerCase();
    var input = str.split();
    var output = input.reverse().join('');
    if(str == output) {
        document.getElementById('v').value= str + " di balik " + output + " => Result True Karena Palindrom)";
        return true;
    } else {
        document.getElementById('v').value= str + " di balik " + output + " => Result False Karena Bukan Palindrom)";
        return false;
    }
}