<template>
  <header class="w-full lg:px-3 sticky top-0 text-gray-700 py-2 bg-white border-t-2 border-gray-100 shadow-sm body-font"
    style="z-index: 999;">
    <div class="w-auto flex flex-wrap items-center justify-between mx-auto lg:p-1 p-4">
      <RouterLink to="/" class="hidden md:flex lg:flex items-center font-medium text-gray-900 title-font lg:mb-0">
        <svg class="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z"
            fill-rule="nonzero" />
        </svg>
      </RouterLink>
      <!-- Search -->
      <nav
        class="lg:w-max md:mr-auto md:w-72 w-48 lg:space-x-4 lg:flex lg:items-center lg:justify-center lg:pl-6 lg:ml-6 text-base md:border-l md:border-gray-200 md:ml-3 md:pl-3  lg:border-l lg:border-gray-200">
        <div
          class="hidden lg:flex cursor-pointer gap-x-2 px-6 py-2 border-2 border-green-500 text-white bg-green-500 hover:bg-green-800 font-medium text-xs leading-tight uppercase rounded-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-sm font-medium">Categories</span>
        </div>
        <div class="flex items-center justify-center w-auto">
          <div class="relative w-96">
            <input type="text"
              class="w-11/12 px-12 py-2 text-gray-700 placeholder-gray-500 border rounded-full focus:outline-none focus:shadow-outline"
              placeholder="Search" />
            <div class="absolute top-0 left-0 flex items-center pl-3 h-full">
              <!-- Search icon SVG here -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <!-- Cart and More Mobile Mode -->
      <div class="flex cursor-pointer ml-3 items-center gap-x-1 rounded-lg py-2 md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fill-rule="evenodd"
            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Orders</span>
      </div>
      <div class="flex cursor-pointer items-center gap-x-1 rounded-lg py-2 md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd" />
        </svg>
        <span class="sr-only">Favorites</span>
      </div>
      <div class="flex cursor-pointer items-center gap-x-1 rounded-lg py-2 md:hidden lg:hidden">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span
            class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
          <span class="sr-only">Cart</span>
        </div>
      </div>
      <!-- Cart And more in desktop mode -->
      <nav class="hidden w-full md:block md:px-0 md:w-auto lg:block lg:w-auto items-center justify-center text-base">
        <div class="ml-2 flex">
          <div class="flex cursor-pointer items-center gap-x-1 rounded-lg py-2 px-4 md:px-2  hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path fill-rule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium hidden md:flex lg:flex">Orders</span>
          </div>

          <div class="flex cursor-pointer items-center gap-x-1 rounded-lg py-2 px-4 md:px-2  hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium">Favorites</span>
          </div>

          <div class="flex cursor-pointer items-center gap-x-1 rounded-lg py-2 px-4 md:px-2 md:mr-2 hover:bg-gray-100">
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span
                class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
            </div>
            <span class="text-sm font-medium">Cart</span>
          </div>
        </div>
      </nav>
      <!-- login and register dekstop mode -->
      <div v-if="isAuthenticated"
        class="items-center hidden md:w-auto md:text-sm md:inline-flex md:items-center md:justify-center lg:block lg:h-full lg:pl-6 lg:ml-6 lg:border-l lg:border-gray-200">
        <div
          class="grid grid-cols-2 gap-2 max-w-sm p-2 lg:w-32 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img class="w-10 h-10 p-1 ml-2 justify-center items-center rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://img.freepik.com/free-vector/smiling-person-crowd_23-2148403860.jpg?size=626&ext=jpg&ga=GA1.1.216278144.1697349302&semt=ais"
            alt="Bordered avatar">
            
            <div class="items-center justify-center text-center">
              <p class="truncate font-bold text-gray-600 text-center justify-center items-center mt-2">{{ getUser.name }}</p>
            </div>
        </div>
      </div>
      <div v-else
        class="items-center hidden md:w-auto md:text-sm md:inline-flex md:items-center md:justify-center lg:block lg:h-full lg:pl-6 lg:ml-6 lg:border-l lg:border-gray-200">
        <button type="button"
          class="mr-3 inline-block px-3 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Log In</button>
        <!-- Main modal -->
        <button type="button"
          class="inline-block px-3 py-2 border-2 bg-green-500 border-green-500 text-white font-medium text-xs leading-tight uppercase rounded-lg hover:bg-green-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Sign Up
        </button>
      </div>
      <!-- button mobile -->
      <button type="button" data-collapse-toggle="navbar-default"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden md:hidden"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div>
      </div>
    </div>
    <!-- kategori -->
    <div class="flex items-center justify-between md:px-10 lg:px-20 px-5">
      <div class="flex gap-x-2 py-1 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd" />
        </svg>
          <span class="text-sm font-medium truncate" v-for="(address) in getAddres.data" :key="address.id">{{ address.country }},{{ address.state }}</span>
      </div>

      <div class="flex gap-x-8">
        <span class="cursor-pointer py-1 px-auto text-sm font-medium hover:text-green-500">Best seller</span>
        <span class="cursor-pointer py-1 px-auto text-sm font-medium hover:text-green-500">New Releases</span>
        <span class="cursor-pointer hidden md:block md:mx-auto lg:block py-1 px-2 text-sm font-medium hover:text-green-500"
          v-for="(categori) in getCategori.slice(0, 5)" :key="categori.id">
          {{ categori.name }}
        </span>
      </div>
    </div>
  </header>
  <!-- mobile-menu -->
  <nav class="mobile-menu fixed bg-white px-4 py-4 w-full hidden lg:hidden" id="navbar-default" style="z-index: 999;">
    <div class="mt-0">
      <div class="">
        <a href="https://dribbble.com/iamsahilvhora" target="_blank" title="" class="flex items-center">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" class="object-cover">
          </div>
          <span class="text-gray-500 font-semibold ml-4 hover:text-gray-500">Sahil Vhora</span>
        </a>
      </div>

      <div class="flex items-start justify-between mt-4">
        <ul>
          <li>
            <a class="flex py-2 font-medium space-x-2  items-center text-gray-400">
              <span class="text-sm text-gray-500">Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-gray-500">
                <path fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a class="flex py-2 font-medium space-x-2  items-center text-gray-400">
              <span class="text-sm text-gray-500">Saldo</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-gray-500">
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path fill-rule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clip-rule="evenodd" />
                <path
                  d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </a>
          </li>
        </ul>

        <ul class="pr-10">
          <li>
            <a class="flex py-2 font-medium space-x-2  items-center text-gray-400">
              <span class="text-sm text-gray-500">Favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a class="flex py-2 font-medium space-x-2  items-center text-gray-400">
              <span class="text-sm text-gray-500">Acount Settings</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-gray-500">
                <path fill-rule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clip-rule="evenodd" />
              </svg>

            </a>
          </li>
        </ul>
      </div>

      <hr class="mt-0 w-full">
      <ul>
        <li>
          <a href="#" title="" class="block text-gray-500 text-lg font-semibold py-2 hover:text-gray-500">
            Shots
          </a>
        </li>
        <li>
          <a href="#" title="" class="block text-gray-500 text-lg font-semibold py-2 hover:text-gray-500">
            Designers
          </a>
        </li>
        <li>
          <a href="#" title="" class="text-gray-500 text-lg font-semibold py-2 flex items-center justify-between
                  hover:text-gray-500">
            <span>Community</span>
            <i class="bx bx-chevron-down text-gray-500"></i>
          </a>

          <ul class="pl-4 border-l border-gray-700 ml-1">
            <li><a href="#" title="" class="block text-gray-500 py-2 hover:text-gray-500">Blog: Courtside</a></li>
            <li><a href="#" title="" class="block text-gray-500 py-2 hover:text-gray-500">Weekly Warm-Up</a></li>
            <li><a href="#" title="" class="block text-gray-500 py-2 hover:text-gray-500">Featured Playoffs</a></li>
            <li><a href="#" title="" class="block text-gray-500 py-2 hover:text-gray-500">Meetups</a></li>
          </ul>
        </li>
        <li>
          <a href="#" title="" class="block text-gray-500 text-lg font-semibold py-2">
            Jobs
          </a>
        </li>
      </ul>
      <hr class="mt-2 mb-3 w-full">

      <ul class="">
        <li>
          <div v-if="isAuthenticated"
            class="items-center mt-3 block md:hidden md:w-auto md:text-sm md:items-center md:justify-center lg:hidden lg:h-full lg:pl-6 lg:ml-6 lg:border-l lg:border-gray-200">
            <button @click="logout" type="button"
              class="inline-block px-3 py-2 border-2 bg-green-500 border-green-500 text-white font-medium text-xs leading-tight uppercase rounded-lg hover:bg-green-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Log Out
            </button>
          </div>
          <div v-else
            class="items-center mt-3 block md:hidden md:w-auto md:text-sm md:items-center md:justify-center lg:hidden lg:h-full lg:pl-6 lg:ml-6 lg:border-l lg:border-gray-200">
            <button type="button"
              class="mr-3 inline-block px-3 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Log In</button>
            <button type="button"
              class="inline-block px-3 py-2 border-2 bg-green-500 border-green-500 text-white font-medium text-xs leading-tight uppercase rounded-lg hover:bg-green-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Sign Up
            </button>
          </div>
        </li>
      </ul>

    </div>
  </nav>
</template>
<script>
import { RouterLink } from 'vue-router';
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('kategori', ['getCategori']),
        ...mapGetters('auth', ['isAuthenticated']),
        ...mapGetters('user', ['getUser', 'getAddres']),
    },
    methods: {
        ...mapActions('kategori', ['fetchCategori']),
        ...mapActions('auth', ['logout']),
        ...mapActions('user', ['fetchUser', 'fetchUserAddress']),
    },
    created() {
        this.fetchCategori();
        this.fetchUser();
        this.fetchUserAddress();
    },
    components: { RouterLink }
}
</script>

