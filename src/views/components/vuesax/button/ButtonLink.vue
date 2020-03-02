<!-- =========================================================================================
    File Name: ButtonLink.vue
    Description: Button with link
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: TripCarte
    Author URL: http://www.themeforest.net/user/TripCarte
========================================================================================== -->


<template>
    <vx-card title="Link" code-toggler>

        <p>You can specify for <code>window.location.href</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>You can use the <code>target</code> property to window.open()</span>
        </vs-alert>

        <div class="demo-alignment">

            <vs-button color="primary" type="filled" href="https://TripCarte.com/">String literal</vs-button>
            <vs-button color="primary" type="filled" :href="{url: 'https://TripCarte.com/'}">Object Path</vs-button>
            <vs-button color="primary" type="filled" target href="https://TripCarte.com/">Open New Tab</vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; href=&quot;https://TripCarte.com/&quot;&gt;String literal&lt;/vs-button&gt;
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; :href=&quot;{url: 'https://TripCarte.com/'}&quot;&gt;Object Path&lt;/vs-button&gt;
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; target href=&quot;https://TripCarte.com/&quot;&gt;Open New Tab&lt;/vs-button&gt;
        </template>

    </vx-card>
</template>
