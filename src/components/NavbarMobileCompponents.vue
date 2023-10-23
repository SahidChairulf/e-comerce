<template>
	<!-- Navigation Bar -->
	<div class="px-5 pt-3  bg-white shadow-2xl w-screen mt-4 sticky drop-shadow-2xl bottom-0 lg:hidden md:hidden">

		<div class="flex flex-row space-x-3 md:space-x-24 md:items-center md:justify-center">
			<!-- Item #1 -->
			<div class="flex group">
				<a href="#" class="p-3 text-gray-400 hover:text-green-500">
					<span class="flex flex-col items-center">
						<!-- Icon -->
						<i class="mdi mdi-home-outline mdi-24px md:mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

						<!-- Text -->
						<span class="text-xs mb-2 transition-all duration-200">
							Home
						</span>

						<!-- Focus Dot -->
						<span class="h-1 w-5 rounded-full group-hover:bg-green-500
									transition-all hover:h-3 hover:w-3 duration-150 delay-100"></span>
					</span>
				</a>
			</div>

			<!-- Item #2 -->
			<div class="flex group">
				<a href="#" class="p-3 text-gray-400 hover:text-green-500">
					<span class="flex flex-col items-center">
						<!-- Icon -->
						<i class="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

						<!-- Text -->
						<span class="text-xs mb-2 transition-all duration-200">
							Explore
						</span>

						<!-- Focus Dot -->
						<span class="h-1 w-5 rounded-full group-hover:bg-green-500
									transition-all hover:h-3 hover:w-3 duration-150 delay-100"></span>
					</span>
				</a>
			</div>

			<!-- Item #3 Active -->
			<div class="flex group">
				<a href="#" class="p-3 text-gray-400 hover:text-green-500">
					<span class="flex flex-col items-center">
						<!-- Icon -->
						<i class="mdi mdi-compass-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
									transition-color duration-200"></i>

						<!-- Text -->
						<span class="text-xs mb-2 transition-all duration-200">
							Feeds
						</span>

						<!-- Focus Dot -->
						<span class="h-1 w-5 rounded-full group-hover:bg-green-500
									hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>
					</span>
				</a>
			</div>

			<!-- Item #4 -->
			<div class="flex group">
				<a href="#" class="p-3 text-gray-400 hover:text-green-500">
					<span class="flex flex-col items-center">
						<!-- Icon -->
						<i class="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

						<!-- Text -->
						<span class="text-xs mb-2 transition-all duration-200">
							Cart
						</span>

						<!-- Focus Dot -->
						<span class="h-1 w-5 rounded-full group-hover:bg-green-500
									transition-all hover:h-3 hover:w-3 duration-150 delay-100"></span>
					</span>
				</a>
			</div>

			<!-- Item #5 -->
			<div class="flex group">
				<a href="#" class="p-3 text-gray-400 hover:text-green-500">
					<span class="flex flex-col items-center">
						<!-- Icon -->
						<i class="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

						<!-- Text -->
						<span class="text-xs mb-2 transition-all duration-200">
							Account
						</span>

						<!-- Focus Dot -->
						<span class="h-1 w-5 rounded-full group-hover:bg-green-500
									transition-all hover:h-3 hover:w-3 duration-150 delay-100"></span>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>