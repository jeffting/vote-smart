<template>
    <div style="margin-bottom: 64px">
        <h2>Quiz</h2>
        <div v-for="(item, index) in quizItems" :key=index>
            <div>
                <img class="issue-img-container" :src=item.picture>
            </div>
            <h3>{{index+1}}. {{ item.issue }}</h3>
            <p>{{ item.info }}</p>
            <span> {{ item.question }}</span>
            <div class="answer-box" v-for="(answer, aIndex) in item.answers" :key=aIndex>
                <span>{{ answer }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            quizItems: [
                {issue: "Health Care", picture: require("../assets/health.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statment most appies to you?", answers: ["A", "B", "C"]}, 
                {issue: "Economy", picture: require("../assets/money.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                {issue: "Abortion", picture: require("../assets/baby.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                {issue: "Guns", picture: require("../assets/gun.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                {issue: "Immigration", picture: require("../assets/statue.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                {issue: "Education", picture: require("../assets/school.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                {issue: "National Security", picture: require("../assets/security.jpg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                {issue: "Climate change", picture: require("../assets/sun.jpeg"), info: "adsfa asf asdf as a ad ", question: "Which statement most appies to you?", answers: ["A", "B", "C"]},
                ]
        }
    }
    
}
</script>
<style>
.answer-box {
    margin-left: 15%;
    margin-right: 15%;
    text-align: left;
}

</style>