const socket = io();

function sInscrire(e) {
    e.preventDefault();
    const pseudo = $("#sLogin").val();
    const id = $("#sId").val();
    const pass = $("#sPass").val();
    if (pseudo !== "" && id !== "" && pass !== "") {
        socket.emit("inscription", {
            pseudo, id, pass
        })
    }
}