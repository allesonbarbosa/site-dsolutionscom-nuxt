<template>
  <section id="footer" class="bg-primary px-md-5 px-3">
    <div class="row d-flex justify-content-center border-top border-light py-5">
      <div
        class="d-flex flex-column align-items-center align-items-sm-start text-center text-sm-start col-sm-6 mb-4"
      >
        <img class="footer-logo" :src="logo" alt="imagem-logo" />
        <h5 class="text-white ms-2 m-0">DSolutionscom</h5>
        <span class="text-white ms-2 m-0">{{ $t("heroCard.titulo") }}</span>
      </div>
      <div class="pe-3 col-sm-3 text-center text-sm-start mb-4">
        <h6 class="text-white">{{ $t("footer.contatos") }}</h6>
        <ul class="navbar-nav justify-content-center flex-grow-1 text-white">
          <li>{{ $t("footer.telefone") }} {{ contactPhone }}</li>
          <li>{{ $t("footer.email") }} {{ contactEmail }}</li>
        </ul>
      </div>
      <div class="pe-3 col-sm-3 text-center text-sm-start">
        <h6 class="text-white">{{ $t("footer.mapaSite") }}</h6>
        <ul class="navbar-nav justify-content-center flex-grow-1 text-white">
          <li v-for="page in pages" :key="page" class="nav-item d-flex justify-content-center justify-content-sm-start">
            <button class="nav-link mx-lg-2" @click="scrollTo(page)">
              {{ $t(`navbar.${page}`) }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <span class="text-white m-0 d-flex justify-content-center">
      {{ $t("footer.direitos", { ano: getAno }) }}
    </span>
  </section>
</template>

<script>
import Logo from "../assets/logo-blue.png";
export default {
  name: "FooterView",
  data() {
    return {
      logo: Logo,
      pages: ["home", "sobre", "solucoes", "contato"],
    };
  },
  computed: {
    getAno() {
      return new Date().getFullYear();
    },
    contactEmail() {
      return useRuntimeConfig().public.contactEmail;
    },
    contactPhone() {
      const number = String(useRuntimeConfig().public.whatsappNumber);
      const phone = number
        .slice(2)
        .replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      return phone;
    },
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-logo {
  height: auto;
}
</style>
