const mongoose = require("mongoose");
const { Schema } = mongoose;
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
});
module.exports.movie = {
  movieTv: [
    {
      title: "Bad Boys II",
      id: "m1",
      synopsis:
        "The drug ecstasy is flowing into Miami, and the police want it stopped. Police Detective Marcus Burnett (Martin Lawrence) and his partner, Mike Lowrey (Will Smith), are just the men to do it. They track the drugs to a Cuban smuggler, Johnny Tapia (Jordi Mollà), who is also involved in a bloody war with Russian and Haitian mobsters. If that isn't bad enough, there's tension between the two cops because Lowrey is romantically involved with Burnett's sister, Syd (Gabrielle Union).",
      watched: 100000,
      released: new Date("July 18, 2003").getTime(),
      added: new Date("July 18, 2010").getTime(),
      smallPosterImg: "/img/BadBoysCover.jpeg",
      largePosterImg: "/img/BadBoysLargePoster.jpg",
      genre: ["Action", "Comedy"],
      rating: "23%",
      featured: false,
      mv: true,
      tv: false,
      priceRent: 2.99,
      priceBuy: 7.99,
    },
    {
      title: "Avengers: Endgame",
      id: "m2",
      synopsis:
        "The fourth installment in the Avengers saga is the culmination of 22 interconnected films and the climax of an epic journey. Earth's heroes will finally understand how fragile our reality is and the sacrifices that must be made to uphold it in a story of friendship, teamwork and setting aside differences to overcome an impossible obstacle.",
      watched: 200000,
      released: new Date("April 26, 2019").getTime(),
      added: new Date("April 18, 2020").getTime(),
      smallPosterImg: "/img/avengerssmall.jpeg",
      largePosterImg: "/img/avengersLarge.jpg",
      genre: ["Action", "sci-fi"],
      rating: "94%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 19.99,
    },
    {
      title: "The Equalizer 2",
      id: "m3",
      synopsis:
        "Denzel Washington returns to one of his signature roles in the first sequel of his career. Robert McCall serves an unflinching justice for the exploited and oppressed - but how far will he go when that is someone he loves?",
      watched: 10000,
      released: new Date("July 20, 2018").getTime(),
      added: new Date("July 20, 2020").getTime(),
      smallPosterImg: "/img/equalizerSmall.jpeg",
      largePosterImg: "/img/equalizerLarge.jpg",
      genre: ["Action", "Crime & Thrillers"],
      rating: "51%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 9.99,
    },
    {
      title: "Spider-Man: Homecoming",
      id: "m4",
      synopsis:
        "A young Peter Parker/Spider-Man, who made his sensational debut in CAPTAIN AMERICA: CIVIL WAR, begins to navigate his newfound identity as the web-slinging super hero in SPIDER-MAN: HOMECOMING. Watch it in Extras+ mode, available on the Vudu mobile app, and experience bonuses synced to the movie.",
      watched: 150000,
      released: new Date("July 7, 2017").getTime(),
      added: new Date("August 7, 2017").getTime(),
      smallPosterImg: "/img/spidermanSmall.jpeg",
      largePosterImg: "/img/spidermanLarge.jpg",
      genre: ["Action", "Comedy"],
      rating: "92%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 2.99,
      priceBuy: 9.99,
    },
    {
      title: "Greenland",
      id: "m5",
      synopsis:
        "A family fights for survival as a planet-killing comet races to Earth. John Garrity (Gerard Butler), his estranged wife Allison (Morena Baccarin), and young son Nathan make a perilous journey to their only hope for sanctuary. Amid terrifying news accounts of cities around the world being leveled by the comet's fragments, the Garrity's experience the best and worst in humanity while they battle the increasing panic and lawlessness surrounding them. As the countdown to global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
      watched: 1000,
      released: new Date("July 29, 2020").getTime(),
      added: new Date("December 20, 2020").getTime(),
      smallPosterImg: "/img/greenlandSmall.jpeg",
      largePosterImg: "/img/greenlandLarge.jpg",
      genre: ["Action", "Crime & Thrillers"],
      rating: "79%",
      featured: false,
      mv: true,
      tv: false,
      priceRent: 5.99,
      priceBuy: 19.99,
    },
    {
      title: "Aquaman",
      id: "m6",
      synopsis:
        "Buy any quality, get every quality: All qualities up to 4K UHD included with purchase. An Action- packed Adventure that spans the vast, visually breathtaking underwater world of the seven seas, 'Aquaman' reveals the origin story of half-human, half- Atlantean Arthur Curry and takes him on the journey of his lifetime--one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be...a king.",
      watched: 99999,
      released: new Date("December 21, 2018").getTime(),
      added: new Date("April 18, 2019").getTime(),
      smallPosterImg: "/img/aquamanSmall.jpeg",
      largePosterImg: "/img/aquamanLarge.jpg",
      genre: ["Action", "Adventure"],
      rating: "65%",
      featured: false,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 14.99,
    },
    {
      title: "John Wick",
      id: "m7",
      synopsis:
        "When sadistic young thugs senselessly attack John Wick (Keanu Reeves) - a brilliantly lethal ex-assassin - they have no idea they've messed with the wrong guy. With New York City as his bullet-riddled playground, Wick embarks on a merciless rampage, hunting down his adversaries with the skill and ruthlessness that made him an underworld legend.",
      watched: 300000,
      released: new Date("October 24, 2014").getTime(),
      added: new Date("February 18, 2021").getTime(),
      smallPosterImg: "/img/johnwicksmall.jpeg",
      largePosterImg: "/img/johnwicklarge.jpg",
      genre: ["Action", "Crime & Thrillers"],
      rating: "86%",
      featured: false,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 7.99,
    },
    {
      title: "John Wick: Chapter 2",
      id: "m8",
      synopsis:
        "Legendary hit man John Wick is forced back out of retirement by a former associate plotting to seize control of a shadowy international assassins' guild. Bound by a blood oath to help him, John travels to Rome, where he squares off against some of the world's deadliest killers.",
      watched: 400000,
      released: new Date("May 9, 2019").getTime(),
      added: new Date("October 10, 2017").getTime(),
      smallPosterImg: "/img/johnwick2small.jpeg",
      largePosterImg: "/img/johnwick2large.jpg",
      genre: ["Action", "Crime & Thrillers"],
      rating: "89%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 7.99,
    },
    {
      title: "John Wick: Chapter 3 - Parabellum",
      id: "m9",
      synopsis:
        "Super assassin John Wick (Keanu Reeves) is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      watched: 500000,
      released: new Date("May 9, 2019").getTime(),
      added: new Date("September 9, 2019").getTime(),
      smallPosterImg: "/img/johnwick3small.jpeg",
      largePosterImg: "/img/johnwick3large.jpg",
      genre: ["Action", "Crime & Thrillers"],
      rating: "89%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 9.99,
    },
    {
      title: "Frozen II",
      id: "m10",
      synopsis:
        "Why was Elsa born with magical powers? The answer is calling her and threatening her kingdom. Together with Anna, Kristoff, Olaf and Sven, she'll set out on a dangerous but remarkable journey.",
      watched: 399000,
      released: new Date("November 22, 2019").getTime(),
      added: new Date("January 1, 2021").getTime(),
      smallPosterImg: "/img/frozenSmall.jpeg",
      largePosterImg: "/img/frozenLarge.jpg",
      genre: ["Adventure", "Animation"],
      rating: "78%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 19.99,
    },
    {
      title: "Toy Story 4",
      id: "m11",
      synopsis:
        "Woody has always been confident about his place in the world, and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy named Forky to her room, a road-trip Adventure with old and new friends shows Woody how big the world can be for a toy.",
      watched: 200000,
      released: new Date("July 19, 2020").getTime(),
      added: new Date("September 20, 2020").getTime(),
      smallPosterImg: "/img/toystory4Small.jpeg",
      largePosterImg: "/img/toystorylarge.jpg",
      genre: ["Adventure", "Animation"],
      rating: "97%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: 3.99,
      priceBuy: 19.99,
    },
    {
      title: "Wonder Woman 1984",
      id: "m12",
      synopsis:
        "Fast forward to the 1980s as Wonder Woman's next big screen Adventure finds her facing a wide array of foes including: Max Lord and The Cheetah.",
      watched: 210000,
      released: new Date("December 25, 2020").getTime(),
      added: new Date("December 25, 2020").getTime(),
      smallPosterImg: "/img/wonderwomansmall.jpeg",
      largePosterImg: "/img/wonderwomanlarge.jpg",
      genre: ["Action", "Adventure"],
      rating: "59%",
      featured: true,
      mv: true,
      tv: false,
      priceRent: "19.99",
      priceBuy: null,
    },
    {
      title: "Game of Thrones: Season 1",
      id: "t1",
      synopsis:
        "Get in the 'Game'! Experience the first season of this visionary HBO series set in a mythical world whose inhabitants vie for control of the Iron Throne. But in a land where seasons can last a lifetime, winter is coming...and an ancient evil has awakened.",
      watched: 10000000,
      released: new Date("July 18, 2011").getTime(),
      added: new Date("July 18, 2018").getTime(),
      smallPosterImg: "/img/gotSmall.jpeg",
      largePosterImg: "/img/gotLarge.jpg",
      genre: ["Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 9.99,
      priceBuy: 19.99,
    },
    {
      title: "The Big Bang Theory: Season 9",
      id: "t2",
      synopsis:
        "Prepare to enter phase nine of television's perpetual laughter experiment as THE BIG BANG THEORY successfully fuses the elements of science and sitcom. Our two genius roommates - Leonard and Sheldon ¬- and their friends are back once again and together, they will all learn that life is far more complicated outside of the lab as love and friendship never produced predictable results!",
      watched: 1000000,
      released: new Date("January 18, 2015").getTime(),
      added: new Date("September 18, 2015").getTime(),
      smallPosterImg: "/img/bbts9small.jpeg",
      largePosterImg: "/img/bbts9large.jpg",
      genre: ["Comedy", "Teen"],
      rating: "90%",
      featured: false,
      mv: false,
      tv: true,
      priceRent: 9.99,
      priceBuy: 19.99,
    },
    {
      title: "Yellowstone: Season 1",
      id: "t3",
      synopsis:
        "From the brilliant creative mind of Taylor Sheridan (HELL OR HIGH WATER and SICARIO) & starring Academy Award Winner Kevin Costner, this epic Drama series follows the Dutton family, led by John Dutton, who controls the largest contiguous ranch in the US.",
      watched: 50000,
      released: new Date("January 1, 2018").getTime(),
      added: new Date("March 1, 2018").getTime(),
      smallPosterImg: "/img/yellowstoneSmall.jpeg",
      largePosterImg: "/img/YellowstoneLarge.jpg",
      genre: ["Drama"],
      rating: "80%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 7.99,
      priceBuy: 16.99,
    },
    {
      title: "Game of Thrones: Season 2",
      id: "t4",
      synopsis:
        "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. HBO presents Season 2 of this epic series based on the bestselling book series by George R.R. Martin.",
      watched: 2000000,
      released: new Date("January 1, 2012").getTime(),
      added: new Date("September 30, 2015").getTime(),
      smallPosterImg: "/img/gots2Small.jpeg",
      largePosterImg: "/img/gots2large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 11.99,
      priceBuy: 24.99,
    },
    {
      title: "Game of Thrones: Season 3",
      id: "t5",
      synopsis:
        "Welcome to Season 3 of GAME OF THRONES, the epic HBO series based on the book series by George R.R. Martin. Check out this collection featuring all 10 thrilling episodes from Season 3 plus behind-the-scenes specials, and more.",
      watched: 3000000,
      released: new Date("January 1, 2013").getTime(),
      added: new Date("September 1, 2016").getTime(),
      smallPosterImg: "/img/gots3small.jpeg",
      largePosterImg: "/img/gots3large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 12.99,
      priceBuy: 24.99,
    },
    {
      title: "Game of Thrones: Season 4",
      id: "t6",
      synopsis:
        "While the Lannisters' hold on the Iron Throne remains intact in Season 4, they face many threats--Stannis Baratheon; the 'Red Viper of Dorne,' Daenerys Targaryen--while the Night's Watch faces Mance Rayder's wildlings...and the dreaded White Walkers.",
      watched: 3500000,
      released: new Date("June 1, 2013").getTime(),
      added: new Date("April 1, 2016").getTime(),
      smallPosterImg: "/img/gots4.jpeg",
      largePosterImg: "/img/gots4large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 13.99,
      priceBuy: 29.99,
    },
    {
      title: "Game of Thrones: Season 5",
      id: "t7",
      synopsis:
        "A plethora of compelling storylines play out to their inevitable, often bloody conclusions in Season 5 of GAME OF THRONES. In the wake of the numerous shocking deaths of Season 4, the season opens with a power vacuum that the various players all across Westeros and Essos scramble to fill.",
      watched: 3600000,
      released: new Date("June 1, 2015").getTime(),
      added: new Date("January 1, 2017").getTime(),
      smallPosterImg: "/img/gots5small.jpeg",
      largePosterImg: "/img/gots5large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 13.99,
      priceBuy: 29.99,
    },
    {
      title: "Game of Thrones: Season 6",
      id: "t8",
      synopsis:
        "Familiar faces will forge new alliances to bolster their strategic chances at survival...while new characters will emerge to challenge the balance of power in Season 6 of the blockbuster HBO series.",
      watched: 3700000,
      released: new Date("January 1, 2016").getTime(),
      added: new Date("January 1, 2018").getTime(),
      smallPosterImg: "/img/gots6.jpeg",
      largePosterImg: "/img/gots6large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 14.99,
      priceBuy: 29.99,
    },
    {
      title: "Game of Thrones: Season 7",
      id: "t9",
      synopsis:
        "The long winter is here. Throughout seven thrilling episodes, the penultimate Season 7 of this blockbuster hit series focuses on a convergence of armies and attitudes that have been brewing for years.",
      watched: 4000000,
      released: new Date("January 18, 2017").getTime(),
      added: new Date("September 18, 2018").getTime(),
      smallPosterImg: "/img/gots7small.jpeg",
      largePosterImg: "/img/gots7large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 14.99,
      priceBuy: 29.99,
    },
    {
      title: "Game of Thrones: Season 8",
      id: "t10",
      synopsis:
        "GAME OF THRONES returns for its eighth and final season. Based on the popular book series 'A Song of Ice and Fire,' by George R.R. Martin, this hit fantasy series chronicles an epic struggle for power in a vast and violent kingdom. Also includes documentary GAME OF THRONES: THE LAST WATCH.",
      watched: 4200000,
      released: new Date("January 18, 2019").getTime(),
      added: new Date("September 18, 2020").getTime(),
      smallPosterImg: "/img/gots8small.jpeg",
      largePosterImg: "/img/gots8large.jpg",
      genre: ["Adventure", "Drama"],
      rating: "99%",
      featured: true,
      mv: false,
      tv: true,
      priceRent: 14.99,
      priceBuy: 29.99,
    },
    {
      title: "Fresh Prince of Bel-Air: Season 1",
      id: "t11",
      synopsis:
        "Will moves from the tough streets of West Philly to posh Bel-Air to live with his Uncle Philip, Aunt Vivian, his cousins - spoiled Hilary, preppy Carlton and young Ashley- and their sophisticated British butler, Geoffrey. Though Will's antics and upbringing contrast greatly with the upper-class lifestyle of his extended relatives, he soon finds himself right at home as a loved part of the family.",
      watched: 10000000,
      released: new Date("January 1, 1990").getTime(),
      added: new Date("September 18, 2016").getTime(),
      smallPosterImg: "/img/fps1small.jpeg",
      largePosterImg: "/img/fps1large.jpg",
      genre: ["Comedy", "Teen"],
      rating: "88%",
      featured: false,
      mv: false,
      tv: true,
      priceRent: 2.99,
      priceBuy: 9.99,
    },
    {
      title: "Band of Brothers: Season 1",
      id: "t12",
      synopsis:
        "They were ordinary men, swept up in the most extraordinary conflict in history. But with the eyes of the world upon them, they found their greatest source of strength in each other. Tom Hanks, Steven Spielberg and HBO present the story of Easy Company, an elite team of U.S. paratroopers whose World War II exploits are as incredible as they are true.",
      watched: 50000,
      released: new Date("January 1, 2001").getTime(),
      added: new Date("September 18, 2018").getTime(),
      smallPosterImg: "/img/bobSmall.jpeg",
      largePosterImg: "/img/bobLarge.jpg",
      genre: ["history", "Mini-series"],
      rating: "88%",
      featured: false,
      mv: false,
      tv: true,
      priceRent: 15.99,
      priceBuy: 34.99,
    },
  ],
  sortWatched() {
    function compare(a, b) {
      if (a.watched > b.watched) {
        return -1;
      }
      if (a.watched < b.watched) {
        return 1;
      }
      //a equals b
      return 0;
    }
    [...newArr] = this.movieTv;
    return newArr.sort(compare);
  },
  sortRelease() {
    function compare(a, b) {
      if (a.released > b.released) {
        return -1;
      }
      if (a.released < b.released) {
        return 1;
      }
      //a equals b
      return 0;
    }
    [...newArr] = this.movieTv;
    //a equals b
    return newArr.sort(compare);
  },
  sortAdd() {
    function compare(a, b) {
      if (a.added > b.added) {
        return -1;
      }
      if (a.added < b.added) {
        return 1;
      }
      //a equals b
      return 0;
    }
    //a equals b
    [...newArr] = this.movieTv;
    //a equals b
    return newArr.sort(compare);
  },
  getAMovie(uid) {
    const movieRt = this.movieTv.find((mov) => {
      return mov.id === uid;
    });
    return movieRt;
  },
  getReleaseDate(uid) {
    const mov = this.movieTv.find((mov) => {
      return mov.id === uid;
    });
    return (
      new Date(mov.released).toLocaleString("en-us", { month: "long" }) +
      " " +
      new Date(mov.released).getFullYear().toString()
    );
  },
  similar(uid) {
    let arrGenre = [];
    let arrMov = [];
    const mov = this.getAMovie(uid);
    mov.genre.forEach((gn) => arrGenre.push(gn));
    arrMov = this.movieTv.filter((mv) => {
      for (let i = 0; i < mv.genre.length; i++) {
        for (let j = 0; j < arrGenre.length; j++) {
          if (mv.genre[i] === arrGenre[j] && mv.id != uid) {
            return true;
          }
        }
      }
      return;
    });
    if (arrMov.length >= 6) {
      arrMov = arrMov.slice(0, 6);
    }
    return arrMov;
  },
  featuredM(mov) {
    let arrMov = this.movieTv.filter((mov) => {
      return mov.featured && mov.mv;
    });
    if (arrMov.length >= 8) {
      arrMov = arrMov.slice(0, 8);
    } else if (arrMov.length < 8 && arrMov.length >= 4) {
      arrMov = arrMov.slice(0, 4);
    }
    return arrMov;
  },
  featuredT(tv) {
    let arrTv = this.movieTv.filter((tv) => {
      return tv.featured && tv.tv;
    });
    if (arrTv.length >= 8) {
      arrTv = arrTv.slice(0, 8);
    } else if (arrTv.length < 8 && arrTv.length >= 4) {
      arrTv = arrTv.slice(0, 4);
    }
    return arrTv;
  },
  featuredG(gn) {
    let arrGenre = [];
    let arrMov = [];
    arrMov = this.movieTv.filter((mv) => {
      for (let i = 0; i < mv.genre.length; i++) {
        if (gn === mv.genre[i]) {
          return true;
        }
      }
      return;
    });
    if (arrMov.length >= 8) {
      arrMov = arrMov.slice(0, 8);
    } else if (arrMov.length < 8 && arrMov.length >= 4) {
      arrMov = arrMov.slice(0, 4);
    }
    return arrMov;
  },
};
