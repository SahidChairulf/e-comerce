<template>
  <!-- Carousel banner -->
  <div id="default-carousel" class="relative w-full mt-3 lg:px-6 px-3 items-center" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative lg:h-96 md:h-60 h-28 overflow-hidden rounded-lg">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/1/2c8ddb91-b16e-4cd8-9f1e-5f06a83111b5.jpg.webp?ect=4g"
          class="absolute inset-0 block w-full h-auto top-0 left-0 rounded-lg" alt="..." />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="https://images.tokopedia.net/img/AtBaCW/2023/9/29/af3abd8c-2181-4f4c-93c7-ed487e5e18a2.jpg"
          class="absolute inset-0 block w-full h-auto top-0 left-0 rounded-lg" alt="..." />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/9/29/01152933-33dd-49f2-9c49-e9d0e31bd59c.jpg.webp?ect=4g"
          class="absolute inset-0 block w-full h-auto top-0 left-0 rounded-lg" alt="..." />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/9/29/a4a08888-d709-4bf2-b922-204dbe905c4a.jpg.webp?ect=4g"
          class="absolute inset-0 block w-full h-auto top-0 left-0 rounded-lg" alt="..." />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/9/29/2bc3ae31-8670-4589-be36-ee57cd8c9844.jpg.webp?ect=4g"
          class="absolute inset-0 block w-full h-auto top-0 left-0 rounded-lg" alt="..." />
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute hidden lg:flex md:flex z-30 space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
        data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
        data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
        data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
        data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
        data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button"
      class="absolute hidden lg:flex top-0 left-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 dark:bg-gray-800/30 group-hover:bg-gray-500/60 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
      class="absolute hidden lg:flex top-0 right-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next>
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 dark:bg-gray-800/30 group-hover:bg-gray-500/60 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
  <!-- End Caraousel banner -->
  <hr class="w-screen h-1 mx-auto my-4 lg:my-6 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
  <section class="container md:mx-auto lg:mx-auto menu-xs bg-white lg:md:rounded-lg py-2 px-3">
    <!-- title -->
    <div class="relative flex items-end font-bold lg:mt-3 lg:px-4 px-2 mt-3 md:mt-3 md:px-4">
      <h2 class="lg:text-2xl md:text-2xl font-bold space-x-2 mr-2 lg:md:mr-4">Browse by Category</h2>
      <a class="flex font-medium space-x-2 mr-3 lg:md:mr-0 items-center text-gray-400">
        <span class="text-sm text-green-500">Show All</span>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
          class="svg-inline--fa ml-3 h-3.5 fa-chevron-right fa-w-8 fa-9x text-green-500">
          <path fill="currentColor"
            d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z">
          </path>
        </svg>
      </a>
      <div class="ml-auto flex">
        <button class="h-6 w-6 flex items-center justify-center rounded-md">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
            class="svg-inline--fa h-3 text-gray-700 fa-chevron-left fa-w-8 fa-3x">
            <path fill="currentColor"
              d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z">
            </path>
          </svg>
        </button>
        <button class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
            class="svg-inline--fa h-3 text-gray-700 fa-chevron-right fa-w-8 fa-3x">
            <path fill="currentColor"
              d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <!-- cards -->
    
    <div class="relative mt-0 py-6 lg:py-6 md:py-6 carousel rounded-box w-full h-40 lg:h-full md:h-26">
      <ul class="-m-3.5 flex h-full" v-for="(categori) in getCategori.slice(0, 10)" :key="categori.id">
        <li
          class="m-3.5 carousel-item cursor-pointer lg:h-52 md:h-32 lg:w-40 md:w-40 h-24 w-24 rounded-xl flex flex-col items-center justify-center text-center duration-300">
          <img class="max-h-20"
            src="https://img.freepik.com/premium-vector/ripe-watermelon-juicy-piece-white-background-isolated_269543-89.jpg?size=626&ext=jpg&uid=R116180207&ga=GA1.2.1795545853.1694355761&semt=ais"
            alt="" />
          <span class="font-semibold truncate ...">{{ categori.name }}</span>
        </li>
      </ul>
    </div>
  </section>
  <hr class="w-screen h-1 mx-auto my-3 lg:my-6 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
  <!-- Banner -->
  <div class="flex flex-row mt-6 w-full justify-center">
    <div class="relative">
      <img class="w-full lg:h-96 md:h-60 h-28"
        src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/2/438ab99b-20a2-40fc-a48a-f95ce361416d.jpg.webp?ect=4g"
        alt="sofa" />
    </div>
  </div>
  <!-- End Banner -->
  <hr class="w-screen h-1 mx-auto my-4 lg:my-6 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700">
  <section class="container md:mx-auto lg:mx-auto bg-white py-2 px-3 mt-3">
    <!-- title -->
    <div class="relative flex items-end lg:mt-3 lg:px-2 px-2 mt-3 md:mt-3 md:px-4">
      <h2 class="lg:text-2xl md:text-2xl text-sm font-bold space-x-2 mr-2 lg:md:mr-4">Product Populer</h2>
      <a class="flex font-medium space-x-2 mr-3 lg:md:mr-0 items-center text-gray-400">
        <span class="text-sm text-green-500">Show All</span>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
          class="svg-inline--fa ml-3 h-3.5 fa-chevron-right fa-w-8 fa-9x text-green-500">
          <path fill="currentColor"
            d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z">
          </path>
        </svg>
      </a>
      <div class="ml-auto flex">
        <button class="h-6 w-6 flex items-center justify-center rounded-md">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
            class="svg-inline--fa h-3 text-gray-700 fa-chevron-left fa-w-8 fa-3x">
            <path fill="currentColor"
              d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z">
            </path>
          </svg>
        </button>
        <button class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-yellow-400">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
            class="svg-inline--fa h-3 text-gray-700 fa-chevron-right fa-w-8 fa-3x">
            <path fill="currentColor"
              d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z">
            </path>
          </svg>
        </button>
      </div>
    </div>
  </section>
  <!-- Product Popular With Skeleton -->
  <div v-if="getProducts.data == undefined">
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto animate-pulse">
        <div class="grid grid-cols-2 px-4 md:grid-cols-4 lg:grid-cols-4 lg:px-5 lg:mt-5 drop-shadow-lg gap-4">
          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>

          <div class="w-full ">
            <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div
    class="grid grid-cols-2 px-6 md:grid-cols-4 lg:grid-cols-5 lg:px-5 lg:mt-5 drop-shadow-lg gap-x-4 gap-y-4 lg:gap-x-2 lg:gap-y-3"
    v-else>
    <div
      class="w-full max-w-sm mt-3 lg:w-64 lg:mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      v-for="(product) in getProducts.data.slice(0 ,10)" :key="product.id">
      <a href="#">
        <img class="p-8 rounded-t-lg"
          src="https://img.freepik.com/free-photo/green-striped-ripe-watermelon-with-slice-cross-section-isolated-white-background-with-copy-space-text-images-special-kind-berry-sweet-pink-flesh-with-black-seeds-side-view_639032-1254.jpg?size=626&ext=jpg&uid=R116180207&ga=GA1.2.1795545853.1694355761&semt=sph"
          alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="lg:text-xl text-sm font-semibold tracking-tight text-gray-900 dark:text-white truncate ...">
            {{ product.name }}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 lg:mb-0 ">
          <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span
            class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
          <p class="lg:text-xl md:text-xl text-xs font-semibold text-black cursor-auto my-3">{{
            formatCurrency(product.base_price) }}</p>
          <!-- <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del> -->
          <div class="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="lg:md:h-8 lg:w-8 h-5 w-5 text-gray-500" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Product Popular With Skeleton -->
  <div class="flex justify-center items-center lg:mt-12 md:mt-12 mt-6 ml-3">
    <div
      class="flex w-64 items-center justify-center cursor-pointer gap-x-2 px-6 py-2 border-2 border-green-500 text-green-500 text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
      <span class="text-sm font-bold">Lihat Lebih Banyak</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('product', ['getProducts']),
    ...mapGetters('kategori', ['getCategori']),
  },
  methods: {
    ...mapActions('product', ['fetchProducts']),
    ...mapActions('kategori', ['fetchCategori']),
    formatCurrency(amount) {
      // Menghilangkan 0 rupiah di belakang dengan minimumFractionDigits
      const formattedAmount = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Atur ke 0 agar tidak ada digit desimal
      }).format(amount);

      return formattedAmount;
    }
  },
  created() {
    this.fetchProducts();
    this.fetchCategori();
  },
}
</script>
  