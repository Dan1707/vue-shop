import ShopLogo from "./global/ShopLogo.vue";
import ShopSerachWrapper from "./header/ShopSearhWrapper.vue";
import ShopInput from "./header/ShopInput.vue";
import ShopProfile from "./header/ShopProfile.vue";
import ShopLoginBtn from "./global/ShopLoginBtn.vue";
import ShopProfileAction from "./global/ShopProfileAction.vue";
import ShopCartBtn from "./global/ShopCartBtn.vue";
import ShopProductWrapper from "./products/ShopProductWrapper.vue";
import ShopProductItem from "./products/ShopProductItem.vue";
import ShopProductProfileAction from "./products/ShopProductProfileAction.vue";
import ShopCartWrapper from "./cart/ShopCartWrapper.vue";
import ShopCartItem from "./cart/ShopCartItem.vue";
import ShopDeleteBtn from "./global/ShopDeleteBtn.vue";
import ShopEmptyWarning from "./global/ShopEmptyWarning.vue";
import ShopCategoriesWrapper from "./categories/ShopCategoriesWrapper.vue";
import ShopCategoriesItem from "./categories/ShopCategoriesItem.vue";
import ShopFilterWrapper from "./filter/ShopFilterWrapper.vue";
import ShopUserCard from "./user/ShopUserCard.vue";

const components = [
  { name: "ShopLogo", component: ShopLogo },
  { name: "ShopSerachWrapper", component: ShopSerachWrapper },
  { name: "ShopInput", component: ShopInput },
  { name: "ShopProfile", component: ShopProfile },
  { name: "ShopLoginBtn", component: ShopLoginBtn },
  { name: "ShopProfileAction", component: ShopProfileAction },
  { name: "ShopCartBtn", component: ShopCartBtn },
  { name: "ShopProductWrapper", component: ShopProductWrapper },
  { name: "ShopProductItem", component: ShopProductItem },
  { name: "ShopProductProfileAction", component: ShopProductProfileAction },
  { name: "ShopCartWrapper", component: ShopCartWrapper },
  { name: "ShopCartItem", component: ShopCartItem },
  { name: "ShopDeleteBtn", component: ShopDeleteBtn },
  { name: "ShopEmptyWarning", component: ShopEmptyWarning },
  { name: "ShopCategoriesWrapper", component: ShopCategoriesWrapper },
  { name: "ShopCategoriesItem", component: ShopCategoriesItem },
  { name: "ShopFilterWrapper", component: ShopFilterWrapper },
  { name: "ShopUserCard", component: ShopUserCard },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
