var backup="";
$(document).ready(function(){
	$("#BookShelf").show();
	$("#heading").text("Recent Activities");
	$("#Classes").hide();
	$("#BookShelf").hide();
	$("#Classmates").hide();
});
function showcontent(str){
		$(backup).hide();
		$("#"+str).show();
		$("#heading").text(str);
		backup="#"+str;
}
	