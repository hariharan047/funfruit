<template>
  <div>
    <HeaderFunFurit />
    <FunFruitVue />
    <FooterFunFurit />
  </div>
</template>

<script>
import HeaderFunFurit from "@/components/HeaderFunFurit/HeaderFunFurit.vue";
import FunFruitVue from "@/components/TheNutHouse/FunFruitVue.vue";
import FooterFunFurit from "@/components/FooterFunFurit/FooterFunFurit.vue";
export default {
  name: "FunFruit",
  components: {
    HeaderFunFurit,
    FunFruitVue,
    FooterFunFurit,
  },
};
</script>

<style></style>
