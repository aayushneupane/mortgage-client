<template>
  <div v-if="accountsLoaded">
    <div class="app flex flex-column">
      <Navigation />
      <div class="app-content flex flex-column">
        <transition name="account">
          <AccountModal v-if="accountModal" />
        </transition>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navigation from "./components/Navigation.vue";
import AccountModal from "./components/AccountModal.vue";
export default {
  components: {
    Navigation,
    AccountModal,
  },
  created() {
    this.GET_ACCOUNTS();
  },
  methods: {
    ...mapActions(["GET_ACCOUNTS"]),
  },
  computed: {
    ...mapState(["accountModal", "accountsLoaded"]),
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

.app {
  background-color: #141625;
  min-height: 100vh;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }

  .app-content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}

.account-enter-active,
.account-leave-active {
  transition: 0.8 ease all;
}

.account-enter-from,
.account-leave-to {
  transform: translateX(-700px);
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

.nav-link {
  text-decoration: none;
  color: initial;
}

// Status Button Styling

.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
  min-width: 155px;
}

.completed {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}

.ongoing {
  &::before {
    background-color: #cebd2c;
  }
  color: #cebd2c;
  background-color: rgba(255, 145, 0, 0.1);
}

.rejected {
  &::before {
    background-color: #dd3838;
  }
  color: #dd3838;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
