<template>
  <div class="home container">
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Accounts</h1>
        <span>There are {{ filteredData.length }} total accounts</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by status</span>
          <!-- randomly assigned status per account -->
          <img src="../assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li @click="filteredAccounts">Rejected</li>
            <li @click="filteredAccounts">Ongoing</li>
            <li @click="filteredAccounts">Completed</li>
            <li @click="filteredAccounts">Clear</li>
          </ul>
        </div>
        <div @click="newAccount" class="button flex">
          <div class="inner-button flex">
            <img src="../assets/icon-plus.svg" />
          </div>
          <span>New Account</span>
        </div>
      </div>
    </div>
    <div>
      <Account
        v-for="(account, index) in filteredData"
        :account="account"
        :key="index"
      />
      {{ account }}
    </div>
  </div>
</template>

<script>
import Account from "../components/Accounts.vue";
import { mapMutations, mapState } from "vuex";
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
      filteredAccount: null,
    };
  },
  components: {
    Account,
  },
  methods: {
    ...mapMutations(["TOGGLE_ACCOUNT"]),
    newAccount() {
      this.TOGGLE_ACCOUNT();
    },
    toggleFilterMenu() {
      console.log("Filter", this.filterMenu);
      this.filterMenu = !this.filterMenu;
    },
    filteredAccounts(e) {
      if (e.target.innerText === "Clear") {
        this.filteredAccount = null;
        return;
      }
      this.filteredAccount = e.target.innerText;
    },
  },
  computed: {
    ...mapState(["accountData"]),

    filteredData() {
      console.log("filter");
      return this.accountData.filter((account) => {
        if (this.filteredAccount === "Rejected") {
          return account.status === "Rejected";
        }
        if (this.filteredAccount === "Ongoing") {
          return account.status === "Ongoing";
        }
        if (this.filteredAccount === "Completed") {
          return account.status === "Completed";
        }
        return account;
      });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;
      }

      span {
        font-size: 12px;
      }
      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        li {
          cursor: pointer;
          font-size: 12px;
          padding: 10px 20px;

          &:hover {
            color: #1e2139;
            background-color: #fff;
          }
        }
      }

      .button {
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
}
</style>