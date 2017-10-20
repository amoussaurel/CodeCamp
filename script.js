$(document).ready(function() {
  	$("h1").hide();
		$("h1").fadeIn(5000);


/*$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/TopList%20Musicall?api_key=keygXbTJs6OHQIT6C",
					function(data) {

          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#musiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
            });

					}
);*/

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/TopList%20Musicall%20OldSchool?api_key=keygXbTJs6OHQIT6C",
					function(data) {
					console.log(data);
					$.each(data.records, function(key,val){
					console.log(val.fields.likes);

					$('<li>'+val.fields.likes+'<input type = "button" value ="Vote +1" id="bouton">'+'</li>').appendTo('#oldmusiques');

					$("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#oldmusiques');
					});


					}
);

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/Scott%20Songs?api_key=keygXbTJs6OHQIT6C",
					function(data) {

          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#scottmusiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#scottmusiques');
            });

					}
);

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/Lopez?api_key=keygXbTJs6OHQIT6C",
					function(data) {

          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#lopezmusiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#lopezmusiques');
            });

					}
);

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/Alpha?api_key=keygXbTJs6OHQIT6C",
					function(data) {

          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#alphamusiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#alphamusiques');
            });

					}
);

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/TopList%20Musicall?api_key=keygXbTJs6OHQIT6C",
                    function(data) {
              console.log(data);
            $.each(data.records, function(key,val){
                  console.log(val.fields.likes);

               $('<li>'+val.fields.likes+'<input type = "button" value ="Vote +1" id="bouton">'+'</li>').appendTo('#musiques');

               $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
            });


                    }
);

});
