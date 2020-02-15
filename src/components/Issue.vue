<template>
    <div>
        <h2>{{ issueObj.name }}</h2>
        <img class="img-issue-page" :src=issueObj.picture>
        <p>{{ issueObj.info }}</p>

    </div>
</template>
<script>
export default {
    data () {
    return {
      issue: this.$route.params.issue,
    }
  },
  computed: {
      issueObj() {
          return this.$store.getters.getIssueByName(this.issue)
      }
  }
}
</script>
<style>
.img-issue-page {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    object-fit: cover;
}
</style>