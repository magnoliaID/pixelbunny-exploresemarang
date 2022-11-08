<script>
  function scrollToForm() {
    document
      .querySelector("#popularcause")
      .scrollIntoView({ behavior: "smooth" });
  }
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

  <!-- .container end -->
</header>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to="0"
      class="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to="1" />
    <li data-target="#carouselExampleIndicators" data-slide-to="2" />
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        class="d-block w-100"
        src="/assets/images/slider/slider1.png"
        alt="First slide"
      />
      <div class="carousel-caption d-none d-md-block">
        <div class="xs-welcome-wraper color-white">
          <h2>Explore Semarang</h2>
          <p>
            Jalan-jalan sambil menebar kebahagiaan
            <br />
            dan keberkahan kepada sesama.
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src="/assets/images/slider/slider2.png"
        alt="Second slide"
      />
      <div class="carousel-caption d-none d-md-block">
        <div class="xs-welcome-wraper color-white">
          <h2>Pemberi Rejeki</h2>
          <p>
            Apapun harta yang kalian infakkan maka Allah pasti akan
            menggantikannya
            <br />
            dan Dia adalah sebaik-baiknya pemberi rejeki.
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img
        class="d-block w-100"
        src="/assets/images/slider/slider3.png"
        alt="Third slide"
      />
      <div class="carousel-caption d-none d-md-block">
        <div class="xs-welcome-wraper color-white">
          <h2>Yuk Jalan-Jalan!</h2>
          <p>
            Kenali kota Semarang dari sisi kemanusiaannya. Sembari berusaha
            menjadi manusia
            <br />
            yang bermanfaat bagi sesama.
          </p>
        </div>
      </div>
    </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true" />
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true" />
    <span class="sr-only">Next</span>
  </a>
</div>

<!-- End header section -->
<style>
  .carousel-item {
    height: 100vh;
    min-height: 300px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .carousel-caption {
    bottom: 270px;
  }

  .carousel-caption h5 {
    font-size: 45px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 25px;
  }

  .carousel-caption p {
    width: 75%;
    margin: auto;
    font-size: 18px;
    line-height: 1.9;
  }
</style>
