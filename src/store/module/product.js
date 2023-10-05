import axios from "axios";

const product = {
  namespaced: true,
  state: {
    dataProducts: [],
    getproductid: [],
  },
  getters: {
    getProducts: (state) => state.dataProducts,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/product/search"
        );
        // console.log(data.data['products'])
        commit("SET_PRODUCTS", data.data["products"]);
      } catch (error) {
        alert("Ada Error");
        console.log(error);
      }
    },
    async fetchProductsId({ commit }, slug) {
      try {
        const data = await axios.get(
          `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`
        );
        // console.log(data.data)
        commit("SET_PRODUCTSID", data.data);
      } catch (error) {
        alert("Ada ERROR");
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, product) {
      state.dataProducts = product;
    },
    SET_PRODUCTSID(state, product) {
      state.getproductid = product;
    },
  },
};

export default product;
