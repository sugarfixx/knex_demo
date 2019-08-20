
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
          {
              "id": 1,
              "author_id": 1,
              "quote": "In the course of my life I have often had to eat my words, and I must confess that I have always found it a wholesome diet."
          },
          {
              "id": 2,
              "author_id": 1,
              "quote": "Every man should ask himself each day whether he is not too readily accepting negative solutions."
          },
          {
              "id": 3,
              "author_id": 1,
              "quote": "It is wonderful what great strides can be made when there is a resolute purpose behind them."
          },
          {
              "id": 4,
              "author_id": 1,
              "quote": "The first duty of the university is to teach wisdom, not a trade, character, not technicalities. We want a lot of engineers in the modern world, but we do not want a world of engineers."
          },
          {
              "id": 5,
              "author_id": 1,
              "quote": "In finance, everything that is agreeable is unsound and everything that is sound is disagreeable."
          },
          {
              "id": 6,
              "author_id": 1,
              "quote": "All I can say is that I have taken more out of alcohol than alcohol has taken out of me."
          },
          {
              "id": 7,
              "author_id": 1,
              "quote": "This is the lesson: never give in, never give in, never, never, never, never \u2014 in nothing, great or small, large or petty \u2014 never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy."
          },
          {
              "id": 8,
              "author_id": 1,
              "quote": "The greatest lesson in life is to know that even fools are right sometimes."
          },
          {
              "id": 9,
              "author_id": 1,
              "quote": "All the greatest things are simple, and many can be expressed in a single word: freedom; justice; honour; duty; mercy; hope."
          },
          {
              "id": 10,
              "author_id": 1,
              "quote": "The whole history of the world is summed up in the fact that when nations are strong they are not always just, and when they wish to be just, they are often no longer strong."
          },
          {
              "id": 11,
              "author_id": 1,
              "quote": "I like pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals."
          },
          {
              "id": 12,
              "author_id": 1,
              "quote": "If we open a quarrel between the past and the present we shall find that we have lost the future."
          },
          {
              "id": 13,
              "author_id": 1,
              "quote": "It is a mistake to try to look too far ahead. The chain of destiny can only be grasped one link at a time."
          },
          {
              "id": 14,
              "author_id": 1,
              "quote": "It\u2019s not enough that we do our best; sometimes we have to do what\u2019s required."
          },
          {
              "id": 15,
              "author_id": 1,
              "quote": "The problems of victory are more agreeable than those of defeat, but they are no less difficult."
          },
          {
              "id": 16,
              "author_id": 1,
              "quote": "When the eagles are silent, the parrots begin to jabber."
          },
          {
              "id": 17,
              "author_id": 1,
              "quote": "Out of intense complexities, intense simplicities emerge."
          },
          {
              "id": 18,
              "author_id": 1,
              "quote": "Courage is what it takes to stand up and speak, it\u2019s also what it takes to sit down and listen."
          },
          {
              "id": 19,
              "author_id": 1,
              "quote": "Continuous effort \u2013 not strength or intelligence \u2013 is the key to unlocking our potential."
          },
          {
              "id": 20,
              "author_id": 1,
              "quote": "If you have an important point to make, don\u2019t try to be subtle or clever. Use a pile driver. Hit the point once. Then come back and hit it again. Then hit it a third time-a tremendous whack."
          },
          {
              "id": 21,
              "author_id": 1,
              "quote": "It is a good thing for an uneducated man to read books of quotations."
          },
          {
              "id": 22,
              "author_id": 1,
              "quote": "There are a terrible lot of lies going about the world, and the worst of it is that half of them are true."
          },
          {
              "id": 23,
              "author_id": 1,
              "quote": "To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day."
          },
          {
              "id": 24,
              "author_id": 1,
              "quote": "To improve is to change, so to be perfect is to change often."
          },
          {
              "id": 25,
              "author_id": 1,
              "quote": "The farther backward you can look, the farther forward you are likely to see."
          },
          {
              "id": 26,
              "author_id": 1,
              "quote": "The price of greatness is responsibility."
          },
          {
              "id": 27,
              "author_id": 1,
              "quote": "Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing ever happened."
          },
          {
              "id": 28,
              "author_id": 1,
              "quote": "Never hold discussions with the monkey when the organ grinder is in the room."
          },
          {
              "id": 29,
              "author_id": 1,
              "quote": "One ought never to turn one\u2019s back on a threatened danger and try to run away from it. If you do that, you will double the danger. But if you meet it promptly and without flinching, you will reduce the danger by half."
          },
          {
              "id": 30,
              "author_id": 1,
              "quote": "Personally I\u2019m always ready to learn, although I do not always like being taught."
          },
          {
              "id": 31,
              "author_id": 1,
              "quote": "Success is the ability to go from one failure to another with no loss of enthusiasm."
          },
          {
              "id": 32,
              "author_id": 1,
              "quote": "Broadly speaking short words are best and the old words when short, are best of all."
          },
          {
              "id": 33,
              "author_id": 1,
              "quote": "Courage is rightly esteemed the first of human qualities because it has been said, it is the quality which guarantees all others."
          },
          {
              "id": 34,
              "author_id": 1,
              "quote": "Every day you may make progress. Every step may be fruitful. Yet there will stretch out before you an ever-lengthening, ever-ascending, ever-improving path. You know you will never get to the end of the journey. But this, so far from discouraging, only adds to the joy and glory of the climb."
          },
          {
              "id": 35,
              "author_id": 1,
              "quote": "History will be kind to me for I intend to write it."
          },
          {
              "id": 36,
              "author_id": 1,
              "quote": "Attitude is a little thing that makes a BIG difference."
          },
          {
              "id": 37,
              "author_id": 1,
              "quote": "Success is not final, failure is not fatal, it is the courage to continue that counts."
          },
          {
              "id": 38,
              "author_id": 1,
              "quote": "If you\u2019re going through hell, keep going."
          },
          {
              "id": 39,
              "author_id": 1,
              "quote": "Everyone has his day, and some days last longer than others."
          },
          {
              "id": 40,
              "author_id": 1,
              "quote": "You have enemies? Good. It means you\u2019ve stood up for something, sometime in your life."
          },
          {
              "id": 41,
              "author_id": 1,
              "quote": "Politics is the ability to foretell what is going to happen tomorrow, next week, next month and next year. And to have the ability afterwards to explain why it didn\u2019t happen."
          },
          {
              "id": 42,
              "author_id": 1,
              "quote": "Those who can win a war well can rarely make a good peace, and those who could make a good peace would never have won the war."
          },
          {
              "id": 43,
              "author_id": 1,
              "quote": "If you will not fight for right when you can easily win without blood shed; if you will not fight when your victory is sure and not too costly; you may come to the moment when you will have to fight with all the odds against you and only a precarious chance of survival. There may even be a worse case. You may have to fight when there is no hope of victory, because it is better to perish than to live as slaves."
          },
          {
              "id": 44,
              "author_id": 1,
              "quote": "Never, never, never believe any war will be smooth and easy, or that anyone who embarks on the strange voyage can measure the tides and hurricanes he will encounter. The statesman who yields to war fever must realize that once the signal is given, he is no longer the master of policy but the slave of unforeseeable and uncontrollable events."
          },
          {
              "id": 45,
              "author_id": 1,
              "quote": "We shape our dwellings, and afterwards our dwellings shape us."
          },
          {
              "id": 46,
              "author_id": 1,
              "quote": "We shall not fail or falter. We shall not weaken or tire. Neither the sudden shock of battle nor the long-drawn trials of vigilance and exertion will wear us down. Give us the tools and we will finish the job."
          },
          {
              "id": 47,
              "author_id": 1,
              "quote": "What is adequacy? Adequacy is no standard at all."
          },
          {
              "id": 48,
              "author_id": 1,
              "quote": "There is always much to be said for not attempting more than you can do and for making a certainty of what you try. But this principle, like others in life and war, has it exceptions."
          },
          {
              "id": 49,
              "author_id": 1,
              "quote": "There is only one duty, only one safe course, and that is to try to be right and not to fear to do or say what you believe to be right."
          },
          {
              "id": 50,
              "author_id": 2,
              "quote": "Float like a butterfly, sting like a bee. His hands can't hit what his eyes can't see. Now you see me, now you don't. George thinks he will, but I know he won't."
          },
          {
              "id": 51,
              "author_id": 2,
              "quote": "Service to others is the rent you pay for your room here on earth."
          },
          {
              "id": 52,
              "author_id": 2,
              "quote": "I'm young; I'm handsome; I'm fast. I can't possibly be beat."
          },
          {
              "id": 53,
              "author_id": 2,
              "quote": "Don\u2019t count the days; make the days count."
          },
          {
              "id": 54,
              "author_id": 2,
              "quote": "If my mind can conceive it, and my heart can believe it\u2014then I can achieve it."
          },
          {
              "id": 55,
              "author_id": 2,
              "quote": "It's hard to be humble when you're as great as I am."
          },
          {
              "id": 56,
              "author_id": 2,
              "quote": "It isn\u2019t the mountains ahead to climb that wear you out; it\u2019s the pebble in your shoe."
          },
          {
              "id": 57,
              "author_id": 2,
              "quote": "If you even dream of beating me you'd better wake up and apologize."
          },
          {
              "id": 58,
              "author_id": 2,
              "quote": "Braggin' is when a person says something and can\u2019t do it. I do what I say."
          },
          {
              "id": 59,
              "author_id": 2,
              "quote": "I am the greatest, I said that even before I knew I was."
          },
          {
              "id": 60,
              "author_id": 2,
              "quote": "Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even."
          },
          {
              "id": 61,
              "author_id": 2,
              "quote": "I'm so mean, I make medicine sick."
          },
          {
              "id": 62,
              "author_id": 2,
              "quote": "I should be a postage stamp. That's the only way I'll ever get licked."
          },
          {
              "id": 63,
              "author_id": 2,
              "quote": "Impossible is just a big word thrown around by small men who find it easier to live in the world they\u2019ve been given than to explore the power they have to change it. Impossible is not a fact. It\u2019s an opinion. Impossible is not a declaration. It\u2019s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing."
          },
          {
              "id": 64,
              "author_id": 2,
              "quote": "He who is not courageous enough to take risks will accomplish nothing in life."
          },
          {
              "id": 65,
              "author_id": 2,
              "quote": "A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life."
          },
          {
              "id": 66,
              "author_id": 2,
              "quote": "If they can make penicillin out of moldy bread, they can sure make something out of you."
          },
          {
              "id": 67,
              "author_id": 2,
              "quote": "I shook up the world. Me! Whee!"
          },
          {
              "id": 68,
              "author_id": 2,
              "quote": "I hated every minute of training, but I said, \u2018Don\u2019t quit. Suffer now and live the rest of your life as a champion."
          },
          {
              "id": 69,
              "author_id": 2,
              "quote": "At home I am a nice guy: but I don\u2019t want the world to know. Humble people, I\u2019ve found, don\u2019t get very far."
          },
          {
              "id": 70,
              "author_id": 2,
              "quote": "A man who has no imagination has no wings."
          },
          {
              "id": 71,
              "author_id": 2,
              "quote": "He\u2019s (Sonny Liston) too ugly to be the world champ. The world champ should be pretty like me!"
          },
          {
              "id": 72,
              "author_id": 2,
              "quote": "I am the astronaut of boxing. Joe Louis and Dempsey were just jet pilots. I'm in a world of my own."
          },
          {
              "id": 73,
              "author_id": 2,
              "quote": "I\u2019ve wrestled with alligators. I\u2019ve tussled with a whale. I done handcuffed lightning. And throw thunder in jail."
          },
          {
              "id": 74,
              "author_id": 2,
              "quote": "Hating people because of their color is wrong. And it doesn't matter which color does the hating. It's just plain wrong."
          },
          {
              "id": 75,
              "author_id": 2,
              "quote": "It\u2019s not bragging if you can back it up."
          },
          {
              "id": 76,
              "author_id": 2,
              "quote": "I'm the most recognized and loved man that ever lived cuz there weren't no satellites when Jesus and Moses were around, so people far away in the villages didn't know about them."
          },
          {
              "id": 77,
              "author_id": 2,
              "quote": "It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up."
          },
          {
              "id": 78,
              "author_id": 2,
              "quote": "I\u2019m not the greatest, I\u2019m the double greatest."
          },
          {
              "id": 79,
              "author_id": 2,
              "quote": "Live everyday as if it were your last because someday you're going to be right."
          }
      ]);
    });
};
