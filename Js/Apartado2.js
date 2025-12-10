document.addEventListener("DOMContentLoaded", function () {
    const apartados = document.querySelectorAll(".apartado");

    apartados.forEach(apartado => {
        apartado.addEventListener("mouseover", function () {
            // Aquí puedes agregar lógica para mostrar información adicional
            // Por ejemplo, podrías mostrar un tooltip o un cuadro de información.
            console.log("Hovered en " + apartado.id);
        });

        apartado.addEventListener("mouseout", function () {
            // Aquí puedes ocultar la información adicional cuando el cursor se mueva fuera del apartado.
            console.log("Mouse out de " + apartado.id);
        });
    });
});
