// Ambil elemen-elemen yang dibutuhkan
const pesanButtons = document.querySelectorAll(".pesan-button");

// Fungsi untuk menampilkan pesan konfirmasi
function pesanHotel() {
  alert("Anda akan dialihkan ke halaman pemesanan hotel.");
}

// Tambahkan event listener untuk setiap tombol "Pesan Sekarang"
pesanButtons.forEach((button) => {
  button.addEventListener("click", pesanHotel);
});

// Ambil semua elemen dengan kelas "hotel-card"
const hotelCards = document.querySelectorAll(".hotel-card");

// Tambahkan event listener pada setiap "hotel-card"
hotelCards.forEach((card) => {
  const imageStack = card.querySelector(".image-stack");
  const images = imageStack.querySelectorAll("img");
  const nextButton = card.querySelector(".next-button");

  let currentImageIndex = 0;

  // Tampilkan foto pertama saat halaman dimuat
  images[currentImageIndex].style.opacity = "1";

  nextButton.addEventListener("click", () => {
    // Sembunyikan foto saat ini
    images[currentImageIndex].style.opacity = "0";

    // Ganti indeks foto saat ini
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Tampilkan foto berikutnya
    images[currentImageIndex].style.opacity = "1";
  });
});

// Ambil elemen pop-up
const popup = document.getElementById("popup");

// Tambahkan event listener pada setiap "pesan-button"
pesanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "block";
  });
});

// Event listener untuk menutup pop-up saat mengklik area di luar pop-up
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var offset = window.pageYOffset;

  if (offset > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
