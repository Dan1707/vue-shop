import ShopCatalogBtn from "./global/ShopCatalogBtn.vue";
import ShopSerachWrapper from "./header/ShopSearhWrapper.vue";
import ShopInput from "./header/ShopInput.vue";
import ShopProfile from "./header/ShopProfile.vue";
import ShopLoginBtn from "./global/ShopLoginBtn.vue";
import ShopProfileAction from "./global/ShopProfileAction.vue";
import ShopCartBtn from "./global/ShopCartBtn.vue";
import ShopProductWrapper from "./products/ShopProductWrapper.vue";
import ShopProductItem from "./products/ShopProductItem.vue";

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
