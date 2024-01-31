<template>
  <div>
    <HeaderFunFurit />
    <NutsView />
    <FooterFunFurit />
  </div>
</template>

<script>
import HeaderFunFurit from "@/components/HeaderFunFurit/HeaderFunFurit.vue";
import NutsView from "../components/TheNutHouse/NutsView.vue";
import FooterFunFurit from "@/components/FooterFunFurit/FooterFunFurit.vue";

export default {
  name: "TheNutHouse",
  components: {
    HeaderFunFurit,
    NutsView,
    FooterFunFurit,
  },
};
</script>

<style></style>
