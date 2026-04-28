// register formunu seçiyoruz
const form = document.getElementById("registerForm");

// form submit olunca çalışır
form.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  // sayfanın yenilenmesini engeller

  // inputlardan verileri alıyoruz
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // backend'e istek atıyoruz
  const response = await fetch("/api/auth/register", {
    method: "POST", // POST = veri gönderiyoruz
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }) 
    // veriyi JSON formatına çeviriyoruz
  });

  const data = await response.json();

  // kullanıcıya mesaj göster
  alert(data.message);
});

// login formunu seçiyoruz (sadece login sayfasında var)
const loginForm = document.getElementById("loginForm");

// Eğer login formu varsa çalıştır (register sayfasında hata almamak için)
if (loginForm) {

  // Form submit edilince (butona basılınca) çalışır
  loginForm.addEventListener("submit", async (e) => {

    e.preventDefault(); 
    // Sayfanın yenilenmesini engeller (form default davranışı durdurulur)

    // Kullanıcının girdiği değerleri alıyoruz
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Backend'e istek gönderiyoruz
    const response = await fetch("/api/auth/login", {
      method: "POST", // veri gönderdiğimiz için POST kullanıyoruz

      headers: {
        "Content-Type": "application/json" 
        // gönderdiğimiz verinin JSON formatında olduğunu söylüyoruz
      },

      body: JSON.stringify({ email, password }) 
      // email ve şifreyi JSON formatına çevirip gönderiyoruz
    });

    const data = await response.json(); 
    // Backend'den gelen cevabı JSON olarak alıyoruz

    if (response.ok) {
      // Eğer giriş başarılıysa (status 200)

      alert("Giriş başarılı"); 
      // kullanıcıya bilgi ver

      window.location.href = "index.html"; 
      // 👉 ana sayfaya yönlendir

    } else {
      // Eğer giriş başarısızsa (örneğin 401)

      alert(data.message); 
      // backend'den gelen hata mesajını göster
    }
  });
}