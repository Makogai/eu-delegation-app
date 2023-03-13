<template>
  <div class="wrapper">
    <div class="main-panel">
      <div class="content">
<!--          <h1>MARE</h1>-->
        <dashboard-content></dashboard-content>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardContent from './Content.vue'

export default {
  components: {
    DashboardContent,
  },
  data() {
    return {

    }
  }
}
</script>
