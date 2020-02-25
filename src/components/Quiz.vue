<template>
    <div style="margin-bottom: 64px">
        <h2>Quiz</h2>
        <div v-for="(item, index) in quizItems" :key=index style="margin-bottom: 80px;">
            <div>
                <img class="issue-img-container" :src=item.picture>
            </div>
            <h3>{{index+1}}. {{ item.issue }}</h3>
            <p class="quiz-info">{{ item.info }}</p>
            <p style="text-align: left; margin: 0 15% 0 15%;">Learn More</p>
            <p style="font-size: 20px; color: black;"> {{ item.question }}</p>
            <div class="answer-box" v-for="(answer, aIndex) in item.answers" :key=aIndex>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <input type="radio" :name="item.issue" value="maison"><p class="answer-span">{{ answer }}</p>
                </div>
            </div>
        </div>
        <button class="quiz-button">See Results</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            quizItems: [
                {issue: "Health Care", picture: require("../assets/health.jpg"), info: "US health care is the most expensive in the world. Since 2014, Obamacare has let states expand who can be covered under Medicaid and worked to make it easier for people to buy insurance outside of employer-provided plans. Still, 8.5% of Americans (27.5 million people) are uninsured. And even those who are insured can face significant health care costs because of things like high deductibles or copays. Some Democratic presidential candidates are proposing Medicare for All, but others don't believe we should overhaul our current system. ", question: "Which statment most applies to you?", answers: ["Medicare for all.", "Expand Obamacare by offering a public health insurance without scrapping private health insurance. Seek to lower drug costs.", "Against Medicare for all, but support lower drug costs and work towards a solution for cheaper health care."]}, // A. Bernie, Warren, Buttigieg B. Biden C. Trump
                {issue: "Economy", picture: require("../assets/money.jpg"), info: "The US economy is currently in its longest expansion...ever. Unemployment is at a record low, there’s been steady GDP growth, and the stock market hit a number of record highs last year. Meanwhile, income inequality has become a focus of the 2020 campaign. In 2018, the gap between the US’s wealthiest and poorest families hit a 50-year high. Back in 2017, Republicans overhauled the country’s tax code for the first time in decades. It included tax cuts in every income bracket and for big corporations. The cuts contributed to the US deficit reaching nearly $1 trillion in 2019.", question: "Which statement most applies to you?", answers: ["The economy seems to be doing well. Maintain the same plan going forward.", "Focus more on the poor and middle class. Raise minimum wage, and give tax credits to the poor.", "Raise minimum wage and implement wealth tax on  Americans worth more than 32 million."]}, // A. Trump B. Biden, Buttieg C. Warren, Bernie
                {issue: "Abortion", picture: require("../assets/baby.jpg"), info: "In 1973, the US Supreme Court ruled in Roe v. Wade that a woman’s right to privacy encompasses the right to abortions. But SCOTUS left room for some state regulation, like on how late into a pregnancy women can have an abortion. And Americans have strong opinions about when abortions should be allowed, if ever. Those who are pro-abortion rights point out that Roe v. Wade is the law of the land. And that women have the right to safe, legal abortions. They note that when states restrict abortions, women from poorer, rural communities tend to be affected – while wealthier women are able to afford travel to other states. Meanwhile, those who are anti-abortion rights think the arguments behind Roe v. Wade were a stretch, because the right to privacy isn’t explicitly mentioned anywhere in the Constitution.", question: "Which statement most applies to you?", answers: ["The government shouldn't interfere with a woman's right to choose abortion.", "I'm against abortion except when there is rape, incest, or mother's life is at risk.", "Roe v. Wade should be upheld and codified. Appoint Supreme Court Justices that support Roe v. Wade."]}, // A. Biden, Buttigieg. B. Trump C. Warren, Bernie
                {issue: "Guns", picture: require("../assets/gun.jpg"), info: "A string of mass shootings in recent years (see: Las Vegas, Orlando, Charleston, El Paso, Dayton, Parkland) have amplified the issue for American voters and ignited new calls for action by lawmakers. Voters in both parties agree on some key proposals: most Americans say gun laws should be stricter; a majority of both GOP and Dem voters are in favor of restricting gun sales to people with mental illnesses; and a majority in both parties favor background checks for private gun sales, and at gun shows. Many agree on banning assault-style weapons and high-capacity magazines while others support ideas like teachers carrying firearms in schools, and giving states the power to regulate gun laws instead of using federal mandates.", question: "Which statement most applies to you?", answers: ["Reinstate assault weapons ban. Start a gun buyback program to get guns off the streets.", "Allow courts to more easily take away guns from dangerous people. Arm teachers with guns to control school shootings.", "Require background checks.", "Require background checks and ban assault weapons."]}, //A. Biden B. Trump C. Buttigieg D. Bernie, Warren
                {issue: "Immigration", picture: require("../assets/statue.jpg"), info: "Many have a zero tolerance policy for illegal immigrants in order to keep the country safe and not keep jobs in the hands of Americans while others argue that it’s the US’s moral responsibility to accept immigrants and refugees who come here for a better life, and that immigrants help boost the economy. Some candidates have called for reforming or even removing Immigration and Customs Enforcement (ICE) saying they have too much power. ", question: "Which statement most applies to you?", answers: ["Against decriminalization of illegal immigrants, restructure ICE, and help undocumented illegal immigrants gain citizenship.", "Restructure ICE, decriminalize some border crossings, invest in tech for border, and help undocumented illegal immigrants gain citizenship.", "Zero tolerance for illiegal immigration, extend the Mexican wall, and suspend immigration from several Muslim countries.", "Decriminalize border crossings, abolish ICE, provide a path to citizenship for undocumented illegal immigrants."]}, // A. Biden, B. Buttigieg C. Trump D. Warren Bernie
                {issue: "Education", picture: require("../assets/school.jpg"), info: "In the past few decades, the cost of college has gone up, and is contributing to the nation’s $1.5 trillion student debt problem. All of this has led to a debate about how to make college more affordable and help graduates manage their debt. Proposals from 2020 candidates range from making four-year public schools completely free to increasing debt forgiveness for certain professions. ", question: "Which statement most applies to you?", answers: ["Support school vouchers (giving students public funds to go to private or charter schools), and introduce a cap to the amount of student loans students can take on.", "Increase teacher's pay, two years of free community college, and increase funding for schools with high percentage of students from low income families.", "Expand Pell Grants, make it easier to refinance student loans, and more debt forgiveness programs.", "Tuition free 4 year public colelge, and lower student loan interest rates", "Free public college, cancel up to 50k in student debts for families making less than 100k, and universal child care from birth to school age."]}, // A Trump B. Biden C Buttigeg D Bernie E Warren
                {issue: "National Security", picture: require("../assets/security.jpg"), info: "There are a wide variety of issues that could affect the safety and security of Americans: everything from the threat of terrorism and nuclear war to gun control and climate change. President Trump ran on a platform of extending the US-Mexico border wall – and tends to treat illegal immigration as a national security threat. But both parties agree the US faces threats abroad: like Russia, because of its interference in the 2016 election process and concerns it could interfere in 2020 as well. Iran and China are also believed to pose serious cybersecurity threats to US elections.", question: "Which statement most applies to you?", answers: ["Extend the border, get troops out of Iraq and Afghanistan, against Iran nuclear deal, and engage in political talks with Russia, North Korea, and the Taliban.", "Support sanctions against Russian, and support Iran nuclear deal.", "For sanctions against North Korea, and pulling the troops out of Afghanistan.", "Greatest threat to nat'l security is climate change, for Iran nuclear deal, end support for war in Yemen, and pull troops from Afghanistan.", "For Iran nuclear deal, reduce defense spending, and focus on terrosim but bring US troops home"]}, // A Trump B Biden C Buttigieg D Bernie E Warren
                {issue: "Climate change", picture: require("../assets/sun.jpeg"), info: "The US is one of the largest contributors to the carbon emissions that are fueling climate change. And international outrage, particularly among young people, about a lack of action has made it a high-profile issue in the 2020 race. The United Nations has issued multiple reports warning about the potential “catastrophic” effects of climate change if countries don’t do more to keep Earth’s temp from rising. Like more frequent droughts and flooding, and extreme heat that could lead to things like food shortages and potentially affect hundreds of millions of people.", question: "Which statement most applies to you?", answers: ["Against strict restrictions on carbon emissions.", "Rejoin Paris Climate Deal, and work towards net-zero emissions by 2050.", "Establish carbon tax, and up the budget for reneweable energy research and development.", "Spend 16.3 trillion on sustainable electricity and transportation by 2030.", "Spend 3 trillion on eliminating greenhouse emissions from power plants, cars, and buildings in 10 years."]},
                ]
        }
    },
    beforeCreate() {
        this.$store.dispatch('setPage', 'quiz');
    },
    
}
</script>
<style>
.answer-box {
    text-align: left;
    font-size: 20px;
    margin: 0 20% 0 20%;
}

.quiz-info {
    margin: 0 15% 0 15%;
    text-align: left;
    font-size: 20px;
}
.answer-span {
    margin: 8px 0 8px 16px;
}
.quiz-button {
    font-size: 32px;
    border-radius: 6px;
    padding: 12px 16px 12px 16px;
}
.quiz-button:hover {
    cursor: pointer;
}
</style>