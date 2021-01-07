//maak een vue biertjes array en zet deze in een element
var app2 = new Vue({
    el: '#app2',
    data () {
        return {
        biertjes: [],
        }
    },
    //haalt de api op waarbij de biertjes array de response naar de html is
    created () {
        axios
            .get('https://15euros.nl/api/api_bier.php')
            .then( response => {
                this.biertjes = response.data;
            })
            .catch(error => {
                alert(error);
            })
    }
});