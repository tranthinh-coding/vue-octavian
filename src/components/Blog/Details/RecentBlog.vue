<template>
  <div class="col lg-4 sm-12 text-left">
    <div class="mb-6 md:mb-10 lg:mt-0 mt-15">
      <h3 class="title">Recent blog</h3>
    </div>
    <div class="space-y-11">
      <div class="flex items-center">
        <a href="javascript:void(0)" class="w-24 h-24 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_recent1.png')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-2">
            <h4 class="line-clamp-2 title">
              Simplify HR Management and payroll with youSimplify HR Management and
              payroll with youSimplify HR Management and payroll with you
            </h4>
          </a>
          <span class="text-secondary-text">8 min read</span>
        </div>
      </div>

      <div class="flex items-center">
        <a href="javascript:void(0)" class="w-24 h-24 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_recent2.png')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-2">
            <h4 class="line-clamp-2 title">Every ounce of talent from our amazing book author</h4>
          </a>
          <span class="text-secondary-text">8 min read</span>
        </div>
      </div>

      <div class="flex items-center">
        <a href="javascript:void(0)" class="w-24 h-24 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_recent3.png')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-2">
            <h4 class="line-clamp-2 title">A coffee for moments of high creativity could reach</h4>
          </a>
          <span class="text-secondary-text">8 min read</span>
        </div>
      </div>

      <div class="flex items-center">
        <a href="javascript:void(0)" class="w-24 h-24 rounded-xl flex-shrink-0">
          <img
            class="block w-full h-full object-cover rounded-xl"
            :src="require('@/assets/img/blog-details/bldt_recent4.png')"
            alt="random image"
          />
        </a>
        <div class="flex-1 pl-5">
          <a href="javascript:void(0)" class="block mb-2">
            <h4 class="line-clamp-2 title">Essential styles and tools for good work</h4>
          </a>
          <span class="text-secondary-text">8 min read</span>
        </div>
      </div>
    </div>

    <div class="mt-16 lg:mt-28 mb-6 md:mb-8">
      <h3 class="title">Instagram</h3>
    </div>
    <Grid>
      <Row class="gap-y-8">
        <Col v-for="index in 3" :key="index" class="lg-6 md-3 sm-6">
          <img
            class="w-full h-full rounded-lg object-cover"
            :src="require(`@/assets/img/blog-details/bldt_igimage${index + 1}.jpg`)"
          />
        </Col>
      </Row>
    </Grid>
  </div>
</template>