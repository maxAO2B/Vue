$.getJSON( "https://restcountries.eu/rest/v2/all", function ( json ) {
   console.log(json);
   //maak table en tr element aan
   let tbl = $("<table>").addClass("DataTable");
   let tr1 = $("<tr>");

   //voeg de theads toe aan de table
   tr1.append($("<th>").html("naam"));
   tr1.append($("<th>").html("regio"));
   tr1.append($("<th>").html("border lengte"));
   tr1.append($("<th>").html("buurlanden"));
   tbl.append(tr1);

   //voeg de values van de api toe aan de table
   $.each(json, function(key, value) {
      let tr2 = $("<tr>");
      tr2.append($("<td>").html(value.name));
      tr2.append($("<td>").html(value.region));
      tr2.append($("<td>").html(value.borders.length));

      //maak de select met de juiste values
      var select = $("<select>");
      $.each(value.borders, function(index, country) {
         select.append($("<option>").html(country));
      });
      tr2.append($("<td>").append(select));
      tbl.append(tr2);
   });

   //als de select veranderd laat informatie over het buurland zien
   $(document).on('change', 'select', function() {
      var selectedValue = $(this).val();
      
      $.each(json, function(key, value) {
         if (value.alpha3Code == selectedValue)
         {
            $("#info").empty();
            $("#info").append("<b>geselecteerd buurland: </b><br>" + "Land: " + value.name + "<br>");
            $("#info").append("Hoofdstad: " + value.capital + "<br>")
            $("#info").append("Aantal inwoners: " + value.population + "<br>")
            $("#info").append("Tijdzone: " + value.timezones) 
         }
      });
   });
   
   //als je op de naam klikt laat deze informatie over het land zien
   $(document).on('click', 'td', function() {
      var selectedValue = $(this).text();
      
      $.each(json, function(key, value) {
         if (value.name == selectedValue)
         {
            $("#info").empty();
            $("#info").append("<b>geselecteerd land: </b><br>" + "Land: " + value.name + "<br>"); 
            $("#info").append("Hoofdstad: " + value.capital + "<br>");
            $("#info").append("Aantal inwoners: " + value.population + "<br>");
            $("#info").append("Tijdzone: " + value.timezones);
         }
      });
   });

   //haalt landen op die bij een regio horen
   $(document).on('click', 'td', function() {
      var selectedValue = $(this).text();
      
      $.each(json, function(key, value) {
         if (value.region == selectedValue)
         {
            $("#info").empty();
            $("#info").append("<b>Regio: " + value.region + "</b><br>" + "<b>landen in de regio: <br>"); 
         }
      });
      $.each(json, function(key, value) {
         if (value.region == selectedValue)
         {
            $("#info").append(value.name + "<br>"); 
         }
      });

   });

   //zelfde als vorige functie alleen dan voor borders
   $(document).on('click', 'td', function() {
      var selectedValue = $(this).text();
      
      $.each(json, function(key, value) {
         if (value.borders.length == selectedValue)
         {
            $("#info").empty();
            $("#info").append("<b>border lengte: " + value.borders.length + "</b><br>" + "<b>landen met deze border lengte: <br>"); 
         }
      });
      $.each(json, function(key, value) {
         if (value.borders.length == selectedValue)
         {
            $("#info").append(value.name + "<br>"); 
         }
      });
   });
      
   //voegt alles toe aan de table
   $("#load").append(tbl);
   //error catching
}).catch(error => {
   alert(error);
});