<template>
    <div class="quiz-div" style="margin-bottom: 64px">
        <h1>Quiz</h1>
        <div class="question-div" v-for="(item, index) in quizItems" :key=index style="margin-bottom: 80px;">
            <div class="row-flex-quiz">
                <div class="flex-item-left">
                    <div>
                        <img class="issue-img-container" :src=item.picture>
                    </div>
                    <h3 class="issue-title">{{index+1}}. {{ item.issue }}</h3>
                    <p class="quiz-info">{{ item.info }}</p>
                    <p class="learn-more">
                        <router-link :to="item.link" target="_blank">LEARN MORE</router-link>
                    </p>
                </div>
                <div class="flex-item-right">
                    <div class="questionbox-div">
                        <p class="question"> {{ item.question }}</p>
                        <div class="answer-box" v-for="(ans, aIndex) in item.answers" :key=aIndex>
                            <div v-if="aIndex !== item.answerSelected" v-on:click="setAnswer(index, aIndex)" class="answer-span">{{ ans.answer }}</div>
                            <div v-else class="answer-span answer-span-selected">{{ ans.answer }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showError" style="color: red; font-size: 20px; margin-bottom: 16px;">{{ this.errorMessage}}</div>
        <br>
        <button v-on:click="seeResults" class="quiz-button">See Results</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            quizItems: [
                {issue: "Health Care", answerSelected: -1, link: "/issues/health", picture: require("../assets/health.jpg"), info: "US health care is the most expensive in the world. Some Democratic presidential candidates are proposing Medicare for All, but others don't believe we should overhaul our current system. ", question: "Which statement best applies to you?", answers: [{answer: "Medicare for all.", candidate: ["bernie, warren, but"]}, { answer: "Expand Obamacare by offering a public health insurance without scrapping private health insurance. Seek to lower drug costs.", candidate: ["biden"] }, { answer: "Against Medicare for all, but support lower drug costs and work towards a solution for cheaper health care.", candidate: ["trump"] }]}, // A. Bernie, Warren, Buttigieg B. Biden C. Trump
                {issue: "Economy", answerSelected: -1, answerSelected: -1, link:"/issues/economy", picture: require("../assets/money.jpg"), info: "The US economy is currently in its longest expansion...ever. Unemployment is at a record low, there’s been steady GDP growth, and the stock market hit a number of record highs last year. Meanwhile, income inequality has become a focus of the 2020 campaign.", question: "Which statement best applies to you?", answers: [ { answer: "The economy seems to be doing well. Maintain the same plan going forward.", candidate: ["trump"] }, {answer: "Focus more on the poor and middle class. Raise minimum wage, and give tax credits to the poor.", candidate: ["biden", "but"] }, { answer: "Raise minimum wage and implement wealth tax on  Americans worth more than 32 million.", candidate: ["warren", "bernie"] }]}, // A. Trump B. Biden, Buttieg C. Warren, Bernie
                {issue: "Abortion", answerSelected: -1, link:"/issues/abortion", picture: require("../assets/pregnancy_test.jpg"), info: "In 1973, the US Supreme Court ruled in Roe v. Wade that a woman’s right to privacy encompasses the right to abortions. But Americans have strong opinions about when abortions should be allowed, if ever.", question: "Which statement best applies to you?", answers: [ { answer: "The government shouldn't interfere with a woman's right to choose abortion.", candidate: ["biden", "but"]}, { answer: "I'm against abortion except when there is rape, incest, or mother's life is at risk.", candidate: ["trump"] }, { answer: "Roe v. Wade should be upheld and codified. Appoint Supreme Court Justices that support Roe v. Wade.", candidate: ["warren", "bernie"]} ]}, // A. Biden, Buttigieg. B. Trump C. Warren, Bernie
                {issue: "Guns", answerSelected: -1, link:"/issues/guns", picture: require("../assets/gun.jpg"), info: "A string of mass shootings in recent years have amplified the issue for American voters and ignited new calls for action by lawmakers.", question: "Which statement best applies to you?", answers: [{ answer: "Reinstate assault weapons ban. Start a gun buyback program to get guns off the streets.", candidate: ["biden"] }, { answer: "Allow courts to more easily take away guns from dangerous people. Arm teachers with guns to control school shootings.", candidate: ["trump"]},{ answer: "Require background checks.", candidate: ["but"] }, {answer: "Require background checks and ban assault weapons.", candidate: ["bernie", "warren"] } ] }, //A. Biden B. Trump C. Buttigieg D. Bernie, Warren
                {issue: "Immigration", answerSelected: -1, link:"/issues/immigration", picture: require("../assets/statue.jpg"), info: "Many have a zero tolerance policy for illegal immigrants in order to keep the country safe and keep jobs in the hands of Americans while others argue that it’s the US’s moral responsibility to accept immigrants and refugees who come here for a better life.", question: "Which statement best applies to you?", answers: [{ answer: "Against decriminalization of illegal immigrants, restructure ICE, and help undocumented illegal immigrants gain citizenship.", candidate: ["biden"] },{ answer:  "Restructure ICE, decriminalize some border crossings, invest in tech for border, and help undocumented illegal immigrants gain citizenship.", candidate: ["but"] },{ answer:  "Zero tolerance for illegal immigration, extend the Mexican wall, and suspend immigration from several Muslim countries.", candidate: ["trump"] },{ answer:  "Decriminalize border crossings, abolish ICE, provide a path to citizenship for undocumented illegal immigrants.", candidate:["warren", "bernie"] } ]}, // A. Biden, B. Buttigieg C. Trump D. Warren Bernie
                {issue: "Education", answerSelected: -1, link:"/issues/education", picture: require("../assets/school.jpg"), info: "In the past few decades, the cost of college has gone up, and is contributing to the nation’s $1.5 trillion student debt problem. All of this has led to a debate about how to make college more affordable and help graduates manage their debt.", question: "Which statement best applies to you?", answers: [{ answer: "Support school vouchers (giving students public funds to go to private or charter schools), and introduce a cap to the amount of student loans students can take on.", candidate: ["trump"]},{ answer:  "Increase teacher's pay, two years of free community college, and increase funding for schools with high percentage of students from low income families.", candidate:["biden"] }, { answer: "Expand Pell Grants, make it easier to refinance student loans, and more debt forgiveness programs.", candidate:["but"]},{ answer: "Tuition free 4 year public colelge, and lower student loan interest rates", candidate: ["bernie"]},{ answer: "Free public college, cancel up to 50k in student debts for families making less than 100k, and universal child care from birth to school age.", candidate:["warren"] } ]}, // A Trump B. Biden C Buttigeg D Bernie E Warren
                {issue: "National Security", answerSelected: -1, link:"/issues/security", picture: require("../assets/security.jpg"), info: "There are a wide variety of issues that could affect the safety and security of Americans: everything from the threat of terrorism and nuclear war to gun control and climate change. Both parties agree the US faces threats abroad: like Russia.", question: "Which statement best applies to you?", answers: [{ answer: "Extend the border, get troops out of Iraq and Afghanistan, against Iran nuclear deal, and engage in political talks with Russia, North Korea, and the Taliban.", candidate: ["trump"]},{ answer: "Support sanctions against Russian, and support Iran nuclear deal.", candidate: ["biden"]},{ answer: "For sanctions against North Korea, and pulling the troops out of Afghanistan.", candidate:["but"]},{ answer: "Greatest threat to nat'l security is climate change, for Iran nuclear deal, end support for war in Yemen, and pull troops from Afghanistan.", candidate:["bernie"]},{ answer: "For Iran nuclear deal, reduce defense spending, and focus on terrosim but bring US troops home", candidate:["warren"]} ]}, // A Trump B Biden C Buttigieg D Bernie E Warren
                {issue: "Climate change", answerSelected: -1, link:"/issues/climate", picture: require("../assets/sun.jpeg"), info: "The US is one of the largest contributors to the carbon emissions that are fueling climate change. And international outrage, particularly among young people, about a lack of action has made it a high-profile issue in the 2020 race.", question: "Which statement best applies to you?", answers: [{ answer: "Against strict restrictions on carbon emissions.", candidate: ["trump"]} ,{ answer: "Rejoin Paris Climate Deal, and work towards net-zero emissions by 2050.", candidate: ["biden"]},{ answer: "Establish carbon tax, and up the budget for reneweable energy research and development.", candidate: ["but"]},{ answer: "Spend 16.3 trillion on sustainable electricity and transportation by 2030.", candidate: ["bernie"]},{ answer:  "Spend 3 trillion on eliminating greenhouse emissions from power plants, cars, and buildings in 10 years.", candidate: ["warren"]} ]},
                ],
            showError: false,
            errorMessage: "",
        }
    },
    beforeCreate() {
        this.$store.dispatch('setPage', 'quiz');
    },
    methods: {
        setAnswer(index, aIndex) {
            this.quizItems[index].answerSelected = aIndex;
        },
        seeResults() {
            let trump = 0
            let biden = 0
            let but = 0
            let bernie = 0
            let warren = 0
            for (let i = 0; i < this.quizItems.length; i++) {
                let ansSelected = this.quizItems[i].answerSelected;
                if (ansSelected === -1) {
                    this.showError = true;
                    this.errorMessage = `Must answer all questions. Please answer question ${i+1}.`
                    return;
                }
                this.quizItems[i].answers[ansSelected].candidate.forEach(item => {
                    switch (item) {
                        case "trump":
                            trump += 1;
                            break;
                        case "biden":
                            biden += 1;
                            break;
                        case "but":
                            but += 1;
                            break;
                        case "bernie":
                            bernie += 1;
                            break;
                        case "warren":
                            warren += 1;
                            break;
                    }
                });
            }
            this.$router.push({name: "results", params: {candidates: [{name: "Donald Trump", score: trump}, {name: "Joe Biden", score: biden},{name: "Pete Buttigieg", score: but},{name: "Bernie Sanders", score: bernie},{name: "Elizabeth Warren", score: warren}]} })
        }
    }
    
}
</script>
<style>
.flex-item-left {
    width: 35vw;
}
.flex-item-right {
    margin-left: 24px;
    width: 65vw;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;

}
.row-flex-quiz {
    display: flex;
    flex-direction: row;
    margin: 0 15% 0 15%;
    align-items: stretch;
}
.quiz-div {
    text-align: center;
}
.learn-more {
    text-align: left; 
    /* margin: 8px 15% 0 15%; */
    margin-top: -5px;
}

