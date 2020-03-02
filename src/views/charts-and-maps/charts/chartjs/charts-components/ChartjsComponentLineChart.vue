<!-- =========================================================================================
	File Name: ChartjsComponentLineChart.vue
	Description: Chartjs component - Line Chart
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: TripCarte
	Author URL: http://www.themeforest.net/user/TripCarte
========================================================================================== -->


<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        data: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
}
</script>
