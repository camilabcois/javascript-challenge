// Get data from data.js file
var ufoData = data;

// Structure the table
var tbody = d3.select("tbody");

// create a funciton to add data to the table
function createTable(data) {
  // Clear existing data
  tbody.html("");

  // Loop through the data and append to the new table
  data.forEach((dataRow) => {
    var row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
//Create function that is triggered when the button is clicked
function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = ufoData;

 // Create a filter to show only the date selected by the s
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original ufoData .
  createTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
createTable(ufoData);
