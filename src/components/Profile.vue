<template>
  <div>
    <div class="profile-div">
        <div class="image-cropper" v-bind:class="[{ imageDemocrat: isDemocrat }, { imageRepublican: isRepublican }]">
            <img v-bind:src=photo>
        </div>
        <div>
            <h2> {{ name }} </h2>
        </div>
        <div class="points">
            <div v-for="(point, index) in points" :key="point.value">
                <ul>
                    <li class="underline" v-if="index != points.length - 1"> {{ point.text }}</li>
                    <li v-if="index == points.length - 1"> {{ point.text }}</li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="details">
                <div class="video-div">
                    <iframe width="560" height="315" :src="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3 v-bind:class="[{ h3Democrat: isDemocrat }, { h3Republican: isRepublican }]">Opinions</h3>
                    <div class="opinion-div" v-for="opinion in opinions" :key="opinion.value">
                        <ul>
                            <li class="issue-li" @click="routeToIssue(opinion.topic)"> <u><b>{{ opinion.topic }}</b></u>: {{ opinion.text }}</li>
                        </ul>
                    </div>
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
      name: this.$route.params.name,
    }
  },
  methods: {
        routeToIssue(issue) {
            this.$router.push({name: 'Issue', params: {issue: issue.toLowerCase()}})
            // this.$router.push('Profile')
        },
    },
  computed: {
    background: function () {
        return this.$store.getters.getCandidateByName(this.name).description
    },
    opinions: function () {
        return this.$store.getters.getCandidateByName(this.name).opinions
    },
    photo: function () {
        return this.$store.getters.getCandidateByName(this.name).photo
    },
    video: function () {
        return this.$store.getters.getCandidateByName(this.name).video
    },
    party: function () {
        return this.$store.getters.getCandidateByName(this.name).party
    },
    points: function () {
        return this.$store.getters.getCandidateByName(this.name).points
    },
    isDemocrat: function () {
        if (this.$store.getters.getCandidateByName(this.name).party == 'D') {
            return true
        }
        else {
            return false
        }
    },
    isRepublican: function () {
        if (this.$store.getters.getCandidateByName(this.name).party == 'R') {
            return true
        }
        else {
            return false
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-cropper {
    text-align: center;
    overflow: hidden;
    border-radius: 50%;
    height: 288px; 
    width: 288px; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 48px;
    display: flex; 
    justify-content: center;
}
.imageDemocrat {
    border: 6px solid #002868;
}
.imageRepublican {
    border: 6px solid #BF0A30;
}
.profile-div {
    text-align: center;
}
.points {
    width: 40%;
    display: inline-block;
    text-align: left;
}
.video-div {
    text-align: center;
}
iframe {
    display: inline-block;
    padding-top: 32px;
}
.details {
    width: 70%;
    display: inline-block;
    text-align: left;
    /* background-color: #F4F4F4;
    padding: 16px; */
}
.detail {
    padding-bottom: 16px;
}
img {   
    height: 100%;
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
hr {
    height: 8px;
    border-radius: 4px;
}
.hrDemocrat {
    background-color: #002868;
}
.hrRepublican {
    background-color: #BF0A30;
}
h3 {
    text-align: center;
    color: white;
    border-radius: 4px;
}
.h3Republican {
    background-color: #BF0A30;
}
.h3Democrat {
    background-color: #002868;
}
.content {
    background-color: #F4F4F4;
    margin-top: 48px;
    /* padding-top: 1px;
    padding-left: 24px;
    padding-right: 24px; */
}
.issue-li:hover {
    cursor: pointer;
}
.opinion-div:hover {
    cursor: pointer;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    border-radius: 4px;
}

</style>
