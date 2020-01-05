<template>
<v-app light >
<v-content class="ma-0 pa-00">
	
	<header class="console-branding-bar">
			<h1 class="header">Multi Cloud Orchestration</h1>
		</header>
      
      <v-navigation-drawer class="grey darken-4" v-model="drawer" app clipped>
        <v-list dense class="ll">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <router-link to="/" >MCOT Dashboard</router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="iconify" link>
            <v-list-item-action>
              <v-icon style="color: orange;">mdi-aws</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <router-link to="/aws" activeClass="active"><a><strong>AWS</strong></a></router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cash</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <router-link to="/oci" activeClass="active"><a><strong>OCI</strong></a></router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-azure</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <router-link to="/azure" activeClass="active"><a><strong>AZURE</strong></a></router-link>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item>
            <v-list-item-action>
                <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-action>
            <v-list>
                <a>Save & Load
                <v-list-group>
                    <li><a href="#">Save Data </a></li>
                    <li><a href="#">Load Data </a></li>
                </v-list-group>
                </a>
            </v-list>
            </v-list-item> -->
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
						
    </v-app-bar>

    <v-content>
      <v-container class="" fluid>
         <!-- <Header class=""/> -->
         <router-view class=""></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
				</v-content>
  </v-app>


</template>

<script>

// import Header from './components/Header'

export default {
  name: 'App',
  source: String,
  components: {
    // Header
  },
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
<style>


.ll {
	
	font-size: 120%;
}
.header {
	color: rgb(246, 246, 246);
	padding-left: 50%;
	flex-wrap: nowrap;
	display: flex;
	position: relative;
	word-wrap:unset;
}
.console-branding-bar {
    width: 100%;
    min-width: 800px;
    height: 96px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    -webkit-font-smoothing: antialiased;
    background: #1d2733;
    color: #fff;
}
.iconify { color: rgb(251, 0, 0); }
</style>