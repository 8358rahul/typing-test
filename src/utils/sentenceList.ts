const generateRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const sentenceList = {
    hindi: {
        "easy": [  
            'अनिल ने एक खुशी से उसे',
        ],
        // "easy": [
        //     `एक बार की बात है, एक उत्सुक बिल्ली ने ${generateRandomNumber(1, 9)} छिपे`,
        //     `खिलौनों को सोफे के नीचे खोजा, जिससे उसे बहुत खुशी हुई। बिल्ली`,
        //     `घंटों तक उनसे खेलती रही, हर पल का आनंद लेते हुए। एक दिन,`,
        //     `खिलौने अपने आप ही रहस्यमय ढंग से हिलने लगे, जिससे`,
        //     `बिल्ली के रोमांचक साहसिक कारनामों में उत्साह बढ़ गया।`,

        //     `एक धूप वाले दिन, वह बाजार गई और`,
        //     `${generateRandomNumber(1, 20)} रसदार सेब लेकर आई, जो एक पाई के लिए बिल्कुल सही थे। उसने`,
        //     `पाई अपने दोस्तों के साथ साझा की, और हर कोई खुश हो गया।`,
        //     `उन्होंने दोपहर खेलते हुए और छुट्टियों के बारे में बात करते हुए बिताई।`,

        //     `जब वह पार्क से गुजर रहा था, तो उसने`,
        //     `${generateRandomNumber(1, 99)} सेंट की एक चमकदार सिक्का देखा, जिसे उसने खुशी से अपनी जेब में डाल लिया।`,
        //     `उसने उस सिक्के से स्थानीय दुकान से मिठाई खरीदी। बाद में, उसे पता चला कि`,
        //     `वह सिक्का एक दुर्लभ कलेक्टर का टुकड़ा था, और उसने खुद को एक भाग्यशाली ख़ज़ाना खोजने वाला समझा।`,

        //     `आँगन में, खेलती हुई कुत्ते ने ${generateRandomNumber(1, 5)} जीवंत गिलहरियों का पीछा किया।`,
        //     `गिलहरियाँ इधर-उधर भागती रहीं, जिससे कुत्ता भौंकता और खुशी से पूंछ हिलाता रहा।`,
        //     `पूरा मोहल्ला यह मजेदार दृश्य देखकर हंस पड़ा और उसका आनंद लिया।`,

        //     `वे बस स्टॉप पर बैठे थे, बातें कर रहे थे और`,
        //     `${generateRandomNumber(1, 60)} मिनट अपनी सवारी के इंतजार में घड़ी देख रहे थे।`,
        //     `समय बिताने के लिए, उन्होंने एक खेल खेला और खूब हंसे। जब बस आई,`,
        //     `तो वे उत्साहित थे कि अब वे मनोरंजन पार्क की यात्रा जारी रख सकते हैं।`,

        //     `बच्चों ने समुद्र तट पर ${generateRandomNumber(1, 10)} रेत के किले बनाए,`,
        //     `जो एक से अधिक कलात्मक थे। उन्होंने किलों को`,
        //     `समुद्री शंख और बहाव की लकड़ियों से सजाया। जैसे-जैसे ज्वार आया, उन्होंने देखा कि`,
        //     `उनकी रचनाएँ धीरे-धीरे बहने लगीं, जो समुद्र तट पर एक मजेदार और यादगार दिन बना।`,

        //     `हर सुबह, उसने ${generateRandomNumber(1, 7)} दोस्ताना पक्षियों को दाना डाला, जो उसकी`,
        //     `पीछे के आंगन में आते थे। पक्षी खुशी से चहचहाते और उसके चारों ओर उड़ते थे`,
        //     `जब वह टुकड़े बिखेरता था। उसने उनकी दैनिक यात्राओं को देखने में बहुत आनंद लिया और`,
        //     `ज्यादा पक्षियों को आकर्षित करने के लिए एक छोटा सा पक्षी घर भी लगा दिया।`,

        //     `उसने सप्ताहांत में ${generateRandomNumber(1, 5)} पहेलियाँ हल कीं, प्रत्येक नई चुनौती का आनंद लेते हुए।`,
        //     `प्रत्येक पूरी की गई पहेली को गर्व से अपने लिविंग रूम की मेज पर सजाया।`,
        //     `उसने एक बड़ी, जटिल पहेली भी शुरू की, जिसे पूरा करने में कई सप्ताह लगेंगे।`,

        //     `2021 की गर्मियों में, एक परिवार ने ${generateRandomNumber(1, 5)} मनोरंजन पार्कों की यात्रा की,`,
        //     `जिससे अविस्मरणीय यादें बनीं। हर पार्क ने एक अनोखा रोमांच प्रस्तुत किया, जिससे वे उत्साहित हो गए।`,
        //     `उन्होंने अनगिनत तस्वीरें खींची और अपने पसंदीदा अनुभवों को दोस्तों और परिवार के साथ साझा किया।`,

        //     `छोटी लड़की को बगीचे में ${generateRandomNumber(1, 15)} रंगीन कंचे मिले,`,
        //     `प्रत्येक अलग डिज़ाइन के साथ। उसने दोपहर उन कंचों को सजा-संवार कर बिताई।`,
        //     `बाद में, उसने अपने दोस्तों के साथ एक कंचा व्यापार कार्यक्रम आयोजित किया, जिससे एक मजेदार सामाजिक सभा बन गई।`,

        //     `उसने पड़ोस की बेक बिक्री के लिए ${generateRandomNumber(1, 12)} बैच कुकीज बेक कीं,`,
        //     `प्रत्येक बैच में एक अलग स्वाद था। कुकीज बहुत हिट रहीं, और उसे कई तारीफें मिलीं।`,
        //     `बिक्री से हुई आय स्थानीय चैरिटी में दी गई, जिससे उसे बेकिंग में संतुष्टि मिली।`,

        //     `छुट्टियों के मौसम में, उन्होंने ${generateRandomNumber(1, 3)} क्रिसमस पेड़ सजाए,`,
        //     `रोशनी और सजावट के साथ। प्रत्येक पेड़ की अपनी विशेष थीम थी और उनके घर में खुशी लेकर आया।`,
        //     `उन्होंने एक अवकाश पार्टी की मेजबानी भी की, जहाँ उन्होंने उत्सव के व्यंजन और उपहारों का आदान-प्रदान किया।`
        // ],

        "medium": [
            `हलचल भरी कक्षा में, ${generateRandomNumber(1, 100)} उत्सुक छात्र थे,`,
            `सभी सीखने और भाग लेने के लिए तैयार थे। शिक्षक ने तैयार किया`,
            `रोमांचक पाठ ताकि सभी लोग लगे रहें। सप्ताह के दौरान,`,
            `छात्रों ने एक समूह परियोजना पर काम किया जो दिखाती है`,
            `उनकी रचनात्मकता और टीमवर्क।`,

            `उत्सुकता से प्रतीक्षित पैकेज को वादा किया गया था`,
            `${generateRandomNumber(1, 7)} दिनों में आने का, और हर दिन उत्सुकता बढ़ गई। अंततः,`,
            `पैकेज आया, और इसमें अद्भुत भरपूर था`,
            `आश्चर्य। प्राप्तकर्ता ने तुरंत आइटम उपयोग करना शुरू किया और`,
            `अपने दोस्तों के साथ उत्साह साझा किया।`,

            `खेल रात के दौरान, उसने ${generateRandomNumber(1, 100)} प्रभावशाली अंक बनाकर अपनी जीत का जश्न मनाया।`,
            `स्कोरबोर्ड पर उसका नाम सबसे ऊपर था, और हर कोई उसकी प्रशंसा कर रहा था।`,
            `उसे उसकी उत्कृष्ट प्रदर्शन के लिए एक विशेष ट्रॉफी भी मिली।`,

            `शेफ की विशेष रेसिपी के लिए ${generateRandomNumber(1, 4)} कप आटे की ज़रूरत थी,`,
            `जिसे उसने सावधानीपूर्वक नापा ताकि परिणाम बिल्कुल सही हो।`,
            `जैसे ही केक बेक हुआ, उसकी स्वादिष्ट खुशबू से रसोई महकने लगी।`,
            `उसने केक एक पारिवारिक सभा में परोसा, जहाँ यह डेसर्ट मेज का मुख्य आकर्षण बन गया।`,

            `कठिन दिन के बाद, उसने ${generateRandomNumber(1, 24)} घंटों में अपना प्रोजेक्ट पूरा कर लिया,`,
            `और उसे बहुत गर्व महसूस हुआ। उसकी मेहनत रंग लाई, और`,
            `उसके बॉस ने उसे सराहा। उसने अपनी सफलता का जश्न एक आरामदायक शाम और मूवी मैराथन के साथ मनाया।`,

            `रोमांच पार्क में ${generateRandomNumber(10, 30)} अलग-अलग आकर्षण थे,`,
            `जो हर एक को अनोखा रोमांच प्रदान कर रहे थे। रोलर कोस्टर से लेकर वॉटर स्लाइड्स तक,`,
            `हर किसी के लिए कुछ न कुछ था। पार्क में एक विशेष आतिशबाजी शो भी था,`,
            `जिसने दिन का समापन एक शानदार प्रदर्शन के साथ किया।`,

            `बड़ी प्रस्तुति की तैयारी के लिए, उसने ${generateRandomNumber(1, 10)} बार अभ्यास किया,`,
            `ताकि उसकी भाषण बिल्कुल सही हो। प्रस्तुति के दिन, उसने इसे बखूबी और आत्मविश्वास से प्रस्तुत किया।`,
            `उसकी कड़ी मेहनत और समर्पण को दर्शकों से खड़े होकर सराहना मिली।`,

            `स्थानीय थियेटर ने इस सीजन में ${generateRandomNumber(1, 5)} अलग-अलग नाटकों को प्रस्तुत किया,`,
            `प्रत्येक का अपनी कहानी और कास्ट थी। थिएटर प्रेमियों ने साल भर विभिन्न प्रदर्शनों का आनंद लिया।`,
            `उन्होंने पोस्ट-शो चर्चा में भी भाग लिया, जिसमें उन्हें नाटकों के बारे में गहरे`,
            `अवलोकन और विचार प्राप्त हुए।`,

            `2023 में एक टेक कॉन्फ्रेंस ने ${generateRandomNumber(5, 20)} नवाचारी स्टार्टअप्स को`,
            `शामिल किया, जिसमें उनके उत्पादों को प्रदर्शित किया गया।`,
            `कई उद्योग विशेषज्ञ और निवेशक उन कंपनियों के बारे में उत्साहित थे।`,
            `यह इवेंट एक सफल नेटवर्किंग अवसर साबित हुआ।`,

            `कॉलेज के खेल के दौरान, दर्शकों ने ${generateRandomNumber(1, 9)} शानदार गोलों का गवाह बना,`,
            `हर एक खेल में नई ऊर्जा लाते हुए। खेल आखिरी मिनट तक रोमांचकारी बना रहा,`,
            `और भीड़ पूरी तरह से उत्साहित थी। मैच के बाद, खिलाड़ियों और प्रशंसकों दोनों ने जीत का जश्न मनाया।`
        ],

        "hard": [
            `सहयोगात्मक प्रयास में, ${generateRandomNumber(2, 10)} प्रमुख वैज्ञानिकों ने`,
            `मिलकर एक परियोजना पर काम किया, जिसका उद्देश्य वैश्विक ऊर्जा संकट का समाधान ढूंढना था।`,
            `उनके अनुसंधान से पता चला कि इस जटिल समस्या का सामना करने के लिए एक नए प्रकार की`,
            `सौर तकनीक को बढ़ावा देना आवश्यक था। परियोजना में कई अलग-अलग देशों का योगदान था,`,
            `और आखिरकार, इसका परिणाम एक स्थायी ऊर्जा स्रोत के रूप में सामने आया।`,

            `अंतरिक्ष एजेंसी ने घोषणा की कि उनका अगला मिशन ${generateRandomNumber(1, 20)} वर्षों में पहली बार`,
            `गहरे अंतरिक्ष की ओर एक मानवयुक्त यात्रा करेगा।`,
            `इस मिशन में अंतरिक्ष यात्रियों को ऐसी तकनीक का उपयोग करना पड़ेगा जो पहले कभी नहीं देखी गई।`,
            `लंबी तैयारी के बाद, मिशन सफलतापूर्वक शुरू हुआ और भविष्य की अंतरिक्ष यात्रा की संभावनाओं के लिए मार्ग प्रशस्त किया।`,

            `शहर में एक विशेष प्रदर्शनी आयोजित की गई, जिसमें ${generateRandomNumber(1, 50)} दुर्लभ कलाकृतियाँ`,
            `प्रदर्शित की गईं, जो विभिन्न ऐतिहासिक काल से संबंधित थीं।`,
            `प्रदर्शनी का उद्देश्य आम लोगों को इतिहास की समझ और`,
            `सांस्कृतिक धरोहरों की सराहना को बढ़ावा देना था। इस आयोजन में छात्रों और विद्वानों दोनों की बड़ी संख्या में भागीदारी देखी गई।`,

            `अंतर्राष्ट्रीय सम्मेलन में ${generateRandomNumber(3, 15)} देशों के प्रतिनिधियों ने`,
            `मिलकर जलवायु परिवर्तन पर एक नई संधि तैयार की।`,
            `यह संधि विभिन्न देशों द्वारा ग्रीनहाउस गैस उत्सर्जन को कम करने और`,
            `अक्षय ऊर्जा में निवेश को प्रोत्साहित करने के लिए बाध्यकारी कदम उठाएगी।`,
            `आखिरकार, इसे एक महत्वपूर्ण सफलता के रूप में माना गया, जिसने वैश्विक जलवायु वार्ता को एक नई दिशा दी।`
        ]
    },
    english: {
        "easy": [
            `Once upon a time, a curious cat discovered ${generateRandomNumber(1, 9)} hidden`,
            `Toys under the couch, much to its delight. The cat played`,
            `With them for hours, enjoying every moment. One day, the`,
            `Toys began to mysteriously move on their own, adding`,
            `An element of excitement to the cat's adventures.`,

            `On a sunny day, she went to the market and came`,
            `Back with ${generateRandomNumber(1, 20)} juicy apples, perfect for a pie. She`,
            `Shared the pie with her friends, and everyone was delighted.`,
            `They spent the afternoon playing games and talking about`,
            `their plans for the upcoming holidays.`,

            `As he walked through the park, he stumbled upon a`,
            `shiny coin worth ${generateRandomNumber(1, 99)} cents, which he happily pocketed.`,
            `He used the coin to buy a sweet treat from`,
            `the local shop. Later, he discovered that the coin`,
            `was a rare collectible, and he felt like a`,
            `lucky treasure hunter.`,

            `In the yard, the playful dog had a blast chasing`,
            `${generateRandomNumber(1, 5)} lively squirrels up the trees. The squirrels darted`,
            `around, making the dog bark and wag its tail`,
            `energetically. The entire neighborhood watched and enjoyed the playful`,
            `spectacle.`,

            `They sat at the bus stop, chatting and watching the`,
            `clock as they waited for ${generateRandomNumber(1, 60)} minutes for their ride.`,
            `To pass the time, they played a game and`,
            `laughed heartily. When the bus finally arrived, they were`,
            `excited to continue their journey to the amusement park.`,

            `The children built ${generateRandomNumber(1, 10)} sandcastles at the beach, each more`,
            `elaborate than the last. They decorated the castles with`,
            `seashells and bits of driftwood. As the tide came`,
            `in, they watched their creations gradually be swept away,`,
            `making a fun and memorable day at the beach.`,

            `Every morning, he fed ${generateRandomNumber(1, 7)} friendly birds that visited his`,
            `backyard. The birds chirped cheerfully and flew around him`,
            `as he scattered crumbs. He took great joy in`,
            `observing their daily visits and even set up a`,
            `small birdhouse to attract more of them.`,

            `She completed ${generateRandomNumber(1, 5)} puzzles over the weekend, enjoying each new`,
            `challenge. Each completed puzzle was displayed proudly on her`,
            `living room table. She also started working on a`,
            `large, complex puzzle that would take her several weeks`,
            `to finish.`,

            `In the summer of 2021, a family visited ${generateRandomNumber(1, 5)} amusement`,
            `parks, making unforgettable memories. Each park offered a unique`,
            `adventure that left them excited and thrilled. They captured`,
            `countless photos and shared their favorite experiences with friends`,
            `and family.`,

            `The little girl found ${generateRandomNumber(1, 15)} colorful marbles in the garden,`,
            `each with a different design. She spent the afternoon`,
            `sorting and admiring them. Later, she organized a marbles`,
            `trading event with her friends, making it a fun`,
            `social gathering.`,

            `He baked ${generateRandomNumber(1, 12)} batches of cookies for the neighborhood bake`,
            `sale, each batch featuring a different flavor. The cookies`,
            `were a hit, and he received many compliments. The`,
            `proceeds from the sale went to a local charity,`,
            `adding a sense of accomplishment to his baking.`,

            `During the holiday season, they decorated ${generateRandomNumber(1, 3)} Christmas`,
            `trees with lights and ornaments. Each tree had its`,
            `own special theme and brought joy to their home.`,
            `They also hosted a holiday party where they enjoyed`,
            `festive treats and exchanged gifts.`
        ],

        "medium": [
            `In the bustling classroom, there were ${generateRandomNumber(1, 100)} eager students,`,
            `all ready to learn and participate. The teacher prepared`,
            `exciting lessons to keep everyone engaged. During the week,`,
            `the students worked on a group project that showcased`,
            `their creativity and teamwork.`,

            `The eagerly awaited package was promised to arrive in`,
            `${generateRandomNumber(1, 7)} days, and the anticipation grew each day. Finally,`,
            `the package arrived, and it was filled with wonderful`,
            `surprises. The recipient immediately started using the items and`,
            `shared their excitement with friends.`,

            `During the game night, he celebrated his victory after`,
            `scoring ${generateRandomNumber(1, 100)} impressive points. The scoreboard displayed his name`,
            `at the top, and everyone cheered for him. He`,
            `also received a special trophy for his outstanding performance.`,

            `The chef’s special recipe required ${generateRandomNumber(1, 4)} cups of flour,`,
            `which he measured carefully to ensure perfect results. The`,
            `delicious aroma filled the kitchen as the cake baked.`,
            `He then served the cake at a family gathering,`,
            `where it was the highlight of the dessert table.`,

            `After a long day of work, she managed to`,
            `complete her project in ${generateRandomNumber(1, 24)} hours, feeling a great`,
            `sense of accomplishment. Her efforts paid off, and her`,
            `boss was impressed. She celebrated her success with a`,
            `relaxing evening and a movie marathon.`,

            `The adventure park had ${generateRandomNumber(10, 30)} different attractions, each offering`,
            `a unique thrill. From roller coasters to water slides,`,
            `there was something for everyone. The park also had`,
            `a special fireworks show that concluded the day with`,
            `a spectacular display.`,

            `To prepare for the big presentation, he practiced ${generateRandomNumber(1, 10)}`,
            `times to perfect his speech. On the day of`,
            `the presentation, he delivered it flawlessly and confidently. His`,
            `hard work and dedication were acknowledged with a standing`,
            `ovation from the audience.`,

            `The local theater showcased ${generateRandomNumber(1, 5)} different plays this season,`,
            `each with its own unique story and cast. The`,
            `theater-goers enjoyed a variety of performances throughout the year.`,
            `They also participated in a post-show discussion, gaining deeper`,
            `insights into the plays.`,

            `In the year 2023, a tech conference featured ${generateRandomNumber(5, 20)}`,
            `innovative startups showcasing their groundbreaking products. Attendees were`,
            `amazed by the latest advancements in technology. The conference`,
            `also included workshops and keynote speeches from industry leaders.`,

            `She volunteered ${generateRandomNumber(10, 30)} hours at the community center over the`,
            `summer, helping with various activities and events. Her dedication`,
            `made a positive impact on the local community. She`,
            `organized a fundraising event that raised significant funds for`,
            `community projects.`,

            `During their vacation, they explored ${generateRandomNumber(3, 7)} historical landmarks,`,
            `each with its own fascinating story. The trip was`,
            `both educational and enjoyable for everyone. They ended their`,
            `journey with a scenic boat tour that offered breathtaking`,
            `views of the region.`,

            `The garden bloomed with ${generateRandomNumber(15, 40)} vibrant flowers this spring,`,
            `transforming the backyard into a colorful paradise. Each flower`,
            `added to the beauty of the landscape. They also`,
            `planted a vegetable garden, which provided fresh produce for`,
            `the summer.`
        ],

        "hard": [
            `The company's annual report highlighted a staggering revenue of`,
            `$${generateRandomNumber(1000, 9999)}, marking a successful year. The growth in revenue`,
            `was celebrated with a grand company event. The event`,
            `featured a gala dinner, speeches from key executives, and`,
            `a showcase of the company's achievements.`,

            `As he delved into the book, he realized there`,
            `were ${generateRandomNumber(10, 99)} fascinating chapters waiting to be explored. Each`,
            `chapter offered new insights and thrilling narratives. The book`,
            `became a topic of discussion in his book club,`,
            `where they analyzed its themes and characters.`,

            `Determined to grow his wealth, he invested a hefty`,
            `amount of $${generateRandomNumber(10000, 99999)} in the unpredictable stock market. Over`,
            `time, his investment strategy proved to be highly successful.`,
            `He shared his investment journey in a financial seminar,`,
            `offering tips to aspiring investors.`,

            `The marathon event was grueling but rewarding, spanning ${generateRandomNumber(1, 26)}.2`,
            `miles, pushing every runner to their limits. Crossing the`,
            `finish line was a triumphant moment for all participants.`,
            `The event raised funds for charity, and runners received`,
            `medals and certificates of achievement.`,

            `For her challenging exam, she needed to memorize ${generateRandomNumber(1, 50)}`,
            `different formulas, dedicating hours to her study. Her hard`,
            `work paid off with excellent results on the exam.`,
            `She was awarded a scholarship for her outstanding performance,`,
            `which opened new academic opportunities for her.`,

            `The high-tech gadget, priced at $${generateRandomNumber(500, 2000)}, offered cutting-edge`,
            `features and innovations. It quickly became a must-have item`,
            `for tech enthusiasts. The gadget was featured in numerous`,
            `reviews and tech blogs, highlighting its advanced capabilities and`,
            `sleek design.`,

            `In the prestigious art gallery, ${generateRandomNumber(20, 50)} stunning paintings`,
            `were displayed, each showcasing unique styles and techniques. Art`,
            `lovers admired the collection for its diversity and beauty.`,
            `The gallery hosted special events with the artists, allowing`,
            `visitors to engage directly with them.`,

            `The complex engineering project involved ${generateRandomNumber(5, 15)} distinct stages,`,
            `each requiring meticulous planning and execution. The successful`,
            `completion of the project was a testament to the team's`,
            `dedication and expertise. The project received industry awards for`,
            `its innovation and efficiency.`,

            `In the year 2025, the international science fair featured`,
            `${generateRandomNumber(50, 100)} groundbreaking projects from students around the world.`,
            `The innovative ideas sparked conversations and inspired future`,
            `scientists. The fair also included panel discussions with renowned`,
            `scientists and educators.`,

            `The historical documentary explored ${generateRandomNumber(8, 15)} significant events`,
            `of the 20th century, providing in-depth analysis and fascinating`,
            `details. Viewers gained a deeper understanding of history through`,
            `the film. The documentary was praised for its thorough`,
            `research and compelling storytelling.`,

            `The elite culinary competition showcased ${generateRandomNumber(5, 12)} top chefs`,
            `from around the globe, each presenting their signature dishes.`,
            `The competition was intense, and the judges had a`,
            `tough time choosing the winner. The event was broadcasted`,
            `live, attracting a global audience of food enthusiasts.`,

            `The research team discovered ${generateRandomNumber(3, 7)} new species of`,
            `plants in the remote rainforest, each with unique properties.`,
            `The findings were published in a prestigious scientific journal`,
            `and garnered widespread attention. The research contributed valuable`,
            `knowledge to the field of botany and conservation.`
        ]
    },
};




