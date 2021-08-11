<template>
  <div v-if="currentAccount" class="account-view container">
    <router-link class="nav-link flex" :to="{ name: 'Home' }"
      >Go back</router-link
    >
    <div class="header flex">
      <div class="left flex">
        <span>Status</span>
        <div
          class="status-button flex"
          :class="{
            rejected: currentAccount.status === 'Rejected',
            ongoing: currentAccount.status === 'Ongoing',
            completed: currentAccount.status === 'Completed',
          }"
        >
          <span v-if="currentAccount.status === 'Rejected'">Rejected</span>
          <span v-if="currentAccount.status === 'Ongoing'">Ongoing</span>
          <span v-if="currentAccount.status === 'Completed'">Completed</span>
        </div>
      </div>
      <div class="right flex">
        <button @click="toggleEditAccount" class="dark-purple">Edit</button>
        <button @click="deleteAccount(currentAccount.docId)" class="red">
          Delete
        </button>
        <button
          @click="updateStatusToComplete(currentAccount.docId)"
          v-if="currentAccount.accountPending"
          class="green"
        >
          Mark as Complete
        </button>
        <button
          v-if="currentAccount.accountDraft || currentAccount.accountPaid"
          @click="updateStatusToOngoing(currentAccount.docId)"
          class="orange"
        >
          Mark as Ongoing
        </button>
      </div>
    </div>
    <div class="account-details flex flex-column">
      <div class="top flex">
        <p>{{ currentAccount.comments }}</p>

        <div class="left flex flex-column"></div>
        <div class="right flex flex-column">
          <img :src="currentAccount.picture" />
          <p>{{ currentAccount.name_first }} {{ currentAccount.name_last }}</p>

          <p>{{ currentAccount.address }}</p>
        </div>
      </div>
      <div class="middle flex">
        <div class="payment flex flex-column">
          <h4>Employer</h4>
          <p>
            {{ currentAccount.employer }}
          </p>
        </div>
        <div class="payment flex flex-column">
          <h4>Email</h4>
          <p>
            {{ currentAccount.email }}
          </p>
        </div>
        <div class="payment flex flex-column">
          <h4>Phone</h4>
          <p>
            {{ currentAccount.phone }}
          </p>
        </div>
      </div>
      <div class="middle flex">
        <div class="payment flex flex-column">
          <h4>Created Date</h4>
          <p>
            {{ currentAccount.created }}
          </p>
        </div>
        <div class="payment flex flex-column">
          <h4>Balance</h4>
          <p>
            {{ currentAccount.balance }}
          </p>
        </div>
        <div class="payment flex flex-column">
          <h4>Credit Score</h4>
          <p>
            {{ currentAccount.credit }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "accountView",
  data() {
    return {
      currentAccount: null,
    };
  },
  created() {
    this.getCurrentAccount();
  },
  methods: {
    ...mapMutations(["SET_CURRENT_ACCOUNT"]),

    getCurrentAccount() {
      this.SET_CURRENT_ACCOUNT(this.$route.params.id);
      this.currentAccount = this.currentAccountArray[0];
      console.log(this.currentAccount);
    },
    toggleEditAccount() {
      alert("This is supposed to let you edit account but it doesnt work.");
    },
    deleteAccount() {
      alert("Yea, this doesnt work either :)");
    },
  },
  computed: {
    ...mapState(["currentAccountArray"]),
  },
};
</script>

<style lang="scss" scoped>
.account-view {
  .nav-link {
    margin-bottom: 32px;
    align-items: center;
    color: #fff;
    font-size: 12px;
    img {
      margin-right: 16px;
      width: 7px;
      height: 10px;
    }
  }

  .header,
  .account-details {
    background-color: #1e2139;
    border-radius: 20px;
  }

  .header {
    align-items: center;
    padding: 24px 32px;
    font-size: 12px;

    .left {
      align-items: center;

      span {
        color: #dfe3fa;
        margin-right: 16px;
      }
    }

    .right {
      flex: 1;
      justify-content: flex-end;

      button {
        color: #fff;
      }
    }
  }

  .footer {
    align-items: center;
    padding: 24px 32px;
    font-size: 12px;

    .left {
      align-items: center;

      p,
      span {
        color: #dfe3fa;
        margin-right: 16px;
      }
    }
  }

  .account-details {
    padding: 48px;
    margin-top: 24px;

    .top {
      div {
        color: #dfe3fa;
        flex: 1;
      }

      p,
      span {
        color: #dfe3fa;
        margin-right: 16px;
      }

      img {
        max-height: 200px;
      }

      .left {
        font-size: 12px;
        p:first-child {
          font-size: 24px;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 8px;
        }

        p:nth-child(2) {
          font-size: 16px;
        }

        span {
          color: #888eb0;
        }
      }

      .right {
        font-size: 12px;
        align-items: flex-end;
      }
    }

    .middle {
      margin-top: 50px;
      color: #dfe3fa;
      gap: 16px;

      h4 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 12px;
      }

      p {
        font-size: 16px;
      }

      .bill,
      .payment {
        flex: 1;
      }

      .payment {
        h4:nth-child(3) {
          margin-top: 32px;
        }

        p {
          font-weight: 600;
        }
      }

      .bill {
        p:nth-child(2) {
          font-size: 16px;
        }
        p:nth-child(3) {
          margin-top: auto;
        }

        p {
          font-size: 12px;
        }
      }

      .send-to {
        flex: 2;
      }
    }

    .bottom {
      margin-top: 50px;

      .billing-items {
        padding: 32px;
        border-radius: 20px 20px 0 0;
        background-color: #252945;

        .heading {
          color: #dfe3fa;
          font-size: 12px;
          margin-bottom: 32px;

          p:first-child {
            flex: 3;
            text-align: left;
          }

          p {
            flex: 1;
            text-align: right;
          }
        }

        .item {
          margin-bottom: 32px;
          font-size: 13px;
          color: #fff;

          &:last-child {
            margin-bottom: 0;
          }

          p:first-child {
            flex: 3;
            text-align: left;
          }

          p {
            flex: 1;
            text-align: right;
          }
        }
      }

      .total {
        color: #fff;
        padding: 32px;
        background-color: rgba(12, 14, 22, 0.7);
        align-items: center;
        border-radius: 0 0 20px 20px;

        p {
          flex: 1;
          font-size: 12px;
        }

        p:nth-child(2) {
          font-size: 28px;
          text-align: right;
        }
      }
    }
  }
}
</style>
