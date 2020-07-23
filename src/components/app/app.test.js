import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const moviesCards = [
  {
    id: 1,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    imagePreview: `img/bohemian-rhapsody.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `Bohemian Rhapsody`,
    genre: `Biography`,
    date: `2018`,
    description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury`,
    rating: `8.0`,
    ratingCount: `305`,
    director: `Bryan Singer`,
    stars: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 2,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Drama`,
    date: `2018`,
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
    rating: `6.6`,
    ratingCount: `423`,
    director: `David Yates`,
    stars: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 3,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/macbeth.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `Macbeth`,
    genre: `Music`,
    date: `2015`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    rating: `6.6`,
    ratingCount: `201`,
    director: `Justin Kurzel`,
    stars: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 4,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/aviator.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `Aviator`,
    genre: `Drama`,
    date: `2004`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    rating: `7.5`,
    ratingCount: `595`,
    director: `Martin Scorsese`,
    stars: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 5,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/we-need-to-talk-about-kevin.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `We need to talk about Kevin`,
    genre: `Drama`,
    date: `2011`,
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    rating: `7.5`,
    ratingCount: `700`,
    director: `Lynne Ramsay`,
    stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 6,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/what-we-do-in-the-shadows.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `What We Do in the Shadows`,
    genre: `Drama`,
    date: `2019`,
    description: `A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.`,
    rating: `8.5`,
    ratingCount: `850`,
    director: `Jemaine Clement`,
    stars: [`Kayvan Novak`, `Matt Berry`, `Natasia Demetriou`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 7,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/revenant.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `Revenant`,
    genre: `Biography`,
    date: `2015`,
    description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    rating: `8.0`,
    ratingCount: `730`,
    director: `Alejandro G.`,
    stars: [`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    id: 8,
    background: `https://placeimg.com/1300/552/tech`,
    imagePreview: `img/johnny-english.jpg`,
    poster: `https://placeimg.com/270/410/arch/grayscale`,
    title: `Johnny English`,
    genre: `Biography`,
    date: `2018`,
    description: `After a cyber-attack reveals the identity of all of the active undercover agents in Britain, Johnny English (Rowan Atkinson) is forced to come out of retirement to find the mastermind hacker.`,
    rating: `6.2`,
    ratingCount: `370`,
    director: `David Kerr`,
    stars: [`Rowan Atkinson`, `Ben Miller`, `Olga Kurylenko`],
    duration: `1h 39m`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

const reviews = [
  {
    id: 1,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: `8.9`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years`,
  },
  {
    id: 3,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: `8.0`,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
  {
    id: 4,
    author: `Amanda Greever`,
    date: `November 18, 2015`,
    rating: `8.0`,
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  },
  {
    id: 4,
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
    rating: `7.2`,
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  },
  {
    id: 5,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: `7.6`,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult`,
  },
  {
    id: 6,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: `7.0`,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult`,
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      genre={`Drama`}
      year={2014}
      moviesCards={moviesCards}
      reviews={reviews}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
