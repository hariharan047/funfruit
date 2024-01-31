<template>
  <div>
    <HeaderFunFurit />
    <FundacionVue />
    <FooterFunFurit />
  </div>
</template>

<script>
import HeaderFunFurit from "@/components/HeaderFunFurit/HeaderFunFurit.vue";
import FundacionVue from "@/components/TheNutHouse/FundacionVue.vue";
import FooterFunFurit from "@/components/FooterFunFurit/FooterFunFurit.vue";
export default {
  name: "FundacionFun",
  components: {
    HeaderFunFurit,
    FundacionVue,
    FooterFunFurit,
  },
};
</script>

<style></style>
