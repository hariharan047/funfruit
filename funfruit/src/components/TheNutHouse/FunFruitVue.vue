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
            <div>
              <p class="font-bold text-xl mb-2 px-4">{{ val }}artículos</p>
            </div>
            <select
              name=""
              v-model="SelectedOption"
              class="w-full block appearance-none bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus_border-gray-500"
            >
              <option value="all">Todos</option>
              <option value="Abarrotes">Abarrotes</option>
              <option value="Fruta en almibar">Fruta en almibar</option>
            </select>
          </div>
        </div>
        <div class="flex flex-row justify-around">
          <div class="block mx-10 w-[416px]">
            <h2 class="text-4xl text-[#4F4F4F] text-justify">FUNFRUIT</h2>
            <p class="text-xl text-justify">
              Las mejores opciones naturales son Fun Fruit.
            </p>

            <p class="text-xl my-3 text-justify">
              <b>Sabías que...</b>Nuestros productos son una opción más para
              tener una gran alimentación.
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
                          src="@/assets/FunFruit/fun1.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra fileteada "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun2.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra entera "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun3.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Arándano deshidratado "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun4.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Uva pasa "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun5.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Ciruela pasa sin hueso "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun6.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Snack Miguelito Spicy Trail Mix "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun7.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Cerezas con tallo tipo Marrasquino "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun8.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Cerezas sin tallo tipo Marrasquino "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun9.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Cerezas sin tallo tipo Marrasquino "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun10.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Duraznos en Cubo "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun11.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Duraznos en mitades "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun12.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mangos rebanados "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun13.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra Entera "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun14.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Piña rebanada "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="SelectedOption === 'Abarrotes'">
              <div class="block w-[832px]">
                <div class="flex flex-col-3">
                  <div class="flex flex-row justify-around flex-wrap">
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun1.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra fileteada "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun2.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra entera "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun3.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Arándano deshidratado "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun4.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Uva pasa "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun5.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Ciruela pasa sin hueso "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="SelectedOption === 'Fruta en almibar'">
              <div class="block w-[832px]">
                <div class="flex flex-col-3">
                  <div class="flex flex-row justify-around flex-wrap">
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun6.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Snack Miguelito Spicy Trail Mix "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun7.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Cerezas con tallo tipo Marrasquino "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun8.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Cerezas sin tallo tipo Marrasquino "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun9.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Cerezas sin tallo tipo Marrasquino "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun10.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Duraznos en Cubo "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun11.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Duraznos en mitades "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun12.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Mangos rebanados "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun13.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Almendra Entera "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
                          alt=""
                          class="block mx-auto"
                        />
                      </a>
                    </div>
                    <div class="block my-4 w-1/3">
                      <a href="">
                        <img
                          src="@/assets/FunFruit/fun14.jpg"
                          alt=""
                          class="w-full"
                        />
                        <p class="text-center text-lg my-4">
                          "Piña rebanada "
                          <a href=""></a>
                        </p>
                        <img
                          src="@/assets/FunFruit/detail.svg"
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
  name: "FunFruitVue",
  data() {
    return {
      SelectedOption: "all",
      val: 14,
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
        this.val = 14;
      } else if (this.SelectedOption === "Abarrotes") {
        this.val = 5;
      } else if (this.SelectedOption === "Fruta en almibar") {
        this.val = 9;
      }
    },
  },
};
</script>

<style></style>
