<template>
  <div>
    <section>
      <div class="flex justify-center items-center h-[442px] bg-[#1C3D79]">
        <img src="@/assets/Acera/logo_fun4.svg" alt="" class="object-contain" />
      </div>
      <div
        class="flex flex-row justify-center items-center h-[500px] mb-4 bg-no-repeat bg-auto bg-right-top bg-[url('@/assets/Acera/bgi2.png')]"
      >
        <h2 class="text-6xl mt-10 text-center font-semibold text-[#225D38]">
          QUIÉNES SOMOS
        </h2>
        <div class="mt-10 mx-6 w-[600px]">
          <p class="mb-2 text-justify">
            Fun Fruit nace con el nombre de Tepehuana, que hace referencia a la
            Sierra de Tepehuanes, ubicada al sur de Chihuahua y parte de
            Durango, lugar de donde es originaria la marca.
          </p>
          <p class="mb-2 text-justify">
            En el año 2000 se funda Fun Fruit con una imagen de un Sol feliz por
            encima del monte que hace referencia a la naturaleza de nuestros
            productos y lo amigable que son para la salud.
          </p>
        </div>
      </div>
      <div
        class="flex justify-center h-[378px] items-center bg-[url('@/assets/Acera/bgi1.png')] bg-cover"
      >
        <h2 class="text-6xl text-center mt-10 w-1/3 text-[#EFC432]">
          EL SOL BRILLA PARA TODOS
        </h2>
      </div>
      <div class="flex justify-center items-center">
        <h2 class="text-4xl my-16 text-center text-[#1C3D79]">
          CONOCE NUESTRAS LÍNEAS
        </h2>
      </div>
      <div class="flex flex-row justify-around items-center">
        <div class="my-10 p-4 text-center">
          <img src="@/assets/Acera/img1.png" alt="" class="w-[244px]" />
          <h2 class="text-4xl mt-4 text-center">NUT HOUSE</h2>
          <a
            href=""
            class="inline-block my-4 t-white py-3 px-16 rounded text-[#1C79B1]"
            >Lo quiero</a
          >
        </div>
        <div class="my-10 p-4 text-center">
          <img src="@/assets/Acera/img2.png" alt="" class="w-[244px]" />
          <h2 class="text-4xl mt-4 text-center">FUNFRUIT</h2>
          <a
            href=""
            class="inline-block my-4 t-white py-3 px-16 rounded text-[#1C79B1]"
            >Lo quiero</a
          >
        </div>
        <div class="my-10 p-4 text-center">
          <img src="@/assets/Acera/img3.png" alt="" class="w-[244px]" />
          <h2 class="text-4xl mt-4 text-center">A GRANEL</h2>
          <a
            href=""
            class="inline-block my-4 t-white py-3 px-16 rounded text-[#1C79B1]"
            >Lo quiero</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AcercaVue",
};
</script>

<style></style>
