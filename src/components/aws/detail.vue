<template>
  <div>
    <h1>AWS Detail</h1>
    <v-card class="mx-auto" >
      <v-card-text>
        <p class="display-1 text-primary">
          {{aws.id || ''}}
        </p>
        <p>
          Access Key: {{aws.awskeys || ''}} <br/>
          Secret Key: {{aws.secretkeys || ''}} <br/>
          Region: {{aws.stocks || ''}} <br/>
        </p>
        <p class="text--primary">
          {{aws.content || ''}}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="purple accent-4" >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    aws: {},
    id: ''
  }),
  mounted(){
    this.id = this.$route.params.id
    this.getDetail()
  },
  methods: {
    getDetail(){
      const result = this.$store.state.AWSdata.find(row=> row.id===this.id)
      if(result){
        this.aws = result
      }else{
        this.$router.push('/')
      }
    }
  },
  watch:{
    $route (to, from){
      this.id = to.params.id
      this.getDetail()
    }
  },
}
</script>