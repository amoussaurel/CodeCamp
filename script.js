$(document).ready(function() {
  //   $("h1").toggle(4000);

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/TopList%20Musicall?api_key=keygXbTJs6OHQIT6C",
					function(data) {

          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#musiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
            });

					}
);

$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/TopList%20Musicall%20OldSchool?api_key=keygXbTJs6OHQIT6C",
					function(data) {

          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#oldmusiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#oldmusiques');
            });

					}
);

});
