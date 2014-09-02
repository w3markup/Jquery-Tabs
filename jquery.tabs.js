$(document).ready(function(e){
		var nextbtn=$('#next');
		var prevbtn=$('#prev');
		var finishbtn=$('#finish');
		//disable unuse btns
		prevbtn.attr("disabled",true);
		finishbtn.attr("disabled",true);
		// getting current active tab
		var activetab=$('.ts.active');
		
		//active tab id
		var activetabid=activetab.data('index');
		//check the last tab
		var newactivetabid=activetabid+1;
			var findit=$("#tabs-wrapper").find("[data-index='" + newactivetabid + "']");
			
		nextbtn.click(function(e){
			//validate the tabs
			  


			// getting current active tab
		var activetab=$('.ts.active');
		var formelement=$(".ts.active #form");
		  //valide form if used
		  var v=validateme(formelement);

		 
		  if(v ===false)
		  {
		  	//show error
		  }
		else
		{
		//active tab id
		var activetabid=activetab.data('index');
		var lasttab=$("#tabs-wrapper .ts:last").data('index');
		
		if(lasttab === activetabid)
		{
			nextbtn.attr("disabled",true);
				finishbtn.attr("disabled",false);
		}
		else
		{
 		var newactivetabid=activetabid+1;
			activetab.removeClass('active');
			$("#tabs-wrapper").find("[data-index='" + newactivetabid + "']").addClass('active');
			prevbtn.attr("disabled",false);
			nextbtn.attr("disabled",false);
			finishbtn.attr("disabled",true);
		}
			var activetabid=activetab.data('index');
		var lasttab=$("#tabs-wrapper .ts:last").data('index');
		if(lasttab === activetab)
		{
			nextbtn.attr("disabled",true);
			finishbtn.attr("disabled",false);

		}

}
		});

		prevbtn.click(function(e){
			// getting current active tab
		var activetab=$('.ts.active');
		
		//active tab id
		

var activetabid=activetab.data('index');
		var firsttab=$("#tabs-wrapper .ts:first").data('index');
		
		if(firsttab === activetabid)
		{
			prevbtn.attr("disabled",true);
			nextbtn.attr("disabled",false);
		}
		else
		{
 		var newactivetabid=activetabid-1;
			activetab.removeClass('active');
			$("#tabs-wrapper").find("[data-index='" + newactivetabid + "']").addClass('active');
			prevbtn.attr("disabled",false);
			nextbtn.attr("disabled",false);
			finishbtn.attr("disabled",true);
		}
			var activetabid=activetab.data('index');
		var firsttab=$("#tabs-wrapper .ts:first").data('index');
		if(firsttab === activetab)
		{
			prevbtn.attr("disabled",true);
			nextbtn.attr("disabled",false);
		}





		});
	});
function validateme (formelement) {
	// validate form if use...



	return true;
}
