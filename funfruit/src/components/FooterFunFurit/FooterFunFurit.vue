<template>
  <div>
    <footer class="w-full bg-[#1C3D79] p-8">
      <div class="flex flex-row justify-around">
        <div class="block">
          <h1 class="text-center font-light text-white">
            FUNFRUIT EN TU BANDEJA DE ENTRADA
          </h1>
          <p class="my-5 text-center font-light text-white">
            Regístrate para recibir ofertas y nuevo contenido de FUNFRUIT.
          </p>
          <input
            type="email"
            placeholder="Ingresa tu email"
            name=""
            id=""
            class="border border-gray-300 my-5 bg-[#1C3D79] rounded-lg py-5 px-4 block w-full leading-normal"
          />
          <div class="flex justify-center items-center flex-row">
            <a href="" target="_blank" class="m-3 font-light text-white"
              >Aviso de privacidad</a
            >
            <a href="" target="_blank" class="m-3 font-light text-white"
              >Términos y condiciones</a
            >
            <a href="" target="_blank" class="m-3 font-light text-white"
              >©FUNFRUIT 2020</a
            >
          </div>
        </div>
        <div class="block">
          <a
            href=""
            target="_blank"
            class="block text-center font-light text-white"
            >Contáctanos</a
          >
          <a
            href=""
            target="_blank"
            class="block text-center my-5 font-light text-white"
            >Únete a nuestro equipo</a
          >
          <a
            href=""
            target="_blank"
            class="block text-center my-5 font-light text-white"
            >Blog</a
          >
          <div class="flex justify-center">
            <img src="@/assets/facebook.svg" alt="" class="mx-3" />
            <img src="@/assets/instagram.svg" alt="" class="mx-3" />
            <img src="@/assets/twitter.svg" alt="" class="mx-3" />
          </div>
          <img src="@/assets/concept.svg" alt="" class="mx-auto m-4" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterFunFurit",
};
</script>

<style></style>
