export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_PHOTO =
  "https://posterjack.ca/cdn/shop/articles/Tips_for_Taking_Photos_at_the_Beach_55dd7d25-11df-4acf-844f-a5b4ebeff4df.jpg?v=1738158629&width=2048";

export const movies = {
  horror: [
    "The Conjuring",
    "Hereditary",
    "A Quiet Place",
    "Insidious",
    "The Exorcist",
    "The Babadook",
    "It",
    "Sinister",
    "The Ring",
    "Paranormal Activity",
  ],
  comedy: [
    "The Hangover",
    "Superbad",
    "Step Brothers",
    "Anchorman",
    "Bridesmaids",
    "Dumb and Dumber",
    "21 Jump Street",
    "Pineapple Express",
    "Zombieland",
    "Mean Girls",
  ],
  action: [
    "Mad Max: Fury Road",
    "John Wick",
    "Die Hard",
    "The Dark Knight",
    "Gladiator",
    "Inception",
    "The Matrix",
    "Avengers: Endgame",
    "Top Gun: Maverick",
    "Mission: Impossible – Fallout",
  ],
  thriller: [
    "Gone Girl",
    "Se7en",
    "Shutter Island",
    "Prisoners",
    "The Girl with the Dragon Tattoo",
    "Memento",
    "The Silence of the Lambs",
    "Zodiac",
    "Oldboy",
    "Black Swan",
  ],
};
