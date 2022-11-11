<script>
  import { fade, slide, fly } from "svelte/transition";
  import { onDestroy } from "svelte";

  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Loader from "../components/Loader.svelte";

  onDestroy(function () {
    window.scrollTo(0, 0);
  });
  function scrollToForm() {
    document
      .querySelector("#popularcause")
      .scrollIntoView({ behavior: "smooth" });
  }
  import { AnimatedCounter } from "@benzara/svelte-animated-counter";
</script>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <!-- <title>Charity Press - Home One</title> -->
  <meta name="description" content="" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <link
    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700%7CRoboto+Slab:400,700"
    rel="stylesheet"
  />

  <link rel="icon" type="image/png" href="favicon.ico" />
  <!-- Place favicon.ico in the root directory -->
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />

  <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />

  <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/assets/css/xsIcon.css" />
  <link rel="stylesheet" href="/assets/css/isotope.css" />
  <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="/assets/css/animate.css" />

  <!--For Plugins external css-->
  <link rel="stylesheet" href="/assets/css/plugins.css" />

  <!--Theme custom css -->
  <link rel="stylesheet" href="/assets/css/style.css" />

  <!--Theme Responsive css-->
  <link rel="stylesheet" href="/assets/css/responsive.css" />

  <!-- use only color version -->
  <!-- <link rel='stylesheet' type='text/css' href='assets/css/colors/color-1.css' > -->
</head>
<!-- header section -->
<header class="xs-header header-transparent">
  <div class="container">
    <nav class="xs-menus">
      <!-- .nav-header END -->
      <div class="nav-menus-wrapper row">
        <div class="xs-logo-wraper col-lg-2 xs-padding-0">
          <a class="nav-brand" href="/">
            <img src="/assets/images/logo22.png" alt="" />
          </a>
        </div>
        <!-- .xs-logo-wraper END -->
        <div class="col-lg-7">
          <ul class="nav-menu">
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/about">Tentang Kami</a>
            </li>
            <!-- <li>
                <a href="/gallery">Gallery</a>
              </li> -->
            <li>
              <a href="/contact">Kontak</a>
            </li>
          </ul>
          <!-- .nav-menu END -->
        </div>
        <div class="xs-navs-button d-flex-center-end col-lg-3">
          <a
            style="color:white;"
            href="/"
            on:click={scrollToForm}
            class="btn btn-primary"
          >
            <span class="badge">
              <i class="fa fa-heart" />
            </span>
            Donasi Yuk!
          </a>
        </div>
        <!-- .xs-navs-button END -->
      </div>
      <!-- .nav-menus-wrapper .row END -->
    </nav>
    <!-- .xs-menus .fundpress-menu END -->
  </div>
</header>
<!-- welcome section -->
<!--breadcumb start here-->

<section
  class="xs-banner-inner-section parallax-window"
  style="background-image:url('/assets/images/about_bg.png')"
>
  <div class="xs-black-overlay" />
  <div class="container">
    <div class="color-white xs-inner-banner-content">
      <h2>Tentang Kami</h2>
      <p>Explore Semarang - Share Happiness</p>
      <ul class="xs-breadcumb">
        <li class="badge badge-pill badge-primary">
          <a href="/" class="color-white"> Beranda /</a> Tentang Kami
        </li>
      </ul>
    </div>
  </div>
</section>
<!--breadcumb end here--><!-- End welcome section -->

