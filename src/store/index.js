import Vue from 'vue'
import Vuex from 'vuex'
import faker from 'faker'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    sidenav: [
      { icon: 'mdi-view-dashboard', title: 'Dashboard', href: '/' },
      { icon: 'mdi-azure', title: 'Azure', href: '/azure' },
      {
        title: 'AWS',
        href: '/aws',
        icon: 'mdi-aws',
        iconColor: 'orange',
        list: [
          { title: "NNZCP", href: '/aws/NNZCP' }
        ]
      },
      { icon: 'mdi-cash', title: 'Oracle', href: '/oci' }
    ],
    AWSdata: [
      {
        id: 'NNZCP',
        content: faker.lorem.paragraphs(),
        awskeys: 'AKIAIOSFODNN7EXAMPLE',
        secretkeys: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
        stocks: "us-east-2",
      },
    ]
  },
  actions: {
    addSubmenu: ({ commit }, params) => {
      commit('submenuAWS', params)
    }
  },
  mutations: {
    submenuAWS({ AWSdata, sidenav }, { id, type, aws }) {
      const {awskeys, secretkeys, stocks} = aws
      const nav = sidenav.find(s => s.href == `/${type}`)
      nav['list'].push({
        title: id,
        href: `/${type}/${id}`
      })
      AWSdata.push({ id, awskeys, secretkeys, stocks, content: faker.lorem.paragraphs() })
    }
  },
  modules: {}
})