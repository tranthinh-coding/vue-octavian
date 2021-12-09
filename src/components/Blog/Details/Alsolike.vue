<template>
  <div class="mt-16 lg:mt-24">
    <h1 class="title mb-10">You may also like</h1>
    <div class="text-left">
      <div class="box-border flex items-center p-4">
        <a href="javascript:void(0)" class="w-20 h-20 lg:w-40 lg:h-40 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_yalso1.jpg')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-5 no-underline">
            <h4 class="line-clamp-2 title">How creative teams spend time</h4>
          </a>
          <h6 class="title">2 mins ago</h6>
        </div>
      </div>
      <div class="box-border flex items-center p-4">
        <a href="javascript:void(0)" class="w-20 h-20 lg:w-40 lg:h-40 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_yalso2.jpg')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-5 no-underline">
            <h4 class="line-clamp-2 title">A new tool for application development</h4>
          </a>
          <h6 class="title">On Tuesday</h6>
        </div>
      </div>
      <div class="box-border flex items-center p-4">
        <a href="javascript:void(0)" class="w-20 h-20 lg:w-40 lg:h-40 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_yalso3.jpg')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-5 no-underline">
            <h4 class="line-clamp-2 title">Ready to be used in your projects</h4>
          </a>
          <h6 class="title">On Sunday</h6>
        </div>
      </div>
    </div>
  </div>
</template>