<template>
  <div class="mt-16 lg:mt-24">
    <h1 class="title mb-10">Comments</h1>
    <ul class="flex flex-col gap-y-10">
      <li class="flex lg:flex-row flex-col gap-5 lg:items-start items-center md:gap-10">
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
          <div class="flex gap-2 items-end justify-center lg:justify-start">
            <h4 class="title">Mous Lloyd</h4>
            <span class="text-sm leading-6">4 hours ago</span>
          </div>
          <!-- content -->
          <div class="mt-8 md:text-lg">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste ab, nostrum fugit fuga nihil corrupti dicta provident laudantium pariatur.</p>
          </div>
          <div class="mt-7">
            <a href="javascript:void(0)" class="inline-flex items-center group">
              <h4 class="title group-hover:text-blue-700 transition-all">Reply</h4>
              <i
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:ml-3 transition-all text-2xl bx bx-chevron-right duration-300 group-hover:text-blue-700"
              ></i>
            </a>
          </div>
        </div>
      </li>
      <li class="flex lg:flex-row flex-col gap-5 lg:items-start items-center md:gap-10">
        <!-- ========== avatar ================= -->
        <div class="w-12 h-12 md:w-15 md:h-15 rounded-full overflow-hidden flex-shrink-0">
          <img
            class="h-full w-full object-cover"
            :src="require('@/assets/img/shop-details/cmt2.png')"
            alt
          />
        </div>
        <div class="pb-12 max-w-3xl border-b">
          <!-- name | star-->
          <div class="flex gap-2 items-end justify-center lg:justify-start">
            <h4 class="title">John Doe</h4>
            <span class="text-sm leading-6">4 hours ago</span>
          </div>
          <!-- content -->
          <div class="mt-8 md:text-lg">
            <p>
              Gravida senectus suspendisse scelerisque primis urna habitasse posuere
              <a
                href="javascript:void(0)"
                class="text-blue-700"
              >#rutrum</a>, donec sit praesent nisl sapien pellentesque, molestie luctus habitant id condimentum..
            </p>
          </div>
          <div class="mt-7">
            <a href="javascript:void(0)" class="inline-flex items-center group">
              <h4 class="title group-hover:text-blue-700 transition-all">Reply</h4>
              <i
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:ml-3 transition-all text-2xl bx bx-chevron-right duration-300 group-hover:text-blue-700"
              ></i>
            </a>
          </div>
        </div>
      </li>
      <li class="flex lg:flex-row flex-col gap-5 lg:items-start items-center md:gap-10">
        <!-- ========== avatar ================= -->
        <div class="w-12 h-12 md:w-15 md:h-15 rounded-full overflow-hidden flex-shrink-0">
          <img
            class="h-full w-full object-cover"
            :src="require('@/assets/img/shop-details/cmt3.png')"
            alt
          />
        </div>
        <div class="pb-12 max-w-3xl border-b">
          <!-- name | star-->
          <div class="flex gap-2 items-end justify-center lg:justify-start">
            <h4 class="title">Fresy Clock</h4>
            <span class="text-sm leading-6">4 hours ago</span>
          </div>
          <!-- content -->
          <div class="mt-8 md:text-lg">
            <p>Ipsum curae curabitur dapibus netus dolor ante ut laoreet, turpis faucibus sodales euismod conubia taciti quisque vestibulum, vitae adipiscing bibendum himenaeos.</p>
          </div>
          <div class="mt-7">
            <a href="javascript:void(0)" class="inline-flex items-center group">
              <h4 class="title group-hover:text-blue-700 transition-all">Reply</h4>
              <i
                class="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:ml-3 transition-all text-2xl bx bx-chevron-right duration-300 group-hover:text-blue-700"
              ></i>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>