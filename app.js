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
  }

  if (yearGroup) {
    document.getElementById("section-dropdown").style.display = "block";
  } else {
    document.getElementById("section-dropdown").style.display = "none";
    document.getElementById("week-dropdown").style.display = "none";
  }

  if (section) {
    document.getElementById("week-dropdown").style.display = "block";
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
