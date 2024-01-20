import ShopCatalogBtn from "./ShopCatalogBtn.vue";
import ShopSerachWrapper from "./ShopSearhWrapper.vue";
import ShopInput from "./ShopInput.vue";
import ShopProfile from "./ShopProfile.vue";
import ShopLoginBtn from "./ShopLoginBtn.vue";
import ShopProfileAction from "./ShopProfileAction.vue";
import ShopCartBtn from "./ShopCartBtn.vue";
import ShopProductWrapper from "./ShopProductWrapper.vue";
import ShopProductItem from "./ShopProductItem.vue";

const components = [
  { name: "ShopCatalogBtn", component: ShopCatalogBtn },
  { name: "ShopSerachWrapper", component: ShopSerachWrapper },
  { name: "ShopInput", component: ShopInput },
  { name: "ShopProfile", component: ShopProfile },
  { name: "ShopLoginBtn", component: ShopLoginBtn },
  { name: "ShopProfileAction", component: ShopProfileAction },
  { name: "ShopCartBtn", component: ShopCartBtn },
  { name: "ShopProductWrapper", component: ShopProductWrapper },
  { name: "ShopProductItem", component: ShopProductItem },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
