<template>
  <div>
    <section>
      <div class="flex">
        <div
          class="block h-[416px] bg-cover w-full bg-[url('@/assets/Fundacion/download1.png')]"
        >
          <div class="flex flex-col mt-20 justify-center items-center">
            <img
              src="@/assets/Fundacion/download11.svg"
              alt=""
              class="mx-auto object-contain"
            />
            <h2
              class="text-xl text-center mt-2 px-4 align-middle text-[#225D38]"
            >
              ASOCIACIÓN MINISTERIOS DE AMOR A.C.
            </h2>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-around items-center my-20">
        <img src="@/assets/Fundacion/download2.png" alt="" class="w-[629px]" />
        <div class="block w-1/3">
          <h2 class="text-2xl text-center mt-6 text-[#225D38]">UNIDOS</h2>
          <p class="px-6 text-justify">
            En Fun Fruit estamos comprometidos con la sociedad, creemos en el
            talento de los pequeños que no tienen los recursos necesarios, razón
            por la cual apoyamos a la Asociación Misterios de Amor A.C. dedicada
            al apoyo de infantes en situación de calle.
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-around items-center my-20">
        <div class="block w-1/3">
          <h2 class="text-2xl text-center text-[#1C3D79]">AYUDAMOS</h2>
          <p class="px-6 mb-6 text-justify">
            Por medio de la Fundación, convertimos sueños en realidades,
            transformamos caras tristes en momentos de alegría y bienestar
            ayudando a cambiar el entorno de los pequeños dándoles nueva
            oportunidad y esperanza.
          </p>
        </div>
        <img src="@/assets/Fundacion/download3.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FundacionVue",
};
</script>

<style></style>
