<template>
  <form>
    <div class="mt-24 w-full max-w-2xl">
      <h1 class="title mb-15">Write your review</h1>
      <div class="h-11 mb-4 rounded-sm flex items-center pl-6 w-full bg-blue-600">
        <span class="text-white">Please fill the required fields.</span>
      </div>
      <div class="flex flex-col gap-[30px]">
        <div class="flex flex-col gap-[24px] md:flex-row md:gap-[30px]">
          <div
            class="h-15 w-full focus-within:border-blue-400 transition rounded-md border-2 border-gray-300"
          >
            <input
              class="w-full h-full bg-transparent px-6 border-none outline-none text-base"
              type="text"
              placeholder="Antho_"
            />
          </div>
          <div
            class="h-15 w-full focus-within:border-blue-400 transition rounded-md border-2 border-gray-300"
          >
            <input
              class="w-full h-full bg-transparent px-6 border-none outline-none text-base"
              type="text"
              placeholder="E.g., a.octavian@gmail.com"
            />
          </div>
        </div>
        <div class="w-full rounded-md focus-within:border-blue-300 border-gray-200 border-2">
          <textarea
            class="w-full h-full bg-transparent pt-6 pl-6 resize-none outline-none border-none"
            name="content-contact"
            id
            cols="30"
            rows="6"
            placeholder="Your review"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="mt-[30px] flex justify-center md:block">
      <Button disabled="true" class="bg-gray-300 text-secondary-text" text="Login To Review" />
    </div>
  </form>
</template>