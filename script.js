let players = JSON.parse(localStorage.getItem("players")) || [];

// 新增玩家到列表
function addPlayer() {
    const playerName = document.getElementById("player-name").value;
    if (playerName) {
        players.push(playerName);
        updatePlayerList();
        localStorage.setItem("players", JSON.stringify(players));
        document.getElementById("player-name").value = "";
    }
}

// 刪除玩家
function removePlayer(index) {
    players.splice(index, 1);
    updatePlayerList();
    localStorage.setItem("players", JSON.stringify(players));
}

// 更新玩家列表顯示
function updatePlayerList() {
    const listElement = document.getElementById("list");
    listElement.innerHTML = "";
    players.forEach((player, index) => {
        listElement.innerHTML += `<li>${player} <button onclick="removePlayer(${index})">刪除</button></li>`;
    });
}

// 頁面加載時顯示玩家列表
updatePlayerList();