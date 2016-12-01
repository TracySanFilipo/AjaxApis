

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
            var $total = data.count
            var $uptick = data.results.length
            var j = 2
            while ($uptick < $total){
                var new_url = "http://swapi.co/api/vehicles/?page=" + j
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


function characterDetails(){
    $("#planetx").empty()
    detail_url = "https://swapi.co/api/people/?search=r2"
    $.ajax({
        url: detail_url,
        success: function(data) {
            var $name = $('<li>').text(data.results[0].name)
            var $height = $('<li>').text(data.results[0].height)
            var $mass = $('<li>').text(data.results[0].mass)
            var $hair_color = $('<li>').text(data.results[0].hair_color)
            var $skin_color = $('<li>').text(data.results[0].skin_color)
            var $eye_color = $('<li>').text(data.results[0].eye_color)
            var $birth_year = $('<li>').text(data.results[0].birth_year)
            var $gender = $('<li>').text(data.results[0].gender)
            $("#planetx").append("Name: ")
            $("#planetx").append($name)
            $("#planetx").append("Height: ")
            $("#planetx").append($height)
            $("#planetx").append("Mass: ")
            $("#planetx").append($mass)
            $("#planetx").append("Hair color: ")
            $("#planetx").append($hair_color)
            $("#planetx").append("Skin color: ")
            $("#planetx").append($skin_color)
            $("#planetx").append("Eye color: ")
            $("#planetx").append($eye_color)
            $("#planetx").append("Birth year: ")
            $("#planetx").append($birth_year)
            $("#planetx").append("Gender: ")
            $("#planetx").append($gender)
            $("#planetx").append("Home world: ")
            var $homeworld_url = data.results[0].homeworld[0]
            console.log($homeworld_url)
            $.ajax({
                url: $homeworld_url,
                success: function(homedata) {
                    var home_worldname = homedata.name
                    $("#planetx").append($home_worldname)
                }
            })
            $("#planetx").append("Films appeared in: ")
            for (k in data.results[0].films){
                var $film_url = k
                $.ajax({
                    url: $film_url,
                    success: function(filmdata) {
                        var $filmtitle = $('<li>').text(filmdata.title)
                        $("#planetx").append($filmtitle)
                    }
                })
            }
            $("#planetx").append("Species: ")
            var $species_url = data.results[0].species
            $.ajax({
                url: $species_url,
                success: function(speciesdata) {
                    var $species = speciesdata.name
                    $("#planetx").append($species)
                }
            })
            $("#planetx").append("Vehicles: ")
            for (m in data.results[0].vehicles){
                $vehicle_url = m
                $.ajax({
                    url: $vehicle_url,
                    success: function(vehicledata) {
                        var $vehname = $('<li>').text(vehicledata.name)
                        $("#planetx").append($vehname)
                    }
                })
            }
            $("#planetx").append("Starships: ")
            for (n in data.results[0].starships){
                $starships_url = n
                $.ajax({
                    url: $starships,
                    success: function(shipdata) {
                        var $shipname = $('<li>').text(shipdata.name)
                        $("#planetx").append($shipname)
                    }
                })
            }
        }
    })
}


function filmDetails(){
    $("#planetx").empty()
    detail_url = "https://swapi.co/api/films/?search=force"
    $.ajax({
        url: detail_url,
        success: function(data) {
            var $title = $('<li>').text(data.results[0].title)
            var $episode_id = $('<li>').text(data.results[0].episode_id)
            var $opening = $('<li>').text(data.results[0].opening_crawl)
            var $director = $('<li>').text(data.results[0].director)
            var $producer = $('<li>').text(data.results[0].producer)
            var $date = $('<li>').text(data.results[0].release_date)
            var $character1 = $('<li>').text(data.results[0].characters[0])
            var $character2 = $('<li>').text(data.results[0].characters[1])
            var $character3 = $('<li>').text(data.results[0].characters[2])
            $("#planetx").append("Title: ")
            $("#planetx").append($title)
            $("#planetx").append("Episode id: ")
            $("#planetx").append($episode_id)
            $("#planetx").append("Opening text: ")
            $("#planetx").append($opening)
            $("#planetx").append("Director: ")
            $("#planetx").append($director)
            $("#planetx").append("Producer: ")
            $("#planetx").append($producer)
            $("#planetx").append("Release date: ")
            $("#planetx").append($date)
            $("#planetx").append("Three characters: ")
            $("#planetx").append($character1)
            $("#planetx").append($character2)
            $("#planetx").append($character3)
            $("#planetx").append("Planets: ")
            console.log($homeworld_url)
            for (m in data.results[0].planets){
                $planets_url = m
                $.ajax({
                    url: $planets_url,
                    success: function(planetdata) {
                        var $planetname = $('<li>').text(planetdata.name)
                        $("#planetx").append($planetname)
                    }
                })
            }
            $("#planetx").append("Films appeared in: ")
            for (k in data.results[0].films){
                var $film_url = k
                $.ajax({
                    url: $film_url,
                    success: function(filmdata) {
                        var $filmtitle = $('<li>').text(filmdata.title)
                        $("#planetx").append($filmtitle)
                    }
                })
            }
            $("#planetx").append("Species: ")
            for (m in data.results[0].species){
                $species_url = m
                $.ajax({
                    url: $species_url,
                    success: function(speciesdata) {
                        var $speciesname = $('<li>').text(speciesdata.name)
                        $("#planetx").append($speciesname)
                    }
                })
            }
            $("#planetx").append("Vehicles: ")
            for (m in data.results[0].vehicles){
                $vehicle_url = m
                $.ajax({
                    url: $vehicle_url,
                    success: function(vehicledata) {
                        var $vehname = $('<li>').text(vehicledata.name)
                        $("#planetx").append($vehname)
                    }
                })
            }
            $("#planetx").append("Starships: ")
            for (n in data.results[0].starships){
                $starships_url = n
                $.ajax({
                    url: $starships,
                    success: function(shipdata) {
                        var $shipname = $('<li>').text(shipdata.name)
                        $("#planetx").append($shipname)
                    }
                })
            }
        }
    })
}


function vehicleDetails(){
    $("#planetx").empty()
    detail_url = "https://swapi.co/api/vehicles/?search=2"
    $.ajax({
        url: detail_url,
        success: function(data) {
            var $name = $('<li>').text(data.results[0].name)
            var $model = $('<li>').text(data.results[0].model)
            var $manufacturer = $('<li>').text(data.results[0].manufacturer)
            var $cost_in_credits = $('<li>').text(data.results[0].cost_in_credits)
            var $length = $('<li>').text(data.results[0].length)
            var $max_atmosphering_speed = $('<li>').text(data.results[0].max_atmosphering_speed)
            var $crew = $('<li>').text(data.results[0].crew)
            var $passengers = $('<li>').text(data.results[0].passengers)
            var $cargo_capacity = $('<li>').text(data.results[0].cargo_capacity)
            var $consumables = $('<li>').text(data.results[0].consumables)
            var $vehicle_class = $('<li>').text(data.results[0].vehicle_class)
            $("#planetx").append("Name: ")
            $("#planetx").append($name)
            $("#planetx").append("Model: ")
            $("#planetx").append($model)
            $("#planetx").append("Manufacturer: ")
            $("#planetx").append($manufacturer)
            $("#planetx").append("Cost in credits: ")
            $("#planetx").append($cost_in_credits)
            $("#planetx").append("Length: ")
            $("#planetx").append($length)
            $("#planetx").append("Max atmosphering speed: ")
            $("#planetx").append($max_atmosphering_speed)
            $("#planetx").append("Crew: ")
            $("#planetx").append($crew)
            $("#planetx").append("Passengers: ")
            $("#planetx").append($passengers)
            $("#planetx").append("Cargo capacity: ")
            $("#planetx").append($cargo_capacity)
            $("#planetx").append("Consumables: ")
            $("#planetx").append($consumables)
            $("#planetx").append("Vehicle class: ")
            $("#planetx").append($vehicle_class)
        }
    })
}


$('#wattoButton').click(characterDetails)

$('#awakeButton').click(filmDetails)

$('#sithButton').click(vehicleDetails)

$("#characterlistButton").click(listCharacters)

$("#filmlistButton").click(listFilms)

$("#vehiclelistButton").click(listVehicles)
