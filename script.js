window.globalThis.homeElement = document.getElementById("home-page");

function renderHomePage() {
  window.globalThis.homeElement.innerHTML = `    
    <div class="difficulty">
        <h1 class="difficulty_title">Выбери сложность</h1>
        <div class="difficulty_button">
            <button class="difficulty_selection_button">1</button>
            <button class="difficulty_selection_button">2</button>
            <button class="difficulty_selection_button">3</button>
        </div>
        <button class="difficulty_start_button">Старт</button>
    </div>`;

  selectionButtonDifficulty();
}

function selectionButtonDifficulty() {
  const buttonDifficultyElements = document.querySelectorAll(
    ".difficulty_selection_button"
  );

  for (const buttonDifficultyElement of buttonDifficultyElements) {
    buttonDifficultyElement.addEventListener("click", () => {
      switch (buttonDifficultyElement.textContent) {
        case "1":
          window.globalThis.game_difficulty = "easy";
          break;
        case "2":
          window.globalThis.game_difficulty = "normal";
          break;
        case "3":
          window.globalThis.game_difficulty = "hard";
          break;
      }
    });
  }
}