<template>
  <div class="py-primary text-center bg-dark-gray-black">
    <Container>
      <h1 class="!text-white title">Email Newsletters!</h1>
      <p class="mt-12 font-medium text-white-eee text-lg max-w-xl mx-auto mb-24">
        Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum
        vitae iaculis cursus, turpis nisl ultricies massa.
      </p>
      <form
        @submit.prevent.stop
        class="flex items-center justify-center gap-[30px] flex-col smx:flex-row py-5"
      >
        <input
          class="border-2 border-white rounded-lg bg-transparent outline-none py-[18px] pl-[30px] text-white smx:w-96 max-w-full w-full"
          type="text"
          placeholder="Your e-mail"
          required
        />
        <Button
          class="bg-gradient-to-r text-white from-c-orange to-deepPink py-2 px-2 font-semibold w-full smx:w-auto"
          text="Subscribe"
        />
      </form>
    </Container>
  </div>
</template>
<script>
export default {
  name: "ShopSubscribe",
};
</script>
