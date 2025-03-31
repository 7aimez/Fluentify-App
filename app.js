function updateContent() {
  const language = document.getElementById("language").value;
  const yearGroup = document.getElementById("year-group").value;
  const section = document.getElementById("section").value;
  const week = document.getElementById("week").value;

  // Toggle visibility of year group, section, and week based on language selection
  if (language) {
    document.getElementById("year-group-dropdown").style.display = "block";
  } else {
    document.getElementById("year-group-dropdown").style.display = "none";
    document.getElementById("section-dropdown").style.display = "none";
    document.getElementById("week-dropdown").style.display = "none";
    document.getElementById("go-to-week-btn").style.display = "none";
  }

  if (yearGroup) {
    document.getElementById("section-dropdown").style.display = "block";
  } else {
    document.getElementById("section-dropdown").style.display = "none";
    document.getElementById("week-dropdown").style.display = "none";
    document.getElementById("go-to-week-btn").style.display = "none";
  }

  // Show weeks only after section selection
  if (section) {
    document.getElementById("week-dropdown").style.display = "block";
  }

  // Show the button to go to week only if all selections are made
  if (language && yearGroup && section && week) {
    document.getElementById("go-to-week-btn").style.display = "inline-block";
  }

  // Display the selected information
  const selectionOutput = `
    Language: ${language.charAt(0).toUpperCase() + language.slice(1)}<br>
    Year Group: ${yearGroup ? "Year " + yearGroup : "--"}<br>
    Section: ${section ? "Section " + section.toUpperCase() : "--"}<br>
    Week: ${week ? "Week " + week : "--"}
  `;
  
  document.getElementById("selection-output").innerHTML = selectionOutput;
}

function goToWeek() {
  const language = document.getElementById("language").value;
  const yearGroup = document.getElementById("year-group").value;
  const section = document.getElementById("section").value;
  const week = document.getElementById("week").value;

  if (language && yearGroup && section && week) {
    // Redirect to a page or display the selected week (you can adjust this logic as needed)
    alert(`Going to ${language.charAt(0).toUpperCase() + language.slice(1)} - Year ${yearGroup}, Section ${section.toUpperCase()}, Week ${week}`);
    // You can change the above alert with a real navigation to the corresponding page if you have a backend or pages set up
  } else {
    alert("Please select all the options before proceeding.");
  }
}
