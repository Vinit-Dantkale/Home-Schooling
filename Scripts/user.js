//var encrypted = CryptoJS.AES.encrypt("This is Computer", "Secret Passphrase");
//var dec= CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//console.log(encrypted.toString());
//console.log(dec.toString(CryptoJS.enc.Utf8));*/
$(document).ready(function(){
		$("#signupdiv").hide();
		$("#loginbut").click(function(){$("#signupdiv").hide();$("#logindiv").show();});
		$("#signupbut").click(function(){$("#logindiv").hide();$("#signupdiv").show();});
		$("#personaldetails,#addressdetails").hide();
		$("#ldright").click(function(){$("#logindetails,#addressdetails").hide();$("#personaldetails").show();});
		$("#pdleft").click(function(){$("#personaldetails,#addressdetails").hide();$("#logindetails").show();});
		$("#adleft").click(function(){$("#logindetails,#addressdetails").hide();$("#personaldetails").show();});
		$("#pdright").click(function(){$("#personaldetails,#logindetails").hide();$("#addressdetails").show();});
		$("#fname,#lname").on('change',function(){
			if(/^[A-z]+$/.test($(this).val())==false)
			{tell(this,"Only Alphabets");}		
			else
			{chage(this);}
		});
		$("#pincode").on('change',function(){
			if(/^[0-9]+$/.test($("#pincode").val())==true&&$("#pincode").val().length==6)
			{chage("#pincode");}
			else
			{tell("#pincode",'6 DIGIT Pincode');}
		});
$("#username").on('change',function(){
if(/[a-zA-Z0-9_\.-]+[a-zA-Z0-9_\.-]/.test($("#username").val())==true){chage("#username");}
else{tell("#username",'Didnt Match the Format');}
});
$("#email").on('change',function(){
if(/[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]/.test($("#email").val())==false)
{tell("#email",'Invalid Format');}
else
{chage("#email");}
});
$("#password1").on('change',function(){
encry(this);
if($("#password1").val().length>=7)
{chage("#password1");}
else if($("#password1").val().length<7)
{tell("#password1","Password too Short");}
else{}
});

$("#password2").on('change',function(){
encry(this);
if($("#password1").val()===$("#password2").val())
{chage("#password2");}
else
{tell("#password2","Password Mismatch");}
});		
$("#dob").on('change',function(){
var day = new Date($("#dob").val());
var date=new Date();

if(date.getFullYear()-day.getFullYear()>0)//Bigger year
{chage("#dob");}
if(date.getFullYear()-day.getFullYear()==0&&date.getMonth()-day.getMonth()==0&&date.getDate()-day.getDate()<=0)//Same year,month,bigger date
{tell("#dob","Invalid Day");}
if(date.getFullYear()-day.getFullYear()==0&&date.getMonth()-day.getMonth()<=0)//Same Year Bigger Month
{tell("#dob","Invalid Month");}
if(date.getFullYear()-day.getFullYear()<=0)
{tell("#dob","Invalid Year");}
});
			
});

function tell(opid,msg){
$(opid).css("border","2px solid red");
$(opid)[0].setCustomValidity(msg);
}
function chage(gre){

$(gre).css("border","2px solid green");
$(gre)[0].setCustomValidity('');
}

function encry(password)
{
	var encrypted = CryptoJS.AES.encrypt(password.value, "Secret Passphrase");
	console.log(encrypted.toString());
	var dec= CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
	console.log(dec.toString(CryptoJS.enc.Utf8));
}