<template>
  <router-link
    class="account flex"
    :to="{ name: 'Account Detail', params: { id: account.id } }"
  >
    <div class="left flex">
      <span class="lastname">{{ account.name_last }}</span>
      <span class="person">{{ account.name_first }}</span>
    </div>
    <div class="right flex">
      <span class="creditscore">{{ account.credit }}</span>
      <div
        class="status-button flex"
        :class="{
          rejected: account.status === 'Rejected',
          ongoing: account.status === 'Ongoing',
          completed: account.status === 'Completed',
        }"
      >
        <span v-if="account.status === 'Rejected'">Rejected</span>
        <span v-if="account.status === 'Ongoing'">Ongoing</span>
        <span v-if="account.status === 'Completed'">Completed</span>
      </div>
      <div class="icon">
        <img src="../assets/icon-arrow-right.svg" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "account",
  props: ["account"],
};
</script>

<style lang="scss" scoped>
.account {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px;
  background-color: #1e2139;
  align-items: center;

  span {
    font-size: 13px;
  }

  .left {
    align-items: center;
    flex-basis: 30%;
    gap: 16px;

    span {
      flex: 1;
    }

    .lastname {
      text-transform: uppercase;
    }
  }

  .right {
    gap: 16px;
    flex-basis: 70%;
    align-items: center;

    .creditscore {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>