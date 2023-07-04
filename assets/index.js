// Dark Mode 🌚

function darkMode() {
  let html = document.getElementsByTagName("html")[0];
  html.classList.toggle("dark");
}

// Time ⌚

setInterval(showtime, 60000);
showtime();

function showtime() {
  const date = new Date();
  time = date.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  document.getElementById("time").innerText = time;
}

// Calculator 😁

let buttons = document.getElementsByClassName("calc_btn");
let string = "";
let userSubInput = document.getElementById("userSubInput");
let userInput = document.getElementById("userInput");
let btn_value;
let clear = false;
let alrOperator = false;
Array.from(buttons).forEach((element) => {
  element.addEventListener("click", () => {
    // Calculator buttons value
    btn_value = element.children[0].innerText;

    // For Signs;
    if (element.classList.contains("sign")) {
      // Calculator buttons value changed to signs
      btn_value = element.children[0].id;

      // if first key pressed is an opearator, don't do anything
      if (userInput.value === "") {
        return null;
      } else {
        // Evaluate
        if (btn_value == "evaluate") {
          btn_value = "";
          string = string + btn_value;
          userInput.value = eval(string);
          string = eval(string);

          // If evaluate is pressed twice, clear the string
          if (clear == true) {
            userInput.value = "";
            string = "";
            clear = false;
          } else {
            clear = true;
          }
        }

        // Delete
        else if (btn_value == "delete") {
          string = string.slice(0, -1);
          userInput.value = string;
        } else {
          string = string + btn_value;
          userInput.value = string;
        }
      }
    }

    // Clear
    else if (btn_value == "AC") {
      string = "";
      userInput.value = "";
    }

    // For Number
    else {
      {
        string = string + btn_value;
        userInput.value = string;
      }
    }
  });
});
