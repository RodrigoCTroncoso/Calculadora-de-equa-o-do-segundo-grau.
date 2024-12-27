function calcularEquacao2Grau() {
    // Obtém os valores dos inputs
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    
    // Verifica se os valores são válidos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerHTML = "Vose eh buro";
        return;
    }

    // Calcula o discriminante (delta)
    let delta = (b ** 2) - 4 * a * c;
    let resultText = `Delta é: ${delta.toFixed(2)}<br>`;

    // Verifica se 'a' é zero
    if (a === 0) {
        resultText += "Não é equação do 2º grau se a = 0";
    } else if (delta < 0) {
        resultText += "Delta não admite raiz real por ser negativo.";
    } else if (delta === 0) {
        // Caso delta seja 0, há uma raiz real
        let raizDelta = Math.sqrt(delta);
        let x1 = (-b + raizDelta) / (2 * a);
        resultText += `Para delta = 0, temos x1 = x2 = ${x1.toFixed(2)}`;
    } else {
        // Caso delta seja positivo, existem duas raízes reais
        let raizDelta = Math.sqrt(delta);
        let x1 = (-b + raizDelta) / (2 * a);
        let x2 = (-b - raizDelta) / (2 * a);
        resultText += `As raízes reais são: x' = ${x1.toFixed(2)} e x'' = ${x2.toFixed(2)}`;
    }

    // Exibe o resultado
    document.getElementById("result").innerHTML = resultText;
}
