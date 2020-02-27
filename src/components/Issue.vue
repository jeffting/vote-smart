<template>
    <div>
        <div class="image-cropper image-opinion">
            <img v-bind:src=issueObj.picture>
        </div>
        <h2>{{ issueObj.name }}</h2>
        <!-- <img class="img-issue-page" :src=issueObj.picture> -->
        <!-- <p>{{ issueObj.info }}</p> -->
        <div class="points">
            <div v-for="(infoText, index) in issueObj.info" :key="infoText.value">
                <ul>
                    <li class="underline" v-if="index != issueObj.info.length - 1"> {{ infoText.text }}</li>
                    <li v-if="index == issueObj.info.length - 1"> {{ infoText.text }}</li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="details">
                <div>
                    <h3>Opinions</h3>
                    <div class="opinion-div" v-for="opinion in issueObj.opinions" :key="opinion.value">
                        <!-- <div class="image-cropper image-candidate">
                            <img v-bind:src=getCandidatePhoto(opinion.name)>
                        </div> -->
                        <ul class="candidate-opinion">
                            <li class="candidate-li" @click="routeToProfile(opinion.name)"> <u><b>{{ opinion.name }}</b></u>: {{ opinion.text }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data () {
    return {
      issue: this.$route.params.issue,
    }
  },
  beforeCreate() {
        this.$store.dispatch('setPage', 'issues');
  },
  methods: {
        routeToProfile(candidate) {
            this.$router.push({name: 'Profile', params: {name: candidate}})
            // this.$router.push('Profile')
        },
        getCandidatePhoto(name) {
            console.log(name)
          return this.$store.getters.getCandidateByName(name).photo
      }
    },
  computed: {
      issueObj() {
          return this.$store.getters.getIssueByName(this.issue)
      },
  }
}
</script>
<style scoped >
img {   
    height: 100%;
}
.image-cropper {
    
    overflow: hidden;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex; 
    justify-content: center;
}
.image-opinion {
    height: 288px; 
    width: 288px; 
    margin-top: 48px;
    text-align: center;
}
.image-candidate {
    float: left;
    height: 72px; 
    width: 72px; 
    display:inline;
    margin-bottom: 15px;
}
.points {
    width: 40%;
    display: inline-block;
    text-align: left;
}
.points ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.points li {
    padding-bottom: 8pt;
    padding-top: 8pt;
}
.underline {
    border-bottom: 1px solid #666666;
}
.content {
    background-color: #F4F4F4;
    margin-top: 48px;
    /* padding-top: 1px;
    padding-left: 24px;
    padding-right: 24px; */
}
.details {
    width: 70%;
    display: inline-block;
    text-align: left;
    /* background-color: #F4F4F4;
    padding: 16px; */
}
h3 {
    text-align: center;
    color: white;
    border-radius: 4px;
    background-color: #222222;
}
.candidate-li:hover {
    cursor: pointer;
}
.candidate-opinion {
    /* float: right;
    display:inline; */
    /* width: 85%; */
}
.opinion-div:hover {
    cursor: pointer;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    border-radius: 4px;
}
</style>