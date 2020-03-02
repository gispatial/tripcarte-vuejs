<!-- =========================================================================================
    File Name: Dialogs.vue
    Description: Dialogs - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: TripCarte
    Author URL: http://www.themeforest.net/user/TripCarte
========================================================================================== -->


<template>
    <div id="dialog-demo">
        <dialogs-alert></dialogs-alert>
        <dialogs-confirm></dialogs-confirm>
        <dialogs-prompt></dialogs-prompt>
    </div>
</template>

<script>
import DialogsAlert from './DialogsAlert.vue'
import DialogsConfirm from './DialogsConfirm.vue'
import DialogsPrompt from './DialogsPrompt.vue'

export default{
    components: {
        DialogsAlert,
        DialogsConfirm,
        DialogsPrompt,
    }
}
</script>
