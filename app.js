const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var position = {
    x: 200,
    y: 200
};

Http.listen(3000, () => {
    console.log("Listening at :3000...");
});