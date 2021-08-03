/*
  Name: Derek Steindel
  Date: 7/19/21
  Assignment: Lab 3 - Option 2
*/

// On page load, max length of fish IDs
function onLoadPage() {
  // Hide fish info until we have results
  document.getElementById("fishInfo").style.display = "none";

  // API without FishID to get all
  let fishAPIData = "https://acnhapi.com/v1/fish/";
  let max = 0;

  // Call API
  jQuery.getJSON(fishAPIData, function (data) {
    for (const [key, value] of Object.entries(data)) {
      max = max + 1;
    }

    // Set our slider's max attribute to max fish ID
    document.getElementById("fishIdSlider").setAttribute("max", max);
  });
}

// Update displayed fish
function updateDisplayedFish(data) {
  document.getElementById("fishid").innerHTML = data.id;
  document.getElementById("fishname").innerHTML = data.name["name-USen"];
  document.getElementById("fishprice").innerHTML = data.price;
  document.getElementById("fishfact").innerHTML = data["museum-phrase"];
  document.getElementById("fishimage").setAttribute("src", data.image_uri);

  // Show fish info
  document.getElementById("fishInfo").style.display = "block";
}

// When our button is clicked, start the process
$(document).on("click", "#gobutton", function () {
  let fishAPIData =
    "https://acnhapi.com/v1/fish/" +
    document.getElementById("fishIdSlider").value;

  // Call API
  jQuery.getJSON(fishAPIData, function (data) {
    // Call function to update what is displayed
    updateDisplayedFish(data);
  });
});
