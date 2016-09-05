/*IMPORTANT  if we write the code in the modern form then the second function comes out to be wrong 
and second problem arises if the scope (function(){}()) then the code does not work*/																		
			
			
			
			
		function customObject() {
			this.render = function(){
				var winW = window.innerWidth;
				var winH = window.innerHeight;
				var dialogOverlay = document.getElementById("dialogOverlay");
				var dialogBox = document.getElementById("dialogBox");
					
					dialogOverlay.style.display = "block";
					dialogOverlay.style.height = winH + "px";
					
					dialogBox.style.display = "block";
					dialogBox.style.top = "100px";
					dialogBox.style.left = (winW/2) - (500 * .5) + "px" ;
					
						
						document.getElementById("dialogBoxHead").innerHTML = "First things first";
						document.getElementById("dialogBoxBody").innerHTML = "<ol><li>Create your Fantasy Team</li><li>Join a League!!</li><ol>";
						document.getElementById("dialogBoxFooter").innerHTML = '<a onclick = "alert.ok()" href="#" style="color:white; display:block; background-color:black; width:100px; height:30px; text-decoration:none; text-align:center;padding-top:5px; margin:auto;"  >Create Team</a>';
					
								}
													
			this.ok =   function(){
								document.getElementById("dialogBox").style.display = "none";
								document.getElementById("dialogOverlay").style.display = "none";
								
							}
		
		
					}
					
			var alert = new customObject();		