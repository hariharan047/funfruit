<template>
  <div>
    <header class="top-0 w-full z-10 sticky">
      <div class="w-full border-0 border-[#E2E8F0] border-solid">
        <div
          class="flex items-center justify-center p-2 leading-6 bg-[#EFC432]"
        >
          <p class="m-0 text-[#4F4F4F] text-base font-serif">
            <b>¡The Nut House llegó a Amazon!</b>
            Pide tu
            <b>producto</b>
            preferido.
          </p>
        </div>
      </div>
      <div class="p-6 w-full border-b-2 border-[#E2E8F0] border-solid">
        <div class="flex items-center justify-center">
          <img src="@/assets/logo.svg" alt="Funfruit" />
        </div>
      </div>
      <div class="w-full">
        <ul class="flex justify-evenly p-6 font-serif text-black">
          <li>
            <router-link to="/the-nut-house">The Nut House</router-link>
          </li>
          <li>
            <router-link to="/fun-fruit">Fun Fruit</router-link>
          </li>
          <li>
            <router-link to="/productos-a-granel"
              >Productos a granel</router-link
            >
          </li>
          <li>
            <router-link to="/acerca-de-fun">Acerca de Fun Fruit</router-link>
          </li>
          <li><router-link to="/fundacion-fun">Fundación</router-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderFunFurit",
};
</script>

<style></style>
