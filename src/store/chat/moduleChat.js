/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: TripCarte
  Author URL: https://tripcarte.asia
==========================================================================================*/


import state from './moduleChatState.js'
import mutations from './moduleChatMutations.js'
import actions from './moduleChatActions.js'
import getters from './moduleChatGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
