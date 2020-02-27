<template>
    <div>
        <h1>YOU RELATE MOST WITH</h1>
        <div v-for="(candidate, index) in this.cands" :key='index'>
            <div class="flex-container" :class="{tint: index %2 === 0}">
                <div class=picture-container>
                    <img class="winner-img-container" :src="candidate.photo"/>
                    <h2>{{ candidate.name }}</h2>
                </div>
                <div class="info-flex-container">
                    <div style="font-size: 48px; color: black;">{{ candidate.score / 8 * 100 }}%</div>
                    <div style="font-size: 24px; color: black; margin: 16px 0 24px 0;">{{ candidate.party }}</div>
                    <div v-on:click="goToPage(candidate.name)" target="_blank" class="go-to-page-button">VISIT PAGE</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['candidates'],
    data() {
        return {
            cands: []
        }
    },
    beforeMount() {
        this.candidates.sort(this.compare)
        this.setUpCandidates();
    },
    methods: {
        compare(a, b) {
            const candA = a.score;
            const candB = b.score;

            let comparison = 0;
            if (candA > candB) {
                comparison = -1;
            } else if (candA < candB) {
                comparison = 1;
            }
            return comparison;
        },
        setUpCandidates() {
            this.cands = this.candidates;
            this.cands.map((cand) => {
                let person = this.mainCandidates.find((person) => {
                    return person.name === cand.name;
                });
                cand.photo = person.photo
                cand.party = person.party === "R" ? "Republican" : "Democrat";
                return cand
            })
        },
        goToPage(name) {
            let routeData = this.$router.resolve({name: 'Profile', params: {name: name}})
            // this.$router.push({name: 'Profile', params: {name: name}})
            window.open(routeData.href, '_blank')
        }
    },
    computed: {
        mainCandidates() {
            return this.$store.getters.getMainCandidates()
        }
    }
}
</script>
<style scoped>
    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0 15% 0 15%;
        align-items: center;
        padding-top: 32px;
    }
    .picture-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .winner-img-container {
        width: 240px;
        height: 240px;
        border-radius: 120px;
        object-fit: cover;
    }
    .info-flex-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-width: 160px;
    }
    .tint {
        background-color: #f4f4f4;
    }
    .go-to-page-button {
        color: white;
        background-color: #222222;
        border-radius: 2px;
        padding: 4px;
        width: 100%;
        font-size: 20px;

    }
    .go-to-page-button:hover {
        cursor: pointer;
    }
</style>