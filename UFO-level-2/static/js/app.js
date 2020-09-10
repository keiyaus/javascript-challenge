// Assign the data from 'data.js' to a descriptive variable
var tableData = data;

// Select the button - to handle click events on it
var button = d3.select("#filter-btn");

// Select the form - to get the input out of it
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler: Filter sighting data by input date & return data in table
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the various input element
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#cityName").property("value").toLowerCase();
    var stateValue = d3.select("#stateName").property("value").toLowerCase();
    var countryValue = d3.select("#countryName").property("value").toLowerCase();
    var shapeValue = d3.select("#shape").property("value");

    // Assign multiple search values to variable "query"
    var query = {
        datetime: dateValue,
        city: cityValue,
        state: stateValue,
        country: countryValue,
        shape: shapeValue
    };

    // Filter signting data by "query"
    var filteredData = tableData.filter(
        obj => obj.datetime === query.datetime ||
        obj.city === query.city ||
        obj.state === query.state ||
        obj.country === query.country ||
        obj.shape === query.shape
    );

    // Select the table body
    var tbody = d3.select("tbody");
   
    // Update each cell's text with filtered table values
    filteredData.forEach(function(sightingReport) {
        console.log(filteredData);
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

