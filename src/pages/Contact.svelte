<script>
  import Header from "../components/Header.svelte";
  import { onDestroy } from "svelte";

  import Footer from "../components/Footer.svelte";
  import Map from "../components/Map.svelte";

  onDestroy(function () {
    window.scrollTo(0, 0);
  });

  function scrollToForm() {
    document
      .querySelector("#popularcause")
      .scrollIntoView({ behavior: "smooth" });
  }
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCy7becgYuLwns3uumNm6WdBYkBpLfy44k&callback=initMap"
  >
  </script>
</svelte:head>

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
  style="background-image:url('assets/images/contact_bg2.png')"
>
  <div class="xs-black-overlay" />
  <div class="container">
    <div class="color-white xs-inner-banner-content">
      <h2>Kontak Kami</h2>
      <p>Memberi bantuan untuk mereka yang membutuhkan</p>
      <ul class="xs-breadcumb">
        <li class="badge badge-pill badge-primary">
          <a href="/" class="color-white">Beranda /</a>
          Kontak
        </li>
      </ul>
    </div>
  </div>
</section>
<!--breadcumb end here-->
<!-- End welcome section -->

<main class="xs-main">
  <!-- contact section -->
  <section class="xs-contact-section-v2">
    <div class="container">
      <div class="xs-contact-container">
        <div class="row">
          <div class="col-lg-6">
            <div class="xs-contact-form-wraper">
              <h4>Kirim Pesan</h4>
              <form
                action="https://formsubmit.co/636a3135513d3d8b4b5303aab552c9e1"
                method="POST"
                id="xs-contact-form"
                class="xs-contact-form contact-form-v2"
              >
                <div class="input-group">
                  <input
                    type="text"
                    name="name"
                    id="xs-name"
                    class="form-control"
                    placeholder="Masukkan Namamu....."
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-user" />
                    </div>
                  </div>
                </div>
                <!-- .input-group END -->
                <div class="input-group">
                  <input
                    type="email"
                    name="email"
                    id="xs-email"
                    class="form-control"
                    placeholder="Masukkan Emailmu....."
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-envelope-o" />
                    </div>
                  </div>
                </div>
                <!-- .input-group END -->
                <div class="input-group massage-group">
                  <textarea
                    name="massage"
                    placeholder="Masukkan Pesanmu....."
                    id="xs-massage"
                    class="form-control"
                    cols="30"
                    rows="10"
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-pencil" />
                    </div>
                  </div>
                </div>
                <!-- .input-group END -->
                <button class="btn btn-success" type="submit" id="xs-submit">
                  kirim
                </button>
              </form>
              <!-- .xs-contact-form #xs-contact-form END -->
            </div>
            <!-- .xs-contact-form-wraper END -->
          </div>
          <div class="col-lg-6">
            <div class="xs-donation-form-images">
              <div class="img-hover-zoom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/iP4j3pfu5j3mK7P3A"
                >
                  <img
                    src="/assets/images/map2.png"
                    class="img-responsive"
                    alt="alamat"
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- .row end -->
        </div>
        <!-- .xs-contact-container END -->
      </div>
      <!-- .container end -->
    </div>
  </section>
  <!-- End contact section -->
</main>

<Footer />

<style>
  .img-hover-zoom {
    height: 380px; /* [1.1] Set it as per your need */
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  }

  /* [2] Transition property for smooth transformation of images */
  .img-hover-zoom img {
    transition: transform 0.5s ease;
  }

  /* [3] Finally, transforming the image when container gets hovered */
  .img-hover-zoom:hover img {
    transform: scale(1.5);
  }
</style>
