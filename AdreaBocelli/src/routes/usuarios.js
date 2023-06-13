var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/pontuacao", function (req, res) {
    usuarioController.pontuacao(req, res);
});

router.get("/listarPontuacao", function (req, res) {
    usuarioController.listarPontuacao(req, res);
});

router.get("/listarPontos", function (req, res) {
    usuarioController.listarPontos(req, res);
});

router.get("/acertosMinTempo", function (req, res) {
    usuarioController.acertosMinTempo(req, res);
});

module.exports = router;