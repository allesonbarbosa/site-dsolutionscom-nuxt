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
const { t, locale } = useI18n();
const baseUrl = "https://dsolutionscom.com.br";
const localePath = `/${locale.value}`;

useSeoMeta({
  title: t("seo.home.title"),
  ogTitle: t("seo.home.title"),
  description: t("seo.home.description"),
  ogDescription: t("seo.home.description"),
  ogType: "website",
  ogUrl: "https://dsolutionscom.com.br/",
  ogImage: "https://dsolutionscom.com.br/og/og-home.jpg",
});

useHead({
  meta: [
    {
      name: "keywords",
      content: t("seo.home.keywords"),
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    { rel: "canonical", href: `${baseUrl}${localePath}` },

    { rel: "alternate", hreflang: "pt-BR", href: `${baseUrl}/pt` },
    { rel: "alternate", hreflang: "es-ES", href: `${baseUrl}/es` },
    { rel: "alternate", hreflang: "en-US", href: `${baseUrl}/en` },

    { rel: "alternate", hreflang: "x-default", href: `${baseUrl}/pt` },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Dsolutionscom",
        url: "https://dsolutionscom.com.br",
      }),
    },
  ],
});
</script>
