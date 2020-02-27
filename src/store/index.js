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
                    id: "education", topic: 'EDUCATION',
                    text: 'Another top campaign issue for him. He has supported expanding Pell Grants (a federal program that helps low-income students pay for college).',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'He\'s a proud part of the Gang of Eight that supported more border security measures, and a path to citizenship for some undocumented immigrants. Earlier this year, he tried to stop a gov shutdown by giving President Trump the $25 billion he wanted for a border wall in exchange for protections for Dreamers. Unfortunaltly, it didn\'t work out.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He supports what he calls Medicare-X – which he says would be a public plan that would offer Americans low-cost health insurance choices and create more competition.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'He wants to rejoin the Paris climate deal and provide tax incentives for people to be more energy efficient. But he’s also criticized Democrats for advocating getting rid of coal and oil plants without proposing new jobs.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'He has a mixed record on the issue, which he’s struggled with as a devout Catholic. In 1982, he voted for a bill that, if passed, would’ve let states override Roe v Wade. He has since said he’d defend Roe v Wade as president. He said he no longer supports the Hyde Amendment (which bars federal funding going toward most abortions).',
                },
                {
                    id: "education", topic: 'EDUCATION',
                    text: 'He wants to offer two years of free (read: taxpayer-funded) community college or job training and universal pre-k for three and four-year-olds. He’ll reinstate Obama-era policy that aims to make sure schools are working to desegregate, and wants to triple funding for schools with a high percentage of students from low-income families.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He wants to expand the Affordable Care Act by giving Americans the choice of a public health insurance option in addition to letting people keep employer-based plans. He would give Medicare the power to directly negotiate drug prices. He also plans to let consumers get prescription drugs from other countries to create more competition for US drug corporations.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'Addressing income inequality and workers’ rights are his priorities. Some highlights: let\'s enact a $15/hr minimum wage and ban non-compete agreements that stop workers from taking jobs with competitors. He also wants to reverse Trump’s tax law and give tax credits to lower income families.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'Something he\'s been saying \'mayday\' about since the 1980s. He calls climate change \"the greatest threat to our security.\" So what\'s he going to do about it? Rejoin the 2015 Paris climate deal on his first day in office. Start a "major diplomatic push" to get other countries to up their emissions-cutting ambition. Get the US to net-zero greenhouse gas emissions no later than 2050.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'He says the country needs immigrants to fill all the jobs out there. As mayor, he started programs to help immigrant entrepreneurs start and grow businesses, and enforced a policy still in place today that keeps immigration statuses confidential when immigrants interact with the city government (think: in certain situations, city agencies can’t ask about immigration status).',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He’s not into the idea of Medicare for All. He thinks that replacing the entire US health care system would “bankrupt us for a very long time.” But he’s open to an option that would provide health insurance to anyone who’s uncovered. Also, as mayor, he implemented a number of public health measures, including making NYC the first city to require calorie counts on menus for chain restaurants.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'He wants wealthy people like him to pay more in taxes. But he’s against the wealth tax that fellow 2020 candidate Sen. Elizabeth Warren (D-MA) proposed. He said it’s “probably unconstitutional” and compared the idea to socialism, saying it’s similar to policies in Venezuela.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'Before he got into the race, he announced a campaign called Beyond Carbon. He’s investing $500 million of his own money to help the US achieve a 100% clean energy economy. Some of Beyond Carbon’s goals: get all coal power plants closed by 2030 and helps get candidates who are “climate champions” elected to local offices.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'He says the government shouldn’t interfere in a woman’s right to choose. And that as president, he would make sure any Supreme Court appointments respect that. He also wouldn’t pursue policies against Planned Parenthood.',
                },
                {
                    id: "education", topic: 'EDUCATION',
                    text: 'He has some plans concerning the student debt problem. He feels you – Buttigieg and his husband Chasten have six-figure debt from Chasten going to grad school. He has a few ideas including, expand access to Pell Grants, a federal program that helps low-income students pay for college, make it easier to refinance high-interest loans, and create more debt forgiveness programs.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'He\'d go all in on a carbon tax, “quadrupling” (yes, really) the budget for renewable energy R&D, and re-committing the US to the Paris climate deal.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "education", topic: 'EDUCATION',
                    text: 'Community college should cost the low low price of...nothing. Same for public universities for families that make $125k a year or less.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'She gives Medicare for All a thumbs up. Early in her career, she was anti-abortion. She’s now pro-choice and called the restrictive Alabama abortion ban “extremely dangerous.” She says it would take away women’s liberty.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'She intro’d a plan in Congress that would do a few things. Including transition the US to 100% renewable energy by 2035. Still unclear what her plan would look like as president.',
                },
                {
                    id: "guns", topic: 'GUNS',
                    text: 'Her take: let’s ban assault weapons already and get universal background checks in place.',
                },
                {
                    id: "security", topic: 'NATIONAL SECURITY',
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
                    id: "education", topic: 'EDUCATION',
                    text: 'She thinks free college tuition and erasing all student debt is unrealistic. But she’s here for free tuition for two-year community colleges, expanding Pell Grants (federal aid for low-income college students), and letting students refinance their loans at lower interest rates.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'She’s not ready to embrace Medicare for All, but she wants to move towards universal health care that allows people to opt into government-run plans. She also wants to expand Medicare to include anyone that’s 55 and older (as opposed to 65 and older).',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'She’s saying yes to the Green New Deal as an “aspirational” starting point for addressing climate change. She also wants the US to rejoin the Paris climate deal – which set standards for pretty much the entire world to lower carbon emissions.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "education", topic: 'EDUCATION',
                    text: 'He says this is the public’s “single best investment.” And is in favor of universal pre-K and free community college.',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'He allowed undocumented immigrants in Massachusetts to qualify for in-state college tuition, and proposed letting hundreds of undocumented immigrants stay in MA during the 2014 migrant influx in the US. He hasn’t announced immigration policies as a presidential candidate, but is calling for a system that “provides for both border integrity and human dignity.”',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He supports high-quality, low-cost services, though he hasn’t given specifics on if or how he plans to implement that as president. Patrick’s called Medicare for All a “terrific idea” – but only if it’s rolled out with private options.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'Patrick helped make Massachusetts a “a leader” on this issue. During his two terms as governor, he implemented laws to lower carbon emissions and focused on upping the number of clean energy jobs.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'He says his Medicare for All plan will cover reproductive health care, including abortions. Although he has voted in favor of the Hyde Amendment in the past, he now says he would get rid of it. The amendment limits federal funding for abortions.',
                },
                {
                    id: "education", topic: 'EDUCATION',
                    text: 'Part of his 2016 run was a proposal to make four-year public college tuition-free and lower student loan interest rates. He hasn’t changed his mind.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'Medicare for All is his baby. As in a government-run health insurance program available to all Americans. He’s been talking about it since his 2016 run. This time around, he unveiled a new plan that goes even further by pretty much getting rid of private health insurance. Critics say this will cost way too much.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'For years he’s pushed the message that the economy is “rigged” in favor of Wall Street and the rich. To combat this, Sanders wants to do things like enact a $15/hr minimum wage and increase tax rates on the wealthy. He also thinks employees should have more ownership stake in the companies they work for. Also, he doesn’t think billionaires “should exist.”',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'He’s telling the other Dems, ‘I see your climate change plans and raise you all of the money.’ At $16.3 trillion, his is the most expensive plan in the game. Here’s what Sanders says you’d get for it: 100% sustainable electricity and transportation by 2030 and a carbon-neutral economy by 2050. Sanders says he’d pay for his plan in large part by taxing and suing fossil fuel companies.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'He wants to protect a woman’s right to choose.',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'Last year, Steyer reportedly promised to invest $1 million to legal aid groups that have helped immigrants facing deportation. He believes they deserve “expanded and strengthened” legal services while DC figures out how to handle the influx of migrants at the border.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He thinks there should be a public option but doesn’t want to completely do away with private health insurance. He’s also criticized pharma companies for allegedly helping fuel the opioid crisis, and has supported a bill in California that would force drug makers to notify customers when drug prices increase.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'He’s in favor of raising the minimum wage, saying that a living wage is one of the “5 Rights” all Americans should have – along with the right to an equal vote, clean air and water, health, and to learn.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'She supports abortion rights, and says "Congress should act to ensure that the will of the people remains the law of the land.". And wants Congress to pass federal laws that protect women’s access to reproductive care (like birth control and abortions).',
                },
                {
                    id: "education", topic: 'EDUCATION',
                    text: 'She wants free (read: taxpayer-funded) public college for everyone. She’s pitching the cancellation of up to $50,000 in student loan debt for American families who make less than $100,000 a year. She wants universal child care from birth to school age – free to families that make less than 200% of the federal poverty line and what she describes as affordable for everyone else.',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'She also has a plan for that. It includes getting rid of criminal penalties for illegal border crossings, instead making it a civil offense; banning for-profit detention centers; raising the refugee cap (which the Trump admin lowered) to 125,000 refugees in her first year in office; and establishing a Justice Dept task force to investigate alleged mistreatment of migrants by the Trump admin.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'Within her first 100 days in office, she’ll offer a public health insurance option. It would be free for children and lower-income families. Eventually, she would phase out private insurance and make national health insurance free for everyone. The phrase you’ll be hearing her say over and over again? ‘Not one penny.’ That’s how little the middle class will be taxed for her healthcare plan.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'She wants to invest in housing to bring down rents by 10% while also creating 1.5 million new jobs and start closing the racial wealth gap. Ambitious. She also has what she calls her ultra-millionaire tax: it will target the richest 0.1% of Americans to raise nearly $3 trillion that can be used to “rebuild the middle class.” She’s also proposing to break up Google, Facebook and Amazon.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'She’s embraced a climate change plan to eliminate greenhouse emissions from power plants, cars, and buildings over 10 years. The plan would cost $3 trillion, and Warren says it would be fully paid for by reversing tax cuts passed in 2017. Part of her plan includes investing $2 trillion in research and manufacturing of clean energy technology to fight climate change.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "education", topic: 'EDUCATION',
                    text: 'He supports universal pre-K and wants to forgive student loan debt. He wants free (or nearly-free) community college and measures that’ll push colleges to lower tuition. He also wants to promote life-skills education (think: financial literacy and time management) in high school.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He supports Medicare for All and wants to begin a national anti-stigma campaign for mental health issues called “Everybody Needs Help Sometimes.” He also wants to encourage health care systems to make mental health part of primary care. He supports a woman’s right to an abortion in all instances and plans to appoint judges who support that.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'Repeat after Yang: Universal. Basic. Income. This is his signature policy. His goal is to give $1,000 a month to every American adult. No conditions. He’d fund this by consolidating some welfare programs and implementing a 10% value-added tax (a tax on the production of goods as they goes through the supply chain).',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'He supports the Green New Deal and wants to invest in tech designed to fix the damage already done to the environment. For example: placing mirrors in space to reflect the sun’s radiation away from Earth. He also wants to end current tax benefits for fossil fuel companies.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'He’s against abortions except in three instances: rape, incest, and if the mother’s life is at risk. And his administration implemented rules that would make it easier for healthcare workers to refuse to perform abortions and other services if they violate their religious or moral beliefs.',
                },
                {
                    id: "education", topic: 'EDUCATION',
                    text: 'He’s in favor of school vouchers, which give students public funds to go to non-public schools (think: private or charter). He also wants to fix the student loan crisis by doing two things. One: capping the amount of student loan debt students and parents can take on. Two: reducing the number of repayment plans available to them.',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'He still hasn’t gotten his wall, but he’s still trying to get more funding for border security, which would go to things like aid for unaccompanied minors. He’s also tried to end asylum protections for most migrants who arrive at the US-Mexico border.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He’s planning to roll out big plans for it soon. For now, he’s promising to protect people with pre-existing conditions. He’s also proposed lowering funding for Medicaid and Medicare. And don’t ask him how he feels about the Affordable Care Act.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
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
                    id: "education", topic: 'EDUCATION',
                    text: 'One thing you can be sure of: he isn’t in favor of free college for all.',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'Like Trump, Walsh wants to crack down on illegal border crossings. And tweeted that he’s in favor of building a US-Mexico border wall. He has also described undocumented immigrants as criminals. Unlike the Trump admin, he said he wouldn’t have separated families who crossed the border illegally in order to prosecute all adults.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He has made it clear that he’s against government-run health care. And rejected claims from the left that health care is a human right.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'Walsh rode the Tea Party wave when he got elected to Congress in 2010, railing against Obama and what he saw as executive overreach. He says he wants to address Trump’s “reckless” fiscal policies, high taxes, and the country’s increasing debt and deficit.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'In 2015, he tweeted “lol climate change...or global warming...or whatever they\'re calling it now.” He’s also rejected claims that climate change constitutes a national emergency and praised a rollback of climate change research funding. Since announcing his presidential bid, he gave an interview saying the Republican Party needs to do more to confront climate change.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                    id: "abortion", topic: 'ABORTION',
                    text: 'He’s pro-choice and wants to expand legal access to abortion. As governor in the ‘90s, he intro’d a bill to make abortion more accessible in Massachusetts.',
                },
                {
                    id: "education", topic: 'EDUCATION',
                    text: 'As governor in the ‘90s, he signed legislation to improve school standards. As president, he’d eliminate the Education Department as part of his goal to reduce government size. And replace it with more local oversight. He wants to make community college tuition-free for people who lose their jobs to things like automation. And to allow students to refinance their college loans.',
                },
                {
                    id: "immigration", topic: 'IMMIGRATION',
                    text: 'He’s compared Trump\'s proposals for mass deportations of undocumented immigrants to the practices of Nazi Germany. He supports some form of legal status for undocumented immigrants.',
                },
                {
                    id: "health", topic: 'HEALTH CARE',
                    text: 'He’s all about whatever makes health care both cheaper, more accessible, and higher quality. He has said that there’s “too much government” involved in the Affordable Care Act. But he supports expanding Medicaid access and wants people to be able to buy health insurance across state lines to help bring costs down.',
                },
                {
                    id: "economy", id: "economy", topic: 'ECONOMY',
                    text: 'he opposes Trump’s tariffs, wants to cut the deficit, and to cut taxes. He was named the most fiscally conservative governor in the country at the time and if elected, he says he’ll prioritize cutting government spending. When Weld stopped by Skimm HQ, we asked him for his best budgeting tip. Answer? Always balance your checkbook. Yes, he still uses a checkbook.',
                },
                {
                    id: "climate", topic: 'CLIMATE CHANGE',
                    text: 'He sees it as a major issue and supports rejoining the Paris climate deal.',
                },
                {
                    id: "guns", topic: 'GUNS',
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
                {
                    text: "It’s been 25 years since Congress passed comprehensive gun control legislation. And in 2017, gun deaths reached the highest they’ve been in decades.",
                },
                {
                    text: "Voters in both parties agree on some key proposals: most Americans say gun laws should be stricter; a majority of both GOP and Dem voters are in favor of restricting gun sales to people with mental illnesses; and a majority in both parties favor background checks for private gun sales, and at gun shows.",
                },
                {
                    text: "Here’s where the parties and candidates start to differ. The Democratic candidates all agree on banning assault-style weapons and high-capacity magazines – which can be defined as capable of holding more than 10 rounds. They disagree on things like mandatory buyback programs and gun registries.",
                },
            ],
            opinions: [
                {
                    name: 'Joe Biden',
                    text: 'He supports reinstating assault weapons ban and wants a voluntary buyback program to get weapons off the streets and to impose universal background checks.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He is a longtime advocate for gun control. He supports universal background checks, assault weapons ban. He is the primary funder of Everytown for Gun Safety, an advocacy group working to end gun violence.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He supports universal background checks and wants to make it harder for domestic abusers to get a firearm.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She supports universal background checks and wants to ban assault weapons.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She supports universal background checks and wants to ban assault weapons. She wants to ensure gun control measures still allow Americans to engage in regular hunting.'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'In the past he has taken positions in line with the NRA and voted against legislation to est. a national background check system. Now he says he wants to expand background checks and ban assault weapons.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'Calls gun violence a "public health crisis". He supports universal background checks and wants to ban assault weapons and high capacity magazines. He also wants to close gun loopholes, like the "boyfriend loophole," which allows some convicted abusers to buy guns.'
                },
                {
                    name: 'Donald Trump',
                    text: 'He wants to get states to adopt red flag laws, aka courts can more easily take away guns from potentially dangerous people. He has advocated arming teachers with guns to control school shootings.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She aims to reduce gun deaths by 80%, with plans like: requiring background checks at gun shows, banning assault weapons, and establishing waiting period for gun purchases.'
                },
                {
                    name: 'Bill Weld',
                    text: 'Sees gun ownership as "a bulwark against government oppression" and supports red flag laws. He wants waiting periods for gun purchases and to raise the age to buy guns from 18 to 21.'
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
                {
                    text: "Trump has made curbing illegal immigration a top priority. See: demands to extend the US-Mexico border wall, attempts to end DACA (the Obama-era program that protects immigrants, known as Dreamers, brought here illegally as kids from deportation), and the “zero tolerance” policy that led to thousands of families being separated at the border.",
                },
                {
                    text: "Those who support the admin’s moves say the US needs to keep the country safe.",
                },
                {
                    text: "Critics argue that it’s the US’s moral responsibility to accept immigrants and refugees who come here for a better life, and that immigrants help boost the economy.",
                },
                {
                    text: "ome Democratic candidates have called for reforming Immigration and Customs Enforcement (ICE) – the agency that oversees deportations – because they believe it has too much power. Their solutions range from reducing its responsibilities to completely getting rid of it.",
                },
                {
                    text: "The Trump admin has also tried to overhaul legal immigration. It’s announced policies that favor merit-based immigration (think: giving priority to highly skilled immigrants or those who speak English) over family-based immigration.",
                },
                {
                    text: "And this year, Trump added more countries to his controversial travel ban over national security concerns. The initial ban blocked people traveling from some Muslim-majority countries.",
                },
            ],
            opinions: [
                {
                    name: 'Joe Biden',
                    text: 'He acknowledges "pain" caused by 3 million deportations while VP and is therefore against decriminalizing illegal border crossings. He supports DACA and a path to citizenship for undocumented immigrants and has a plan to Restructure Immigration and Customs Enforcement (ICE).'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He believes immigrants play an important role in the economy by filling jobs. He founded pro-immigration advocacy group and supports a path to citizenship for undocumented immigrants.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He supports decriminalizing some illegal border crossings, would focus deportations on criminals and national security threats and creating a path to citizenship for undocumented immigrants. He would restructure the ICE and invest in US-Mexico border security tech.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She supports a path to citizenship for undocumented immigrants.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She is against decriminalizing illegal border crossings. She supports added border security but not the Trump admin\'s proposal to build a wall across the entire southern border and a path to citizenship for undocumented immigrants.'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'He wants to decriminalize illegal border crossings, abolish the ICE, and pause all deportations.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'He wants to decriminalize illegal border crossings. He supports the DACA and creating a path to citizenship for undocumented immigrants.'
                },
                {
                    name: 'Donald Trump',
                    text: 'He has pledged to extend the US-Mexico border wall, started and ended "zero tolerance policy", and wants to end DACA. He has also Suspended immigration from seven countries, including six majority-Muslim countries and capped number of refugees admitted to the US per year. He has proposed ending birthright citizenship, focus on merit-based immigration.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She wants to overhaul the ICE and decriminalize illegal border crossings, focus deportations on criminals and national security threats'
                },
                {
                    name: 'Bill Weld',
                    text: 'He has compared Trump\'s proposals for mass deportations of undocumented immigrants to Nazi Germany. He supports some form of legal status for undocumented immigrants.'
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
                {
                    text: "US health care is the most expensive in the world. So expensive that a health emergency can put a family into bankruptcy.",
                },
                {
                    text: "Some Americans are covered by Medicaid or Medicare, two gov programs that help cover older, lower-income, and disabled Americans. Since 2014, Obamacare has let states expand who can be covered under Medicaid and worked to make it easier for people to buy insurance outside of employer-provided plans.",
                },
                {
                    text: "Still, 8.5% of Americans (27.5 million people) are uninsured. And even those who are insured can face significant health care costs because of things like high deductibles or copays.",
                },
                {
                    text: "All of this means making health care more affordable and accessible is one of the most fiercely debated topics in politics. And a no. 1 issue for some voters.",
                },
                {
                    text: "Many on both sides of the aisle – including President Trump – want to focus on lowering specific health care costs (like drug prices) rather than just the insurance part.",
                },
                {
                    text: "Some Democratic presidential candidates are proposing Medicare for All – abolishing private insurance and getting everyone in the US on a government-run plan. The move means everyone gets the same insurance, regardless of income.",
                },
                {
                    text: "But other Dems don’t see the benefit of taking a pen to the entire US health care system.",
                },
            ],
            opinions: [
                {
                    name: 'Joe Biden',
                    text: 'He would expand Obamacare by offering a public health insurance option without scrapping private insurance. He also would let Medicare directly negotiate drug prices and get prescription drugs from other countries to increase competition and lower pricing.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He would scrap Medicare for All, says it would “bankrupt us for a very long time”. As mayor, made NYC first city to require calorie counts on menus for chain restaurants.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He would enact Medicare for All Who Want It...exactly what it sounds like.'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She is pro Medicare for All.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She would move toward universal health care that allows people to opt into government-run plans. She plans to Expand Medicare to include anyone that’s 55 and older (as opposed to 65 and up).'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'Medicare for All is his baby. He also wants to get rid of private insurance.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'He wants a public option, but wouldn\'t scrap private insurance.'
                },
                {
                    name: 'Donald Trump',
                    text: 'He supports lower prescription drug costs, health care costs. He is against Medicare for All and is Anti-Obamacare; got rid of the individual mandate (which required most people to pay a fine if they didn\'t have health insurance), trying to scrap the full law.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'She has her own $20.5 trillion Medicare for All plan. She says her plan won\'t raise taxes on middle class.'
                },
                {
                    name: 'Bill Weld',
                    text: 'He wants less government intervention in Obamacare. He proposes to expand Medicaid access and allowing people to buy health insurance across state lines to lower costs.'
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
                {
                    text: "There are a wide variety of issues that could affect the safety and security of Americans: everything from the threat of terrorism and nuclear war to gun control and climate change.",
                },
                {
                    text: "President Trump ran on a platform of extending the US-Mexico border wall – and tends to treat illegal immigration as a national security threat.",
                },
                {
                    text: "But both parties agree the US faces threats abroad: like Russia, because of its interference in the 2016 election process and concerns it could interfere in 2020 as well. Iran and China are also believed to pose serious cybersecurity threats to US elections.",
                },
                {
                    text: "Meanwhile, ISIS. Even though it lost territory in Iraq and Syria, the group maintains cells around the world. That includes in Afghanistan, where the US has thousands of troops stationed to help contain terror threats, like ISIS and the Taliban.",
                },
            ],
            opinions: [
                {
                    name: 'Donald Trump',
                    text: 'He wants to get the US out of "endless" foreign wars (Afghanistan, Iraq) and instead engage with adversaries: North Korea, Russia, Taliban. He pulled the US out of Iran nuclear deal and from northern Syria. He was impeached by the House on national security grounds over withholding aid to Ukraine.'
                },
                {
                    name: 'Bill Weld',
                    text: 'He Supports removing Trump from office over withholding aid to Ukraine. His No. 1 concern is nuclear weapons (criticized Trump for pulling out of the Iran nuclear deal, doesn\'t think US should take North Korea at its word).'
                },
                {
                    name: 'Joe Biden',
                    text: 'He supports the Iran nuclear deal and sanctions against Russia as a response to things like annexation of Crimea.'
                },
                {
                    name: 'Michael Bloomberg',
                    text: 'He supports sanctions against Russia as a response to things like annexation of Crimea.'
                },
                {
                    name: 'Pete Buttigieg',
                    text: 'He wouldn\'t exchange "love letters" with North Korea\'s leader but would try to help North Korea become part of the international community. He also supports pulling troops from Afghanistan, where he served'
                },
                {
                    name: 'Tulsi Gabbard',
                    text: 'She rejects forms of US military intervention abroad, such as regime change. She Voted for Iran nuclear deal – didn\'t think it was perfect but better than alternatives, says she\d re-enter the deal.'
                },
                {
                    name: 'Amy Klobuchar',
                    text: 'She would focus on terrorism, keep a smaller US military presence in Afghanistan, Iraq to avoid these countries being used as base by terror groups. She voted for Iran nuclear deal and supports the US rejoining the deal.'
                },
                {
                    name: 'Bernie Sanders',
                    text: 'He says the greatest threat to national security is climate change. He wants to end support for war in Yemen, end US efforts at regime change (eg: in Venezuela). He would withdraw from Afghanistan and rejoin the Iran nuclear deal.'
                },
                {
                    name: 'Tom Steyer',
                    text: 'He calls Trump a national security risk; cites the fact that he was impeached in part over his conversation with Ukraine\'s president, which Dems said endangered national security. He would require paper ballots to protect election security.'
                },
                {
                    name: 'Elizabeth Warren',
                    text: 'Her focus is on terrorism, but would bring US troops home and reduce defense spending. She voted for Iran nuclear deal, and would rejoin.'
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
