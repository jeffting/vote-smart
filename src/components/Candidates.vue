<template>
    <div>
        <h1>CANDIDATES</h1>
        <div class="row">
            <div class="column">
                <h2 class="text-democrat">Democrat</h2>
                <div v-for="democrat in democrats" :key="democrat.value">
                    <div class="candidate-div" @click="routeToProfile(democrat.name)">
                        <div class="image-cropper image-democrat">
                            <img v-bind:src="democrat.photo" v-bind:alt="democrat.name" align="right">
                        </div>
                        <div class="description-democrat">
                            <h3>{{ democrat.name }}</h3>
                            <p>{{ democrat.description }}</p>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="column">
                <h2 class="text-republican">Republican</h2>
                <div v-for="republican in republicans" :key="republican.value">
                    <div class="candidate-div" @click="routeToProfile(republican.name)">
                        <div class="image-cropper image-republican">
                            <img v-bind:src="republican.photo" v-bind:alt="republican.name" align="right">
                        </div>
                        <div class="description-republican">
                            <h3>{{ republican.name }}</h3>
                            <p>{{ republican.description }}</p>
                        </div>
                        <br>
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
            // republicans: [
            //     { name: 'Donald Trump', photo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/president-donald-trump-delivers-remarks-during-the-medal-of-news-photo-1572627992.jpg?crop=0.668xw:1.00xh;0,0&resize=480:*', description: 'He’s been trying to Keep America Great since 2017. Before getting into politics, he was chairman and president of the Trump Organization starting in 1971, and became a real estate mogul (see: his Trump Towers around the world).' },
            //     { name: 'Joe Welsh', photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDQ8QDw8PDw0PDw8PDw8QFREWFxURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGisdHR0rMC0tLSstKy0rKy8tKy0rLS0tMS0tKy0tLS0rLS0tLSsvLS0tLS0tKystLS0tLSstLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFAwQGBwj/xABAEAABBAAEAwUFBQQJBQAAAAABAAIDEQQSITEFQVEGYXGBkQcTIjKhQlKxwfAjctHhFCQ0U2JzgpKyM2Oi0vH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAMREAAwACAAUCBAUCBwAAAAAAAAECAxEEEiExQQVhIjJRsRNxgdHhI8EUMzRCcpGh/9oADAMBAAIRAxEAPwDx1oWVjVFjVu4eFRbPdw4+ZhFCtyKFTiiWwGpGz2MOFIg1qmAnSEp2SgCkohNAvJK0JJoFkxoQhYcEimolFAYkIQmEBCELAEkmklMCSaSAAQhCwASTSRAwSTSTCgkU0rQFYkk0UsSYkIQiIVeHitWMMSjBEtxjKRbOPBh0hsZSlSYCaQ75RAhKlNBWKpEEJpLFUhp2ooQHRJJFoWG2NIoUhGSLAsfh+rTAIIWSOFzjTWlxq6A5dVbcP4BNJnOUAsANOqiboN8dbrwW2TvJMLdPRSoXf4DsM0yPfM5ojuo4m248qLj+XetiTsBG75XltNIAdp0pxN+Pqt1OB+q8MnrmPN0l1XFOxOIjsxGPENuqjdbwOpB38vRUGL4dNCLlikj5DMxwHqUGdeLicWX5KTNRCaSBUEk0lgMEIQiASSaSIrBJNRWFYIQkiTY0JIWEM0TKWUJBSCAsIAmikJS8oSSkorFUIpJlJYohITQsMJCChFAYwuk4Fw2VhPvGhjXNIyuIunVZIG23NQ4H2fkeYpcrqtklig0C9BZ3PPTYFXXF2StjDYo8paGgvBc02aob7UD5d5W7njeoepTCeOOrMLcTHhg5sLaaG/MLzSPqxmI2O1A6Kvh7SnEDIGlpa4F1NJc8i9BufGwug4L2YaWl0pvM4vDRpl15EfrVdHg+GQxCmRtHfWpKnWZLsjxHhu3zXXVlDDiXuIc0PF6uabzaX6jbbvW1JxSQtDQAQ8lpDgaFeXTVXb4gfsj0paGLwzCCD3jvCn+M14G/wqryUB4sWNyttzw1rnkCyCRdVe4AJVPxnihxMX7QZWCi1uubY07v3Cs8fgGsJLDVii07O5frxXL8WjeGjNR+MhumpGUc/wAlZZFS6FuA4ZriUmypSTKSx9WCSaSIAQhJEUEk0iihWCii0EoiNiSTKSxOgtCSFiezdCYSCYQHkkgotBSlkJRKkorFJBJCFiqBJCSJmIrc4Rg2zTNY8uaynPkcwZnBjWkkNHNxqh3kLTKuOyOb+mw5TXz3pdgMJr6DzpY589ucVUvCf2PV4MNHFHHGxhAYxrRGDeWm1RPM3z7isT4BMxrS2iBTgTRzaW71v1W5hW53X9kl1D/CBp6guPmth0TWhxOgvfy3VNHwbtt7fcr8K8fE0aBlBWOHYDrvy8loxQAF0g094bruF6eOq2oJPWvouJLlo9Lm5o6GTEM009FTY1p5Cuqu3PHM0tDEyM7rrmhkWx8NaObxjb6d2ircPwo4oYjD5QZTGZcOefvWa5B+8NPNXeMkaPlAsCztypaOH4k2DEQymqbr30f/AKFsL1S2UyW5+Ke66o83KiVa9p4mNxmIMX/SfI6WI8sjzmAHhZHkqoq59PjtXCtdmtiQhCIQKSaRTCsEihIoiMihCSJNsClaCVG0SVMaFG0IktlimFEJqZ0SSSRaSBWQKSRUViqJJJIWHBBSQm7A2Ct+yQJxsFGqLnX4MJ/JVCtuyrqxkPi4a/uFL5Ofiv8AIv8A4v7HteDAazQbZfAmt1GZ/IajU0Re3L8fRawxTY2ZadZPQmiOayteDZO4AsA9R/NWZ8Hp9zRkxRdlAFZqOmtZtSf11WwDkGvIbrTADZGtHJhA8j/P6LZlYXgtDcw3ykkX59FwX8x6mL5Ec/xfi80rSG1HHdB50JI5DmduS804p2hmEvu3YlzgCDUYB7w4kHbwXp2N7PMmcX4pxe4DKyKPM2CFuulWM501JHTQLjeM9mTPiAI42uc8tzPcHAgNoAkg7AKsVK7iZIp9jf7JRzTxulJc5hY5wc7nZ5ei4/tJiS4/CZC1jQHOaBTa0G57917VwnhbYImxg6ZQCRXTdefdpOz7IJy9rGuZK9xc2y05xRDtOuvgWlbHWq2zZI3GkclhXMMLcr5HEOcCJKsbXr5hNW/FeGsigglijEcby9jw0lwErasE94o+qqSnp7Z9L6YtcLC/P7sihCSB2sEkJJhGxqJTKiSmRNsFElBSKZEqYiVElBKiSmI0x2hQtC2iWy0tAKSFM60StFqNotArLAlIoQgVTFaEkIjbHaFFNYw1nwWIMUsco3je1/jRulrppTNJrTPUeIiWbGwtbNJDhxFJJL7txYXHQgF3T4jstjAY1pc+GCQTPhoSPN04gAmuujhsqvszjmz4UZyDJHcTxdEgih9OfVW2Bw7MHBY6vc8kHO7Mb266AeShdOb2fMPClP4dLrPR/p5/XuZYSCWv+KxZGpNXp5rcZiS0lx51XcqqHEg7A6m68St6FwOh23Ki6bezKUlpIsI3tc23UNNgVT43EtjD3nRovQbkBZ5Z960Co44nYyYDUYdjvjf/AHjh9hvXXc+XgX8RklJ0LuLwwYdkuIlZC0taaJAAsCm2fHzXOcY4thcQ0OZIx0b6DXh10c1WCOYPJb3GOz+FlcyR4c4x2WMLyY2uqswb1XD8T4Y57mFstFry0e8cQxuprw8e9WidkLvl3rybHEMTnwL4TVx4iOYED5mlrmHx3BXNFW2OilhidFK3K5r/AHbtbBAOZpB5jQ69yqSqP6Hv+lf6ffuxFRKkVErI7mJBKRKSZE2wSKCkU6JNiUSUyVElOiVMTioEpkqJKYhTC0KFoWI7LUKSiFIFSO5BSCEItArLEVEqRUSsVQkJFCI2xoSTQDsE0kJWMmWPB8Y+J5a3aQBtf4vsn1/ErpOCdrWgOgxNySRjOx7QSZI+QcPvDQFcWtnh7S7ExO1J1aWgXmBH6KWkqnTPK4/hLd/jY/p8S+q+v6HU8B427ECR5aWBk72gHQmM6tP1ryXTsmFbrncNA1llo3+ahutjD4ktOVxNjbvC5Wk+x5ibnuW+Ia58ZYw5HOGXN05WqeXGY1+JGHwcUbIIWBpc95aPAEA6/wAVZtksXfmN1s8PDgCaqzp3/wA/VGHoWlsqZeEY2S/f4xsLPuwNObwL33+Cocbw9ucNdPOY9bd+yzXdXWX4tLK7DHulc4MDbI37h1PQLmeMYZ2YEyA0QPl+FtnUnU3/ACVprqJa+E57HslYHRzFpeyQtJbYa4C6cNdiCD5rQKtO0L7kaCQSI2ZiDYuuvPYKqKd9z6D06OXhp9+oiolNIrI6WxFRJTKiUyJUwUSmVEp0SbEVElBKiSnRCmIlQJTJUCUxz1QWhRJSWJcxcphQTtSPRTJoUQUWsUljKiUJEoFUwSQhEbY0JIQYdjTUVjlxDGfM4A9Nz6JdN9jVkmFzU0l7mYldJ7LsI/FY97w39jBh5viI0dLIwsYPQvPkFwmLxhk+Fvwt59XePcvZ/Y5hwzAGQfM7EyuJ65Qxo+jV0Rh0t0fM+p+rfi/0sL+Hy/r7fl9/y710W2tg7EDlWmqhjIM4saEK57UcKdDKZmt/YyOsOrRrjuwnl3dfVUzZau7/ACXmOXFaCqWSNo028TMFB4sbZlc4DjkRGjv1sq3FQNdqQPBc9jY2h3wb9xr6qylUc9VUHoGI4gwMOUiz4LleKYprgac2zY50NNPHkqnBRSTTRQB7nOc4CgTTWA/G4noBfmQqzESj3+KiJymHEyxtBO8YcchvrQpUnA+66mnPFUop8u/LMmPkzSHXNVNvrQ1+q1yVHNvzrQ9yVpT6zFyzCUvaSGkUWkUUZsRUCmSokpkRpgSokoJUSU6IVQiokoJUCU6OeqAlQJQ4qBKY56oLTULTRJcxcpqIKakemmNNRTWKKgtJCCECqoVpLBiMWyO8zhf3Rq70VbPxN7tGDIOp1d/JUmGzl4j1HBg+Z7f0XVlw+QNFuIaOpNLRm4qwaMBeevyt9VWFjnauJcerjam2OlVYV5PFz+uZa6Y1y/8Ar/YyS42V+l5R91un13SjjrxO5UC0jZZGOv8AhzVVKXY8fLmyZXu6bfuPKva/Yxig7Ays/usU8eT2McD636LxdoXqPsLxNy4/DnYxwSt7nAvafpXotXYmj1p0LXtcxwD2OFPYdiFw3aXs87D/ABw3JAdCDZfD+91b3+vVdyIy0rV49xuDCRtMmV0kpLYYS4N94QLNnk0Dc/iSAefJiWRa8nRhz1ie12PL5SSAALHUrRi4NiJ3Extpt0Zn6Rt/9j3D6K3x3aGOHX+iYcu95mcCZiw074mNDXVtppmrdwGy6nCcagxkDZoTTdWOj+G4njeMgaAju0IojQqc8NUfMWycVN/KUHCOER4MfDb5HV7yV3zO7u4dy8l7QzhvE8bezp5NO+17RinWvCe1BBx2LIN/t5Ne+9fquiehy316mgMS4OsEgg7g8uiscPxg7PFj72x81T0mFnKruPg4rNge8dNfb/rsdTFimOFg+R0WQrl45C3b0W9h+IkUD6clN4F4Z7GH12u2Wd+6/b+S4JUCVhgxjH6XlPedFlcCL7iR5jcKThz3PUx8XizL4K39xEqBKZKgSijXQEqBKCVAlOjmqgJUCUEqBKJz1Q7QoWmsT5i6CYKiCmpnqJkwU1AKQQKJkrWOeXK0np+KmtLib6DR1N+iaFt6JcVneLDVrvr+CtezM8E/avXv3/ipiIBQcdO8Gx5LJmtdh8cIhIocVBztEQBn6KTVhaVO0DGZpXf+xXFZOJSt+/hSf9srPycV561y6n2Y4jJxbDjb3kc8Xn7suH1Yg+wUfQXHuMQ4OEyzHuZG3V8r+TGjr+C8oxEWMx8mJxk5Mb44XSwRAkCNrPiawbcr16m13k3C2TYqPETXIWtpuY2Gm+Q5LH2gmjjgxdBrSYJG3V2XDKBXeSpruP4PJO0uJLpGtBsOYyxRzagaHn4NIsbm7XQ9geHzRB73khsvzRchWzh3/loucxhvHYcEktY8CiScuRxBbZskgjWyaJq16zwmRj2gAd1jYKmR9dC4102aeKYGMe532Gud5AEr52mkL3Oe75nuc8+LjZX0D24xphws7mNDv2bmEXXzCswPddr58bspyNRGkAK57O8DfjXyNY5jTGz3mVxIL9aDRWw6nlYVn2l7Jsw2HZiYZxMy4o5RpXvXNObI7mAWkaptitPWzlKRSBzTRAILe4fiyCWuJIe69T9rYH8lokoBqkH16D47cUqXgvSVBxUWSZgD1CRK59H07yKkmvIEqBKCVAlMQqgJUSUEqJKxCmCajaFhNl3aYcsQcnamesmZcyYcsNqQK2hlRmDlW8Td8ddGj81vAqqxzvjd5D6BVxL4jz/VL/oJfV/uYQVGN+ldNPRRLlBjtT42ug+eNm1BxSBUXlYAgprFaeZYxmBVr2SxPuuJYGTkMTG0+DzkP/JU4KnDP7t8cn3JI3/7XA/kswn1I0jKRzabXHduZvjjhGzj71+uhDSA1p8XOGvLfkV1GDfmJPIi/ULgu1M+aec/dLIxVnQNykH1fmHJjr5pca2zZHpHFY2a8SHE7SkZtB8IfVeQNX9qgV7N2chDYh4LxDGE5iTfzvu72s/Sro/dC9e7E4wy4OJxNnJR/eb8J+oWyLyaH00VvtBf/VJj1Dv+JXhLl7b7TnEYGSjRJOv+l2i8ScdUJGoyQTPZZY9zCWlpLHFpLTu0kcks5DctkNJDslnLmArNW196iovOiIpFnPxUlGLZSKxjG5NyR3Hih2/msYsME+210KykrTwTtSO61skqNLqezw2TeJewyVAlBKiSgNVASlaRKRKJJ0O0KNoWE5i2zKQcsNphyQ9ZUZrTtYQ5StbQ3MZg5VWLd8bvFWAKqJnWXH/EfxVcXc831Ovgle5AlQv4vFMlYydQqs8Y2WuSkKwOKk52i2zBmU2rFamCgjGS0pNj4JBIlEB9I9lMX77D4aT+8w8Lv/ALgeOzZppjqbmOgq7DnHL+9Wp6soarofZZi/eYDC3uxr4z/pe4D6UuO4hLb3Xzka2r5jM/Jfd82bneVHH5Nk8FLNuNdySCKo24kOHcazNHINy816N7LcUDh5I9LZM6hd01zQR9Q70Xm8j7o2NQ51n4bzOJsi9MxFkfZoLqvZjiCMRKz78bXC/mJY/W/wDf65kb7Aksva0+sEe+Vg9bXjR3Xr/ted/VAP8Avx/mvHidVNFKJrHIVJY3lFimRiHJNUXFYwrQVFMIGM2GNOHmFtkrRjPxDxW2Skrud3C1qGvcZKRKiSkSlLOhkqJKRKVoknRK0LHaFhOYtE0ISHroYUwkhYZDVQ/mhCpjPO9S/wBv6/2MXNJ6EKh5YORyTQsYSmxCFjEihCEQHsfsdP8AUx/myfiuTxzjZF6WG13ZnGvC0IRx92C/BXA2W3rbgDet5rzevNdL7Nv7W08zELPM20EoQjXYE9zf9r/9mZ/ns/By8gTQprsVoFjO6ELCk+SghCxgQ1CFjEhuPFbRTQlo6uH7MgVFCEpRgkUkIk2CSELAP//Z', description:'Conservative talk show radio host and former Republican congressman from Illinois, who ran as a candidate of the Republican Party’s fiscally conservative Tea Party movement in 2010. He only served one term because he lost his 2012 re-election bid.'},
            //     { name: 'Bill Weld', photo: 'https://s.abcnews.com/images/ThisWeek/190217_tw_weld_936_hpMain_16x9_992.jpg', description:'Massachusetts governor from 1991 to 1997, 2016 Libertarian VP nominee alongside former New Mexico Governor Gary Johnson for president. He’s pitching himself as the anti-Trump Republican.'},
            // ],
            // democrats: [
            //     { name: 'Michael Bennet', photo: 'https://pbs.twimg.com/profile_images/1215072789419479042/aA1rHAIC_400x400.jpg', description:'Sen. Michael Bennet (D-CO) is looking for his Golden Ticket (read: your vote) to the White House. Back in April, he was diagnosed with prostate cancer. And said he would run for president if he was declared cancer-free. A successful surgery got him here.'},
            //     { name: 'Joe Biden', photo: 'https://www.biography.com/.image/t_share/MTQwODQ0Nzc0MjIyNDczMDA2/joe-biden-official-portrait_1600jpg.jpg', description: 'Before serving as former President Obama’s veep, Biden was Delaware’s longest-serving senator – first elected in 1972 at age 29. This is his third run for president (he also ran in 1988 and 2008).' },                
            //     { name: 'Michael Bloomberg', photo: 'https://thehill.com/sites/default/files/styles/article_full/public/michael_bloomberg_11252019.jpg?itok=M59QkRab', description:'One of the world’s richest people just entered the 2020 Democratic race. He was NYC mayor from 2002 to 2013. He’s switched political parties multiple times: he was first elected mayor as a Republican, then registered as an independent, and later hopped on the Democratic train in 2018.'},
            //     { name: 'PETE BUTTIGIEG', photo: 'https://s.abcnews.com/images/Politics/pete-buttigieg-ap-jef-190610_hpEmbed_8x5_992.jpg', description:'Pete Buttigieg (it’s boot-edge-edge) knows his name is hard to pronounce. He’s running for president in 2020 anyway. He’s the millennial, Harvard grad, Rhodes Scholar, veteran of Afghanistan, and former mayor of South Bend, Indiana who’s got a ‘DC or bust’ sticker on the back of his car.'},
            //     { name: 'Tulsi Gabbard', photo: 'https://cdn.cnn.com/cnnnext/dam/assets/190111181535-tulsi-gabbard-announces-2020-run-van-jones-vpx-00002617-super-169.jpg', description:'Gabbard was the first American Samoan and first Hindu member elected to the House of Representatives, where she’s been since 2013. Before that she was in the Army National Guard, and deployed twice to the Middle East. At 38, she’s one of the youngest candidates in the race.'},
            //     { name: 'Amy Klobuchar', photo: 'https://bloximages.newyork1.vip.townnews.com/unionleader.com/content/tncms/assets/v3/editorial/3/63/3631b449-7880-5449-9659-99b4e036f1d3/5e2cfb1269034.image.jpg?resize=1200%2C824', description:'Minnesota’s first female senator wants to become the US’s first female president. Say hello to Sen. Amy Klobuchar (D-MN). Psst...her last name is pronounced KLOH-buh-shar.'},
            //     { name: 'Deval Patrick', photo: 'https://images.wsj.net/im-127802?width=620&size=1.5', description:'Deval Patrick’s (D) motto: better late than never. He joined the 2020 race in mid-November – less than three months until the primary voting season kicks off. In 2006, he was elected as Massachusetts’ first black governor – and served for eight years. After he left office, he worked at private equity firm Bain Capital as a managing director. '},
            //     { name: 'Bernie Sanders', photo: 'https://cdn.geekwire.com/wp-content/uploads/2019/10/bernie-sanders-e1571091688686-630x511.jpg', description: 'Sanders has been in the political game for decades. He ran his first campaign for a Vermont Senate seat in the ‘70s. He lost. But eventually went on to serve as mayor of Burlington, VT before heading to the US House, then becoming a US senator in 2007. He’s the longest serving independent member of Congress.' },
            //     { name: 'Tom Steyer', photo: 'https://www.biography.com/.image/t_share/MTY4NDE5NzUwODczOTMzNzcw/tom-steyer-gettyimages-457384240-cropped.jpg', description:'Thanks to the hedge fund that he launched back in 1986, his net worth is reportedly $1.6 billion. He’s been a Democratic Party donor for years, spending tens of millions of dollars on candidates and organizations that promote liberal causes. One thing he’s super passionate about: impeaching President Trump. '},                
            //     { name: 'Elizabeth Warren', photo: 'https://pbs.twimg.com/profile_images/1215406626049413121/LiVKh64l_400x400.jpg', description:'Senator since 2013, former Harvard law professor who laid the groundwork for what became the Consumer Financial Protection Bureau. She has a reputation for putting a lot of pressure on the financial industry for the way it does business. '},
            //     { name: 'Andrew Yang', photo: 'https://spotlightonpoverty.org/wp-content/uploads/2019/04/yang.jpg', description:'Andrew Yang is running for president because he’s afraid for the future of the country, saying new tech has “destroyed more than 4 million US jobs.” He’s a former tech executive and author. He worked briefly as a corporate lawyer and later started the nonprofit Venture for America, which helps place young entrepreneurs at start-ups across the country.'},
            //     // { name: '', photo: '', description:''},
            //     // { name: '', photo: '', description:''},
            // ],
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
.image-republican {
    float: left;
    border: 6px solid #BF0A30;
    margin-right: 16px;
}
.image-democrat {
    float: right;
    border: 6px solid #002868;
    margin-left: 16px;
}
img {
    display: block;
    margin: auto auto;
    height: 100%;
}
.description-democrat {
    text-align: right;
    height:136px;
}
.description-republican {
    text-align: left;
    height:136px;
}
h3 {
    margin-bottom: -16px;
}
.text-republican {
    color: #BF0A30;
    text-align: left;
}
.text-democrat {
    color: #002868;
    text-align: right;
}
.candidate-div:hover {
    cursor: pointer;
}

</style>