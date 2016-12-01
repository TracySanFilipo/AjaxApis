

function listCharacters(){
    $("#planetx").empty()
    $.ajax({
        url: "http://swapi.co/api/people/",
        success: function(data) {
            for (var i = 0; i < data.results.length; i++){
                var $name = $('<li>').text(data.results[i].name);
                console.log($name)
                $("#planetx").append($name)

                }
            var $total = data.count
            var $uptick = data.results.length
            var j = 2
            while ($uptick < $total){
                var new_url = "http://swapi.co/api/people/?page=" + j
                j++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                $uptick++
                console.log(j)
                $.ajax({
                    url: new_url,
                    success: function(data) {
                    for (var i = 0; i < data.results.length; i++){
                        var $name = $('<li>').text(data.results[i].name);
                        console.log($name)
                        $("#planetx").append($name)
                    }
                    }
                })
            }

            }
    })


}


function listFilms(){
    $("#planetx").empty()
    $.ajax({
        url: "http://swapi.co/api/films/",
        success: function(data) {
            for (var i = 0; i < data.results.length; i++){
            var $title = $('<li>').text(data.results[i].title);
            console.log($title)
            $("#planetx").append($title)
            }
        }
    })
}


function listVehicles(){
    $("#planetx").empty()
    $.ajax({
        url: "http://swapi.co/api/vehicles/",
        success: function(data) {
            for (var i = 0; i < data.results.length; i++){
            var $name = $('<li>').text(data.results[i].name);
            console.log($name)
            $("#planetx").append($name)
            var testlastpage = data.next
            }
        }
    })
    // while (testlastpage = !null){
    //     var j = 2
    //     var new_url = "http://swapi.co/api/people/?page=" + j
    //     j++
    //     console.log(j)
    //     $.ajax({
    //         url: new_url,
    //         success: function(data) {
    //         for (var i = 0; i < data.results.length; i++){
    //             var $name = $('<li>').text(data.results[i].name);
    //             console.log($name)
    //             $("#planetx").append($name)
    //             testlastpage = data.next
    //             }
    //         }
    //     })
    // }

}

function characterDetails(charname){
    $("#planetx").empty()
    detail_url = "https://swapi.co/api/people/?search=" + charname
    $.ajax({
        url: detail_url,
        success: function(data) {
            var $name = $('<li>').text(data.name)
            var $height = $('<li>').text(data.height)
            var $mass = $('<li>').text(data.mass)
            var $hair_color = $('<li>').text(data.hair_color)
            var $skin_color = $('<li>').text(data.skin_color)
            var $eye_color = $('<li>').text(data.eye_color)
            var $birth_year = $('<li>').text(data.birth_year)
            var $gender = $('<li>').text(data.gender)
            $("#planetx").append($name)
            $("#planetx").append($height)
            $("#planetx").append($mass)
            $("#planetx").append($hair_color)
            $("#planetx").append($skin_color)
            $("#planetx").append($eye_color)
            $("#planetx").append($birth_year)
            $("#planetx").append($gender)
            var homeworld_url = data.homeworld
            $.ajax({
                url: homeworld_url,
                success: function(homedata) {
                    var home_worldname = homedata.name
                    $("#planetx").append($home_worldname)
                }
            })
            for (k in data.films){
                var film_url = k
                $.ajax({
                    url: film_url,
                    success: function(filmdata) {
                        var $filmtitle = $('<li>').text(filmdata.title)
                        $("#planetx").append($filmtitle)
                    }
                })
            }
            var species_url = data.results.species
            $.ajax({
                url: species_url,
                success: function(speciesdata) {
                    var species = speciesdata.name
                    $("#planetx").append($species)
                }
            })
            for (m in data.vehicles){
                vehicle_url = m
                $.ajax({
                    url: vehicle_url,
                    success: function(vehicledata) {
                        var $vehname = $('<li>').text(vehicledata.name)
                        $("#planetx").append($vehname)
                    }
                })
            }
            for (n in data.starships){
                starships_url = n
                $.ajax({
                    url: starships,
                    success: function(shipdata) {
                        var $shipname = $('<li>').text(shipdata.name)
                        $("#planetx").append($shipname)
                    }
                })
            }
        }
    })
}



$('#charButton').click(characterDetails($('#formcharname').val()))

$("#characterlistButton").click(listCharacters)

$("#filmlistButton").click(listFilms)

$("#vehiclelistButton").click(listVehicles)
