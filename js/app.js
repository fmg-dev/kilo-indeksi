var height = prompt("Kilonuzu giriniz: örn:70")
var weight = prompt("Boyunuzu giriniz: örn: 1.70")

function vkiHesapla(weight, height) {
    var vki = (height / (weight * weight));

    if (vki<18.5) {
        alert(`Vücut kitle endeksiniz: ${vki}, değerleriniz düşük.`)
    }else if (vki >= 18.5 && vki <= 24.9) {
        alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`)
    }else if (vki >= 25 && vki <= 29.9) {
        alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
    }else if (vki >= 30) {
        alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
    }
    return
        alert(`Lütfen bir değer giriniz.`)
    
};
vkiHesapla(weight, height);
console.log(vkiHesapla);