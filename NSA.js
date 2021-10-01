let searchButton = document.querySelector("#search");
// adding a
searchButton.addEventListener("click", () => {
  request();
});

// asynchronous function: is used with api's because what we're doing is  we're sending out a request and we have to wait for data to come back the way JavaScript usually works is it just executes all the way down like it'll
//  run each line of code
async function request() {
  // API_KEY = "C7DPoafAB4aHnlWWne0VM1VOS9UIKscws8WP1mdT";
  let returns = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=C7DPoafAB4aHnlWWne0VM1VOS9UIKscws8WP1mdT&date=" +
      searchT()
  );
  // console.log(returns);
  let returning_data = await returns.json();
  console.log(returning_data);

  data_fromNasa(returning_data);
  document.querySelector("#searchT").value = "";
}
function data_fromNasa(returning_data) {
  //   document.querySelector("#content").innerHTML = returning_data.url;
  if (returning_data.media_type === "video") {
    document.querySelector("iframe").src = `${returning_data.url}`;
    document.querySelector("img").src = ``;
  } else {
    document.querySelector("img").src = `${returning_data.url}`;
    document.querySelector("iframe").src = ``;
  }

  document.querySelector("#explanation_p").innerHTML =
    returning_data.explanation;
  document.querySelector("#title").innerHTML = returning_data.title;
}

function searchT() {
  return document.querySelector("#searchT").value;
}
