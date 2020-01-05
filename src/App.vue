<script>
// import { mdiAccountBox } from '@mdi/js';

export default {
	data() {
		return {
			drawer: false,
      menuItems: this.$store.state.sidenav,
      title: '',
		}
  },
  methods: {
    setPageTitle(to){
      let title = 'MCOT'
      if(to.meta.title){
        title += ' - ' + to.meta.title
      }
      document.title =  title
      this.title = to.meta.title
    },
  },
  watch:{
    $route (to, from){
      this.setPageTitle(to)
    }
  },
  created(){
      this.setPageTitle(this.$route)
  },
}
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>

<template>
<v-app>
    <v-navigation-drawer v-model="drawer" app  clipped>
      <v-list>
      <div v-for="(menu, i) in menuItems" :key="i" link>
           
        <v-list-group v-if="menu.list && menu.list.length" :prepend-icon="menu.icon" :to="menu.href" link>
          <template v-slot:activator>
            <v-list-item-content>
              <router-link :to="menu.href || ''" >{{menu.title}}</router-link>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(submenu, j) in menu.list" :key="j" :to="submenu.href" link>
              <v-list-item-icon>
                <v-icon v-text="submenu.icon||'>'"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="submenu.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item  v-else :to="menu.href || ''" link>
          <v-list-item-icon>
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="menu.title"></v-list-item-title>
        </v-list-item>
      </div>

      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar class="grey darken-4" app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.title}}</v-toolbar-title>
			<v-spacer></v-spacer>
        <v-btn text>
          <v-icon left>mdi-account</v-icon>
          <router-link to="/signup" activeClass="active">Sign up</router-link> 
        </v-btn>
        <v-btn text>
          <v-icon left>mdi-login</v-icon>	
          <router-link to="/signin" activeClass="active">Login</router-link> 
        </v-btn>
        <v-btn text>
          <v-icon left>mdi-person</v-icon>
          Profile
        </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
          <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app> <h6>2020</h6> </v-footer>
</v-app>
</template>