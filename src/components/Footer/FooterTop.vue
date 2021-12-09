<template>
  <div class="bg-footer py-primary">
    <Container>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20 md:gap-36 lg:gap-40 w-full"
      >
        <div>
          <div class="mb-9 h-10">
            <img src="@/assets/img/logo/LogoFooter.png" alt />
          </div>
          <div class="max-w-sm mb-9">
            <span class="text-blue-gray">
              Vivamus dapibus et purus quis mollis. Mauris tempus tortor vel mi
              eleifend loareet. Nulla laoreet sapien erat.
            </span>
          </div>
          <div class="flex justify-start items-center -ml-1">
            <div
              class="rounded-md text-xl first:pl-0 cursor-pointer text-gray-500 px-3 py-2 hover:text-white-eee transition-all"
            >
              <i class="bx bxl-facebook"></i>
            </div>
            <div
              class="rounded-md text-xl first:pl-0 cursor-pointer text-gray-500 px-3 py-2 hover:text-white-eee transition-all"
            >
              <i class="bx bxl-twitter"></i>
            </div>
            <div
              class="rounded-md text-xl first:pl-0 cursor-pointer text-gray-500 px-3 py-2 hover:text-white-eee transition-all"
            >
              <i class="bx bxl-instagram"></i>
            </div>
            <div
              class="rounded-md text-xl first:pl-0 cursor-pointer text-gray-500 px-3 py-2 hover:text-white-eee transition-all"
            >
              <i class="bx bxl-dribbble"></i>
            </div>
          </div>
        </div>
        <div>
          <div class="h-10 mb-9">
            <h1 class="text-gray-50 font-bold text-lg mb-9">Usefull Links</h1>
          </div>
          <div class="text-blue-gray">
            <div class="mb-5">
              <span class="cursor-pointer hover:text-white-eee transition-all">About Us</span>
            </div>
            <div class="mb-5">
              <span class="cursor-pointer hover:text-white-eee transition-all">Contact Us</span>
            </div>
            <div class="mb-5">
              <span class="cursor-pointer hover:text-white-eee transition-all">Terms of Services</span>
            </div>
            <div class="mb-5">
              <span class="cursor-pointer hover:text-white-eee transition-all">Plan &amp; Precing</span>
            </div>
            <div>
              <span class="cursor-pointer hover:text-white-eee transition-all">Site Map</span>
            </div>
          </div>
        </div>
        <div>
          <div class="h-10 mb-9">
            <h1 class="text-gray-50 font-bold text-lg mb-9">Contact Us</h1>
          </div>
          <div class="text-blue-gray flex flex-col gap-9">
            <div class="flex flex-col gap-1">
              <label for="phonenumber1" class="group cursor-pointer">
                <span>Phone Number:</span>
                <a
                  class="group-hover:text-white-eee transition-all"
                  id="phonennumber1"
                  href="tel:0123456789"
                >(+ 051) 958 23 7851</a>
              </label>
              <label for="phonenumber2" class="group cursor-pointer">
                <span>Phone Number 2:</span>
                <a
                  class="group-hover:text-white-eee transition-all"
                  id="phonenumber2"
                  href="tel:0123456789"
                >(+ 051) 958 23 7851</a>
              </label>
            </div>
            <div class="flex flex-col gap-1">
              <label for="contact-email" class="group cursor-pointer">
                <span>Email:</span>
                <a
                  class="group-hover:text-white-eee transition-all"
                  id="contact-email"
                  href="mailto:hi@gmail.gmail"
                >support@octavian.cio</a>
              </label>
              <label for="fax-email" class="group cursor-pointer">
                <span>Fax:</span>
                <a
                  class="group-hover:text-white-eee transition-all"
                  id="Fax-email"
                  href="mailto:hi@gmail.gmail"
                >support@octavian.cio</a>
              </label>
            </div>
            <div>
              <label for="address" class="group cursor-pointer">
                <span>Address:</span>
                <address class="not-italic inline group-hover:text-white-eee">
                  Envato Pty Ltd 13/2 Permanent ST melbourne VLC 3000 -
                  Australia
                </address>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: "FooterTop",
};
</script>

<style scoped>
.text-blue-gray {
  color: var(--blue-gray);
}
</style>
