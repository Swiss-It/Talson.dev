//Document organized into readable sections for marking criteria

window.onload = (event) => {
  //Footer
  let currentDate = new Date().getFullYear();

  document.getElementById("footer-date").innerHTML = currentDate;

  console.log("Date Component");

  //Alert Button

  document.getElementById("brand").onclick = (event) => {
    alert("Brand page is not available right now.");
  };

  console.log("Alert Component");

  //Hover Button

  const element = document.getElementById("instagram-id");

  element.onmouseover = (event) => {
    element.innerText = "@probably_talson";
  };

  element.onmouseleave = (event) => {
    element.innerText = "Instagram";
  };

  console.log("InstagramID Component");

  //Incrementing Button - if else

  let count = 1;
  const textCounter = document.getElementById("txt-counter");

  document.getElementById("btn-counter").onclick = () => {
    count++;
    textCounter.innerHTML = count;

    if (count % 2 == 0) {
      textCounter.classList.add("even");
      textCounter.classList.remove("odd");
    } else {
      textCounter.classList.add("odd");
      textCounter.classList.remove("even");
    }
  };

  console.log('Counter Component')

  //Incrementing - for Loop

  const numberList = document.getElementById("numbers");

  for (let index = 1; index <= 100; index++) {
    const newListItem = document.createElement("li");

    const even = index % 2 == 0;

    newListItem.innerHTML = even ? "Even" : "Odd";

    numberList.appendChild(newListItem);

    if (even) newListItem.classList.add("even");
    else newListItem.classList.add("odd");
  }

  console.log('Zebra List Component')
};
