<template>
    <div>
        <h2>CANDIDATES</h2>
        <div class="row">
            <div class="column">
                <h2 class="text-democrat">Democrat</h2>
                <div class="content">
                    <div v-for="democrat in democrats" :key="democrat.value">
                        <div class="candidate-div" @click="routeToProfile(democrat.name)">
                            <div class="image-cropper image-candidate image-democrat">
                                <img v-bind:src="democrat.photo" v-bind:alt="democrat.name" align="right">
                            </div>
                            <div class="description-candidate">
                                <h3>{{ democrat.name }}</h3>
                                <p>{{ democrat.description }}</p>
                            </div>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <h2 class="text-republican">Republican</h2>
                <div class="content">
                    <div v-for="republican in republicans" :key="republican.value">
                        <div class="candidate-div" @click="routeToProfile(republican.name)">
                            <div class="image-cropper image-candidate image-republican">
                                <img v-bind:src="republican.photo" v-bind:alt="republican.name" align="right">
                            </div>
                            <div class="description-candidate">
                                <h3>{{ republican.name }}</h3>
                                <p>{{ republican.description }}</p>
                            </div>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // this.$router.push('Home') 
    data() {
        return {
        };
    },
    beforeCreate() {
        this.$store.dispatch('setPage', 'candidates');
    },
    methods: {
        routeToProfile(candidate) {
            this.$router.push({name: 'Profile', params: {name: candidate}})
            // this.$router.push('Profile')
        },
    },
    computed: {
    republicans: function () {
        console.log(this.$store.getters.getCandidatesByParty('R'))
        return this.$store.getters.getCandidatesByParty('R')
    },
    democrats: function () {
        return this.$store.getters.getCandidatesByParty('D')
    },
  }
};
</script>

<style scoped>

.row {
  display: flex;
}
.column {
  flex: 50%;
  margin: 16px;
}
.image-cropper {
    width: 136px;
    height:136px;
    overflow: hidden;
    border-radius: 50%;
    display: flex; 
    justify-content: center;
}
.image-candidate {
    float: left;
    margin-right: 16px;
    /* border: 6px solid #BF0A30; */
    
}
img {
    display: block;
    margin: auto auto;
    height: 100%;
    
}
.description-candidate {
    text-align: left;
    height: 136px;
}
h3 {
    margin-bottom: -16px;
}
.text-republican {
    background-color: #BF0A30;
    color: white;
    text-align: center;
    border-radius: 5px;
}
.text-democrat {
    background-color: #002868;
    color: white;
    text-align: center;
    border-radius: 5px;
}
.candidate-div {
}
.candidate-div:hover {
    cursor: pointer;
    /* background-color: white; */
}
.candidate-div:hover > .image-republican {
    border: 6px solid #BF0A30;
}
.candidate-div:hover > .image-democrat {
    border: 6px solid #002868;
}
.content {
    background-color: #F4F4F4;
    padding-top: 1px;
    padding-left: 24px;
    padding-right: 24px;
}

</style>