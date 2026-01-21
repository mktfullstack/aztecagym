function calculateBMI(){
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;

    if(h && w){
        let bmi = (w / ((h/100)**2)).toFixed(1);
        document.getElementById('bmiValue').textContent = bmi;

        let status = "";
        let message = "";

        if(bmi < 18.5){
            status = "Bajo peso";
            message = "Tu cuerpo tiene un gran potencial para ganar fuerza y masa muscular 💪, con un entrenamiento adecuado y asesoría profesional, puedes lograr resultados increíbles ¡Empieza hoy!";
        }
        else if(bmi < 24.9){
            status = "Normal";
            message = "¡Excelente! Estás en un rango saludable ✅, mantén tu progreso y lleva tu condición física al siguiente nivel con un plan de entrenamiento estructurado en nuestro gimnasio.";
        }
        else if(bmi < 29.9){
            status = "Sobrepeso";
            message = "Estás muy cerca de mejorar tu condición física 🚀, con constancia, entrenamiento y guía profesional puedes lograr un cambio notable en poco tiempo. ¡Nosotros te ayudamos!";
        }
        else{
            status = "Obesidad";
            message = "Dar el primer paso es lo más importante ❤️, con el acompañamiento correcto, puedes transformar tu salud y tu calidad de vida. Nuestro equipo está listo para apoyarte.";
        }

        document.getElementById('bmiStatus').textContent = status;
        document.getElementById('bmiMessage').textContent = message;

        document.getElementById('resultBox').classList.remove('d-none');

        // progress bar
        let fill = document.getElementById('scaleFill');

        let pct = ((bmi - 10) / (40 - 10)) * 100;
        if(pct < 0) pct = 0;
        if(pct > 100) pct = 100;
        fill.style.width = pct + "%";

        // colors
        if(bmi < 18.5) fill.style.background = "#1e88e5";
        else if(bmi < 24.9) fill.style.background = "#2e7d32";
        else if(bmi < 29.9) fill.style.background = "#f9a825";
        else fill.style.background = "#c62828";
    }
}
