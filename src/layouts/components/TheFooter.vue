<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: TripCarte
    Author URL: https://tripcarte.asia
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="https://tripcarte.asia" target="_blank" rel="nofollow">TripCarte</a>, All rights Reserved</span>
        <span class="md:flex hidden items-center">
            <span>Developed by NetQuest Team</span>
        </span>

        <!-- buyNow component -->
        <component :is="injections.components.BuyNow"></component>
    </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
