# React Movies App

## Project Setup

Make sure to work with Node >= 18

```
yarn install
yarn dev
```

## Movies API

### Prerequisite

You must include the following HTTP Headers in order to receive a valid response

```
x-rapidapi-host: movie-database-alternative.p.rapidapi.com
x-rapidapi-key: <ASK_FOR_KEY>
```

### Search Movie

#### Params

```
s - search query
r - response format 
page (optional) - page number
```

#### Example

```
https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1
```

```
{
  "Search": [
    {
      "Title": "Avengers: Endgame",
      "Year": "2019",
      "imdbID": "tt4154796",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere",
      "Year": "2019",
      "imdbID": "tt10240638",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg"
    },
    {
      "Title": "Avengers: Endgame and the Latest Captain Marvel Outrage!!",
      "Year": "2019",
      "imdbID": "tt10025738",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Avengers Endgame: the Butt Plan",
      "Year": "2019",
      "imdbID": "tt10399328",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg"
    },
    {
      "Title": "Avengers: Endgame (2019)",
      "Year": "2019",
      "imdbID": "tt16416424",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2I4YzU4YTYtZDc3OC00NjcwLTlhM2ItNjlmYjNiMjFkMTRiXkEyXkFqcGdeQXVyMTE4NTEwNTky._V1_SX300.jpg"
    },
    {
      "Title": "Avengers: Endgame (2019) - Spoiler Full Review",
      "Year": "2019",
      "imdbID": "tt17978032",
      "Type": "movie",
      "Poster": "N/A"
    }
  ],
  "totalResults": "6",
  "Response": "True"
}
```

### Get Movie Details

#### Params

```
i - A valid IMDb ID
```

#### Example

```
https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt4154796
```

```
{
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "Rated": "PG-13",
  "Released": "26 Apr 2019",
  "Runtime": "181 min",
  "Genre": "Action, Adventure, Drama",
  "Director": "Anthony Russo, Joe Russo",
  "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
  "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
  "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  "Language": "English, Japanese, Xhosa, German",
  "Country": "United States",
  "Awards": "Nominated for 1 Oscar. 70 wins & 132 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.4/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "94%"
    },
    {
      "Source": "Metacritic",
      "Value": "78/100"
    }
  ],
  "Metascore": "78",
  "imdbRating": "8.4",
  "imdbVotes": "1,016,281",
  "imdbID": "tt4154796",
  "Type": "movie",
  "DVD": "30 Jul 2019",
  "BoxOffice": "$858,373,000",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```
