<template>
  <div>
    <WhatsappButton />
    <NavBar />
    <main id="main-content">
      <HomeView />
      <div class="d-flex flex-column gap-5 mt-4 px-md-5 px-3">
        <AboutView />
        <SolucoesView />
        <AtuacoesView />
      </div>
      <ContatoView />
    </main>
    <FooterView />
  </div>
</template>
<script setup>
const { locale } = useI18n();
const baseUrl = "https://dsolutionscom.com.br";

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    { rel: "canonical", href: `${baseUrl}/${locale.value}` },

    { rel: "alternate", hreflang: "pt-BR", href: `${baseUrl}/pt` },
    { rel: "alternate", hreflang: "es-ES", href: `${baseUrl}/es` },
    { rel: "alternate", hreflang: "en-US", href: `${baseUrl}/en` },

    { rel: "alternate", hreflang: "x-default", href: `${baseUrl}/pt` },
  ],
});
</script>
