<template>
  <Container>
    <h1 class="title max-w-md">
      <span class="text-white">The best Strategy to Start a Business</span>
    </h1>
    <p class="text-gray-100 mt-6">Start using our easy-to-use tools with multiple options to impr</p>
    <div class="mt-8 flex items-center flex-col md:flex-row">
      <router-link :to="{name: 'Contact', params: {}}">
        <Button class="bg-blue-600 max-w-xs w-full text-white" text="Know us More"></Button>
      </router-link>
      <router-link :to="{name: 'AboutUs', params: {}}">
        <p class="underline md:ml-10 text-lg text-gray-50">About us</p>
      </router-link>
    </div>
  </Container>
</template>