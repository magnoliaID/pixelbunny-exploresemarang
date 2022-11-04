<script>
  import router from "page";
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Loader from "../components/Loader.svelte";

  export let params;
  let charity,
    amount,
    name,
    email,
    agree = false;
  let data = getCharity(params.id);

  async function getCharity(id) {
    const res = await fetch(
      `https://charity-api-bwa.herokuapp.com/charities/${id}`
    );
    return res.json();
  }

  function handleButtonClick() {
    console.log("button click");
  }

  async function handleForm(event) {
    charity.pledged = charity.pledged + parseInt(amount);
    try {
      const res = await fetch(
        `http://charity-api-bwa.herokuapp.com/charities/${params.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(charity),
        }
      );
      console.log(res);
      router.redirect("/success");
    } catch (err) {
      console.log(err);
    }
  }

  onMount(async function () {
    charity = await getCharity(params.id);
  });
</script>

<Header />

<!-- welcome section -->
<!--breadcumb start here-->
{#await data}
  <Loader />
{:then charity}
  <section
    class="xs-banner-inner-section parallax-window"
    style="background-image:url('/assets/images/backgrounds/about_bg.png')"
  >
    <div class="xs-black-overlay" />
    <div class="container">
      <div class="color-white xs-inner-banner-content">
        <h2>Donasi Sekarang</h2>
        <p>{charity.title}</p>
        <ul class="xs-breadcumb">
          <li class="badge badge-pill badge-primary">
            <a href="/" class="color-white">Beranda /</a> Donasi
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--breadcumb end here--><!-- End welcome section -->
  <main class="xs-main">
    <!-- donation form section -->
    <section class="xs-section-padding bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="xs-donation-form-images">
              <img
                src={charity.thumbnail}
                class="img-responsive"
                alt="Family Images"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="xs-donation-form-wraper">
              <div class="xs-heading xs-mb-30">
                <h2 class="xs-title">{charity.title}</h2>
                <p class="small">
                  Untuk mempelajari lebih lanjut tentang cara melakukan donasi
                  silahkan hubungi kami melalui halaman "<span
                    class="color-green">Kontak</span
                  >". Atau melalui nomor <br />
                  <span class="color-green">+62 8773 1030 302</span>.
                </p>
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
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    id="xs-donate-amount"
                    class="form-control"
                    bind:value={amount}
                    required="true"
                    placeholder="Donasimu dalam Rupiah"
                  />
                </div>
                <!-- .xs-input-group END -->
                <div class="xs-input-group">
                  <label for="xs-donate-name">
                    Namamu
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
                    Emailmu
                    <span class="color-light-red">**</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required="true"
                    id="xs-donate-email"
                    class="form-control"
                    bind:value={email}
                    placeholder="emailmu@gmail.com"
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
{/await}

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

  .btn-warning {
    color: white;
  }
</style>
