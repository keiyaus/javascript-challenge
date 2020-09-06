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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter signting data by input date
    var filteredData = tableData.filter(date => date.datetime === inputValue);

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



