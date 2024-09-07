document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("search").focus();
    btnSearch();
  }
});

function btnSearch() {
  let searchInput = document.getElementById("search").value;
  const main = document.getElementById("searchResult");
  const errorAlert = document.getElementById("error");

  if (searchInput === "") {
    errorAlert.style.display = "block";
    errorAlert.innerText = "Enter a streamer's name!";
    setTimeout(() => {
      errorAlert.style.display = "none";
    }, 3000);
    return;
  } else {
    errorAlert.style.display = "none";
  }

  searchInput = searchInput.toLowerCase();

  let results = "";

  let name = "";
  let nickname = "";
  let description = "";

  for (let set of data) {
    name = set.name.toLowerCase();
    nickname = set.nickname.toLowerCase();
    description = set.description.toLowerCase();

    if (
      nickname.includes(searchInput) ||
      name.includes(searchInput) ||
      description.includes(searchInput)
    ) {
      results += `
      <div class="info">
        <h2>${set.nickname} <span>(${set.name})</span></h2>
        <p>${set.description}</p>
        <a href=${set.link} target="_blank">Read more</a>
      </div>`;
    }
  }

  if (!results.trim()) {
    errorAlert.style.display = "block";
    errorAlert.innerText = "Enter something streamer related!";
    setTimeout(() => {
      errorAlert.style.display = "none";
    }, 3000);
  }

  main.innerHTML = results;
}