<main class="xs-main">
  <!-- video popup section section -->
  <div class="xs-video-popup-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 content-center">
          <div class="xs-video-popup-wraper">
            <img src="/assets/images/slide12.png" alt="" />
            <div class="xs-video-popup-content">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/shorts/qx3X4LbVMSs"
                class="xs-video-popup xs-round-btn"
              >
                <i class="fa fa-play" />
              </a>
            </div>
            <!-- .xs-video-popup-content end -->
          </div>
          <!-- .xs-video-popup-wraper end -->
        </div>
      </div>
      <!-- .row end -->
    </div>
    <!-- .container end -->
  </div>
  <!-- End video popup section section -->

  <!-- video popup section section -->
  <section class="xs-content-section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-11 content-center">
          <div class="xs-heading xs-mb-100 text-center">
            <h2 class="xs-mb-0 xs-title">
              Kami merupakan <span class="color-green">komunitas</span>
              penggalang <span class="color-green">donasi</span> untuk disalurkan
              kepada yang membutuhkan di sekitar kota Semarang.
            </h2>
          </div>
        </div>
      </div>
      <!-- .row end -->
      <div class="row">
        <div class="col-md-4">
          <div class="xs-about-feature">
            <h3>Misi</h3>
            <p class="lead">
              Mengajak masyarakat umum, badan usaha & komunitas lain yang
              memiliki jiwa sosial untuk ikut serta dalam penggalangan bantuan
              berupa sumbangan materi, tenaga serta pikiran yang bermanfaat bagi
              masyarakat kurang mampu di indonesia.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="xs-about-feature">
            <h3>Visi</h3>
            <p class="lead">
              Menjadi suatu organisasi profesional yang memiliki tujuan ikut
              membantu dan memajukan serta mensejahterahkan masyarakat indonesia
              dimulai sari Kota Semarang.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="xs-about-feature">
            <h3>Nilai</h3>
            <ul class="xs-unorder-list play green-icon">
              <li>Akuntabilitas</li>
              <li>Keandalan</li>
              <li>Efektivitas biaya</li>
              <li>Layanan Pribadi</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- .row end -->
    </div>
    <!-- .container end -->
  </section>
  <!-- End video popup section section -->

  <!-- funfacts section -->
  <div
    class="xs-funfact-section xs-content-section-padding waypoint-tigger parallax-window"
    style="background-image: url('/assets/images/backgrounds/parallax_1.png')"
  >
    <div class="container">
      <div class="row col-lg-10 xs-heading mx-auto">
        <h2 class="xs-title color-white small">
          Terima kasih kepada semua orang baik, hingga hari ini, Explore
          Semarang telah menjadi wadah kebaikan untuk lebih dari:
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="xs-single-funFact color-white">
            <i class="icon-donation_2" />
            <span
              class="number-percentage-count number-percentage"
              data-value="100"
              data-animation-duration="3500">100</span
            >
            <small>Panti Asuhan</small>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="xs-single-funFact color-white">
            <i class="icon-group" />
            <span
              class="number-percentage-count number-percentage "
              data-value="500"
              data-animation-duration="3500">500</span
            >
            <small>Donator</small>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="xs-single-funFact color-white">
            <i class="icon-children" />

            <span
              class="number-percentage-count number-percentage "
              data-value="1000"
              data-animation-duration="3500">1000</span
            >
            <small>Anak Yatim</small>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="xs-single-funFact color-white">
            <i class="icon-planet-earth" />
            <span
              class="number-percentage-count number-percentage "
              data-value="50"
              data-animation-duration="3500">50</span
            ><span />
            <small>Kelurahan</small>
          </div>
        </div>
      </div>
      <!-- .row end -->
    </div>
    <!-- .container end -->
    <div class="xs-black-overlay" />
  </div>
  <!-- End funfacts section -->

  <!-- what we do section -->
  <section class="xs-section-padding">
    <div class="container">
      <div class="xs-heading row xs-mb-60">
        <div class="col-md-9 col-xl-9">
          <h2 class="xs-title">Yang Kami Lakukan</h2>
          <span class="xs-separetor dashed" />
          <p>
            Komunitas kami ada selama lebih dari 2 tahun. Kami memberikan
            bantuan yang terbaik kepada mereka yang membutuhkan, khususnya
            anak-anak di panti asuhan.
          </p>
        </div>
        <!-- .xs-heading-title END -->
      </div>
      <!-- .row end -->
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="xs-service-promo">
            <span class="icon-water color-orange" />
            <h5>Air <br />Minum</h5>
            <p>
              Air putih berperan untuk mengurangi dehidrasi dan mengoptimalkan
              fungsi otak. Kami ikut berperan menyumbangkan air minum untuk
              anak-anak panti asuhan agar kebutuhan mineralnya tercukupi.
            </p>
          </div>
          <!-- .xs-service-promo END -->
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="xs-service-promo">
            <span class="icon-groceries color-red" />
            <h5>Makanan <br />dan Sembako</h5>
            <p>
              Kami berpartisipasi dalam menyalurkan donasi dalam bentuk makanan
              dan sembako untuk memenuhi gizi anak-anak di panti asuhan.
            </p>
          </div>
          <!-- .xs-service-promo END -->
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="xs-service-promo">
            <span class="icon-heartbeat color-purple" />
            <h5>Obat <br />dan Peralatan Kesehatan</h5>
            <p>
              Tidak semua anak memiliki kondisi kesehatan yang sama. Kami turut
              menyalurkan donasi dalam bentuk obat-obatan maupun alat kesehatan
              bagi yang membutuhkan.
            </p>
          </div>
          <!-- .xs-service-promo END -->
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="xs-service-promo">
            <span class="icon-open-book color-green" />
            <h5>Perlengkapan <br />Sekolah</h5>
            <p>
              Pendidikan merupakan kebutuhan bagi setiap anak. Kami membatu
              menyalurkan donasi dalam bentuk perlengkapan sekolah untuk
              membantu kegiatan belajar anak-anak di panti asuhan.
            </p>
          </div>
          <!-- .xs-service-promo END -->
        </div>
      </div>
      <!-- .row end -->
    </div>
    <!-- .container end -->
  </section>
  <!-- End what we do section -->
</main>

<Footer />

<!-- <style>
  .fa-play {
    height: 200px;
  }
</style> -->
