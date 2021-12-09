<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";

const props = defineProps(["product"]);
const { dispatch } = useStore();

const popup = ref(null);

const remove = () => {
  dispatch("cart/removeProduct", props.product.id);
  cancel();
};
const cancel = () => {
  popup.value = false;
};

const deleteConfirm = () => {
  popup.value = true;
};

const numberWithCommas = (number) => {
  return parseInt(number)
    .toString()
    .replace(/\B(?=\d{3})+(?!\d)/g, ",");
};
</script>

<template>
  <Popup v-if="popup" @close="cancel">
    <h4 class="title text-center">
      <span class="font-sans text-white">Xác nhận xoá khỏi giỏ hàng</span>
      <div class="w-full mt-6 flex items-center justify-center space-x-4">
        <Button @click="cancel" class="text-white text-base bg-gray-600" text="Cancel"></Button>
        <Button @click="remove" class="text-white text-base bg-red-400" text="Delete"></Button>
      </div>
    </h4>
  </Popup>
  <img
    class="block max-w-full w-24 h-24 rounded object-cover flex-shrink-0"
    :src="product?.thumb"
    alt
  />
  <div class="flex-1 px-5">
    <NavLink
      class="text-secondary-text inline mb-1 text-xl line-clamp-1"
      :text="product?.title"
      :to="{ name: 'ShopDetails', params: {}, query: {id: product.id} }"
    />
    <NavLink
      class="text-secondary-text max-w-max opensans font-normal"
      :text="`$${numberWithCommas(product?.prices)}`"
      :to="{ name: 'ShopDetails', params: {}, query: {id: product.id} }"
    />
  </div>
  <button
    @click="deleteConfirm"
    class="outline-none self-start bg-red-400 rounded-bl-md rounded-tr-[7px] w-10 h-10"
  >
    <i class="bx text-white text-2xl bx-x"></i>
  </button>
</template>