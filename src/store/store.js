import { defineStore } from "pinia";
import axios from "axios";

export const ShopData = defineStore({
  id: "shop-data",
  state: () => ({
    productName: "",
    productArray: [],
    productsToShow: [],
    showProducts: false,
    productsToShowCopy: [],
    productIsLiked: [],
    productsInCart: [],
    showCart: false,
    defineAction: "All",
    calcCartProductsNum: 0,
    filterCategories: [{ name: "All", isChosen: true }],
    showLogin: false,
    access_token: null,
    refresh_token: null,
  }),
  actions: {
    async getData() {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products/`
        );

        this.productArray = res.data.map((product) => {
          return {
            ...product,
            isLiked: false,
            isInCart: false,
            isFilter: false,
          };
        });

        console.log(this.productArray);

        this.productArray.forEach((el) => {
          this.productsToShow.push(el);
        });
      } catch (error) {
        console.log(error);
      }
    },

    filterProducts() {
      if (this.productName) {
        this.productsToShow.length = 0;
        console.log("Filtering products with name:", this.productName);
        console.log("All products:", this.productArray);

        this.productArray.forEach((el) => {
          if (el.title.toUpperCase().includes(this.productName.toUpperCase())) {
            this.productsToShow.push(el);
          }
        });

        console.log("Filtered products:", this.productsToShow);
      }
    },

    getLikedProducts(newEl) {
      const filterTitle = this.productIsLiked.find(
        (findEl) => findEl.title === newEl.title
      );

      if (newEl.isLiked === true && !filterTitle) {
        this.productIsLiked.push(newEl);
      } else if (newEl.isLiked === false) {
        this.productIsLiked = this.productIsLiked.filter((delEl) => {
          return newEl !== delEl;
        });
      }
    },

    getProductsInCart(newEl) {
      const filterTitle = this.productsInCart.find(
        (findEl) => findEl.title === newEl.title
      );

      if (newEl.isInCart === true && !filterTitle) {
        this.productsInCart.push(newEl);

        console.log(this.productsInCart);
      } else if (newEl.isInCart === false) {
        this.productsInCart = this.productsInCart.filter((delEl) => {
          return newEl !== delEl;
        });
      }
    },
  },
});
