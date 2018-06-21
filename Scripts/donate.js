$(document).ready(function(){
		$("#fund,#othermaterial,#intb,#onlinewallet,#paymentgateway").hide();
		$("#choice").on('change',function(){
			$("#fund,#othermaterial").hide();	
			$("#fund,#othermaterial,#intb,#onlinewallet,#paymentgateway").hide();
    			var x=$("#choice").val();
			console.log(x);
			if(x=="Fund"){$("#fund").show();}
			else if(x=="Other Material"){$("#othermaterial").show();}
			else{}
		});
		$("#fundopt").on('change',function(){
			$("#forfund").text("");
			$("#intb,#onlinewallet,#paymentgateway").hide();
			var fundby=$("#fundopt").val();
			if(fundby=="Demand Draft"||fundby=="Cheque")
			{$("#forfund").text("Please post the Document to Address (in Contact Us) or Contact us for collecting the document.");}
			else if(fundby=="Internet Banking")
			{$("#intb").show();}
			else if(fundby=="Online Wallet")
			{$("#onlinewallet").show();}
			else if(fundby=="Payment Gateway")
			{$("#paymentgateway").show();}
			else{}
		});
			
	});