<template>
  <div>
    <HeaderFunFurit />
    <AcercaVue />
    <FooterFunFurit />
  </div>
</template>

<script>
import HeaderFunFurit from "@/components/HeaderFunFurit/HeaderFunFurit.vue";
import AcercaVue from "@/components/TheNutHouse/AcercaVue.vue";
import FooterFunFurit from "@/components/FooterFunFurit/FooterFunFurit.vue";
export default {
  name: "AcercaDeFun",
  components: {
    HeaderFunFurit,
    AcercaVue,
    FooterFunFurit,
  },
};
</script>

<style></style>
