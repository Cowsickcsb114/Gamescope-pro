let currentGame = "";

// Search Game
function searchGame() {
  const game = document.getElementById("gameInput").value;

  if (!game) {
    alert("Enter a game name");
    return;
  }

  currentGame = game;

  // 🖼️ Poster image (better keyword targeting)
  const poster = `https://source.unsplash.com/600x800/?${encodeURIComponent(game + ",game poster")}`;

  // 🌄 Background image
  const bg = `https://source.unsplash.com/1600x900/?${encodeURIComponent(game + ",game")}`;
  document.querySelector(".background").style.background =
    `url('${bg}') center/cover no-repeat`;

  // Show card
  const card = document.getElementById("gameCard");
  card.classList.remove("hidden");

  card.innerHTML = `
    <h2>${game}</h2>
    <img src="${poster}" class="poster">
    <p>🎮 Game Poster Preview</p>
  `;
}

// Tier logic
function getTier(text) {
  text = text.toLowerCase();

  if (text.includes("i3") || text.includes("ryzen 3")) return 2;
  if (text.includes("i5") || text.includes("ryzen 5")) return 3;
  if (text.includes("i7") || text.includes("ryzen 7")) return 4;
  if (text.includes("i9") || text.includes("ryzen 9")) return 5;

  if (text.includes("gtx")) return 3;
  if (text.includes("rtx")) return 5;

  return 1;
}

// Compatibility
function checkGame() {
  if (!currentGame) {
    alert("Search a game first");
    return;
  }

  const cpu = getTier(document.getElementById("cpu").value);
  const gpu = getTier(document.getElementById("gpu").value);
  const ram = parseInt(document.getElementById("ram").value);

  const min = { cpu: 2, gpu: 2, ram: 8 };
  const rec = { cpu: 4, gpu: 4, ram: 16 };

  let score = 0;

  if (cpu >= rec.cpu) score++;
  else if (cpu >= min.cpu) score += 0.5;

  if (gpu >= rec.gpu) score++;
  else if (gpu >= min.gpu) score += 0.5;

  if (ram >= rec.ram) score++;
  else if (ram >= min.ram) score += 0.5;

  let result = "", cls = "";

  if (score >= 2.5) {
    result = "✅ Smooth Gameplay";
    cls = "pass";
  } else if (score >= 1.5) {
    result = "⚠️ Playable";
    cls = "warn";
  } else {
    result = "❌ Not Playable";
    cls = "fail";
  }

  document.getElementById("result").innerHTML =
    `<h3 class="${cls}">${result}</h3>`;
}