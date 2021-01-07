//maakt een biertjes array
var app3 = new Vue({
    el: '#app3',
    data() {
        return {
            biertjes: [],
            fields: null,
            selBier: {},
        }
    },
//connectie maken met de bier api
    created() {
        $.getJSON('api.php?action=getBeer')
            .then(response => {
                this.biertjes = response.data;
                this.fields = Object.keys(this.biertjes[0]);
            })
            .catch(error => {
                alert(error);
            })
    },
    methods: {
        //update tabel tevoorschijn halen
        updateBier: function (bier) {
            this.selBier = bier;
            $("#bierForm").css("display", "block");
        },
        //delete functie
        deleteBier: function (bier) {
            this.selBier = bier;
            $.ajax({
                method: "POST",
                url: "api.php?action=deleteBeer",
                data: bier
            })
            .then(function (response) {
                location.reload();
            })
            .catch(function (error) {
                alert(error);
            })
        }
    }
});

//de edit tabel aanmaken
Vue.component('bier-form', {
    template: `
    <table>
        <tr><td><img id="placement" src="img/close.png" v-on:click="closeForm"></td></tr>
        <tr><td><label id="spansize">naam: </label><input type="text" v-model="biertje.naam"></td></tr>
        <tr><td><label id="spansize">brouwer: </label><input type="text" v-model="biertje.brouwer"></td></tr>
        <tr><td><label id="spansize">type: </label><input type="text" v-model="biertje.type"></td></tr>
        <tr><td><label id="spansize">gisting: </label><input type="text" v-model="biertje.gisting"></td></tr>
        <tr><td><label id="spansize">perc: </label><input type="text" v-model="biertje.perc"></td></tr>
        <tr><td><label id="spansize">inkoopprijs: </label><input type="text" v-model="biertje.inkoop_prijs"></td></tr>
        <tr><td></label><input type="submit" value="Opslaan" v-on:click="saveBeer"></td></tr>
    <table>
    `,
    props: ['biertje'],
    methods: {
        //update functie
        saveBeer: function () {
            $.ajax({
                method: "POST",
                url: "api.php?action=updateBeer",
                data: this.biertje
            })
            .then(function () {
                $("#bierForm").css("display", "none");
            })
            .catch(function (error) {
                alert(error);
            })
        },
        //close form
        closeForm: function () {
            $("#bierForm").css("display", "none");
        }
    }
});