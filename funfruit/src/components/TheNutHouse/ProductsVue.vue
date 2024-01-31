<template>
  <div>
    <section>
      <div class="my-16">
        <div class="flex flex-row justify-between my-12">
          <h2 class="text-3xl text-center mx-10 my-10 text-[#4F4F4F]">
            TODOS LOS PRODUCTOS
          </h2>
          <div
            class="flex flex-row justify-around w-[420px] items-center my-10"
          >
            <p class="font-bold text-xl mb-2 px-4">{{ val }}artículos</p>
            <select
              name=""
              v-model="SelectedOption"
              class="w-full block appearance-none bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus_border-gray-500"
            >
              <option value="all">Todos</option>
              <option value="FrutosSecus">Frutos Secus</option>
              <option value="FrutosDeshidcatada">Frutos deshidcatada</option>
              <option value="NuecesYSemillas">Nueces Y Semillas</option>
            </select>
          </div>
        </div>
        <div class="flex flex-row justify-around">
          <div class="block mx-10 w-[416px]">
            <h2 class="text-4xl text-[#4F4F4F] text-justify">GRANEL</h2>
            <p class="text-xl text-justify">
              Una gran variedad de frutos y semillas listos para disfrutar.
            </p>
            <p class="text-xl my-3 text-justify">
              <b>Sabías que...</b>Nuestros productos a granel están
              cuidadosamente seleccionados para ofrecerte sólo lo mejor.
            </p>
          </div>
          <div>
            <div v-if="SelectedOption === 'all'">
              <div class="block w-[832px]">
                <div class="flex flex-col-3">
                  <div class="flex flex-row justify-around flex-wrap">
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro1.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra fileteada sin cutícula "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro2.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Avellaba descascarada con cutítula "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro3.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Ajonjolí blanco sin cutícula "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro4.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Arándano deshidratado "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro5.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Coco rallado "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro6.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Granillo multicolor mate "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro7.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mini gragea blanca mate "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro8.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix relleno "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro9.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix frutas "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro10.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix saludable 1 "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro11.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix saludable 2 "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro12.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Nuez pecanera pedazo chico "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro13.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Nuez pecanera mitades "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro14.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Semilla de girasol sin cáscara "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro15.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Uva pasa selecta flame "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="SelectedOption === 'FrutosSecus'">
              <div class="block w-[832px]">
                <div class="flex flex-col-3">
                  <div class="flex flex-row justify-around flex-wrap">
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro8.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix relleno "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro9.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix frutas "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro10.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix saludable 1 "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro11.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mix saludable 2 "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro15.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Uva pasa selecta flame "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="SelectedOption === 'FrutosDeshidcatada'">
              <div class="block w-[832px]">
                <div class="flex flex-col-3">
                  <div class="flex flex-row justify-around flex-wrap">
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro4.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Arándano deshidratado "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro5.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Coco rallado "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="SelectedOption === 'NuecesYSemillas'">
              <div class="block w-[832px]">
                <div class="flex flex-col-3">
                  <div class="flex flex-row justify-around flex-wrap">
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro1.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra fileteada sin cutícula "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro2.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Avellaba descascarada con cutítula "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro3.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Ajonjolí blanco sin cutícula "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro6.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Granillo multicolor mate "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro7.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mini gragea blanca mate "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro12.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Nuez pecanera pedazo chico "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro13.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Nuez pecanera mitades "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/Productos/pro14.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Semilla de girasol sin cáscara "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/Productos/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductsVue",
  data() {
    return {
      SelectedOption: "all",
      val: 15,
    };
  },
  created() {
    this.changeValue();
  },
  watch: {
    SelectedOption: "changeValue",
  },
  methods: {
    changeValue() {
      if (this.SelectedOption === "all") {
        this.val = 15;
      } else if (this.SelectedOption === "FrutosSecus") {
        this.val = 5;
      } else if (this.SelectedOption === "FrutosDeshidcatada") {
        this.val = 2;
      } else if (this.SelectedOption === "NuecesYSemillas") {
        this.val = 8;
      }
    },
  },
};
</script>

<style></style>
