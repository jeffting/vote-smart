<template>
  <div>
    <h1> {{ name }} </h1>
    <div>
        <div class="image-cropper" v-bind:class="[{ imageDemocrat: isDemocrat }, { imageRepublican: isRepublican }]">
            <img v-bind:src=photo>
        </div>
        <div>
            <h3>Background</h3>
            <p> {{ background }}</p>
        </div>
        <div v-if="abortion !== '' && abortion !== undefined">
            <h3>Abortion</h3>
            <p> {{ abortion }}</p>
        </div>
        <div v-if="education !== '' && education !== undefined">
            <h3>Education</h3>
            <p> {{ education }}</p>
        </div>
        <div v-if="immigration !== '' && immigration !== undefined">
            <h3>Immigration</h3>
            <p> {{ immigration }}</p>
        </div>
        <div v-if="criminal_justice !== '' && criminal_justice !== undefined">
            <h3>Criminal Justice</h3>
            <p> {{ criminal_justice }}</p>
        </div>
        <div v-if="health_care !== '' && health_care !== undefined">
            <h3>Health Care</h3>
            <p> {{ health_care }}</p>
        </div>
        <div v-if="economy !== '' && economy !== undefined">
            <h3>Economy</h3>
            <p> {{ economy }}</p>
        </div>
        <div v-if="climate_change !== '' && climate_change !== undefined">
            <h3>Climate Change</h3>
            <p> {{ climate_change }}</p>
        </div>
        <div v-if="guns !== '' && guns !== undefined">
            <h3>Guns</h3>
            <p> {{ guns }}</p>
        </div>
        <div v-if="foreign_policy !== '' && foreign_policy !== undefined">
            <h3>Foreign Policy</h3>
            <p> {{ foreign_policy }}</p>
        </div>
        <div v-if="other !== '' && other !== undefined">
            <h3>Other</h3>
            <p> {{ other }}</p>
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
  computed: {
    abortion: function () {
        return this.$store.getters.getCandidateByName(this.name).abortion
    },
    education: function () {
        return this.$store.getters.getCandidateByName(this.name).education
    },
    immigration: function () {
        return this.$store.getters.getCandidateByName(this.name).immigration
    },
    criminal_justice: function () {
        console.log(this.$store.getters.getCandidateByName(this.name).criminal_justice)
        return this.$store.getters.getCandidateByName(this.name).criminal_justice
    },
    health_care: function () {
        return this.$store.getters.getCandidateByName(this.name).health_care
    },
    economy: function () {
        return this.$store.getters.getCandidateByName(this.name).economy
    },
    climate_change: function () {
        return this.$store.getters.getCandidateByName(this.name).climate_change
    },
    guns: function () {
        return this.$store.getters.getCandidateByName(this.name).guns
    },
    foreign_policy: function () {
        return this.$store.getters.getCandidateByName(this.name).foreign_policy
    },
    other: function () {
        return this.$store.getters.getCandidateByName(this.name).other
    },
    background: function () {
        return this.$store.getters.getCandidateByName(this.name).description
    },
    photo: function () {
        return this.$store.getters.getCandidateByName(this.name).photo
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
}
.imageDemocrat {
    border: 6px solid #002868;
}
.imageRepublican {
    border: 6px solid #BF0A30;
}
img {   
    height: 100%;
}
</style>
