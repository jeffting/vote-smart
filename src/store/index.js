import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    candidates: [
        { name: 'Michael Bennet', 
            party: 'D',
            points: [
                { text: 'Senator from Colorado' },
                { text: 'Announced in February 2020 that he was ending his bid for the Democratic nomination after a dismal showing in the New Hampshire primary.' },
            ],
            video: 'https://www.youtube.com/embed/F-2StDx-Gpw',
            photo: 'https://pbs.twimg.com/profile_images/1215072789419479042/aA1rHAIC_400x400.jpg', 
            description:'Sen. Michael Bennet (D-CO) is looking for his Golden Ticket (read: your vote) to the White House. Back in April, he was diagnosed with prostate cancer. And said he would run for president if he was declared cancer-free. A successful surgery got him here.',
            opinions: [
                {
                    topic: 'EDUCATION',
                    text: 'Another top campaign issue for him. He has supported expanding Pell Grants (a federal program that helps low-income students pay for college).',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'He\'s a proud part of the Gang of Eight that supported more border security measures, and a path to citizenship for some undocumented immigrants. Earlier this year, he tried to stop a gov shutdown by giving President Trump the $25 billion he wanted for a border wall in exchange for protections for Dreamers. He was visibly upset when it didn\t work out – and a video of him giving an emotional speech went viral.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He supports what he calls Medicare-X – which he says would be a public plan that would offer Americans low-cost health insurance choices and create more competition.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'He wants to rejoin the Paris climate deal and provide tax incentives for people to be more energy efficient. But he’s also criticized Democrats for advocating getting rid of coal and oil plants without proposing new jobs.',
                },
                {
                    topic: 'GUNS',
                    text: 'He’s sent mixed messages. He’s called for background checks after shootings in Las Vegas and Virginia Beach. He also voted to limit high-capacity magazines. But also says he’s opposed to restricting the right to bear arms.',
                },
            ],
       },
        { name: 'Joe Biden', 
            party: 'D',
            points: [
                { text: 'RESUME: Former vice president; former senator from Delaware' },
                { text: 'Has run for president twice before.' },
                { text: 'Is known for his down-to-earth personality and his ability to connect with working-class voters.' },
                { text: 'Regards 2020 as his last chance to run for president.' },
                { text: 'SIGNATURE ISSUES: Restoring America’s standing on the global stage; strengthening economic protections for low-income workers in industries like manufacturing and fast food.' },
            ],
            video: 'https://www.youtube.com/embed/b2w0is0GQ1o',
            photo: 'https://www.biography.com/.image/t_share/MTQwODQ0Nzc0MjIyNDczMDA2/joe-biden-official-portrait_1600jpg.jpg', 
            description: 'Before serving as former President Obama’s veep, Biden was Delaware’s longest-serving senator – first elected in 1972 at age 29. This is his third run for president (he also ran in 1988 and 2008).',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'He has a mixed record on the issue, which he’s struggled with as a devout Catholic. In 1982, he voted for a bill that, if passed, would’ve let states override Roe v Wade. He has since said he’d defend Roe v Wade as president. He said he no longer supports the Hyde Amendment (which bars federal funding going toward most abortions)...a day after his campaign said he still supports it and after pushback from other Dems.',
                },
                {
                    topic: 'EDUCATION',
                    text: 'He wants to offer two years of free (read: taxpayer-funded) community college or job training and universal pre-k for three and four-year-olds. He’ll reinstate Obama-era policy that aims to make sure schools are working to desegregate, and wants to triple funding for schools with a high percentage of students from low-income families. Plus give teachers an assist by upping their paychecks and providing them more help with student loan forgiveness.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He wants to expand the Affordable Care Act by giving Americans the choice of a public health insurance option in addition to letting people keep employer-based plans. He would give Medicare the power to directly negotiate drug prices. He also plans to let consumers get prescription drugs from other countries to create more competition for US drug corporations.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'Addressing income inequality and workers’ rights are his priorities. Some highlights: let\'s enact a $15/hr minimum wage and ban non-compete agreements that stop workers from taking jobs with competitors. He also wants to reverse Trump’s tax law and give tax credits to lower income families.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'Something he\'s been saying \'mayday\' about since the 1980s. He calls climate change \"the greatest threat to our security.\" So what\'s he going to do about it? Rejoin the 2015 Paris climate deal on his first day in office. Start a "major diplomatic push" to get other countries to up their emissions-cutting ambition. Get the US to net-zero greenhouse gas emissions no later than 2050. Btw, he\'d foot his climate change plan by reversing Trump\'s 2017 corporate tax cuts.',
                },
                {
                    topic: 'GUNS',
                    text: 'He supports several changes to gun policy, including reinstating an assault weapons ban, setting up a voluntary buyback program to get weapons off the streets, and closing loopholes on background checks. He might get some questions about his record on this issue. That\'s because in the 1980s he voted for the Firearm Owners Protection Act, which allowed gun dealers to sell weapons through the mail, online, and at gun shows. (The NRA called it "the law that saved gun rights.”)',
                },
            ],
        },                
        { name: 'Michael Bloomberg', 
            party: 'D',
            points: [
                { text: 'RESUME: Billionaire media executive; former mayor of New York City' },
                { text: 'Recently reversed his longstanding support of the aggressive “stop-and-frisk” policing strategy that he pursued for a decade while he was mayor.' },
                { text: 'Has flirted with mounting a bid for president for more than a decade.' },
                { text: 'Re-registered as a Democrat in October 2018, nearly two decades after he left the party to run for mayor as a Republican.' },
                { text: 'Has voiced stark disagreements with progressives on issues including bank regulation, stop-and-frisk police tactics and the #MeToo movement.' },
                { text: 'SIGNATURE ISSUES: Has been an outspoken voice on gun control and climate change, but his views on taxes would put him on the conservative end of the Democratic field.' },
            ],
            video: 'https://www.youtube.com/embed/CmNiDCSofoc',
            photo: 'https://thehill.com/sites/default/files/styles/article_full/public/michael_bloomberg_11252019.jpg?itok=M59QkRab', 
            description:'One of the world’s richest people just entered the 2020 Democratic race. He was NYC mayor from 2002 to 2013. He’s switched political parties multiple times: he was first elected mayor as a Republican, then registered as an independent, and later hopped on the Democratic train in 2018.',
            opinions: [
                {
                    topic: 'IMMIGRATION',
                    text: 'He says the country needs immigrants to fill all the jobs out there. He also founded a pro-immigration advocacy group that pushes lawmakers to enact legislation to protect Dreamers. As mayor, he started programs to help immigrant entrepreneurs start and grow businesses, and enforced a policy still in place today that keeps immigration statuses confidential when immigrants interact with the city government (think: in certain situations, city agencies can’t ask about immigration status).',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He’s not into the idea of Medicare for All. He thinks that replacing the entire US health care system would “bankrupt us for a very long time.” But he’s open to an option that would provide health insurance to anyone who’s uncovered. Also, as mayor, he implemented a number of public health measures, including making NYC the first city to require calorie counts on menus for chain restaurants.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'He wants wealthy people like him to pay more in taxes. But he’s against the wealth tax that fellow 2020 candidate Sen. Elizabeth Warren (D-MA) proposed. He said it’s “probably unconstitutional” and compared the idea to socialism, saying it’s similar to policies in Venezuela.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'Before he got into the race, he announced a campaign called Beyond Carbon. He’s investing $500 million of his own money to help the US achieve a 100% clean energy economy. Some of Beyond Carbon’s goals: get all coal power plants closed by 2030 and helps get candidates who are “climate champions” elected to local offices.',
                },
                {
                    topic: 'GUNS',
                    text: 'A top issue for Bloomberg. He’s the primary funder of Everytown for Gun Safety, an advocacy group working to end gun violence. He supports universal background checks and an assault weapons ban. But he’s not a fan of mandatory buyback programs, which he thinks are impossible to enforce.',
                },
            ],
        },
        { name: 'Pete Buttigieg', 
            party: 'D',
            video: 'https://www.youtube.com/embed/f4nxBKdNO6o',
            points: [
                { text: 'RESUME: Former mayor of South Bend, Ind.; military veteran' },
                { text: 'Youngest candidate in the presidential field (38), says he would be a bridge to a new era of American politics.' },
                { text: 'Was the first candidate to push the idea of increasing the number of seats on the Supreme Court.' },
                { text: 'Has proven to be one of the most formidable fund-raisers in the race, collecting more money in the campaign’s second quarter than anyone else.' },
                { text: 'SIGNATURE ISSUES: Has stressed his generational identity and focused on issues like climate change and economic opportunity.' }
            ],
            photo: 'https://s.abcnews.com/images/Politics/pete-buttigieg-ap-jef-190610_hpEmbed_8x5_992.jpg', 
            description:'Pete Buttigieg (it’s boot-edge-edge) knows his name is hard to pronounce. He’s running for president in 2020 anyway. He’s the millennial, Harvard grad, Rhodes Scholar, veteran of Afghanistan, and former mayor of South Bend, Indiana who’s got a ‘DC or bust’ sticker on the back of his car.',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'He says the government shouldn’t interfere in a woman’s right to choose. And that as president, he would make sure any Supreme Court appointments respect that. He also wouldn’t pursue policies against Planned Parenthood.',
                },
                {
                    topic: 'EDUCATION',
                    text: 'He has some plans concerning the student debt problem. He feels you – Buttigieg and his husband Chasten have six-figure debt from Chasten going to grad school. He has a few ideas including, expand access to Pell Grants, a federal program that helps low-income students pay for college, make it easier to refinance high-interest loans, and create more debt forgiveness programs.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'He\'d go all in on a carbon tax, “quadrupling” (yes, really) the budget for renewable energy R&D, and re-committing the US to the Paris climate deal.',
                },
                {
                    topic: 'GUNS',
                    text: 'Yes to universal background checks. And making it harder for domestic abusers to get a firearm.',
                },
            ],
            abortion: 'He says the government shouldn’t interfere in a woman’s right to choose. And that as president, he would make sure any Supreme Court appointments respect that. He also wouldn’t pursue policies against Planned Parenthood.',
            education: 'He has some plans concerning the student debt problem. He feels you – Buttigieg and his husband Chasten have six-figure debt from Chasten going to grad school. He has a few ideas including, expand access to Pell Grants, a federal program that helps low-income students pay for college, make it easier to refinance high-interest loans, and create more debt forgiveness programs.',
            immigration: '',
            criminal_justice: '',
            health_care: '',
            economy: '',
            climage_change: 'He\'d go all in on a carbon tax, “quadrupling” (yes, really) the budget for renewable energy R&D, and re-committing the US to the Paris climate deal.',
            guns: 'Yes to universal background checks. And making it harder for domestic abusers to get a firearm.',
        },
        { name: 'Tulsi Gabbard', 
            party: 'D',
            points: [
                { text: 'RESUME: Congresswoman from Hawaii; Army National Guard veteran' },
                { text: 'Supported Bernie Sanders in the 2016 primaries.' },
                { text: 'Has drawn condemnation for meeting with Syria’s president, Bashar al-Assad, whose regime has been accused of using chemical weapons against civilians.' },
                { text: 'Has apologized for her history of anti-gay statements and her past work for an anti-gay advocacy group.' },
                { text: 'SIGNATURE ISSUE: Opposition to American military intervention overseas, including in countries like Syria.' },
            ],
            video: 'https://www.youtube.com/embed/kiyVSdZ9Tw8',
            photo: 'https://cdn.cnn.com/cnnnext/dam/assets/190111181535-tulsi-gabbard-announces-2020-run-van-jones-vpx-00002617-super-169.jpg', 
            description:'Gabbard was the first American Samoan and first Hindu member elected to the House of Representatives, where she’s been since 2013. Before that she was in the Army National Guard, and deployed twice to the Middle East. At 38, she’s one of the youngest candidates in the race.',
            opinions: [
                {
                    topic: 'EDUCATION',
                    text: 'Community college should cost the low low price of...nothing. Same for public universities for families that make $125k a year or less.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'She gives Medicare for All a thumbs up. Early in her career, she was anti-abortion. She’s now pro-choice and called the restrictive Alabama abortion ban “extremely dangerous.” She says it would take away women’s liberty.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'She intro’d a plan in Congress that would do a few things. Including transition the US to 100% renewable energy by 2035. Still unclear what her plan would look like as president.',
                },
                {
                    topic: 'GUNS',
                    text: 'Her take: let’s ban assault weapons already and get universal background checks in place.',
                },
                {
                    topic: 'NATIONAL SECURITY',
                    text: 'Her favorite talking point. Gabbard is known for sounding off against foreign military intervention. And says that if the US was less tangled up abroad, the country would have more resources (read: money) to put toward domestic issues like health care and education. As president, she’d jump back into the Iran nuclear deal, and cool it on the drama with nuclear-armed countries (see: North Korea, Russia, China). Because make love, not war you know?',
                },
            ],
        },
        { name: 'Amy Klobuchar', 
            party: 'D',
            points: [
                { text: 'RESUME: Senator from Minnesota; former Hennepin County, Minn., attorney' },
                { text: 'Became a hero to many Democrats for her stern, cool questioning of Brett M. Kavanaugh during his confirmation hearings.' },
                { text: 'Has called for Democrats to focus on reclaiming the swing states in the middle of the country, pitching herself as a pragmatist who can win there.' },
                { text: 'SIGNATURE ISSUES: Has championed legislation to combat the opioid crisis and drug addiction, and to address the cost of prescription drugs.' },
            ],
            video: 'https://www.youtube.com/embed/gp4MvVoXOEo',
            photo: 'https://bloximages.newyork1.vip.townnews.com/unionleader.com/content/tncms/assets/v3/editorial/3/63/3631b449-7880-5449-9659-99b4e036f1d3/5e2cfb1269034.image.jpg?resize=1200%2C824', 
            description:'Minnesota’s first female senator wants to become the US’s first female president. Say hello to Sen. Amy Klobuchar (D-MN). Psst...her last name is pronounced KLOH-buh-shar.',
            opinions: [
                {
                    topic: 'EDUCATION',
                    text: 'She thinks free college tuition and erasing all student debt is unrealistic. But she’s here for free tuition for two-year community colleges, expanding Pell Grants (federal aid for low-income college students), and letting students refinance their loans at lower interest rates.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'She’s not ready to embrace Medicare for All, but she wants to move towards universal health care that allows people to opt into government-run plans. She also wants to expand Medicare to include anyone that’s 55 and older (as opposed to 65 and older).',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'She’s saying yes to the Green New Deal as an “aspirational” starting point for addressing climate change. She also wants the US to rejoin the Paris climate deal – which set standards for pretty much the entire world to lower carbon emissions.',
                },
                {
                    topic: 'GUNS',
                    text: 'She supports things like universal background checks, and a ban on assault weapons. But she also wants to make sure people who use guns for hunting wouldn’t be hurt by these measures.',
                },
            ],
        },
        { name: 'Deval Patrick', 
            party: 'D',
            points: [
                { text: 'RESUME: Former governor of Massachusetts' },
                { text: 'Dropped out the day after receiving less than 1 percent of the vote in the New Hampshire primary. He entered a crowded field late in the game and failed to catch on.' },
            ],
            video: 'https://www.youtube.com/embed/DwLEA0uwHl0',
            photo: 'https://images.wsj.net/im-127802?width=620&size=1.5', 
            description:'Deval Patrick’s motto: better late than never. In 2006, he was elected as Massachusetts’ first black governor – and served for eight years. After he left office, he worked at private equity firm Bain Capital as a managing director.',
            opinions: [
                {
                    topic: 'EDUCATION',
                    text: 'He says this is the public’s “single best investment.” And is in favor of universal pre-K and free community college.',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'He allowed undocumented immigrants in Massachusetts to qualify for in-state college tuition, and proposed letting hundreds of undocumented immigrants stay in MA during the 2014 migrant influx in the US. He hasn’t announced immigration policies as a presidential candidate, but is calling for a system that “provides for both border integrity and human dignity.”',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He supports high-quality, low-cost services, though he hasn’t given specifics on if or how he plans to implement that as president. Patrick’s called Medicare for All a “terrific idea” – but only if it’s rolled out with private options.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'Patrick helped make Massachusetts a “a leader” on this issue. During his two terms as governor, he implemented laws to lower carbon emissions and focused on upping the number of clean energy jobs.',
                },
                {
                    topic: 'GUNS',
                    text: 'He’s said he supports a national ban on assault weapons. As governor, he signed a bill that overhauled the state’s gun laws. It added Massachusetts to a federal background check database, enforced stricter rules around carrying and transporting firearms, and gave police chiefs more power to block people from obtaining gun licenses if they seem dangerous.',
                },
            ],
        },
        { name: 'Bernie Sanders',
            party: 'D', 
            points: [
                { text: 'RESUME: Senator from Vermont; former congressman' },
                { text: 'A self-described democratic socialist, has brought progressive proposals like Medicare for All and tuition-free public college to the forefront of the race.' },
                { text: 'Was the runner-up in the 2016 Democratic primary.' },
                { text: 'SIGNATURE ISSUES: “Medicare for all,” free college tuition and curtailing the influence of “the billionaires.”' },
            ],
            video: 'https://www.youtube.com/embed/BZ5TW07ff2o',
            photo: 'https://cdn.geekwire.com/wp-content/uploads/2019/10/bernie-sanders-e1571091688686-630x511.jpg', 
            description: 'Sanders has been in the political game for decades. He ran his first campaign for a Vermont Senate seat in the ‘70s. He lost. But eventually went on to serve as mayor of Burlington, VT before heading to the US House, then becoming a US senator in 2007. He’s the longest serving independent member of Congress.',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'He says his Medicare for All plan will cover reproductive health care, including abortions. Although he has voted in favor of the Hyde Amendment in the past, he now says he would get rid of it. The amendment limits federal funding for abortions.',
                },
                {
                    topic: 'EDUCATION',
                    text: 'Part of his 2016 run was a proposal to make four-year public college tuition-free and lower student loan interest rates. He hasn’t changed his mind.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'Medicare for All is his baby. As in a government-run health insurance program available to all Americans. He’s been talking about it since his 2016 run. This time around, he unveiled a new plan that goes even further by pretty much getting rid of private health insurance. Critics say this will cost way too much.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'For years he’s pushed the message that the economy is “rigged” in favor of Wall Street and the rich. To combat this, Sanders wants to do things like enact a $15/hr minimum wage (although he’s reportedly had issues implementing this even with his campaign staff) and increase tax rates on the wealthy. He also thinks employees should have more ownership stake in the companies they work for. Also, he doesn’t think billionaires “should exist.” He proposes a wealth tax on Americans worth more than $32 million – and wants to use the money to fund his housing plan, universal child care, and to help fund Medicare for All.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'He’s telling the other Dems, ‘I see your climate change plans and raise you all of the money.’ At $16.3 trillion, his is the most expensive plan in the game, with other plans ranging between $1 and $10 trillion. Here’s what Sanders says you’d get for it: 100% sustainable electricity and transportation by 2030 and a carbon-neutral economy by 2050. His plan also promises 20 million new jobs plus assistance for farmers and former fossil fuel workers adjusting to a new economy. Sanders says he’d pay for his plan in large part by taxing and suing fossil fuel companies for trillions of dollars. How? Unclear. Would it stop climate change? Probably not. Could it mitigate some of the worst effects? Possibly – especially if other major greenhouse gas emitters pull similar moves. Sanders says averting the worst effects of climate change could save the US tens of trillions of dollars over decades.',
                },
                {
                    topic: 'GUNS',
                    text: 'He has a complicated history. In the past, he’s taken positions in line with the NRA. Including voting against legislation to establish a national background check system. Now he’s turned it around and says he wants to expand background checks and ban assault weapons',
                },
            ],
        },
        { name: 'Tom Steyer', 
            party: 'D',
            points: [
                { text: 'RESUME: Billionaire former hedge fund executive; climate change and impeachment activist' },
                { text: 'Reversed a previous decision not to enter the race.' },
                { text: 'Started out as an environmental activist before airing millions of dollars in television ads demanding Mr. Trump\'s impeachment.' },
                { text: 'Has flirted repeatedly with running for statewide office in California.' },
                { text: 'SIGNATURE ISSUES: Fighting climate change, promoting renewable energy and impeaching Mr. Trump.' },
            ],
            video: 'https://www.youtube.com/embed/iKRm0N5UG6g',
            photo: 'https://www.biography.com/.image/t_share/MTY4NDE5NzUwODczOTMzNzcw/tom-steyer-gettyimages-457384240-cropped.jpg', 
            description:'Thanks to the hedge fund that he launched back in 1986, his net worth is reportedly $1.6 billion. He’s been a Democratic Party donor for years. One thing he’s super passionate about: impeaching President Trump.',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'He wants to protect a woman’s right to choose.',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'Last year, Steyer reportedly promised to invest $1 million to legal aid groups that have helped immigrants facing deportation. He believes they deserve “expanded and strengthened” legal services while DC figures out how to handle the influx of migrants at the border.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He thinks there should be a public option but doesn’t want to completely do away with private health insurance. He’s also criticized pharma companies for allegedly helping fuel the opioid crisis, and has supported a bill in California that would force drug makers to notify customers when drug prices increase.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'He’s in favor of raising the minimum wage, saying that a living wage is one of the “5 Rights” all Americans should have – along with the right to an equal vote, clean air and water, health, and to learn.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'He started NextGen America – a political action committee and advocacy group focused on fighting climate change. So you know he’s got big plans for this issue if he becomes president. And it would all start on day one, when he’d declare climate change a national emergency. Some of his main ideas to tackle climate change: implement a Civilian Climate Corps (think: an environmental version of the Peace Corps), and force companies to disclose their investments in fossil fuels.',
                },
            ],
        },                
        { name: 'Elizabeth Warren', 
            party: 'D',
            points: [
                { text: 'RESUME: Senator from Massachusetts; former Harvard professor' },
                { text: 'Speaks frequently about the need for “big, structural change.”' },
                { text: 'Has released a wide range of detailed plans that together have the potential to reshape the economy.' },
                { text: '“I have a plan for that” has become her rallying cry and a T-shirt slogan.' },
                { text: 'SIGNATURE ISSUES: Income inequality and what she sees as a middle class under attack from big corporations and political corruption.' },
            ],
            video: 'https://www.youtube.com/embed/mwZ8MolWX14',
            photo: 'https://pbs.twimg.com/profile_images/1215406626049413121/LiVKh64l_400x400.jpg', 
            description:'Senator since 2013, former Harvard law professor who laid the groundwork for what became the Consumer Financial Protection Bureau. She has a reputation for putting a lot of pressure on the financial industry for the way it does business. ',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'She supports abortion rights. And wants Congress to pass federal laws that protect women’s access to reproductive care (like birth control and abortions).',
                },
                {
                    topic: 'EDUCATION',
                    text: 'She wants free (read: taxpayer-funded) public college for everyone. She’s pitching the cancellation of up to $50,000 in student loan debt for American families who make less than $100,000 a year. She wants universal child care from birth to school age – free to families that make less than 200% of the federal poverty line and what she describes as affordable for everyone else. (She has a handy calculator for you to figure out how much it would cost you.)',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'She also has a plan for that. It includes getting rid of criminal penalties for illegal border crossings, instead making it a civil offense; banning for-profit detention centers; raising the refugee cap (which the Trump admin lowered) to 125,000 refugees in her first year in office; and establishing a Justice Dept task force to investigate alleged mistreatment of migrants by the Trump admin.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'Within her first 100 days in office, she’ll offer a public health insurance option. It would be free for children and lower-income families. People outside those categories can pay to opt in. Eventually, she would phase out private insurance and make national health insurance free for everyone. The phrase you’ll be hearing her say over and over again? ‘Not one penny.’ That’s how little the middle class will be taxed for her healthcare plan. To fund her $20.5 trillion idea, she’s calling for employer contributions and a tax increase on wealthy Americans. Warren also plans to reduce drug costs, undo Trump admin’s policies (like ending the Medicaid work requirements) and address the maternal mortality crisis.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'She wants to invest in housing to bring down rents by 10% while also creating 1.5 million new jobs and start closing the racial wealth gap. Ambitious. She also has what she calls her ultra-millionaire tax: it will target the richest 0.1% of Americans to raise nearly $3 trillion that can be used to “rebuild the middle class.” She’s also proposing to break up Google, Facebook and Amazon, and to ban companies with over $25 billion in revenue “to act as operators and users of a platform.” She also wants to have regulators review already-closed mergers – like the Bayer-Monsanto merger. Oh, and she wants to give workers a boost by doing things like expanding the right to unionize and upping the federal minimum wage to $15 an hour.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'She’s embraced a climate change plan to eliminate greenhouse emissions from power plants, cars, and buildings over 10 years. The plan would cost $3 trillion, and Warren says it would be fully paid for by reversing tax cuts passed in 2017. Warren also endorses the Green New Deal. Part of her plan includes investing $2 trillion in research and manufacturing of clean energy technology to fight climate change while boosting the economy and creating jobs.',
                },
                {
                    topic: 'GUNS',
                    text: 'She has a plan that she hopes will reduce gun deaths by 80%. That includes requiring background checks at gun shows, banning assault weapons, and establishing a one-week waiting period for all gun purchases. She also wants to investigate the NRA for corruption. And has joined other lawmakers in calling for a redo of a federal investigation into the danger guns pose for children and schools.',
                },
            ],
        },
        { name: 'Andrew Yang', 
            party: 'D',
            points: [
                { text: 'RESUME: Former tech executive who founded an economic development nonprofit' },
                { text: 'Ended his presidential bid at a primary-night party in New Hampshire after a yearslong campaign that endured even as those of members of Congress and governors fell away. He had failed to win any pledged delegates in Iowa.' },
            ],
            video: 'https://www.youtube.com/embed/kZDuIV5WaEc',
            photo: 'https://spotlightonpoverty.org/wp-content/uploads/2019/04/yang.jpg', 
            description:'Andrew Yang is running for president because he’s afraid for the future of the country, saying new tech has “destroyed more than 4 million US jobs.” He’s a former tech executive and author. He worked briefly as a corporate lawyer and later started the nonprofit Venture for America.',
            opinions: [
                {
                    topic: 'EDUCATION',
                    text: 'He supports universal pre-K and wants to forgive student loan debt. He wants free (or nearly-free) community college and measures that’ll push colleges to lower tuition. He also wants to promote life-skills education (think: financial literacy and time management) in high school.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He supports Medicare for All and wants to begin a national anti-stigma campaign for mental health issues called “Everybody Needs Help Sometimes.” He also wants to encourage health care systems to make mental health part of primary care. He supports a woman’s right to an abortion in all instances and plans to appoint judges who support that.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'Repeat after Yang: Universal. Basic. Income. This is his signature policy. His goal is to give $1,000 a month to every American adult. No conditions. He’d fund this by consolidating some welfare programs and implementing a 10% value-added tax (a tax on the production of goods as they goes through the supply chain). Why? To fight the fact that technology is displacing a lot of workers, and help millions of Americans living below the poverty line. He’s rebranded the concept as the Freedom Dividend, a phrase he says tests better with conservatives. Because, politics.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'He supports the Green New Deal and wants to invest in tech designed to fix the damage already done to the environment. For example: placing mirrors in space to reflect the sun’s radiation away from Earth. He also wants to end current tax benefits for fossil fuel companies.',
                },
                {
                    topic: 'GUNS',
                    text: 'He wants a tiered licensing system that would have increasingly stricter requirements in order to own and operate different types of firearms. All gun owners would have to pass a federal background check. And anyone with a history of violence, domestic abuse, or violent mental illness wouldn’t be able to get a license. He would implement a federal buyback program for anyone who wants to give up their firearms.',
                },
            ],
        },
        { name: 'Donald Trump', 
            party: 'R',
            points: [
                { text: 'RESUME: U.S. president; real estate developer; reality television star' },
                { text: 'Main legislative accomplishment as president: a sweeping tax cut that chiefly benefited corporations and wealthy investors.' },
                { text: 'Has focused on undoing the policies of the Obama administration, including on health care, environmental regulation and immigration.' },
                { text: 'Faces multiple serious legal investigations, though the recent report by Robert S. Mueller III, the special counsel, found no evidence he coordinated with Russia’s 2016 election interference.' },
                { text: 'SIGNATURE ISSUES: Restricting immigration and building a wall at the Mexican border; renegotiating or canceling international deals on trade, arms control and climate change; withdrawing American troops from overseas.' },
            ],
            video: 'https://www.youtube.com/embed/aIrtAASuMbQ',
            photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/president-donald-trump-delivers-remarks-during-the-medal-of-news-photo-1572627992.jpg?crop=0.668xw:1.00xh;0,0&resize=480:*', 
            description: 'He’s been trying to Keep America Great since 2017. Before getting into politics, he was chairman and president of the Trump Organization starting in 1971, and became a real estate mogul (see: his Trump Towers around the world).',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'He’s against abortions except in three instances: rape, incest, and if the mother’s life is at risk. And his administration implemented rules that would make it easier for healthcare workers to refuse to perform abortions and other services if they violate their religious or moral beliefs.',
                },
                {
                    topic: 'EDUCATION',
                    text: 'He’s in favor of school vouchers, which give students public funds to go to non-public schools (think: private or charter). He also wants to fix the student loan crisis by doing two things. One: capping the amount of student loan debt students and parents can take on. Two: reducing the number of repayment plans available to them.',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'He still hasn’t gotten his wall, but he’s still trying to get more funding for border security, which would go to things like aid for unaccompanied minors. He’s also tried to end asylum protections for most migrants who arrive at the US-Mexico border.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He’s planning to roll out big plans for it soon. For now, he’s promising to protect people with pre-existing conditions. He’s also proposed lowering funding for Medicaid and Medicare. And don’t ask him how he feels about the Affordable Care Act.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'One thing he’s especially proud of is the Republican tax plan, which was the biggest tax rewrite in decades. And during his first term, the unemployment rate has dropped to a 50-year low. He’s also made moves that he says will help keep US jobs at home (see: steel and aluminum tariffs, ditching the Trans-Pacific Partnership). Expect this to be another big talking point on the campaign trail.',
                },
            ],
        },
        { name: 'Joe Walsh',
            party: 'R', 
            points: [
                { text: 'RESUME: Conservative radio show host; former congressman from Illinois' },
                { text: 'Ended his campaign for the Republican nomination in February 2020 after getting less than 1% in the Iowa caucuses.' },
            ],
            video: 'https://www.youtube.com/embed/obmudffzvvk',
            photo: 'data:image/jpeg;base64,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', 
            description:'Conservative talk show radio host and former Republican congressman from Illinois, who ran as a candidate of the Republican Party’s fiscally conservative Tea Party movement in 2010. He only served one term because he lost his 2012 re-election bid.',
            opinions: [
                {
                    topic: 'EDUCATION',
                    text: 'One thing you can be sure of: he isn’t in favor of free college for all.',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'Like Trump, Walsh wants to crack down on illegal border crossings. And tweeted that he’s in favor of building a US-Mexico border wall. He has also described undocumented immigrants as criminals. Unlike the Trump admin, he said he wouldn’t have separated families who crossed the border illegally in order to prosecute all adults. He says he would devote more resources to processing asylum claims, which he says the US has a “responsibility to hear.”',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He has made it clear that he’s against government-run health care. And rejected claims from the left that health care is a human right.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'Walsh rode the Tea Party wave when he got elected to Congress in 2010, railing against Obama and what he saw as executive overreach. He says he wants to address Trump’s “reckless” fiscal policies, high taxes, and the country’s increasing debt and deficit. He has issued warning bells about the deficit growing $100 billion a year under the Trump admin. And claims that Trump is “tweeting this country into recession.” He has also called Trump’s trade war with China “narcissistic” but has not said how he would handle trade differently.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'Walsh has downplayed the threats from climate change. In 2015, he tweeted “lol climate change...or global warming...or whatever they\'re calling it now.” He’s also rejected claims that climate change constitutes a national emergency and praised a rollback of climate change research funding. Since announcing his presidential bid, he gave an interview saying the Republican Party needs to do more to confront climate change.',
                },
                {
                    topic: 'GUNS',
                    text: 'He’s all for gun rights. In 2018, he tweeted that he has “a right to use an AR-15” to defend his family and home.',
                },
            ],
        },
        { name: 'Bill Weld', 
            party: 'R',
            points: [
                { text: 'RESUME: Former governor of Massachusetts; former federal prosecutor' },
                { text: 'Ran for vice president on the Libertarian Party ticket in 2016.' },
                { text: 'Is exploring a primary challenge to Mr. Trump, presenting himself as a voice for alienated moderates and mainstream conservatives.' },
                { text: 'Emerged as a vocal critic of Mr. Trump during the 2016 election, saying his call to deport immigrants evoked Kristallnacht.' },
                { text: 'SIGNATURE ISSUES: Favors fiscal restraint, free trade and moderate immigration reform; has endorsed steps to legalize marijuana.' },
            ],
            video: 'https://www.youtube.com/embed/wbQzEXzsygA',
            photo: 'https://s.abcnews.com/images/ThisWeek/190217_tw_weld_936_hpMain_16x9_992.jpg', 
            description:'Massachusetts governor from 1991 to 1997, 2016 Libertarian VP nominee alongside former New Mexico Governor Gary Johnson for president. He’s pitching himself as the anti-Trump Republican.',
            opinions: [
                {
                    topic: 'ABORTION',
                    text: 'He’s pro-choice and wants to expand legal access to abortion. As governor in the ‘90s, he intro’d a bill to make abortion more accessible in Massachusetts.',
                },
                {
                    topic: 'EDUCATION',
                    text: 'As governor in the ‘90s, he signed legislation to improve school standards. He’s also cited a Stanford study to point to the success of his charter school programs there. As president, he’d eliminate the Education Department as part of his goal to reduce government size. And reportedly replace it with more local oversight. He wants to make community college tuition-free for people who lose their jobs to things like automation. And to allow students to refinance their college loans.',
                },
                {
                    topic: 'IMMIGRATION',
                    text: 'He’s compared Trump\'s proposals for mass deportations of undocumented immigrants to the practices of Nazi Germany. He supports some form of legal status for undocumented immigrants.',
                },
                {
                    topic: 'HEALTH CARE',
                    text: 'He’s all about whatever makes health care both cheaper, more accessible, and higher quality. He has said that there’s “too much government” involved in the Affordable Care Act. But he supports expanding Medicaid access and wants people to be able to buy health insurance across state lines to help bring costs down.',
                },
                {
                    topic: 'ECONOMY',
                    text: 'he opposes Trump’s tariffs, wants to cut the deficit, and to cut taxes. Budgets are his love language. He was named the most fiscally conservative governor in the country at the time and if elected, he says he’ll prioritize cutting government spending. When Weld stopped by Skimm HQ, we asked him for his best budgeting tip. Answer? Always balance your checkbook. Yes, he still uses a checkbook.',
                },
                {
                    topic: 'CLIMATE CHANGE',
                    text: 'He sees it as a major issue and supports rejoining the Paris climate deal.',
                },
                {
                    topic: 'GUNS',
                    text: 'he’s apparently not a fan of President Trump’s idea to arm teachers with guns. He thinks legally-acquired rifles in the hands of private citizens are "a bulwark against government oppression." But he thinks there should be red flag laws to keep guns out of the hands of people with mental illness. He also want waiting periods when it comes to gun purchases, and to ban handgun sales to people under 21.',
                },
            ],
        },
      ],
      page: "home",
      issues: [
          {
              id: "economy",
              name: "Economy",
              info: [
                  {
                      text: "Info taken from theskimm.com.",
                  },
                  {
                      text: 'The US economy is currently in its longest expansion...ever.'
                  },
                  {
                      text: 'Unemployment is at a record low, there’s been steady GDP growth, and the stock market hit a number of record highs last year.'
                  },
                  {
                      text: 'But the economy has been slowing down. That’s because of things like the US-China trade war, which has hurt industries like farming and manufacturing.'
                  },
                  {
                      text: 'And recession alarm bells have died down a bit, especially since trade tensions around the world (see: the US-China trade war, the new NAFTA deal) have cooled off.'
                  },
                  {
                    text: 'In 2018, the gap between the US’s wealthiest and poorest families hit a 50-year high. Some of the reasons: a decline in labor unions, the federal minimum wage staying stagnant at $7.25, and tax policies that favor wealthier families.'
                },
                {
                    text: 'Back in 2017, Republicans overhauled the country’s tax code for the first time in decades. It included tax cuts in every income bracket and for big corporations. The cuts contributed to the US deficit reaching nearly $1 trillion in 2019. Candidates from both parties have criticized the Trump admin for allowing that number to get so high.'
                },
              ],
              opinions: [
                {
                    name: 'Joe Biden',
                    text: 'He wants to raise minimum wage to $15/hr and reverse parts of the 2017 tax law, giving tax credits to lower income families.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He wants to Raise minimum wage to $15/hr and raise taxes on "wealthy people like him" (but he is against the wealth tax proposed by Sen. Elizabeth Warren).'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He wants to raise minimum wage to $15/hr, expand the Earned Income Tax Credit, and expand job training programs.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She wants to raise minimum wage to $15/hr by 2024, then tie it to median wage growth.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She wants to focus on "heartland economics": make it a priority to help rural workers and the agriculture industry. She also wants to raise minimum wage to $15/hr and add tax credits to help retrain workers that lose jobs to automation.'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'He wants to raise minimum wage to $15/hr, up income tax rates on the wealthy. Says economy is “rigged” in favor of Wall Street and the rich, doesn’t think billionaires “should exist”'
                },
                {
                    name: 'Tom Steyer',
                    text: 'He wants to raise minimum wage to $15/hr. Calls a living wage one of the “5 Rights” all Americans should have.'
                },
                {
                    name: 'Donald Trump',
                    text: 'What he has done so far: 2017 tax bill reduced corporate taxes, unemployment rate has reached 50-year low while he\'s been in office, and he has reached new trade deal with Canada and Mexico.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She wants to raise minimum wage to $15/hr. She has also proposed an ultra-millionaire tax for richest 0.1% of Americans: raise nearly $3 trillion that can be used to “rebuild the middle class”. She would break up Google, Facebook and Amazon, says they have too much power and harm small businesses.'
                },
                {
                    name: 'Bill Weld',
                    text: 'He doesn\'t support Trump’s tariffs. Instead he wants to cut the deficit and taxes, and prioritize cutting gov spending'
                },
              ],
              picture: require("../assets/money.jpg")
          },
          {
            id: "abortion",
            name: "Abortion",
            picture: require("../assets/pregnancy_test.jpg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
                {
                    text: "In 1973, the US Supreme Court ruled in Roe v. Wade that a woman’s right to privacy encompasses the right to abortions. But SCOTUS left room for some state regulation, like on how late into a pregnancy women can have an abortion.",
                },
                {
                    text: "Americans have strong opinions about when abortions should be allowed, if ever.",
                },
                {
                    text: " Those who are pro-abortion rights point out that Roe v. Wade is the law of the land. And that women have the right to safe, legal abortions. They note that when states restrict abortions, women from poorer, rural communities tend to be affected – while wealthier women are able to afford travel to other states.",
                },
                {
                    text: "Those who are anti-abortion rights think the arguments behind Roe v. Wade were a stretch, because the right to privacy isn’t explicitly mentioned anywhere in the Constitution.",
                },
                {
                    text: "President Trump has supported abortion rights in the past, but said on the 2016 campaign trail that he would appoint Supreme Court justices who'd overturn Roe v. Wade.",
                },
                {
                    text: "A solidly conservative majority could overturn Roe v. Wade.",
                },
            ],
            opinions: [
                {
                    name: 'Joe Biden',
                    text: 'Mixed record on abortion: in the \'80s, he voted for bill that would’ve let states override Roe v. Wade – now he says he’d defend Roe v. Wade.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'As mayor, promoted a policy requiring doctors in city hospitals to be trained in abortion practices. He has donated millions to women\'s health orgs.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He says the government shouldn’t interfere with a woman’s right to choose, would make sure any Supreme Court appointments respect that. Wouldn’t pursue policies against Planned Parenthood.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She is pro-abortion rights, though has been opposed to abortion in the past.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She wants to codify Roe v. Wade – aka get Congress to pass legislation protecting abortion rights. She would appoint judges who support Roe v. Wade.'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'He wants to codify Roe v. Wade and would appoint judges who support Roe v. Wade.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'He was Would protect a woman\'s right to choose.'
                },
                {
                    name: 'Donald Trump',
                    text: 'During his \'16 campaign, said he\'d appoint Supreme Court justices who\'d overturn Roe v. Wade. He is against abortions except in three instances: rape, incest, and if the mother’s life is at risk.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She is pro-abortion rights and wants Congress to pass federal laws that protect women’s access to reproductive care (like birth control and abortions). She would codify Roe v. Wade and Appoint judges who respect Roe v. Wade.'
                },
                {
                    name: 'Bill Weld',
                    text: 'He is Pro-abortion rights and wants to expand legal access to abortion.'
                },
            ]
        },
        {
            id: "climate",
            name: "Climate Change",
            picture: require("../assets/sun.jpeg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
                {
                    text: "The US is one of the largest contributors to the carbon emissions that are fueling climate change.",
                },
                {
                    text: "The United Nations has issued multiple reports warning about the potential “catastrophic” effects of climate change if countries don’t do more to keep Earth’s temp from rising.",
                },
                {
                    text: "The Trump administration has taken many steps to roll back Obama-era climate policies, like loosening regulations for carbon emissions and pulling the US out of the Paris climate deal. Meanwhile, the Dem candidates pretty much all agree that climate change is a dire problem that needs to be addressed stat.",
                },
            ],
            opinions: [
                {
                    name: 'Joe Biden',
                    text: 'He has been saying \'mayday\' since the 1980s, and sees climate change as security threat. He would work toward net-zero greenhouse gas emissions by 2050.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He is investing $500 million of his own money to help the US achieve a 100% clean energy economy. Before the race, he announced campaign to close all US coal power plants by 2030, get “climate champions” elected to local offices.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He would rejoin Paris climate deal and establish a carbon tax. He would also up the budget for renewable energy research and development.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She has a plan to help the US achieve 100% renewable energy by 2035.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She sees Green New Deal – a plan to achieve net-zero greenhouse gas emissions, create jobs in clean energy, and move the US to 100% renewable energy sources by 2050 – as "aspirational".'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'He has the most expensive plan: it would cost $16.3 trillion. That money would go toward: 100% sustainable electricity and transportation by 2030, carbon-neutral economy by 2050, and 20 million new jobs.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'Started super PAC to fight climate change, among other things. He\'d declare climate change a national emergency and wants to start a Peace Corps, but for the environment.'
                },
                {
                    name: 'Donald Trump',
                    text: 'Started the process of pulling the US out of the Paris climate deal, which will be completed by Nov 2020. He also worked to weaken Obama-era environmental rules.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She has a $3 trillion plan to Eliminate greenhouse emissions from power plants, cars, and buildings in 10 years. She supports Green New Deal.'
                },
                {
                    name: 'Bill Weld',
                    text: 'He would rejoin Paris climate deal.'
                },
            ]
        },
        {
            id: "education",
            name: "Education",
            picture: require("../assets/school.jpg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
                {
                    text: "In the past few decades, the cost of college has gone up, up, annnd up, contributing to the nation’s $1.5 trillion student debt problem.",
                },
                {
                    text: "Meanwhile, a wave of teacher strikes that started in 2018 brought attention to low teacher salaries.",
                },
                {
                    text: "Candidates also have strong feelings about school choice, aka allowing families to choose to send their kids to charter or even private schools with the help of taxpayer dollars.",
                },
                {
                    text: "Other issues you’ll hear about on the campaign trail: whether the government should fund a national pre-kindergarten program (sometimes referred to as universal pre-k).",
                },
            ],
            opinions: [
                {
                    name: 'Joe Biden',
                    text: 'He wants to grant two years of free community college or job training, universal pre-k for three and four-year-olds, increase funding for schools with a high percentage of students from low-income families, and up teachers\' paychecks, give them more student loan forgiveness.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He supported charter schools as NYC mayor. Once he donated $1.8 billion to his alma mater to support financial aid for students – the largest ever individual donation to a university.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He wants to expand access to Pell Grants, make it easier to refinance student loans, and add more debt forgiveness programs.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She suggests free community college and free public universities for families making up to $125k/yr.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She thinks free college tuition and erasing student debt is unrealistic. She suggests all for free tuition for two-year community colleges and letting students refinance loans at lower interest rates.'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'He wants tuition-free four-year public college and lower student loan interest rates.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'He wants to let students refinance loans and expand student loan forgiveness for public servants.'
                },
                {
                    name: 'Donald Trump',
                    text: 'He supports school vouchers (giving students public funds to go to private or charter schools). He also proposed a cap to the amount of federal student loans graduate students and parents can take on.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She wants rree public college for everyone. Has a plan to cancel up to $50,000 in student loan debt for families making less than $100k/yr. She also suggests universal child care from birth to school age – free for families 200% above federal poverty line, affordable for everyone else.'
                },
                {
                    name: 'Bill Weld',
                    text: 'He wants to eliminate Dept of Education to reportedly give more control to local govs. He wants to make community college tuition-free for people who lose their jobs to automation.'
                },
            ]
        },
        {
            id: "guns",
            name: "Guns",
            picture: require("../assets/gun.jpg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
            ],
            opinions: [
                {
                    name: '',
                    text: ''
                },
            ]
        },
        {
            id: "health",
            name: "Health Care",
            picture: require("../assets/health.jpg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
            ],
            opinions: [
                {
                    name: '',
                    text: ''
                },
            ]
        },
        {
            id: "immigration",
            name: "Immigration",
            picture: require("../assets/statue.jpg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
            ],
            opinions: [
                {
                    name: '',
                    text: ''
                },
            ]
        },
        {
            id: "security",
            name: "National Security",
            picture: require("../assets/security.jpg"),
            info: [
                {
                    text: "Info taken from theskimm.com.",
                },
            ],
            opinions: [
                {
                    name: '',
                    text: ''
                },
            ]
        },
          
      ]
  },
  getters: {
    getCandidateByName: (state) => (name) => {
        return state.candidates.find(candidate => candidate.name == name)
    },
    getCandidatesByParty: (state) => (party) => {
        return state.candidates.filter(candidate => candidate.party == party)
    },
    getPage: (state) => () => {
        return state.page;
    },
    getIssueByName: (state) => (id) => {
        return state.issues.find(issue => issue.id == id)
    },
    getMainCandidates: (state) => () => {
        return state.candidates.filter((person) => {
            return person.name === "Bernie Sanders" || person.name === "Donald Trump" || person.name === "Elizabeth Warren" || person.name === "Joe Biden" || person.name === "Pete Buttigieg";
        }) 
    }
  },
  mutations: {
    SET_PAGE: (state, newValue) => {
        state.page = newValue
      },
  },
  actions: {
    setPage: ({commit, state}, newValue) => {
        commit('SET_PAGE', newValue)
        return state.page
      }
  }
})
