<template>
    <NavbarCompponents></NavbarCompponents>
    <RouterView></RouterView>
    <NavbarMobileCompponentsVue></NavbarMobileCompponentsVue>
    <FooterCompponentVue></FooterCompponentVue>
</template>
<script setup>
  import FooterCompponentVue from './components/FooterCompponent.vue';
  import NavbarCompponents from './components/NavbarCompponents.vue'
  import NavbarMobileCompponentsVue from './components/NavbarMobileCompponents.vue';
</script>