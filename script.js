/*$(document).ready(
  function()
  {
    $("h1").toggle(4000);
  }
);*/
$.getJSON("https://api.airtable.com/v0/appmmDV7S4fYyGaJe/musics?api_key=keycBA59JDS0jdm1J",
					function(data) {
          	console.log(data);
            $.each(data.records, function(key,val){
              	console.log(val.fields.title);

                $('<li>'+val.fields.title+'</li>').appendTo('#musiques');

                $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
            });

					}
);
