import { createStore } from "vuex";

export const store = createStore({
  state: {
    accountData: [],
    accountModal: null,
    accountsLoaded: null,
    currentAccountArray: null,
  },
  mutations: {
    TOGGLE_ACCOUNT(state) {
      state.accountModal = !state.accountModal;
    },
    SET_ACCOUNT_DATA(state, payload) {
      state.accountData.push(payload);
    },
    ACCOUNTS_LOADED(state) {
      state.accountsLoaded = true;
      console.log("accounts_loaded with data size: ", state.accountData.length);
    },
    SET_CURRENT_ACCOUNT(state, payload) {
      state.currentAccountArray = state.accountData.filter((account) => {
        return account.id === payload;
      });
    },
  },
  actions: {
    async GET_ACCOUNTS({ commit, state }) {
      const url = process.env.VUE_APP_API_URL;
      await fetch(url, {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((result) => {
          result.forEach((element) => {
            //updates values when new account is created in real time. checks if id already exists
            if (
              !state.accountData.some((account) => account.id === element.id)
            ) {
              const status = ["Rejected", "Ongoing", "Completed"];

              const data = {
                id: element.id,
                balance: element.balance,
                credit: element.credit,
                picture: element.picture,
                name_first: element.name_first,
                name_last: element.name_last,
                employer: element.employer,
                email: element.email,
                phone: element.phone,
                address: element.address,
                comments: element.comments,
                tags: element.tags,
                created: element.created,
                status: status[Math.floor(Math.random() * status.length)],
              };
              // console.log("loading account", data);
              commit("SET_ACCOUNT_DATA", data);
            }
          });
        })
        .catch((err) => console.log("ERR!", err));

      commit("ACCOUNTS_LOADED");
    },
  },
  modules: {},
});
