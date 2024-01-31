<template>
  <div>
    <HeaderFunFurit />
    <ProductsVue />
    <FooterFunFurit />
  </div>
</template>

<script>
import HeaderFunFurit from "@/components/HeaderFunFurit/HeaderFunFurit.vue";
import ProductsVue from "@/components/TheNutHouse/ProductsVue.vue";
import FooterFunFurit from "@/components/FooterFunFurit/FooterFunFurit.vue";
export default {
  name: "ProductoAGranel",
  components: {
    HeaderFunFurit,
    ProductsVue,
    FooterFunFurit,
  },
};
</script>

<style></style>
