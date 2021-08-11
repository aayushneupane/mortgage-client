<template>
  <header class="flex">
    <router-link class="nav-link flex" :to="{ name: 'Home' }"
      ><div class="branding flex home">
        <img src="../assets/f-snsuxx-house-solid.png" /></div
    ></router-link>
    <router-link
      class="account flex"
      :to="{ name: 'Analytics Detail', params: { id: '3234' } }"
    >
      <div class="branding flex analytics">
        <img src="../assets/analytics.png" />
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #1e2139;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
  .branding {
    border-radius: 0 20px 20px 0;
    background-color: #7c5dfa;
    justify-content: center;
    padding: 24px;
    @media (min-width: 900px) {
      width: 100%;
    }
  }
  .analytics {
    margin-top: 1px;
  }

  img {
    width: auto;
    height: 30px;
    background-color: #7c5dfa;
  }
}
</style>