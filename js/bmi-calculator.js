function calculateBMI(){
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    if(h && w){
        let bmi = (w / ((h/100)**2)).toFixed(1);
        document.getElementById('bmiValue').textContent = bmi;

        let status = "";
        if(bmi < 18.5) status = "Underweight";
        else if(bmi < 24.9) status = "Normal";
        else if(bmi < 29.9) status = "Overweight";
        else status = "Obese";

        document.getElementById('bmiStatus').textContent = status;
        document.getElementById('resultBox').classList.remove('d-none');

        // progress fill version
        let fill = document.getElementById('scaleFill');

        // BMI mapping 10 - 40 assumed
        let pct = ((bmi - 10) / (40 - 10)) * 100;
        if(pct < 0) pct = 0;
        if(pct > 100) pct = 100;
        fill.style.width = pct + "%";

        // color based on status category
        if(bmi < 18.5) fill.style.background = "#1e88e5"; // under
        else if(bmi < 24.9) fill.style.background = "#2e7d32"; // normal
        else if(bmi < 29.9) fill.style.background = "#f9a825"; // overweight
        else fill.style.background = "#c62828"; // obese
    }
}