$(document).ready(function() {

		$("#colorHex").spectrum({
			preferredFormat : "hex",
			color : "#0000ff",
			flat : true,
			showInput : true,
			showButtons : false,
		}).on("dragstop.spectrum", function(e, color) {
			$.ajax({
				type : "GET",
				url : "setColor.esp",
				dataType : "xml",
				data : ( {
					'colorHex' : color.toHexString()
				}),
				success : function(response) {
					
					 var ci_status = ($(response).find('ci').first().text() === "true");
					 console.log(ci_status);
					
					if(ci_status == false)
					{
						$("#pico_logo").attr("src","https://rawgit.com/jonasvanpelt/barlights_files/master/broken.png");
						$("form").remove();
						$("#feedback").show();
					}
				}
			});
		});

		$( "#autoColor" ).click(function() {
		  $.ajax({
				type : "GET",
				url : "autoColor.esp",
				dataType : "xml",
				success : function(response) {
				}
			});
		});
	});

