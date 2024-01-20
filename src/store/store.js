import { defineStore } from "pinia";
import axios from "axios";

export const ShopData = defineStore({
  id: "shop-data",
  state: () => ({
    productName: "",
    productArray: [],
    productShow: false,
  }),
  actions: {
    async getData() {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products?title=${this.productName}`
        );

        this.productArray = res.data;

        if (this.productName === "") {
          this.productShow = false;
        }

        console.log(this.productArray);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
