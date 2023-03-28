<template>
  <div class="card card-stats">
    <div class="card-header card-header-primary card-header-icon">
      <div class="card-icon">
        <i class="material-icons">{{ chartData.icon }}</i>
      </div>
      <p class="card-category">{{ chartData.title }}</p>
      <h3 class="card-title">{{ chartData.title == 'Total value of all projects' ? formatCurrency(chartData.data) :chartData.data }}</h3>
    </div>
    <div class="card-footer">
      <div class="stats" v-if="chartData.footer_icon || chartData.footer_text">
        <i class="material-icons">{{ chartData.footer_icon }}</i>
        {{ chartData.footer_text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['chartData'],

    methods: {
      formatCurrency(value) {
          // format string to number with 2 decimal places
            let val = (value/1).toFixed(2).replace(',', '.')
          // format number to currency
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' €'

      },
    }
}
</script>
