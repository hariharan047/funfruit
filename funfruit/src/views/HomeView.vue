<template>
  <div>
    <HeaderFunFurit />
    <SliderOne />
    <slider-two />
    <FooterFunFurit></FooterFunFurit>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderFunFurit from "@/components/HeaderFunFurit/HeaderFunFurit.vue";
import SliderOne from "@/components/sliderOne/SliderOne.vue";
import SliderTwo from "@/components/sliderOne/SliderTwo.vue";
import FooterFunFurit from "@/components/FooterFunFurit/FooterFunFurit.vue";
export default {
  name: "HomeView",
  components: {
    HeaderFunFurit,
    SliderOne,
    SliderTwo,
    FooterFunFurit,
  },
};
</script>
