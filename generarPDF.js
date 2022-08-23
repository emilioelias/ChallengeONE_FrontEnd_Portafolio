
document.addEventListener("DOMContentLoaded", () => {
    
    const $boton = document.querySelector("#generarPDF__boton");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; //Se puede colocar cualquier elemento del DOM

        html2pdf()
            .set({
                margin: 0.5,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98,
                },
                html2canvas: {
                    scale: 3, //a mayor escala mejor calidad
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait',
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});