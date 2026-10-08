let spaceshipName = "Butterfly";
let spaceshipHP = 100;
let credits = 300;
let repairKits = 3;

function showStatus() {
  console.log("Name: " + spaceshipName);
  console.log("HP: " + spaceshipHP);
  console.log("Credits " + credits);
  console.log("Repairkits " + repairKits);
}

function useRepairKit() {
  if (credits >= 100) {
    credits -= 100;
    repairKits++;
  }
}

function useRepairKit() {
  if (repairKits > 0 && spaceshipHP < 100) {
    spaceshipHP += 25;
    spaceshipHP = Math.min(spaceshipHP, 100);
    repairKits--;
  }
}

function buyRepairKit() {
  if (credits >= 100) {
    credits -= 100;
    repairKits++;
  }
}

function takeDamage(damage) {
  spaceshipHP -= damage;

  if (spaceshipHP < 0) {
    spaceshipHP = 0;
  }
}