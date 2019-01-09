# jazzdb-example-restapi

> REST API example using [jazzdb](https://github.com/jazzdb/jazzdb)

## Get Started

### Install Dependencies

```
npm install
```

### Build API

```
npm run build
```

### Start API

```
npm start
```

## Making Requests

### Local Endpoint

http://localhost:8080

### Examples

#### Create New Instrument

```sh
curl -X POST \
  http://localhost:8080/instruments \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "Drums",
	"type": "percussion"
}'
```

#### Get All Instruments

```sh
curl http://localhost:8080/instruments
```

#### Get One Instrument

```sh
curl http://localhost:8080/instruments/6072ebe9-6056-469e-ad54-92c87107325c
```

#### Update an Instrument

```sh
curl -X PUT \
  http://localhost:8080/instruments/e50505fc-3b37-4134-af9c-d01615dbf2be \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "Oboe",
	"type": "woodwind"
}'
```

#### Delete an Instrument

```sh
curl -X DELETE \
  http://localhost:8080/instruments/e50505fc-3b37-4134-af9c-d01615dbf2be
```
