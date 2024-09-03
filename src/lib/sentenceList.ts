const generateRandomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
 
export const sentenceList = {
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
};




 