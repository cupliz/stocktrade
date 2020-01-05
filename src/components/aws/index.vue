<template>
<v-app>
  <v-container fluid>
      <!-- <v-text-field color="success" loading>Loading</v-text-field> -->
    <v-tabs align-with-title background-color="dark" >
      <v-tab  to="/aws" >Tab 1</v-tab>
      <v-tab to="/launch" >Launch</v-tab>
      <v-tab>S3 <div> Test </div> </v-tab>
    </v-tabs>
    <v-tabs-items></v-tabs-items>
  </v-container>


	<h1>The AWS component </h1>
  <v-form ref="form" v-model="valid" lazy-validation class="form" >
    <v-text-field
      v-model="awskey"
      :counter="10"
      :rules="nameRules"
      label="AWS Access Key Id"
      required
    ></v-text-field>

    <v-text-field
      v-model="secretkey"
      :rules="emailRules"
      label="AWS Secret Access Key"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[j => !!j || 'Region is required']"
      label="AWS Region"
      required
    ></v-select>

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-5"
      @click="saveData"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
</v-app>
</template>

<script>
import axios from 'axios'
import nanoid from 'nanoid'
import { mapActions } from 'vuex'

let dictionary = '1234567890ABCDEFGHIJKLMNOPQESTUVWXYZ'
let genID = require('nanoid/generate')

export default {
  data: () => ({
    formInline: {
      user: '',
      region: ''
    },
    rules: {
      user: [{
        required: true,
        message: 'Please input Activity name',
        trigger: 'blur'
      }, {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur'
      }],
      region: [{
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change'
      }],
    },
    valid: true,
    awskey: genID(dictionary, 10),
    nameRules: [
      v => !!v || 'awskey is required',
      v => (v && v.length <= 20) || 'awskey must be less than 10 characters',
    ],
    secretkey: nanoid(30),
    emailRules: [
      v => !!v || 'secretkey is required',
    ],
    select: null,
    items: [
      'us-east-1',
      'us-east-2',
      'us-west-1',
      'us-west-2',
    ],
    checkbox: false,
  }),
  mounted(){
    this.generateAWS()
    // console.log(thi)
  },
  methods: {
    generateAWS (){
      this.awskey =  genID(dictionary, 10)
      this.secretkey = nanoid(30)
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    onComplete: function(){
        alert('Yay. Done!');
    },
    async saveData() {
      const aws = {
        awskeys: this.awskey,
        secretkeys: this.secretkey,
        stocks: this.select,
        valid: this.valid
      }
      // axios.put('https://ng-http-e20af.firebaseio.com/', aws)
      const payload = { id: genID(dictionary, 5), type: 'aws', aws }
      this.$store.dispatch('addSubmenu', payload)
      this.$router.push(`/aws/${payload.id}`)
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style  scoped>
.form {
	width: 400px;
	background: black;
}
</style>