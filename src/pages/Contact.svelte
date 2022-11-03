<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Map from "../components/Map.svelte";

  export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCy7becgYuLwns3uumNm6WdBYkBpLfy44k&callback=initMap"
  >
  </script>
</svelte:head>

<Header />
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
                action="#"
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
