export function seedDatabase(firebase) {
  function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
  }

  /* Series
    ============================================ */

  // Documentaries
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Tiger King',
    description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
    genre: 'documentaries',
    maturity: '18',
    slug: 'tiger-king',
    url: 'https://www.youtube.com/watch?v=acTdxsoa428',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Amanda Knox',
    description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
    genre: 'documentaries',
    maturity: '12',
    slug: 'amanda-knox',
    url: 'https://www.youtube.com/watch?v=mRLt2xBpQbQ',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Citizenfour',
    description:
      'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
    genre: 'documentaries',
    maturity: '12',
    slug: 'citizenfour',
    url: 'https://www.youtube.com/watch?v=XiGwAvd5mvM',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Super Size Me',
    description:
      "Director Morgan Spurlock's social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds",
    genre: 'documentaries',
    maturity: '12',
    slug: 'super-size-me',
    url: 'https://www.youtube.com/watch?v=GRPSeVyrd68',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Man on Wire',
    description:
      "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
    genre: 'documentaries',
    maturity: '12',
    slug: 'man-on-wire',
    url: 'https://www.youtube.com/watch?v=Cz6oddi0mts',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'I am a Killer',
    description: 'Death row inmates convicted of capital murder give firsthand accounts of their crimes in this documentary series.',
    genre: 'documentaries',
    maturity: '18',
    slug: 'i-am-a-killer',
    url: 'https://www.youtube.com/watch?v=57au_a4PqG4',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Last Dance',
    description: 'This documentary chronicles the rise of superstar Michael Jordan and the 1990s Chicago Bulls, with unaired footage from an unforgettable 1997-1998 season.',
    genre: 'documentaries',
    maturity: '15',
    slug: 'the-last-dance',
    url: 'https://www.youtube.com/watch?v=JQk2hJs2ToA',
  });

  // Comedies
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Office',
    description:
      'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
    genre: 'comedies',
    maturity: '15',
    slug: 'the-office',
    url: 'https://www.youtube.com/watch?v=2iKZmRR9AR4',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The IT Crowd',
    description:
      'The comedic misadventures of Roy, Moss and their grifting supervisor Jen, a rag-tag team of IT support workers at a large corporation headed by a hotheaded yuppie.',
    genre: 'comedies',
    maturity: '14',
    slug: 'it-crowd',
    url: 'https://www.youtube.com/watch?v=MwwTfkXk7U0',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Arrested Development',
    description:
      'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
    genre: 'comedies',
    maturity: '15',
    slug: 'arrested-development',
    url: 'https://www.youtube.com/watch?v=vzVhPCMAxWQ',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Curb Your Enthusiasm',
    description:
      'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
    genre: 'comedies',
    maturity: '15',
    slug: 'curb-your-enthusiasm',
    url: 'https://www.youtube.com/watch?v=u7bnE6XiOEQ',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Family Guy',
    description:
      'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
    genre: 'comedies',
    maturity: '15',
    slug: 'family-guy',
    url: 'https://www.youtube.com/watch?v=Le1x2To-e6g',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'South Park',
    description:
      'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
    genre: 'comedies',
    maturity: '15',
    slug: 'south-park',
    url: 'https://www.youtube.com/watch?v=tsD0CNTDKQA',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Friends',
    description:
      'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
    genre: 'comedies',
    maturity: '14',
    slug: 'friends',
    url: 'https://www.youtube.com/watch?v=sLisEEwYZvw',
  });

  // Children
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Peppa Pig',
    description:
      'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
    genre: 'children',
    maturity: '0',
    slug: 'peppa-pig',
    url: 'https://www.youtube.com/watch?v=1vWXktXvZr8',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dora The Explorer',
    description:
      'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
    genre: 'children',
    maturity: '0',
    slug: 'dora-the-explorer',
    url: 'https://www.youtube.com/watch?v=E9rx1TnmTSo',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'PAW Patrol',
    description:
      'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
    genre: 'children',
    maturity: '0',
    slug: 'paw-patrol',
    url: 'https://www.youtube.com/watch?v=169jD2LiH1A',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Arthur',
    description:
      'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
    genre: 'children',
    maturity: '0',
    slug: 'arthur',
    url: 'https://www.youtube.com/watch?v=f6Avg5QuWTw',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'SpongeBob',
    description:
      'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean.',
    genre: 'children',
    maturity: '0',
    slug: 'spongebob',
    url: 'https://www.youtube.com/watch?v=1WwAodx7jhw',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dragon Ball Z',
    description:
      'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.',
    genre: 'children',
    maturity: '0',
    slug: 'dragon-ball-z',
    url: 'https://www.youtube.com/watch?v=pcmgtgya-fw',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Smurfs',
    description:
      'The Smurfs are little blue creatures that live in mushroom houses in a forest inhabited mainly by their own kind. The smurfs average daily routine is attempting to avoid Gargomel, an evil man who wants to kill our little blue friends.',
    genre: 'children',
    maturity: '0',
    slug: 'the-smurfs',
    url: 'https://www.youtube.com/watch?v=gQMwc-lALC0',
  });

  // Crime
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Making a Murderer',
    description:
      'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
    genre: 'crime',
    maturity: '18',
    slug: 'making-a-murderer',
    url: 'https://www.youtube.com/watch?v=qxgbdYaR_KQ',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Long Shot',
    description:
      'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
    genre: 'crime',
    maturity: '18',
    slug: 'long-shot',
    url: 'https://www.youtube.com/watch?v=PDxISykYRc4',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Confession Killer',
    description:
      "Henry Lee Lucas was known as America's most prolific serial killer, admitting to hundreds of murders, but, as DNA results contradict his confessions, will they expose the biggest criminal justice hoax in US history?",
    genre: 'crime',
    maturity: '18',
    slug: 'the-confession-killer',
    url: 'https://www.youtube.com/watch?v=mWPbC9Fp-yk',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Innocent Man',
    description:
      "The story of Ron Williamson, a man who sat on Oklahoma's death row for 11 years for a crime he didn't commit.",
    genre: 'crime',
    maturity: '18',
    slug: 'the-innocent-man',
    url: 'https://www.youtube.com/watch?v=4LYiAEV_XnA',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Staircase',
    description:
      "In 2001 novelist Michael Peterson's wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon",
    genre: 'crime',
    maturity: '18',
    slug: 'the-staircase',
    url: 'https://www.youtube.com/watch?v=Bvv97sCcruY',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'True Detective',
    description:
      "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    genre: 'crime',
    maturity: '18',
    slug: 'true-detective',
    url: 'https://www.youtube.com/watch?v=fVQUcaO4AvE',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Sinner',
    description:
      "Anthology series that examines how and why ordinary people commit brutal crimes.",
    genre: 'crime',
    maturity: '18',
    slug: 'the-sinner',
    url: 'https://www.youtube.com/watch?v=eOGAhuyHgac',
  });

  // Mysteries
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Twin Peaks',
    description:
      'An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.',
    genre: 'mysteries',
    maturity: '18',
    slug: 'twin-peaks',
    url: 'https://www.youtube.com/watch?v=Zwn9ou_nf-I',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dark',
    description:
      'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    genre: 'mysteries',
    maturity: '18',
    slug: 'dark',
    url: 'https://www.youtube.com/watch?v=ESEUoa-mz2c',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Riverdale',
    description:
      'While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.',
    genre: 'mysteries',
    maturity: '14',
    slug: 'riverdale',
    url: 'https://www.youtube.com/watch?v=HxtLlByaYTc',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Mindhunter',
    description:
      "Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.",
    genre: 'mysteries',
    maturity: '18',
    slug: 'mindhunter',
    url: 'https://www.youtube.com/watch?v=LR3G1lWbnUU',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Glitch',
    description:
      "Six people return from the dead with no memory and attempt to unveil what brought them to the grave in the first place.",
    genre: 'mysteries',
    maturity: '12',
    slug: 'glitch',
    url: 'https://www.youtube.com/watch?v=pYub7xwhWYg&t=2s',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: '13 Reasons Why',
    description:
      "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
    genre: 'mysteries',
    maturity: '18',
    slug: '13-reasons-why',
    url: 'https://www.youtube.com/watch?v=0XuOkYlUWIs',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Sinner',
    description:
      "Anthology series that examines how and why ordinary people commit brutal crimes.",
    genre: 'mysteries',
    maturity: '18',
    slug: 'the-sinner',
    url: 'https://www.youtube.com/watch?v=eOGAhuyHgac',
  });

  // Thrillers
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Banshee',
    description:
      'An ex-con assumes the identity of a murdered sheriff in the small town of Banshee, Pennsylvania; where he has some unfinished business.',
    genre: 'thriller',
    maturity: '18',
    slug: 'banshee',
    url: 'https://www.youtube.com/watch?v=VI7haj7HTCA',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Black Mirror',
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    genre: 'thriller',
    maturity: '18',
    slug: 'black-mirror',
    url: 'https://www.youtube.com/watch?v=V0XOApF5nLU',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Breaking Bad',
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    genre: 'thriller',
    maturity: '18',
    slug: 'breaking-bad',
    url: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Money Heist',
    description:
      "The professor recuits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.",
    genre: 'thriller',
    maturity: '18',
    slug: 'money-heist',
    url: 'https://www.youtube.com/watch?v=fvCdLmxnkj0',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Mr. Robot',
    description:
      "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    genre: 'thriller',
    maturity: '18',
    slug: 'mr-robot',
    url: 'https://www.youtube.com/watch?v=xIBiJ_SzJTA',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Prison Break',
    description:
      "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside",
    genre: 'thriller',
    maturity: '18',
    slug: 'prison-break',
    url: 'https://www.youtube.com/watch?v=AL9zLctDJaU',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The X-Files',
    description:
      "Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts",
    genre: 'thriller',
    maturity: '14',
    slug: 'the-x-files',
    url: 'https://www.youtube.com/watch?v=Xcf44Nit7_A',
  });

  /* Films
    ============================================ */

  // Drama
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Green Mile',
    description:
      'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
    genre: 'drama',
    maturity: '18',
    slug: 'the-green-mile',
    url: 'https://www.youtube.com/watch?v=Ki4haFrqSrw',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Prestige',
    description:
      'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-prestige',
    url: 'https://www.youtube.com/watch?v=ObGVA1WOqyE',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Fight Club',
    description:
      'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
    genre: 'drama',
    maturity: '15',
    slug: 'fight-club',
    url: 'https://www.youtube.com/watch?v=qtRKdVHc-cE',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Scarface',
    description:
      'In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
    genre: 'drama',
    maturity: '18',
    slug: 'scarface',
    url: 'https://www.youtube.com/watch?v=7pQQHnqBa2E',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Kings Speech',
    description:
      'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
    genre: 'drama',
    maturity: '15',
    slug: 'kings-speech',
    url: 'https://www.youtube.com/watch?v=gSw6ei5tdbg',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Revenant',
    description:
      'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
    genre: 'drama',
    maturity: '15',
    slug: 'the-revenant',
    url: 'https://www.youtube.com/watch?v=LoebZZ8K5N0',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Social Network',
    description:
      'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
    genre: 'drama',
    maturity: '12',
    slug: 'the-social-network',
    url: 'https://www.youtube.com/watch?v=lB95KLmpLR4',
  });

  // Suspense
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Shutter Island',
    description:
      'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
    genre: 'suspense',
    maturity: '15',
    slug: 'shutter-island',
    url: 'https://www.youtube.com/watch?v=v8yrZSkKxTA',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: 'suspense',
    maturity: '12',
    slug: 'inception',
    url: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Number 23',
    description:
      'Walter Sparrow becomes obsessed with a novel that he believes was written about him, as more and more similarities between himself and his literary alter ego seem to arise.',
    genre: 'suspense',
    maturity: '12',
    slug: 'the-number-23',
    url: 'https://www.youtube.com/watch?v=TUTlOC4mVQ8',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Prisoners',
    description:
      "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
    genre: 'suspense',
    maturity: '15',
    slug: 'prisoners',
    url: 'https://www.youtube.com/watch?v=bpXfcTF6iVk',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Seven',
    description:
      'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
    genre: 'suspense',
    maturity: '15',
    slug: 'seven',
    url: 'https://www.youtube.com/watch?v=znmZoVkCjpI',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Zodiac',
    description:
      'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
    genre: 'suspense',
    maturity: '15',
    slug: 'zodiac',
    url: 'https://www.youtube.com/watch?v=yNncHPl1UXg',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Gone Girl',
    description:
      'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
    genre: 'suspense',
    maturity: '15',
    slug: 'gone-girl',
    url: 'https://www.youtube.com/watch?v=2-_-1nJf8Vg',
  });

  // Children
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Hotel Transylvania',
    description:
      'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
    genre: 'children',
    maturity: '0',
    slug: 'hotel-transylvania',
    url: 'https://www.youtube.com/watch?v=q4RK3jY7AVk',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Despicable Me',
    description:
      'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
    genre: 'children',
    maturity: '0',
    slug: 'despicable-me',
    url: 'https://www.youtube.com/watch?v=sUkZFetWYY0',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Frozen',
    description:
      'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
    genre: 'children',
    maturity: '0',
    slug: 'frozen',
    url: 'https://www.youtube.com/watch?v=TbQm5doF_Uc',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Spirited Away',
    description:
      'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
    genre: 'children',
    maturity: '0',
    slug: 'spirited-away',
    url: 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Up',
    description:
      "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    genre: 'children',
    maturity: '0',
    slug: 'up',
    url: 'https://www.youtube.com/watch?v=pkqzFUhGPJg',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Shrek',
    description:
      'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.',
    genre: 'children',
    maturity: '0',
    slug: 'shrek',
    url: 'https://www.youtube.com/watch?v=CwXOrWvPBPk',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Boss Baby',
    description:
      'A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.',
    genre: 'children',
    maturity: '0',
    slug: 'the-boss-baby',
    url: 'https://www.youtube.com/watch?v=k397HRbTtWI',
  });

  // Thriller
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Butterfly Effect',
    description:
      'Evan Treborn suffers blackouts during significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life by reading his journal.',
    genre: 'thriller',
    maturity: '15',
    slug: 'the-butterfly-effect',
    url: 'https://www.youtube.com/watch?v=B8_dgqfPXFg',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: '8mm',
    description:
      'A private investigator is hired to discover if a "snuff film" is authentic or not.',
    genre: 'thriller',
    maturity: '15',
    slug: '8mm',
    url: 'https://www.youtube.com/watch?v=gLhQ8bMx7Bs',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Nightcrawler',
    description:
      'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
    genre: 'thriller',
    maturity: '15',
    slug: 'nightcrawler',
    url: 'https://www.youtube.com/watch?v=u1uP_8VJkDQ',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Silence of The Lambs',
    description:
      'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
    genre: 'thriller',
    maturity: '15',
    slug: 'the-silence-of-the-lambs',
    url: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Joker',
    description:
      'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
    genre: 'thriller',
    maturity: '15',
    slug: 'joker',
    url: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Black Swan',
    description:
      'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
    genre: 'thriller',
    maturity: '15',
    slug: 'black-swan',
    url: 'https://www.youtube.com/watch?v=B7nU1RCkrnQ',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'A Quiet Place',
    description:
      'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
    genre: 'thriller',
    maturity: '15',
    slug: 'a-quiet-place',
    url: 'https://www.youtube.com/watch?v=WR7cc5t7tv8',
  });

  // Romance
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Eternal Sunshine of the Spotless Mind',
    description:
      'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.',
    genre: 'romance',
    maturity: '15',
    slug: 'eternal-sunshine-of-the-spotless-mind',
    url: 'https://www.youtube.com/watch?v=yE-f1alkq9I',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Seven Pounds',
    description:
      'A man with a fateful secret embarks on an extraordinary journey of redemption by forever changing the lives of seven strangers.',
    genre: 'romance',
    maturity: '12',
    slug: 'seven-pounds',
    url: 'https://www.youtube.com/watch?v=zdMpeO5G4OQ',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'A Star Is Born',
    description:
      'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
    genre: 'romance',
    maturity: '15',
    slug: 'a-star-is-born',
    url: 'https://www.youtube.com/watch?v=nSbzyEJ8X9E',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Blue Valentine',
    description:
      'Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
    genre: 'romance',
    maturity: '15',
    slug: 'blue-valentine',
    url: 'https://www.youtube.com/watch?v=aILx69WrRhQ',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La La Land',
    description:
      'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
    genre: 'romance',
    maturity: '15',
    slug: 'la-la-land',
    url: 'https://www.youtube.com/watch?v=0pdqf4P9MB8',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Notebook',
    description:
      "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer's, on a daily basis out of his notebook.",
    genre: 'romance',
    maturity: '15',
    slug: 'the-notebook',
    url: 'https://www.youtube.com/watch?v=yDJIcYE32NU',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Titanic',
    description:
      'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
    genre: 'romance',
    maturity: '15',
    slug: 'titanic',
    url: 'https://www.youtube.com/watch?v=ZQ6klONCq4s',
  });

  // Feel-Good
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'The Shawshank Redemption',
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: 'feel-good',
    maturity: '12',
    slug: 'the-shawshank-redemption',
    url: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Intouchables',
    description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    genre: 'feel-good',
    maturity: '12',
    slug: 'intouchables',
    url: 'https://www.youtube.com/watch?v=oK5hMNxqsFA',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Forrest Gump',
    description:
      'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
    genre: 'feel-good',
    maturity: '12',
    slug: 'forrest-gump',
    url: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Good Will Hunting',
    description:
      'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
    genre: 'feel-good',
    maturity: '12',
    slug: 'good-will-hunting',
    url: 'https://www.youtube.com/watch?v=nH9LZOXBMUE',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'School of Rock',
    description:
      "Dewey Finn, an amateur rock enthusiast, slyly takes up his friend's substitute teacher's job. Bearing no qualifications for it, he instead starts training the students to form a band.",
    genre: 'feel-good',
    maturity: '12',
    slug: 'school-of-rock',
    url: 'https://www.youtube.com/watch?v=TExoc0MG4I4',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Juno',
    description:
      "Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby's adoptive parents than she expected.",
    genre: 'feel-good',
    maturity: '12',
    slug: 'juno',
    url: 'https://www.youtube.com/watch?v=K0SKf0K3bxg',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Midnight In Paris',
    description:
      'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
    genre: 'feel-good',
    maturity: '12',
    slug: 'midnight-in-paris',
    url: 'https://www.youtube.com/watch?v=FAfR8omt-CY',
  });
}
