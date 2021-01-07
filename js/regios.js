$.getJSON( "https://restcountries.eu/rest/v2/all", function ( json ) {

    //maak een regio array en zet alle regio's erin zonder duplicates
    // let mapping = json.map(value => value.region);
    // let regios = [...new Set(mapping)];
    let regios = [];
    $.each(json, function(key, value) {
    if ($.inArray(value.region, regios) == -1) regios.push(value.region);
    });
    console.log(regios);

    //lees de regio array uit in options
    var select = $("<select>").attr('id', 'select');
    $.each(regios, function(key, value) {   
        select
        .append($("<option></option>")
        .attr("value", key)
        .text(value)); 
    });
    $("#regions").append(select);

    //wanneer de select veranderd haal de geselecteerde regio op en de landen die daarbij horen
    $(document).on('change', '#select', function() {
        var selectedValue = $(this).children("option:selected").text();
        if (selectedValue == "") selectedValue = "geen";
        $("#countries").empty();
        $("#countries").append("<b>Regio: " + selectedValue + "</b><br>" + "<b>landen in de regio: <br>"); 
        if (selectedValue == "geen") selectedValue = "";
        $.each(json, function(key, value) {
           if (value.region == selectedValue)
           {
              $("#countries").append(value.name + "<br>"); 
           }
        });
  
    });

    //zet default landen in de site, zelfde functie als de onchange
    var defaultselect = $('#select').children("option:selected").text();
    $("#countries").append("<b>Regio: " + defaultselect + "</b><br>" + "<b>landen in de regio: <br>"); 
        $.each(json, function(key, value) {
           if (value.region == defaultselect)
           {
              $("#countries").append(value.name + "<br>"); 
           }
        });
    //error catching
}).catch(error => {
    alert(error);
});