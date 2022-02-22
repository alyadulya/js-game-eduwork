let welcome = alert(`Selamat datang di game Tebak Angka.
Game ini dimainkan oleh 2 player.
Setiap player diminta untuk menebak angka 1 - 3
dan akan dimainkan dalam 5 ronde.
Player yang berhasil mengumpulkan tebakan terbanyak akan menang.
Selamat bermain!!!`);

let p1 = 0;
let p2 = 0;

for (let i = 1; i <= 5; i++) {
    
    alert(`Ronde ${i}`);
    
    let angka1 = prompt(`Player 1: masukkan angka`);
    let angka2 = prompt(`Player 2: masukkan angka`);
    
    var x = Math.floor(Math.random() * 3) + 1;
    
    let restart = false;

    function rules(message) {
        alert(`tebakan angka tidak boleh ${message}`);
    }

    if (angka1 == angka2) {
        rules("sama");
        restart = true;
    } else if ((angka1 < 1 && angka2 > 3) || (angka1 > 3 && angka2 < 1)) {
        rules("kurang dari 1 atau lebih dari 3");
        restart = true;
    } else if (angka1 < 1 || angka2 < 1) {
        rules("kurang dari 1");
        restart = true;
    } else if (angka1 > 3 || angka2 > 3) {
        rules("lebih dari 3");
        restart = true;
    } else if (x == angka1) {
        alert("Tebakan Player 1 benar");
        p1++;
    } else if (x == angka2) {
        alert("Tebakan Player 2 benar");
        p2++;
    } else if (x != angka1 && x != angka2) {
        alert("Tidak ada tebakan yang benar. Hasil SERI.");
    }

    if (restart == true) {
        if (confirm("Ulangi?") == true) {
            i--;
            continue;
        } else {
            break;
        }
    }

    alert(`\nNilai yang dicari: ${x} \n=======================\n`
        + (i >= 5 ? "\nHasil akhir\n\n\n" : "")
        + `- Player 1: ${p1} \n- Player 2: ${p2}`);
    
}

var winner = function(a, b) {
    if (a == b) {
        return "Hasil game seri untuk Player 1 dan Player 2";
    } else if (a > b) {
        return "Selamat Player 1! Anda menang.";
    } else if (a < b) {
        return "Selamat Player 2! Anda menang.";
    }
}

alert(winner(p1, p2));
document.getElementById("winner").innerHTML = winner(p1, p2);