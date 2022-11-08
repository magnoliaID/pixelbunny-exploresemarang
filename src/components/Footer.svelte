<script type="text/javascript">
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (window.location.hash) {
    // smooth scroll to the anchor id
    "html,body".animate(
      {
        scrollTop: window.location.hash.offset().top + "px",
      },
      1000,
      "swing"
    );
  }
</script>

<!-- footer section start -->
<footer class="xs-footer-section">
  <div class="container">
    <div class="xs-footer-top-layer">
      <div class="row">
        <div class="col-lg-3 col-md-6 footer-widget xs-pr-20">
          <a href="/" class="xs-footer-logo">
            <img src="/assets/images/exploresmg_footer2.png" alt="" />
          </a>
          <p>
            "Sedekah dapat menghapus dosa sebagaimana Air memadamkan Api (HR.
            Tirmidzi, dishahihkan Al Albani dalam Shahih Ad Tirmidzi, 614)."
          </p>
          <ul class="xs-social-list-v2">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100087216957796"
                class="color-facebook"><i class="fa fa-facebook" /></a
              >
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@explore_semarang"
                class="color-twitter"><i class="fab fa-tiktok" /></a
              >
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/_exploresmg"
                class="color-instagram"><i class="fa fa-instagram" /></a
              >
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCNpkN3PcbeW5kTSBHvPdcSA"
                class="color-pinterest"><i class="fa fa-youtube" /></a
              >
            </li>
          </ul>
          <!-- .xs-social-list END -->
        </div>
        <div class="col-lg-4 col-md-6 footer-widget">
          <h3 class="widget-title">Tentang Kami</h3>
          <ul class="xs-footer-list">
            <li><a href="/about">Explore Semarang</a></li>
            <li><a href="#">Cara Kerja</a></li>
            <li><a href="#">Partner Kami</a></li>
            <li><a href="/contact">Kontak</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 footer-widget">
          <h3 class="widget-title">Kontak Kami</h3>
          <ul class="xs-info-list">
            <li>
              <i class="fa fa-home" />Plamongan Indah Semarang,Jawa Tengah,
              Indonesia.
            </li>
            <li><i class="fa fa-phone" />(+62) 87731030302</li>
            <li>
              <i class="fa fa-envelope-o" /><a
                href="mailto:exploresemarang.donasi@gmail.com"
                >exploresemarang.donasi@gmail.com</a
              >
            </li>
          </ul>
          <!-- .xs-list-with-icon END -->
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="xs-copyright">
      <div class="row">
        <div class="col-md-6">
          <div class="xs-copyright-text">
            <p>
              &copy; Copyright 2022 Explore Semarang. - All Right's Reserved
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <nav class="xs-footer-menu">
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/6287731030302">Help Desk</a
                >
              </li>
              <li>
                <a href="mailto:exploresemarang.donasi@gmail.com">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="xs-back-to-top-wraper">
    <a href="/" on:click={scrollToTop} class="xs-back-to-top"
      ><i class="fa fa-angle-up" /></a
    >
  </div>
</footer>
