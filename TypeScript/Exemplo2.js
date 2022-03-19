var Carro = /** @class */ (function () {
    function Carro() {
        this.passageiros = [];
        this.modelo = "";
        this.marca = "";
        this.portas = 0;
    }
    return Carro;
}());
var celta = new Carro();
celta.marca = "Chevrolet";
celta.modelo = "Celta";
celta.portas = 2;
celta.passageiros = ["Ana", "Maria", "Carla", "Paola"];
