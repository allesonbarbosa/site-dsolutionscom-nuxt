<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle d-flex align-items-center"
      type="button"
      data-bs-toggle="dropdown"
    >
      <img :src="flagIcon" class="flag-idioma" alt="flag-idioma-selecionado">
    </button>

    <ul class="dropdown-menu dropdown-menu-end bg-secondary">
      <li v-for="idioma in idiomas" :key="idioma">
        <NuxtLink
          class="dropdown-item d-flex align-items-center"
          :to="$switchLocalePath(idioma)"
        >
          <img :src="flag[idioma]" class="flag-idioma me-2" alt="flag-idioma" />
          {{ $t(`idiomas.${idioma}`) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import FlagBr from "@/assets/flags/br.svg";
import FlagEn from "@/assets/flags/en.svg";
import FlagEs from "@/assets/flags/es.svg";

export default {
  name: "IdiomaSelect",

  data() {
    return {
      idiomas: ["pt", "en", "es"],
      flag: {
        pt: FlagBr,
        en: FlagEn,
        es: FlagEs,
      },
    };
  },

  computed: {
    flagIcon() {
      return this.flag[this.$i18n.locale];
    },
  },
};
</script>

<style scoped>
.flag-idioma {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.dropdown-toggle::after {
  color: white;
}
</style>
