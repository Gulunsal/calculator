const ekran = document.getElementById("ekran");
const butonlar = document.querySelectorAll("button");
let ekranDegeri = "";

butonlar.forEach(buton => {
    buton.addEventListener("click", () => {
        const butonDegeri = buton.textContent;

        if (butonDegeri === 'C') {
            ekranDegeri = "";
        } else if (butonDegeri === "=") {
            try {
                ekranDegeri = eval(ekranDegeri);
            } catch (error) {
                ekranDegeri = "Hata";
            }
        } else if (butonDegeri === "->") {
            ekranDegeri = ekranDegeri.slice(0, -1);
        } else {
            ekranDegeri += butonDegeri;
        }
        ekran.value = ekranDegeri;
    });
});
