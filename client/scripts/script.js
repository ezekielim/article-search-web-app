const searchForm = document.getElementById("search-form");

let data = null;
let request = () => {
  axios
    .get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&sort=newest&api-key=AtRQ5ANpaOXA6msryZd2MUvjtRDsmwwZ"
    )
    .then((response) => {
      data = response.data.response.docs;
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
request();

function filterIt(data, search) {
  return data.filter((obj) =>
    Object.keys(obj).some((key) => obj[key].includes(search))
  );
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(data);

  for (i = 0; i < data.length; i++) {
    if (
      data[i].abstract
        .toLowerCase()
        .includes(event.target.search.value.toLowerCase())
    ) {
      let articleSection = document.getElementById("article-section-id");
      let paragraph = document.createElement("p");
      paragraph.setAttribute("class", "para");
      articleSection.appendChild(paragraph);
      let result = data[i].abstract;
      paragraph.innerHTML = result;
      console.log(data[i].abstract);
    }
  }
});
