const envelope = document.getElementById("envelope");
const resetBtn = document.getElementById("reset");
const bears = document.querySelectorAll(".bear");

// Fungsi untuk restart animasi emoji beruang supaya selalu bergerak saat dibuka
function restartBearAnimations() {
  bears.forEach(b => {
    // hentikan sementara animasi inline supaya bisa restart
    b.style.animation = "none";
    // paksa reflow
    void b.offsetWidth;
    // hapus style inline -> kembali ke CSS animation
    b.style.animation = "";
  });
}

// Klik amplop → buka/tutup + restart animasi bears saat buka
envelope.addEventListener("click", () => {
  const isOpen = envelope.classList.toggle("open");
  envelope.classList.toggle("close");

  if (isOpen) {
    // restart animasi agar emoji bergerak tiap buka
    restartBearAnimations();
  }
});

// Klik tombol reset → tutup kembali
resetBtn.addEventListener("click", () => {
  envelope.classList.remove("open");
  envelope.classList.add("close");
});
