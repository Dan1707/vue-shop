<template>
  <form class="header__input-wrapper">
    <input
      v-model="productName"
      type="search"
      class="header__input"
      placeholder="I'm looking for..."
      @keypress.enter.prevent="getData()"
    />
    <div class="header__input-btn_wrapper">
      <button class="header__input-btn">
        <img src="/src/assets/img/micro.svg" class="header__input-btn_ico" />
      </button>
      <button class="header__input-btn" @click.prevent="getData()">
        <img src="/src/assets/img/search.svg" class="header__input-btn_ico" />
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const productName = ref("");
    const productArray = ref([]);

    const getData = async () => {
      try {
        if (productName.value !== "") {
          const res = await fetch(
            `https://api.escuelajs.co/api/v1/products?title=${productName.value}`
          );

          const data = await res.json();

          data.forEach((el) => {
            const product = {
              desc: el.description,
              title: el.title,
              img: el.images[0],
              price: el.price,
            };

            productArray.value.push(product);
          });

          console.log(productArray.value);
          console.log(res);
          productName.value = "";
        } else {
          alert("Порожня пошукова строка");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return { getData, productName, productArray };
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__input-wrapper {
    @include flex;
    max-width: 900px;
    flex-basis: 100%;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    padding: 8px 10px;
  }

  &__input {
    max-width: 90%;
    flex-basis: 100%;
  }

  &__input,
  &__input::placeholder {
    font-weight: 400;
    color: $secondary-color;
    font-size: 0.75rem;
  }

  &__input-btn {
    &_wrapper {
      @include flex;
      max-width: 50px;
      flex-basis: 100%;
    }
  }
}

@media (max-width: 1400px) {
  .header {
    &__input-wrapper {
      max-width: 721px;
    }
  }
}
</style>
