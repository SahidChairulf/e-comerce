<template>
    <NavbarCompponents></NavbarCompponents>
    <RouterView></RouterView>
    <NavbarMobileCompponentsVue class=""></NavbarMobileCompponentsVue>
    <FooterCompponentVue class=""></FooterCompponentVue>
</template>
<script setup>
  import FooterCompponentVue from './components/FooterCompponent.vue';
  import NavbarCompponents from './components/NavbarCompponents.vue'
  import NavbarMobileCompponentsVue from './components/NavbarMobileCompponents.vue';
</script>