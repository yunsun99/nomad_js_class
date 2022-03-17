const quotes = [
  {
    quote: "Just tell me what you want and I'll be that for you.",
    movie: 'The Notebook, 2004',
  },
  {
    quote: 'You are, and always have been, my dream.',
    movie: 'The Notebook, 2004',
  },
  {
    quote:
      "I've loved another with all my heart and soul, and for me, that has always been enough.",
    movie: 'The Notebook, 2004',
  },
  {
    quote:
      'We fell in love, despite our differences and something rare and beautiful was created.',
    movie: 'The Notebook, 2004',
  },
  {
    quote: "If you're bird, I'm a bird.",
    movie: 'The Notebook, 2004',
  },
  {
    quote:
      'Thank you for being the person who taught me to love and to be loved.',
    movie: 'If Only, 2004',
  },
  {
    quote:
      "If you have one day left, what would you do? I'd spend it with you, just being together.",
    movie: 'If Only, 2004',
  },
  {
    quote: 'You complete me.',
    movie: 'Jerry Maguire, 1996',
  },
  {
    quote:
      'How long will I love you? As long as stars are above you and I longer if I can.',
    movie: 'About Time, 2013',
  },
  {
    quote: 'To make each day count, make it count',
    movie: 'Titanic, 1997',
  },
];

const quote = document.querySelector('#quote span:first-child');
const movie = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;
