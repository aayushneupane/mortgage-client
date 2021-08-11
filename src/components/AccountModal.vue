<template>
  <div
    @click="checkClick"
    ref="accountWrap"
    class="account-wrap flex flex-column"
  >
    <form @submit.prevent="submitForm" class="account-content">
      <Loading v-show="loading" />
      <h1 v-if="!editAccount">New Account</h1>
      <h1 v-else>Edit Account</h1>

      <!-- Client info -->
      <div class="client flex flex-column">
        <h4>Client Info</h4>
        <div class="name-details flex">
          <div class="input flex flex-column">
            <label for="name_first">First Name</label>
            <input required type="text" id="name_first" v-model="name_first" />
          </div>
          <div class="input flex flex-column">
            <label for="name_first">Last Name</label>
            <input required type="text" id="name_first" v-model="name_last" />
          </div>
        </div>
        <div class="input flex flex-column">
          <label for="email">Email</label>
          <input required type="text" id="email" v-model="email" />
        </div>
        <div class="input flex flex-column">
          <label for="phone">Phone No.</label>
          <input required type="text" id="phone" v-model="phone" />
        </div>
        <div class="input flex flex-column">
          <label for="address">Street Address</label>
          <input required type="text" id="address" v-model="address" />
        </div>
        <h4>Financial Details</h4>
        <div class="financial-details flex">
          <div class="input flex flex-column">
            <label for="employer">Employer</label>
            <input type="text" id="employer" v-model="employer" />
          </div>
          <div class="input flex flex-column">
            <label for="balance">Balance</label>
            <input type="text" id="balance" v-model="balance" />
          </div>
          <div class="input flex flex-column">
            <label for="credit">Credit</label>
            <input type="text" id="credit" v-model="credit" />
          </div>
        </div>
      </div>

      <!-- Comments -->
      <div class="client flex flex-column">
        <h4>Additional Info</h4>
        <div class="input flex flex-column">
          <label for="comments">Comments</label>
          <textarea id="comments" v-model="comments" rows="4" cols="50" />
        </div>
        <div class="input flex flex-column">
          <label for="tags">Tags</label>
          <input type="text" id="tags" v-model="tags" />
        </div>
      </div>

      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left">
          <button type="button" @click="closeAccount" class="red">
            Cancel
          </button>
        </div>
        <div class="right flex">
          <button
            v-if="!editAccount"
            type="submit"
            @click="publishAccount"
            class="purple"
          >
            Create Account
          </button>
          <button v-if="editAccount" type="sumbit" class="purple">
            Update Account
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import { mapMutations } from "vuex";
export default {
  name: "accountModal",
  data() {
    return {
      id: null,
      balance: null,
      credit: null,
      picture: null,
      name_first: null,
      name_last: null,
      employer: null,
      email: null,
      phone: null,
      address: null,
      comments: null,
      tags: [],
      loading: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_ACCOUNT"]),
    closeAccount() {
      this.TOGGLE_ACCOUNT();
    },
    publishAccoutn() {},
    saveDraft() {},
    submitForm() {
      this.uploadAccount();
    },
    async uploadAccount() {
      const url = "http://localhost:8080/api/account";
      let data = {
        balance: this.balance,
        credit: this.credit,
        picture: this.picture,
        name_first: this.name_first,
        name_last: this.name_last,
        employer: this.employer,
        email: this.email,
        phone: this.phone,
        address: this.address,
        comments: this.comments,
        tags: [],
      };
      this.loading = true;

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => {
          this.loading = false;
          console.log(json);
        })
        .catch((err) => console.log("ERR!", err));
    },
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss" scoped>
.account-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 900px) {
    left: 90px;
  }

  .account-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #141625;
    color: #fff;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      color: #7c5dfa;
      font-size: 12px;
      margin-bottom: 24px;
    }

    .client {
      margin-bottom: 48px;

      .name-details,
      .financial-details {
        gap: 16px;
        div {
          flex: 1;
        }
      }
    }
  }
  .save {
    margin-top: 60px;

    div {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select,
  textarea {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }
}
</style>