<template>
  <div class="home">
    <Button type="primary" @click="getBanner">按钮</Button>
    <ul>
      <li v-for="(item, index) in bannerList" :key="index">{{ item.typeTitle }}</li>
    </ul>
  </div>
</template>

<script>
import { Button } from 'view-design'
export default {
  components: {
    Button
  },
  data() {
    return {
      bannerList: []
    }
  },
  methods: {
    async getBanner() {
      const params = {
        uriCode: 'API001'
      }
      const res = await this.$fetch(params)
      this.bannerList = res.data.banners
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding: 100px;
}
ul {
  margin-top: 50px;
}
</style>
