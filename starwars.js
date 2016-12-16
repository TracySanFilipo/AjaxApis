

function listCharacters(){
    $("#planetx").empty()
    $.ajax({
        url: "http://swapi.co/api/people/",
    }).done(function(data) {
            for (var i = 0; i < data.results.length; i++){
                $("#planetx").append($('<li>').text(data.results[i].name))
                }
            var $uptick = data.results.length
            var j = 2
            while ($uptick < data.count){
                var new_url = "http://swapi.co/api/people/?page=" + j
                j++
                $uptick += 10
                $.ajax({
                    url: new_url,
                }).done(function(data) {
                    for (var i = 0; i < data.results.length; i++){
                        $("#planetx").append($('<li>').text(data.results[i].name))
                    }
                })
            }
        })
}


function listFilms(){
    $("#planetx").empty()
    $.ajax({
        url: "http://swapi.co/api/films/",
    }).done(function(data) {
            for (var i = 0; i < data.results.length; i++){
            $("#planetx").append($('<li>').text(data.results[i].title))
            }
        })
}


function listVehicles(){
    $("#planetx").empty()
    $.ajax({
        url: "http://swapi.co/api/vehicles/",
    }).done(function(data) {
            for (var i = 0; i < data.results.length; i++){
                $("#planetx").append($('<li>').text(data.results[i].name))
                var testlastpage = data.next
            }
            var $uptick = data.results.length
            var j = 2
            while ($uptick < data.count){
                var new_url = "http://swapi.co/api/vehicles/?page=" + j
                j++
                $uptick += 10
                $.ajax({
                    url: new_url,
                }).done(function(data) {
                    for (var i = 0; i < data.results.length; i++){
                        $("#planetx").append($('<li>').text(data.results[i].name))
                    }
                })
            }
        })
}


function characterDetails(){
    $("#planetx").empty()
    var query = $("#formcharname").val()
    detail_url = "https://swapi.co/api/people/?search=" + query
    $.ajax({
        url: detail_url,
    }).done(function(data) {
        if (data.results.length == 0){
            $("#planetx").append($('<li>').text("That isn't the search term you're looking for..."))
        }
        else {
            console.log(data.results)
            $("#planetx").append($('<li>').text("Name: " + data.results[0].name))
            $("#planetx").append($('<li>').text("Height: " + data.results[0].height))
            $("#planetx").append($('<li>').text("Mass: " + data.results[0].mass))
            $("#planetx").append($('<li>').text("Hair color: " + data.results[0].hair_color))
            $("#planetx").append($('<li>').text("Skin color: " + data.results[0].skin_color))
            $("#planetx").append($('<li>').text("Eye color: " + data.results[0].eye_color))
            $("#planetx").append($('<li>').text("Birth year: " + data.results[0].birth_year))
            $("#planetx").append($('<li>').text("Gender: " + data.results[0].gender))
            var homeworld_url = data.results[0].homeworld
            $.ajax({
                url: homeworld_url,
            }).done(function(homedata) {
                    $("#planetx").append($('<li>').text("Home world: " + homedata.name))
                })
            var $chdfilmlist = $("<ol id='chdfilms'></ol>")
            for (var k = 0; k < data.results[0].films.length; k++){
                var $film_url = data.results[0].films[k]
                $.ajax({
                    url: $film_url,
                }).done(function(filmdata) {
                        $chdfilmlist.append($('<li>').text(filmdata.title))
                    })
            }
            $("#planetx").append($chdfilmlist)
            var $species_url = data.results[0].species
            $.ajax({
                url: $species_url,
            }).done(function(speciesdata) {
                    $("#planetx").append($('<li>').text("Species: " + speciesdata.name))
                })
            var $chdvehiclelist = $("<ol id='chdvehicles'></ol>")
            for (var m = 0; m < data.results[0].vehicles.length; m++){
                $vehicle_url = data.results[0].vehicles[m]
                $.ajax({
                    url: $vehicle_url,
                }).done(function(vehicledata) {
                        $chdvehiclelist.append($('<li>').text("Vehicle: " + vehicledata.name))
                    })
            }
            $("#planetx").append($chdvehiclelist)
            var $chdstarshiplist = $("<ol id='chdstarships'></ol>")
            for (var n = 0; n < data.results[0].starships.length; n++){
                $starships_url = data.results[0].starships[n]
                $.ajax({
                    url: $starships_url,
                }).done(function(shipdata) {
                        $chdstarshiplist.append($('<li>').text("Starship: " + shipdata.name))
                    })
            }
            $("#planetx").append($chdstarshiplist)
        }
    })
}


