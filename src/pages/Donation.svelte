<script>
  import { charity, getCharity } from "../stores/data.js";
  import { params } from "../stores/pages.js";
  import router from "page";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Loader from "../components/Loader.svelte";

  function scrollToForm() {
    document
      .querySelector("#popularcause")
      .scrollIntoView({ behavior: "smooth" });
  }

  let amount = 0,
    name,
    email,
    agree = false,
    contribute = 0;

  $: if ($charity) {
    contribute = Math.floor((parseInt(amount) / $charity.target) * 100);
  }

  getCharity($params.id);

  function handleButtonClick() {
    console.log("Button click");
  }

  async function handleForm(event) {
    agree = false;
    const newData = await getCharity($params.id);
    newData.pledged = newData.pledged + parseInt(amount);
    try {
      const res = await fetch(
        `https://my-json-server.typicode.com/magnoliaID/exploresemarangapi/apiexploresmg/${$params.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      const resMid = await fetch(`/.netlify/functions/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: $params.id,
          amount: parseInt(amount),
          name,
          email,
        }),
      });
      const midtransData = await resMid.json();
      console.log(midtransData);
      window.location.href = midtransData.url;
    } catch (err) {
      console.log(err);
    }
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
</header>
<!-- welcome section -->
<!--breadcumb start here-->
<!-- welcome section -->
<!--breadcumb start here-->
{#if !$charity}
  <Loader />
{:else}
  <section
    class="xs-banner-inner-section parallax-window"
    style="background-image:url('/assets/images/backgrounds/kat-yukawa-K0E6E0a0R3A-unsplash.jpg')"
  >
    <div class="xs-black-overlay" />
    <div class="container">
      <div class="color-white xs-inner-banner-content">
        <h2>Donasi Sekarang</h2>
        <p>{$charity.title}</p>
        <ul class="xs-breadcumb">
          <li class="badge badge-pill badge-primary">
            <a href="/" class="color-white">Beranda /</a>
            Donasi
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--breadcumb end here-->
  <!-- End welcome section -->
  <main class="xs-main">
    <!-- donation form section -->
    <section class="xs-section-padding bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="xs-donation-form-images">
              <img
                src={$charity.thumbnail}
                class="img-responsive"
                alt="Family Images"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="xs-donation-form-wraper">
              <div class="xs-heading xs-mb-30">
                <h2 class="xs-title">{$charity.title}</h2>
                <p class="small">
                  Untuk mempelajari lebih lanjut tentang cara melakukan donasi
                  silahkan hubungi kami melalui halaman "
                  <span class="color-green">Kontak</span>
                  ". Atau melalui nomor <br />
                  <span class="color-green">+62 8773 1030 302</span>
                  .
                </p>
                <h5>
                  Donasimu akan berkontribusi sebanyak
                  <strong>{contribute}%</strong>
                  dari total donasi saat ini.
                </h5>
                <span class="xs-separetor v2" />
              </div>
              <!-- .xs-heading end -->
              <form
                on:submit|preventDefault={handleForm}
                action="#"
                method="post"
                id="xs-donation-form"
                class="xs-donation-form"
                name="xs-donation-form"
              >
                <div class="xs-input-group">
                  <label for="xs-donate-name">
                    Jumlah Donasi
                    <span class="color-light-red">**</span>
                  </label>
                  <input
                    type="text"
                    name="amount"
                    id="xs-donate-amount"
                    class="form-control"
                    bind:value={amount}
                    required="true"
                    placeholder="Your donation in Rupiah"
                  />
                </div>
                <!-- .xs-input-group END -->
                <div class="xs-input-group">
                  <label for="xs-donate-name">
                    Nama
                    <span class="color-light-red">**</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="xs-donate-name"
                    class="form-control"
                    bind:value={name}
                    required="true"
                    placeholder="Masukkan namamu"
                  />
                </div>
                <div class="xs-input-group">
                  <label for="xs-donate-email">
                    Email
                    <span class="color-light-red">**</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required="true"
                    bind:value={email}
                    id="xs-donate-email"
                    class="form-control"
                    placeholder="email@gmail.com"
                  />
                </div>
                <div class="xs-input-group" id="xs-input-checkbox">
                  <input
                    type="checkbox"
                    name="agree"
                    id="xs-donate-agree"
                    bind:checked={agree}
                  />
                  <label for="xs-donate-agree">
                    Saya Setuju
                    <span class="color-light-red">**</span>
                  </label>
                </div>
                <!-- .xs-input-group END -->
                <button type="submit" disabled={!agree} class="btn btn-warning">
                  <span class="badge">
                    <i class="fa fa-heart" />
                  </span>
                  Donasi Sekarang
                </button>
              </form>
              <!-- .xs-donation-form #xs-donation-form END -->
            </div>
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </section>
    <!-- End donation form section -->
  </main>
{/if}

<Footer />

<style>
  #xs-input-checkbox {
    display: flex;
    align-items: center;
  }
  #xs-donate-agree {
    width: 35px;
  }
  label[for="xs-donate-agree"] {
    margin: 0;
    margin-left: 10px;
  }
  .xs-donation-form-images {
    text-align: center;
  }
</style>
