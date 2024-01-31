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
              v-model="selectedOption"
              class="w-full block appearance-none bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus_border-gray-500"
            >
              <option value="all">Todos</option>
              <option value="Doy Pack">Doy Pack</option>
              <option value="Vitroleros">Vitroleros</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
        </div>
        <div class="flex flex-row justify-around">
          <div>
            <div class="block mx-10 w-[416px]">
              <h2 class="text-4xl text-[#4F4F4F] text-justify">
                THE NUT HOUSE
              </h2>
              <p class="text-xl text-justify">
                Deliciosa línea premium de semillas y frutas secas empacadas,
                bajas en calorías.
              </p>
              <p class="text-xl my-3 text-justify">
                <b>Sabías que...</b>Además de ser riquísimos, los frutos secos
                ayudan a reducir los niveles de colesterol, a perder peso y a
                prevenir el deterioro cognitivo. ¡Se volverán tus favoritos!
              </p>
            </div>
          </div>
          <div>
            <div v-if="selectedOption === 'all'">
              <div>
                <div class="block">
                  <div class="flex flex-col-3">
                    <div class="flex flex-row justify-around flex-wrap">
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts1.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Cereza "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 rounded bg-[#EFC432]"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts2.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Papaya "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 rounded bg-[#EFC432]"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts3.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Piña "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts4.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Kiwi "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts5.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Miguelito Spicy Fruit Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts6.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Miguelito Spicy Trail Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts7.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nueces Mixtas Tostadas "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts8.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India con Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 bg-[#EFC432] px-4 rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts9.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India Tostada y Salada "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts10.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera Mitades "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts11.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera Mitades con Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts12.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Pistache Tostado y Salado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts13.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Almendra Entera "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts14.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mango Enchilado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts15.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nueces Mixtas Tostadas "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts16.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts17.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mango Enchilado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts18.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Pistache Tostado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts19.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mezcla de Higo y Nueces "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts20.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mezcla de Frutos y Nueces "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts21.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts22.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts23.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts24.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera en Mitades "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts25.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Pistache Salado y Tostado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts26.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Spicy Fruit Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts27.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Spicy Trail Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="selectedOption === 'Doy Pack'">
              <div>
                <div class="block">
                  <div class="flex flex-col-3">
                    <div class="flex flex-row justify-around flex-wrap">
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts19.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mezcla de Higo y Nueces "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts20.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mezcla de Frutos y Nueces "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts21.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts22.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts23.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts24.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera en Mitades "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts25.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Pistache Salado y Tostado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts26.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Spicy Fruit Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts27.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Spicy Trail Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="selectedOption === 'Vitroleros'">
              <div>
                <div class="block">
                  <div class="flex flex-col-3">
                    <div class="flex flex-row justify-around flex-wrap">
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts7.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nueces Mixtas Tostadas "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts8.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India con Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 bg-[#EFC432] px-4 rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts9.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India Tostada y Salada "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts10.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera Mitades "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts11.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez Pecanera Mitades con Chipotle "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts12.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Pistache Tostado y Salado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts13.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Almendra Entera "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts14.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mango Enchilado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts15.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nueces Mixtas Tostadas "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts16.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Nuez de la India "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts17.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Mango Enchilado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts18.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Pistache Tostado "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="selectedOption === 'Snack'">
              <div>
                <div class="block">
                  <div class="flex flex-col-3">
                    <div class="flex flex-row justify-around flex-wrap">
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts1.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Cereza "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 rounded bg-[#EFC432]"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts2.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Papaya "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 rounded bg-[#EFC432]"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts3.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Piña "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts4.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Mix Kiwi "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts5.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Miguelito Spicy Fruit Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
                      <div class="block my-4 w-1/3">
                        <a href="">
                          <img
                            src="@/assets/NutHouse/nuts6.jpg"
                            alt=""
                            class="w-full"
                          />
                          <p class="text-center text-lg my-4">
                            "Snack Miguelito Spicy Trail Mix "
                            <a href=""></a>
                          </p>
                          <img
                            src="@/assets/NutHouse/detail.svg"
                            alt=""
                            class="block mx-auto"
                          />
                          <button
                            class="block my-4 mx-auto py-2 px-4 bg-[#EFC432] rounded"
                          >
                            "compror en"
                            <img
                              src="@/assets/amazon-logo.svg"
                              alt=""
                              class="mx-1 inline-block items-end"
                            />
                          </button>
                        </a>
                      </div>
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
  name: "NutsView",
  data() {
    return {
      selectedOption: "all",
      val: 27,
    };
  },
  watch: {
    selectedOption(newVal) {
      if (newVal === "all") {
        this.val = 27;
      } else if (newVal === "Doy Pack") {
        this.val = 9;
      } else if (newVal === "Vitroleros") {
        this.val = 12;
      } else if (newVal === "Snack") {
        this.val = 6;
      }
    },
  },
};
</script>

<style></style>
