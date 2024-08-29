const API_URL = "https://workers-app-3qav.onrender.com/workers";

async function addWorker() {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  const phone = document.getElementById("phone").value;
  const picture = document.getElementById("picture").value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      job: job,
      phone: phone,
      picture: picture,
    }),
  });

  if (response.ok) {
    alert("Worker added successfully!");
    getWorkers();
  } else {
    alert("Error adding worker.");
  }
}

async function getWorkers() {
  const response = await fetch(API_URL);
  const workers = await response.json();

  let workerList = "<ul>";
  workers.forEach((worker) => {
    workerList += `
            <li>
                <img src="${worker.picture}" alt="${worker.name}" style="width: 50px; height: 50px;"/>
                ${worker.name} - ${worker.job} - ${worker.phone}
            </li>`;
  });
  workerList += "</ul>";

  document.getElementById("worker-list").innerHTML = workerList;
}
