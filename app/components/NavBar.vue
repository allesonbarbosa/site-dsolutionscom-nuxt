<template>
  <!-- NavBar -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="logo-container d-flex align-items-center">
        <img :src="logo" alt="logo-dsolutions" class="navbar-logo" />
        <h3 class="text-white pt-2 logo-text">DSolutionscom</h3>
      </div>
      <div
        id="offcanvasNavbar"
        class="offcanvas text-bg-primary offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasNavbarLabel" class="offcanvas-title">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body w-100">
          <ul class="navbar-nav justify-content-center flex-grow-1 ps-2">
            <li
              v-for="page in pages"
              :key="page"
              class="nav-item"
              data-bs-dismiss="offcanvas"
            >
              <button class="nav-link mx-lg-2 w-100 text-start" @click="scrollTo(page)">
                {{ $t(`navbar.${page}`) }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
        <IdiomaSelect />
        <button
          type="button"
          class="navbar-toggler pe-0 d-flexlitems-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="burger"
        >
          <span class="navbar-toggler-icon" />
      </button>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../assets/logo-blue.png";
import IdiomaSelect from "./IdiomaSelect.vue";

export default {
  name: "NavBar",
  components: { IdiomaSelect },
  data() {
    return {
      logo: Logo,
      pages: ["home", "sobre", "solucoes", "contato"],
    };
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el && id !== 'home') {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 500);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.navbar {
  background-color: #182230;
  height: 70px;
}

.navbar-toggler {
  border: none;
  font-size: 1.25rem;
  color: white;
}

.navbar-toggler:focus,
.btn-close:focus {
  box-shadow: none;
  outline: none;
}

.nav-link {
  color: #fff;
  font-weight: 500;
  position: relative;
}

.nav-link:hover,
.nav-link:active {
  color: #fff;
}

@media (min-width: 991px) {
  .nav-link::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #fff;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
  .navbar-toggler {
    display: none !important;
  }
}

.nav-link.active {
  color: white;
}

.nav-link:hover::before,
.nav-link:active::before {
  width: 100%;
  visibility: visible;
}

.navbar-logo {
  height: auto;
}
.navbar-toggler-icon {
  filter: invert(1);
}

.offcanvas {
  width: 300px;
}
</style>
