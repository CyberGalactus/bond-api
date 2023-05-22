# CRUD API FOR BOND MOVIES


## INSTALLATIONS för postman 
1. Ladda ner och installera Postman om du inte redan har det installerat.
2. Skapa en ny "Collection" i Postman.
3. För varje API-slutpunkt, skapa en ny "Request" i din collection och konfigurera den med rätt metod och URL (enligt beskrivningen ovan).
4. För POST och PUT-anrop, gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din karaktär enligt exempel ovan.
5. Skicka dina requests och utforska API:et!

## Installation
1. Installera Node.js om du inte redan har det installerat.
2. Kör npm install för att installera projektets beroenden.
3. Kör npm run dev för att starta servern.

## Routes 

### GET /movies
Returnerar en lista med alla filmer.

```bash
exempel om du vill hämta alla filmer
http://localhost:8000/movies?apiKey=5

```

### GET /movies/:imdbID
Returnerar information om en specifik film med det angivna IMDb-ID:t
och välj GET från alternativet

```bash
exempel på att hämta en specifik film via postman:
http://localhost:8000/movies/tt0321986?apiKey=5
```

### POST /movies
Skapar en ny film med den skickade filmdata och välj POST från alternativet

```bash
exempel på att skapa en ny film
POST http://localhost:8000/movies?apikey=5
Content-Type: application/json

{
  "movie": {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont"
  }
}
```

### PUT /movies/:imdbID
Uppdaterar en befintlig film med det angivna IMDb-ID:t med den skickade filmdatan och välj PUT från alternativet.

```bash
PUT http://localhost:8000/movies/tt1234567?apikey=5
Content-Type: application/json

{
  "movie": {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "rating": 9.3
  }
}
```

### DELETE /movies/:imdbID
Tar bort filmen med det angivna IMDb-ID:t.

```bash
exempel på att ta bort filemr via postman:
http://localhost:8000/movies/tt0321986?apiKey=5
```



