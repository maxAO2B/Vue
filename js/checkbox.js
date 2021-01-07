//maak een array aan voor biertjes en geef de fields de volgende attributes
var app1 = new Vue({
    el: '#app1',
    data: {
      biertjes: [],
      fields: {
        id:             {name:"id", Show:true, title:"Id"},
        naam:           {name:"naam", Show:true, title:"Naam"},
        brouwer:        {name:"brouwer", Show:true, title:"Brouwer"},
        type:           {name:"type", Show:true, title:"Type"},
        gisting:        {name:"gisting", Show:true, title:"Gisting"},
        perc:           {name:"perc", Show:true, title:"Percentage"},
        inkoop_prijs:   {name:"inkoop_prijs", Show:true, title:"Inkoopprijs"},
      }
    },
    //haalt de api op waarbij de biertjes array de response naar de html is
    mounted() {
      axios.get("http://15euros.nl/api/api_bier.php").then(response => {
        this.biertjes = response.data;
      })
      .catch(error => {
        alert(error);
    })
 }
});
