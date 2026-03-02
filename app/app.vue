<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("seo.home.title"),
  ogTitle: t("seo.home.title"),
  description: t("seo.home.description"),
  ogDescription: t("seo.home.description"),
  ogType: 'website',
  ogUrl: 'https://dsolutionscom.com.br/',
  ogImage: 'https://dsolutionscom.com.br/og/og-home.jpg',
});
</script>
