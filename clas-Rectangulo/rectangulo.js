/*
Crea una clase llamada Rectangulo que represente. Esta clase debe tener:
• Un constructor que reciba dos parámetros: ancho y altura.
• Métodos para calcular el área y el perímetro del rectángulo.
• El método calcular_area() debe retornar el área del rectángulo (ancho * altura).
• El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho +
altura)).
Una vez definida la clase Rectangulo, crea una instancia de esta clase
con un ancho de 5 unidades y una altura de 10 unidades. Luego,
utiliza los métodos de la clase para calcular el área y el perímetro del
rectángulo creado e imprime los resultados */
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcular_area = function () {
        return (this.base * this.altura);
    };
    Rectangulo.prototype.calcular_perimetro = function () {
        return (2 * (this.base + this.altura));
    };
    Rectangulo.prototype.mostrar_datos = function () {
        console.log("El area del rectangulo es ".concat(this.calcular_area(), ". Su perimetro ").concat(this.calcular_perimetro()));
    };
    return Rectangulo;
}());
var rectan = new Rectangulo(2, 4);
var rectan2 = new Rectangulo(5, 10);
rectan.mostrar_datos();
rectan2.mostrar_datos();
