// console.log("jay")

const data = {
  state1: {
    Vapi: {
      pincode: 396195,
    },
    Surat: {
      pincode: 273893,
    },
  },
  state2: {
    Pune: {
      pincode: 3643427,
    },
    Mumbai: {
      pincode: 7343,
    },
  },
};

const property = Object.entries(data);
const property2 = Object.keys(data.state1);
console.log(property);
console.log(property2);

const stateSection = document.querySelector("#state-section");
const citySection = document.querySelector("#city-section");
const pincodeSection = document.querySelector("#pincode-section");
const pincodeSectionBody = pincodeSection.querySelector("tbody");
const citySectionBody = citySection.querySelector("tbody");

function selectState() {
  let stateSection = document.getElementById("state-section");

  for (var i = 1; i < stateSection.rows.length; i++) {
    console.log(i);
    stateSection.rows[i].onclick = function () {
      if (typeof index !== "undefined") {
        stateSection.rows[index].classList.toggle("selected");
      }
      console.log(typeof index);
      index = this.rowIndex;
      this.classList.toggle("selected");
      console.log(typeof index);
    };
  }
}
selectState();

function InsertCities(state) {
  citySectionBody.innerHTML = "";
  for (const city in data[state]) {
    console.log(city);
    const cityRow = document.createElement("tr");
    const cityCell = document.createElement("td");

    cityCell.textContent = city;
    cityCell.addEventListener("click", () => {
      // cityCell.classList.add("selected");

      let selectedRow = document.querySelectorAll("td.selected");
      console.log(selectedRow);
      selectedRow.forEach((cell) => cell.classList.remove("selected"));

      // columnCell.classList.add('selected');
      cityCell.classList.add("selected");

      InsertPincode(city);
    });
    cityRow.appendChild(cityCell);
    citySectionBody.appendChild(cityRow);
  }
  citySection.classList.remove("hidden");
}

function InsertPincode(city) {
  pincodeSectionBody.innerHTML = "";
  const pincode = data[selectedState][city].pincode;
  console.log(pincode);
  const pinRow = document.createElement("tr");
  const pinCol = document.createElement("td");

  pinCol.textContent = pincode;

  pinRow.appendChild(pinCol);

  pincodeSectionBody.appendChild(pinRow);

  pincodeSection.classList.remove("hidden");
}

const stateRows = stateSection.querySelectorAll("tbody tr");
stateRows.forEach((row, index) => {
  row.addEventListener("click", () => {
    // row.classList.add("selected");

    const state = `state${index + 1}`;

    selectedState = state;
    InsertCities(state);
    pincodeSection.classList.add("hidden");
  });
});