function filmDetails(){
    $("#planetx").empty()
    var query = $("#formfilmname").val()
    detail_url = "https://swapi.co/api/films/?search=" + query
    $.ajax({
        url: detail_url,
    }).done(function(data) {
        if (data.results.length == 0){
            $("#planetx").append($('<li>').text("Mmm. Lost a detail, you have. How embarrassing"))
        }
        else {
                $("#planetx").append($('<li>').text("Title: " + data.results[0].title))
                $("#planetx").append($('<li>').text("Episode id: " + data.results[0].episode_id))
                $("#planetx").append($('<li>').text("Opening text: " + data.results[0].opening_crawl))
                $("#planetx").append($('<li>').text("Director: " + data.results[0].director))
                $("#planetx").append($('<li>').text("Producer: " + data.results[0].producer))
                $("#planetx").append($('<li>').text("Release date: " + data.results[0].release_date))
                var $fmdplanetlist = $("<ol></ol>")
                for (var m = 0; m < data.results[0].planets.length; m++){
                    $planets_url = data.results[0].planets[m]
                    $.ajax({
                        url: $planets_url,
                    }).done(function(planetdata) {
                        $fmdplanetlist.append($('<li>').text("Planet: " + planetdata.name))
                    })
                }
                $("#planetx").append($fmdplanetlist)
                var $fmdcharacterlist = $("<ol></ol>")
                for (var k = 0; k < 3; k++){
                    var $char_url = data.results[0].characters[k]
                    $.ajax({
                        url: $char_url,
                    }).done(function(chardata) {
                        $fmdcharacterlist.append($('<li>').text("Characters appeared in: " + chardata.name))
                    })
                }
                $("#planetx").append($fmdcharacterlist)
                var $fmdspecieslist = $("<ol></ol>")
                for (var m = 0; m < data.results[0].species.length; m++){
                    $species_url = data.results[0].species[m]
                    $.ajax({
                        url: $species_url,
                    }).done(function(speciesdata) {
                        $fmdspecieslist.append($('<li>').text("Species: " + speciesdata.name))
                    })
                }
                $("#planetx").append($fmdspecieslist)
                var $fmdvehicleslist = $("<ol></ol>")
                for (var m = 0; m < data.results[0].vehicles.length; m++){
                    $vehicle_url = data.results[0].vehicles[m]
                    $.ajax({
                        url: $vehicle_url,
                    }).done(function(vehicledata) {
                        $fmdvehicleslist.append($('<li>').text("Vehicles: " + vehicledata.name))
                    })
                }
                $("#planetx").append($fmdvehicleslist)
                var $fmdstarshipslist = $("<ol></ol>")
                for (var n = 0; n < data.results[0].starships.length; n++){
                    $starships_url = data.results[0].starships[n]
                    $.ajax({
                        url: $starships_url,
                    }).done(function(shipdata) {
                        $fmdstarshipslist.append($('<li>').text("Starship: " + shipdata.name))
                    })
                }
                $("#planetx").append($fmdstarshipslist)
        }
    })
}


function vehicleSearch(){
    var query = $("#formvehiclename").val()
    detail_url = "https://swapi.co/api/vehicles/?search=" + query
    vehicleDetails(detail_url)
}


function vehicleDetails(given_url){
    $("#planetx").empty()
    detail_url = given_url
    $.ajax({
        url: detail_url,
    }).done(function(data) {
        if (data.results.length == 0){
            $("#planetx").append($('<li>').text("That isn't the search term you're looking for..."))
        }
        else {
            $("#planetx").append($('<li>').text("Name: " + data.results[0].name))
            $("#planetx").append($('<li>').text("Model: " + data.results[0].model))
            $("#planetx").append($('<li>').text("Manufacturer: " + data.results[0].manufacturer))
            $("#planetx").append($('<li>').text("Cost in credits: " + data.results[0].cost_in_credits))
            $("#planetx").append($('<li>').text("Length: " + data.results[0].length))
            $("#planetx").append($('<li>').text("Max atmosphering speed: " + data.results[0].max_atmosphering_speed))
            $("#planetx").append($('<li>').text("Crew: " + data.results[0].crew))
            $("#planetx").append($('<li>').text("Passengers: " + data.results[0].passengers))
            $("#planetx").append($('<li>').text("Cargo capacity: " + data.results[0].cargo_capacity))
            $("#planetx").append($('<li>').text("Consumables: " + data.results[0].consumables))
            $("#planetx").append($('<li>').text("Vehicle class: " + data.results[0].vehicle_class))
        }
    })
}


$('#charsubmit').click(characterDetails)

$('#filmsubmit').click(filmDetails)

$('#vehiclesubmit').click(vehicleSearch)

$("#characterlistButton").click(listCharacters)

$("#filmlistButton").click(listFilms)

$("#vehiclelistButton").click(listVehicles)
