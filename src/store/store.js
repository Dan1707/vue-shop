import { defineStore } from "pinia";
import axios from "axios";

export const ShopData = defineStore({
  id: "shop-data",
  state: () => ({
    productName: "",
    productArray: [],
    productShow: false,
    productIsLiked: [],
  }),
  actions: {
    async getData() {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products?title=${this.productName}`
        );

        this.productArray = res.data.map((product) => {
          return {
            ...product,
            isLiked: false,
            isInCart: false,
            isFilter: false,
          };
        });

        if (this.productName === "") {
          this.productShow = false;
        }

        console.log(this.productArray);
      } catch (error) {
        console.log(error);
      }
    },
    getLikedProducts() {
      this.productIsLiked = [];

      this.productArray.forEach((el) => {
        if (el.isLiked === true) {
          this.productIsLiked.push(el);
          console.log(this.productIsLiked);
        }
      });
    },
  },
});
