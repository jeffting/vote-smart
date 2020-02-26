<template>
    <div class="col-flex">
        <div class="title-flex-item"><h1>Political Issues</h1></div>
        <div class="row-flex">
            <div class="flex-item-row" v-on:click="issueClick('economy')">
                <img class="issue-img-container" src="../assets/money.jpg">
                <h3 class="issue-title">Economy</h3>
                <p class="issue-info">The US economy is currently in its longest expansion ever, and unemployment is at a record low. That's music to President Trump's ears. But the country's also dealing with rising income inequality and stagnant wages.</p>
            </div>
            <div class="flex-item-row" v-on:click="issueClick('abortion')">
                <img class="issue-img-container" src="../assets/pregnancy_test.jpg">
                <h3 class="issue-title">Abortion</h3>
                <p class="issue-info" >Abortion rates have been going down for decades. But with the recent wave of statewide abortion restrictions, the issue has taken a front seat in the 2020 election.</p>
            </div>
            <div class="flex-item-row" v-on:click="issueClick('climate')">
                <img class="issue-img-container" src="../assets/sun.jpeg">
                <h3 class="issue-title">Climate Change</h3>
                <p class="issue-info">The effects of climate change - like more frequent wildfires and flooding - are hitting home for voters in a way they haven't in the past.</p>
            </div>

            <div class="flex-item-row" v-on:click="issueClick('education')">
                <img class="issue-img-container" src="../assets/school.jpg">
                <h3 class="issue-title">Education</h3>
                <p class="issue-info">The nation has a $1.5 trillion student debt problem. That's led to a fierce debate about how to make college more affordable. The candidates also have policies to address everything from universal pre-k to charter schools.</p>
            </div>
        </div>
        <div class="row-flex" style="margin-top: 16px">
            <div class="flex-item-row" v-on:click="issueClick('guns')">
                <img class="issue-img-container" src="../assets/gun.jpg">
                <h3 class="issue-title">Guns</h3>
                <p class="issue-info">A string of mass shootings in recent years have amplified this issue for American voters and ignited new calls for action by lawmakers.</p>
            </div>
            <div class="flex-item-row" v-on:click="issueClick('health')">
                <img class="issue-img-container" src="../assets/health.jpg">
                <h3 class="issue-title">Health Care</h3>
                <p class="issue-info">US Health Care is the most expensive in the world. And Americans are fed up with its high prices, making it one of the most pressing issues on the campaign trail.</p>
            </div>
            <div class="flex-item-row" v-on:click="issueClick('immigration')">
                <img class="issue-img-container" src="../assets/statue.jpg">
                <h3 class="issue-title">Immigration</h3>
                <p class="issue-info">Immigration has been a defining issue for President Trump's first term. That's fueled a debate about everything from the future of DACA to border security to refugee policies.</p>
            </div>
            <div class="flex-item-row" v-on:click="issueClick('security')">
                <img class="issue-img-container" src="../assets/security.jpg">
                <h3 class="issue-title">National Security</h3>
                <p class="issue-info">The threat of terrorism. Nuclear war. Cybersecurity. There are a wide variety of issues that could affect the safety and security of Americans.

</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    beforeCreate() {
        console.log(this.$route.name)
        if (this.$route.name === "Issues") {
            this.$store.dispatch('setPage', 'issues');
        }
    },
    methods: {
        issueClick(issue) {
            this.$router.push({name: 'Issue', params: {issue: issue}})
        }
    }
    
}
</script>
<style>
.col-flex {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    /* height: 70vh; */
    margin-bottom: 32px;
}
.row-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 2;
}
.title-flex-item {
    flex-grow: .6;
}
.flex-item-row {
    width: 22%;
    margin-bottom: 8px;
    padding: 16px 8px 16px 8px;
    border-radius: 4px;
    
    /* -webkit-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    box-shadow: 2px 2px 5px 0px rgba(133,133,133,1); */
}
.flex-item-row:hover {
    cursor: pointer;
    transition: box-shadow linear 0.2s;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
    box-shadow: 2px 2px 5px 0px rgba(133,133,133,1);
}
.issue-title {
    margin-top: 8px;
    margin-bottom: 0px;
}
.issue-info {
    margin: 0px;
    text-align: left;
}

</style>