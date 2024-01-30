import { defineStore } from "pinia";
import axios from "axios";

export const ShopData = defineStore({
  id: "shop-data",
  state: () => ({
    productName: "",
    productArray: [],
    productsToShow: [],
    productShow: false,
    productIsLiked: [],
    productsInCart: [],
    showCart: false,
    calcCartProductsNum: 0,
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
      } catch (error) {
        console.log(error);
      }
    },

    filterProducts() {
      this.productsToShow.length = 0;
      console.log("Filtering products with name:", this.productName);
      console.log("All products:", this.productArray);

      this.productArray.forEach((el) => {
        if (el.title.toUpperCase().includes(this.productName.toUpperCase())) {
          this.productsToShow.push(el);
        }
        if (this.productName === "") {
          this.productShow = false;
        }
      });

      console.log("Filtered products:", this.productsToShow);
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

    calcCartProducts() {
      this.productsInCart.forEach((el) => {
        if (el.isInCart === true) {
          this.calcCartProductsNum = this.calcCartProductsNum + el.price;

          console.log(el.price + this.calcCartProductsNum);
        } else if (this.productsInCart.length === 0) {
          this.calcCartProductsNum = 0;
        }
      });
    },
  },
});
