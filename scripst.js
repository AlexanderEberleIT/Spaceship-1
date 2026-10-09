let spaceshipName = "Butterfly";
let spaceshipHP = 100;
let credits = 300;
let repairKits = 3;

function renderStatus() {
    document.getElementById("status").innerHTML = `
    <table border="1">
        <tr><th>Status</th><th>Wert</th></tr>
        <tr><td>Name</td><td>${spaceshipName}</td></tr>
        <tr><td>HP</td><td>${spaceshipHP}</td></tr>
        <tr><td>Credits</td><td>${credits}</td></tr>
        <tr><td>Repairkits</td><td>${repairKits}</td></tr>
    </table>
    `;
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
