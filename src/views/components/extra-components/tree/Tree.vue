<!-- =========================================================================================
    File Name: Tree.vue
    Description: Tree demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: TripCarte
    Author URL: http://www.themeforest.net/user/TripCarte
========================================================================================== -->
<template>
  <div id="page-tree-demo">
    <tree-dropdown></tree-dropdown>
    <tree-search-tree></tree-search-tree>
    <tree-async-tree></tree-async-tree>
  </div>
</template>

<script>
import TreeDropdown from './TreeDropdown.vue'
import TreeSearchTree from './TreeSearchTree.vue'
import TreeAsyncTree from './TreeAsyncTree.vue'

export default {
  components: {
    TreeDropdown,
    TreeSearchTree,
    TreeAsyncTree
  }
}
</script>
