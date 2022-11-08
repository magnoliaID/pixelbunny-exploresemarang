<script>
  import router from "page";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  let visible = false;

  function toggleVissible() {
    visible = !visible;
  }
</script>

<Header />

<section
  class="xs-banner-inner-section parallax-window"
  style="background-image:url('/assets/images/backgrounds/faq_bg.png')"
>
  <div class="xs-black-overlay" />
  <div class="container">
    <div class="color-white xs-inner-banner-content">
      <h2>Frequently Asked Questions</h2>
      <p>Pertanyaanmu mungkin terjawab disini</p>
    </div>
  </div>
</section>

<body>
  <div class="accordion-menu">
    <ul class="faq3">
      <li>
        <input type="checkbox" checked />
        <i class="arrow" />
        <h2 class="faq2">
          <i class="fas fa-handshake-o" />Explore Semarang
        </h2>
        <p class="faq">
          Explore Semarang merupakan komunitas yang dibentuk oleh beberapa anak
          muda di Semarang yang berinisiatif untuk melakukan penggalangan
          bantuan. Jalan-jalan menyusuri kota Semarang sambil menebar
          kebahagiaan dan keberkahan bagi sesama.
        </p>
      </li>
      <li>
        <input type="checkbox" checked />
        <i class="arrow" />
        <h2 class="faq2">
          <i class="fas fa-users" />Menjadi Bagian Kami
        </h2>
        <p class="faq">
          Kamu dapat menjadi bagian dari Explore Semarang dengan mendukung
          setiap kegiatan yang kami selenggarakan. Kamu juga dapat ikut
          berpartisipasi dalam menyalurkan donasi secara langsung di lokasi
          penerima dengan menghubungi kontak admin melalui halaman "Kontak" atau
          langsung menghubungi nomor yang tertera pada halaman website.
        </p>
      </li>
      <li>
        <input type="checkbox" checked />
        <i class="arrow" />
        <h2 class="faq2">
          <i class="fas fa-question" />Cara Donasi
        </h2>
        <p class="faq">
          Donasi dapat dilakukan melalui halaman "Beranda" dan pilih daftar
          donasi yang tersedia.
        </p>
      </li>
      <li>
        <input type="checkbox" checked />
        <i class="arrow" />
        <h2 class="faq2"><i class="fas fa-credit-card" />Pembayaran</h2>
        <p class="faq">
          Pembayaran donasi dapat dilakukan melalui Bank transfer dari semua
          bank di Indonesia (BCA, Mandiri, BRI, Permata, etc) <br />Menggunakan
          Virtual Account (BNI, BRI, Permata) dan Mandiri Bill <br />Menggunakan
          Gopay atau QRIS
        </p>
      </li>
      <li>
        <input type="checkbox" checked />
        <i class="arrow" />
        <h2 class="faq2"><i class="fas fa-laugh" />Penerima Donasi</h2>
        <p class="faq">
          Donasi akan disalurkan kepada mereka yang membutuhkan di area Kota
          Semarang dan sekitarnya.
        </p>
      </li>
    </ul>
  </div>
</body>

<Footer />

<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    perspective: 900;
    /* overflow-y: scroll; */
    background-color: #18bfc3;
    font-family: "Titillium Web", sans-serif;
    color: rgba(48, 69, 92, 0.8);
  }
  .accordion-menu {
    display: inline-block;
    position: relative;
    left: 50%;
    margin: 150px 0;
    transform: translate(-50%, 0);
    max-width: 700px;
    padding: 10px 20px 20px;
    border-radius: 5px;
  }
  .faq2 {
    font-size: 18px;
    line-height: 34px;
    font-weight: 500;
    letter-spacing: 1px;
    display: block;
    margin: 0;
    cursor: pointer;
    color: #6c6c6a;
  }
  .faq {
    color: rgba(48, 69, 92, 0.8);
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    max-height: 800px;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 14px;
    z-index: 2;
  }
  ul {
    list-style: none;
    perspective: 900;
    padding: 0 20px 10px;
    margin: 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(255, 255, 255, 0.19);
  }
  ul li {
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 18px;
    border-top: 1px dotted #dce7eb;
  }

  ul li:nth-child(1) {
    border: none;
  }
  ul li:nth-of-type(1) {
    animation-delay: 0.5s;
  }
  ul li:nth-of-type(2) {
    animation-delay: 0.75s;
  }
  ul li:nth-of-type(3) {
    animation-delay: 1s;
  }
  ul li:last-of-type {
    padding-bottom: 0;
  }

  ul li .arrow {
    position: absolute;
    transform: translate(-6px, 0);
    margin-top: 16px;
    right: 0;
  }
  ul li .fas {
    color: #18bfc3;
    font-size: 15px;
    margin-right: 10px;
  }
  ul li .arrow:before,
  ul li .arrow:after {
    content: "";
    position: absolute;
    background-color: #18bfc3;
    width: 3px;
    height: 9px;
  }
  ul li .arrow:before {
    transform: translate(-2px, 0) rotate(45deg);
  }
  ul li .arrow:after {
    transform: translate(2px, 0) rotate(-45deg);
  }
  ul li input[type="checkbox"] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }
  ul li input[type="checkbox"]:checked ~ p {
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    transform: translate(0, 50%);
  }
  ul li input[type="checkbox"]:checked ~ .arrow:before {
    transform: translate(2px, 0) rotate(45deg);
  }
  ul li input[type="checkbox"]:checked ~ .arrow:after {
    transform: translate(-2px, 0) rotate(-45deg);
  }
  .transition,
  p,
  ul li .arrow:before,
  ul li .arrow:after {
    transition: all 0.25s ease-in-out;
  }

  .flipIn,
  h1,
  ul li {
    animation: flipdown 0.5s ease both;
  }
  .no-select,
  h2 {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
  }
  @keyframes flipdown {
    0% {
      opacity: 0;
      transform-origin: top center;
      transform: rotateX(-90deg);
    }

    5% {
      opacity: 1;
    }

    80% {
      transform: rotateX(8deg);
    }

    83% {
      transform: rotateX(6deg);
    }

    92% {
      transform: rotateX(-3deg);
    }

    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }
</style>
