fetch("https://reqres.in/api/users")
  .then((res) => {
    if (res.ok) {
      console.log("Success");
    } else {
      console.log("Not Successful");
    }
  })
  .then((data) => console.log(data));

//METHOD
//HEADERS Content-type : application:json
//BODY JSON.stringify

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    name: "Haris Gusinac",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
