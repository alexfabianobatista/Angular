class Carro {
    marca: string;
    modelo: string;
    portas: number;
    passageiros: Array<any> = [];

    constructor (){
        this.modelo  = "";
        this.marca = "";
        this.portas = 0;
    }
}

let celta = new Carro();
celta.marca = "Chevrolet";
celta.modelo = "Celta";
celta.portas = 2;
celta.passageiros = ["Ana","Maria","Carla","Paola"];