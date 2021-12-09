<template>
  <div class="mt-20">
    <ul class="flex flex-col gap-y-10">
      <li class="flex md:flex-row flex-col gap-5 md:items-start items-center md:gap-10">
        <!-- ========== avatar ================= -->

        <div class="w-12 h-12 md:w-15 md:h-15 rounded-full overflow-hidden flex-shrink-0">
          <img
            class="h-full w-full object-cover"
            :src="require('@/assets/img/shop-details/cmt1.png')"
            alt
          />
        </div>
        <div class="pb-12 max-w-3xl border-b">
          <!-- name | star-->
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="flex gap-2 items-end">
              <h4 class="title">Mous Lloyd</h4>
              <span class="text-sm leading-6">4 hours ago</span>
            </div>
            <div class="md:ml-auto text-c-orange">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </div>
          </div>
          <!-- content -->
          <div class="mt-8 md:text-lg">
            <p>Ipsum curae curabitur dapibus netus dolor ante ut laoreet, turpis faucibus sodales euismod conubia taciti quisque vestibulum, vitae adipiscing bibendum himenaeos.</p>
          </div>
        </div>
      </li>
      <li class="flex md:flex-row flex-col gap-5 md:items-start items-center md:gap-10">
        <!-- ========== avatar ================= -->
        <div>
          <div class="w-12 h-12 md:w-15 md:h-15 rounded-full overflow-hidden">
            <img
              class="h-full w-full object-cover"
              :src="require('@/assets/img/shop-details/cmt2.png')"
              alt
            />
          </div>
        </div>
        <div class="pb-12 max-w-3xl border-b">
          <!-- name | star-->
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="flex gap-2 items-end">
              <h4 class="title">Fresy Clock</h4>
              <span class="text-sm leading-6">4 hours ago</span>
            </div>
            <div class="md:ml-auto text-c-orange">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </div>
          </div>
          <!-- content -->
          <div class="mt-8 md:text-lg">
            <p>Ipsum curae curabitur dapibus netus dolor ante ut laoreet, turpis faucibus sodales euismod conubia taciti quisque vestibulum, vitae adipiscing bibendum himenaeos.</p>
          </div>
          <!-- image -->
          <div class="mt-10 flex gap-x-4">
            <div class="w-15 h-15 rounded-md overflow-hidden">
              <img
                class="w-full h-full object-cover object-left"
                :src="require('@/assets/img/shop-details/customer_priview1.png')"
                alt
              />
            </div>
            <div class="w-15 h-15 rounded-md overflow-hidden">
              <img
                class="w-full h-full object-cover object-center"
                :src="require('@/assets/img/shop-details/customer_priview1.png')"
                alt
              />
            </div>
            <div class="w-15 h-15 rounded-md overflow-hidden">
              <img
                class="w-full h-full object-cover object-right"
                :src="require('@/assets/img/shop-details/customer_priview1.png')"
                alt
              />
            </div>
          </div>
        </div>
      </li>
      <li class="flex md:flex-row flex-col gap-5 md:items-start items-center md:gap-10">
        <!-- ========== avatar ================= -->
        <div>
          <div class="w-12 h-12 md:w-15 md:h-15 rounded-full overflow-hidden">
            <img
              class="h-full w-full object-cover"
              :src="require('@/assets/img/shop-details/cmt3.png')"
              alt
            />
          </div>
        </div>
        <div class="pb-12 max-w-3xl border-b">
          <!-- name | star-->
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="flex gap-2 items-end">
              <h4 class="title">John Doe</h4>
              <span class="text-sm leading-6">4 hours ago</span>
            </div>
            <div class="md:ml-auto text-c-orange">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </div>
          </div>
          <!-- content -->
          <div class="mt-8 md:text-lg">
            <p>Ipsum curae curabitur dapibus netus dolor ante ut laoreet, turpis faucibus sodales euismod conubia taciti quisque vestibulum, vitae adipiscing bibendum himenaeos.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>