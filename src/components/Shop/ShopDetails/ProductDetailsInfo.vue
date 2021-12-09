<script setup>
import { ref, inject, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const added = ref(false);
const popup = ref(false);
const product = inject("product");

const selectOption = inject("selectOption");

watch(
  () => route.query.id,
  () => {
    added.value = false;
  }
);

const inscreQuanlity = () => {
  if (selectOption.value.quantity < product.value.count) {
    ++selectOption.value.quantity;
  }
};

const descreQuanlity = () => {
  if (selectOption.value.quantity > 0) {
    --selectOption.value.quantity;
  }
};

const validate = (_options) => {
  for (const key in _options) {
    if (Object.hasOwnProperty.call(_options, key)) {
      const el = _options[key];
      if (!el && el != 0) {
        return key;
      }
    }
  }
  return false;
};

const addProductToCart = () => {
  selectOption.value.id = product.value.id;

  const options = {
    ...selectOption.value,
    prices: product.value.price,
    title: product.value.title,
    thumb: product.value.thumb,
  };

  const invalid = validate(options);
  if (!invalid) {
    added.value = true;
    popup.value = false;
    store.dispatch("cart/addProduct", options);
  } else {
    popup.value = invalid;
    added.value = false;
  }
  setTimeout(() => {
    added.value = false;
  }, 1000);
};

const numberWithComas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
</script>

<template>
  <div>
    <Popup v-if="popup" @close="popup = null">
      <h4 class>Cần chọn {{ popup }}</h4>
    </Popup>
    <div>
      <h1 class="title">{{ product?.title }}</h1>
    </div>
    <div class="mt-6 flex flex-col md:flex-row items-center">
      <div class="text-yellow-400">
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star-half"></i>
      </div>
      <div class="flex items-center ml-2 space-x-2 text-gray-500 font-semibold text-sm">
        <a href="javascript:void(0)">(xem {{ product?.rates?.count ?? 0 }} đánh giá)</a>
        <span class="inline-block h-4 w-px my-auto bg-gray-600"></span>
        <span>Đã bán {{ product?.sold }}</span>
      </div>
    </div>
    <div class="mt-6 font-semibold text-3xl text-gray-600">
      <span class="text-dark-gray-light inline-flex items-center line-through" v-if="product.sale">
        <span>$</span>
        <span>{{ numberWithComas(product.price) }}</span>
        <span class="inline-block mx-2.5 w-5 h-[2px] bg-gray-600 text-base font-normal"></span>
      </span>
      <span>
        <span>$</span>
        <span>{{ numberWithComas(product.price - (product.price * product.sale) / 100) }}</span>
      </span>
    </div>
    <!-- ========= description ========== -->
    <div
      class="mt-7 w-full overflow-hidden line-clamp-3"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi, deleniti non possimus hic aliquam accusantium, doloremque, commodi rerum eos enim minus. Praesentium aliquid minima error ullam adipisci eos distinctio illum voluptates! Fugit aut saepe officiis minima sint deserunt blanditiis dolorum excepturi suscipit officia quam assumenda delectus, nihil, fugiat iusto.</div>
    <!-- ============ Select size Product -->
    <div class="mt-10">
      <h4 class="text-gray-500">Select size</h4>
      <div class="mt-3 flex gap-3 justify-center md:justify-start">
        <!-- =========== Loop all size of a product ================== -->
        <label
          v-for="(size, index) in product.sizes"
          :key="index"
          class="h-14 w-12 relative cursor-pointer rounded-lg"
          :for="`size-${index}${size}`"
        >
          <input
            type="radio"
            class="opacity-0 cursor-pointer absolute peer"
            :id="`size-${index}${size}`"
            name="size"
            :value="size"
            v-model="selectOption.size"
          />
          <div
            class="peer-checked:text-blue-300 text-gray-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-blue-400 rounded-md transition-all p-2 relative overflow-hidden"
          >
            <div
              class="before:absolute before:z-[-1] before:opacity-50 before:w-full before:h-full before:top-0 before:left-0 before:bg-current"
            >
              <div class="flex items-center justify-center">
                <span class="text-gray-600 uppercase font-semibold">{{ size }}</span>
              </div>
            </div>
          </div>
          <div
            class="absolute transition-all m-1 top-0 left-0 w-0 h-0 rounded-full peer-checked:w-[10px] peer-checked:h-[10px] peer-checked:bg-blue-400"
          ></div>
        </label>
      </div>
    </div>

    <!-- ========== quantity =============== -->
    <div class="mt-10 flex justify-center md:justify-start gap-6">
      <div
        @click="descreQuanlity"
        class="cursor-pointer text-3xl w-12 h-12 rounded-md bg-gray-200 flex items-center justify-center"
      >-</div>
      <input
        type="number"
        class="cursor-pointer text-center select-none outline-none w-14 h-12 border rounded-md border-gray-200 p-2"
        v-model.number="selectOption.quantity"
        id="quantity"
        min="1"
        :max="product?.count"
      />
      <div
        @click="inscreQuanlity"
        class="cursor-pointer select-none text-3xl w-12 h-12 rounded-md bg-gray-200 flex items-center justify-center"
      >+</div>
    </div>
    <!-- =========== button add ==================== -->
    <div class="mt-5 flex sm:inline-flex justify-center sm:justify-start">
      <Button
        :disabled="added"
        @click="addProductToCart"
        class="w-60 cart-button bg-blue-600 text-white"
        :class="added ? 'clicked' : ''"
      >
        <span class="add-to-cart whitespace-nowrap">Add to cart</span>
        <span class="added">
          Added
          <i class="bx bx-check"></i>
        </span>
        <i class="bx bxs-cart"></i>
        <i class="bx bxs-package"></i>
      </Button>
    </div>
  </div>
</template>


<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.cart-button {
  position: relative;
  height: 60px;
  flex: 1;
  overflow: hidden;
}

.cart-button .bx.bxs-cart {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: -10%;
  font-size: 2em;
  transform: translate(-50%, -50%);
}

.cart-button .bx.bxs-package {
  position: absolute;
  z-index: 3;
  top: -20%;
  left: 52%;
  font-size: 1.2em;
  transform: translate(-50%, -50%);
}

.cart-button span {
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  font-size: 1.2em;
  transform: translate(-50%, -50%);
}

.cart-button span.add-to-cart {
  opacity: 1;
}

.cart-button span.added {
  opacity: 0;
}

.cart-button.clicked {
  background-color: var(--blue);
  color: white;
}

.cart-button.clicked .bxs-cart {
  animation: cart 0.8s ease-in-out forwards;
}

.cart-button.clicked .bxs-package {
  animation: box 0.8s ease-in-out forwards;
}

.cart-button.clicked span.add-to-cart {
  animation: txt1 0.8s ease-in-out forwards;
}

.cart-button.clicked span.added {
  animation: txt2 0.8s ease-in-out forwards;
}

@keyframes cart {
  0% {
    left: -10%;
  }
  40%,
  60% {
    left: 50%;
  }
  100% {
    left: 110%;
  }
}

@keyframes box {
  0%,
  40% {
    top: -20%;
  }
  60% {
    top: 40%;
    left: 52%;
  }
  100% {
    top: 40%;
    left: 112%;
  }
}

@keyframes txt1 {
  0% {
    opacity: 1;
  }
  20%,
  100% {
    opacity: 0;
  }
}

@keyframes txt2 {
  0%,
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>