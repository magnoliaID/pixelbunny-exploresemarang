<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  import Modal from "./Modal.svelte";
  import { charities } from "../stores/data.js";
  import Loader from "./Loader.svelte";

  function calculateFunded(pledged, target) {
    return Math.round((1 / (target / pledged)) * 100);
  }

  function formatCurrency(nominal) {
    return nominal.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  function calculateDaysRemaining(date_end) {
    const delta = date_end - new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(delta / oneDay));
  }
</script>

<!-- popularCauses section -->
<section id="popularcause" class="bg-gray waypoint-tigger xs-section-padding">
  <div class="container">
    <div class="xs-heading row xs-mb-60">
      <div class="col-md-9 col-xl-9">
        <h2 class="xs-title">Daftar Donasi</h2>
        <span class="xs-separetor dashed" />
        <p>
          Donasi insyaAllah akan disalurkan ke panti asuhan disekitar kota
          Semarang. Yuk ikutan jadi volunteer, kita akan membagikan sedikit
          rejeki yang mungkin sangat berarti untuk mereka.
        </p>
      </div>
      <!-- .xs-heading-title END -->
    </div>
    <!-- .row end -->

    <div class="row">
      {#each $charities as charity}
        <div class="col-lg-4 col-md-6">
          <div class="xs-popular-item xs-box-shadow">
            <div class="xs-item-header">
              <img src={charity.thumbnail} alt="" />

              <div class="xs-skill-bar">
                <div class="xs-skill-track">
                  <p>
                    <span
                      class="number-percentage-count number-percentage"
                      data-value="90"
                      data-animation-duration="3500"
                      >{calculateFunded(charity.pledged, charity.target)}</span
                    >%
                  </p>
                </div>
              </div>
            </div>
            <!-- .xs-item-header END -->
            <div class="xs-item-content">
              <ul class="xs-simple-tag xs-mb-20">
                <li><a href="">{charity.category}</a></li>
              </ul>

              <a href="/donation/{charity.id}" class="xs-post-title xs-mb-30"
                >{charity.title}</a
              >

              <ul class="xs-list-with-content">
                <li class="pledged">
                  {formatCurrency(charity.pledged)}<span
                    >Donasi <br /> terkumpul</span
                  >
                </li>
                <li>
                  <span
                    class="number-percentage-count number-percentage"
                    data-value="90"
                    data-animation-duration="3500"
                    >{calculateFunded(charity.pledged, charity.target)}</span
                  >% <span>Target<br /> Tercapai</span>
                </li>
                <li>
                  {calculateDaysRemaining(charity.date_end)}<span
                    >Hari<br /> tersisa</span
                  >
                </li>
              </ul>

              <span class="xs-separetor" />

              <div class="row xs-margin-0">
                <div class="xs-round-avatar">
                  <img src={charity.profile_photo} alt="" />
                </div>
                <div class="xs-avatar-title">
                  <a href="#"><span>By</span>{charity.profile_name}</a>
                </div>
              </div>

              <span class="xs-separetor" />

              <a
                href="/donation/{charity.id}"
                style="color:white;"
                class="btn btn-primary btn-block"
              >
                Donasi Sekarang
              </a>
            </div>
            <!-- .xs-item-content END -->
          </div>
          <!-- .xs-popular-item END -->
        </div>
      {:else}
        <Loader />
      {/each}
    </div>
    <!-- .row end -->
  </div>
  <!-- .container end -->
</section>
<!-- End popularCauses section -->

<!-- <div>
    <h2>Daftar Charity</h2>
    {#if charities != undefined}
   
    <ul>
        {#each charities as charity}
        <li>{charity.title} - {charity.category}</li>
        {/each}

    </ul>
    {:else}
    <h5>Data belum tersedia</h5>
    {/if}
</div> -->
<style>
  .xs-list-with-content {
    font-size: 12px;
  }
  .number-percentage-count {
    font-size: 12px;
  }
  .number-percentage {
    font-size: 12px;
  }
  .show {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .pledged {
    margin-right: 3em;
  }
</style>
