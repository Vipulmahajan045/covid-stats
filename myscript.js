var countries = []
$.ajax({
    url:"https://api.covid19api.com/summary",
    type:"get",
    dataType:"json",
    success: function(response)
    {
        countries = response.Countries
        updatetable(countries);

    },
    error: function(error)
    {
        console.log(error)

    },
    always:{}
})

updatetable=(countries)=>{
    for(country of countries)
    {
        var newrow = "<tr class=text-center><td>"+country.Country+"<td/><td>"+country.NewConfirmed+"<td/><td>"+country.TotalConfirmed+"<td/><td>"+country.NewDeaths+"<td/><td>"+country.TotalDeaths+"<td/><td>"+country.NewRecovered+"<td/><td>"+country.TotalRecovered+"<td/></tr>"

        $("#tablebody").append(newrow);
    }

    $("#covidtable").DataTable();
}