.answer-box {
    text-align: left;
    font-size: 20px;
    /* margin: 0 20% 0 20%; */
    /* display: inline-block; */
    /* width: 100%; */
}
.issue-title {
    margin-bottom: -5px;
}
.question-div{ 
    /* width: 80%; */
    display: inline-block;
    text-align: center;
}
.quiz-info {
    /* margin: 0 15% 0 15%; */
    /* width: 100%; */
    text-align: left;
    font-size: 20px;
    display: inline-block;
}
.answer-span {
    margin: 8px 8px 8px -8px;
    border: solid #666666;
    border-width: 1px;
    /* width: 100%; */
    padding: 8px;
    border-radius: 4px;
}
.answer-span:hover {
    cursor: pointer;
    background-color: #222222;
    color: white;
    transition: background-color 0.2s ease;
}
.answer-span-selected {
    background-color: #222222;
    color: white;
}
.quiz-button {
    font-size: 40px;
    border-radius: 6px;
    padding: 12px 16px 12px 16px;
    background-color: #222222;
    color: white;
}
.quiz-button:hover {
    cursor: pointer;
}
.question {
    font-size: 20px; 
    color: #222222;
    font-weight: 600;
    /* text-align: left; */
    /* text-transform: uppercase; */
}
.questionbox-div {
    background-color: #f4f4f4;
    border-radius: 4px;
    padding: 0px 16px 16px 24px;
    /* width: 80%; */
    display: inline-block;


}
</style>