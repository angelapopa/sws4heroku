# sws
PS Semantic Web Services

Authors: Zahra Jafari and Angela Popa

Team: 6

Topic: Hotel Booking Web API (Hydra)

Version: 2.0

Level: Assignment 7

### Introduction

Our assignment was to implement a Hotel Booking Web API
and to annotate it with hydra classes, which in turn describe our Web API.

Our application source code for this assignment is available also at

https://github.com/angelapopa/sws4heroku.git.

Currently it is split into 2 parts, a server and a client.

## The Server

Our server was implemented with NodeJS and is currently available on heroku.
e.g.

https://afternoon-meadow-35531.herokuapp.com/api/hotels/5aeb56f1eb089a6227c8fcf4/

The Server is a continuation of Assignemt 4, where we implement a REST API for booking hotel rooms. All Available endpoints are listed at the end of this document.

For this last assignment we extended our server with `hydra` and `schema.org` annotation to create the documentation for our Web API.

We annotated our already existing plain json data with `schema.org` annotations, mainly using `@type`, `@id`, `@context`.

We created a `vocab` file for the documentation our our WEb API using `hydra` classes.

https://github.com/angelapopa/sws4heroku/blob/master/api/vocab.json

Currently following hydra classes are annotated `Hotel`, `Booking`, `Price`, `Offer`, `HotelCollection`, `Endpoint`.

After switching to heroku and using explicit links in the hydra vocab file, our web api documentation was displayed correctly in the hydra console. (Relative urls as we tried one week before, were not working).

```
{
    "@id": "https://afternoon-meadow-35531.herokuapp.com/api/vocab",
    "@type": "ApiDocumentation",
    "@context": {
        "vocab": "https://afternoon-meadow-35531.herokuapp.com/api/vocab#",
        "hydra": "http://www.w3.org/ns/hydra/core#",
        "ApiDocumentation": "hydra:ApiDocumentation",
        "property": {
            "@id": "hydra:property",
            "@type": "@id"
        },
        ......
```

Currently this are displayable by the Hydra Console

https://www.markus-lanthaler.com/hydra/console/

for example with urls:

* https://afternoon-meadow-35531.herokuapp.com/api/hotels/5aeb56f1eb089a6227c8fcf4/

* https://afternoon-meadow-35531.herokuapp.com/api/hotels/5aeb56f1eb089a6227c8fcf4/rooms

* https://afternoon-meadow-35531.herokuapp.com/api/hotels/5aeb56f1eb089a6227c8fcf4/rooms/Doppelzimmer,%20Dusche,%20WC,%20ruhig/prices

On the right hand side the hydra annotated web api documentation is listed.

As a side note, the right hand site is not updated for each request, instead all avalable hydra classes are listed in the dropdown next to the word `Documentation`.

![Hydra Console Hotel Booking API][hotel_booking]

[hotel_booking]: /doc/images/hydra_console_hotel.png "Hotel Booking API"

![Hydra Console Hotel Booking API][hotel_booking_2]

[hotel_booking_2]: /doc/images/hydra_console_hotel2.png "Hotel Booking API"

Some other hotel IDs that can be used for testing might be:

`5aeb56f1eb089a6227c8fcf8`
`5aeb56f1eb089a6227c8fd0a`
`5aeb56f1eb089a6227c8fd0a`

#### Future work for the server side
Annotate remaining endpoints with hydra classes.
Annotate paginagion with hydra for the list of hotels.
Annotate remaining endpoints data with schema.org annotations.

## The Generic Client

Our client was implemented in .NET and is testable by starting the executable
`RestClientEnd.exe` located at

`https://github.com/angelapopa/sws4heroku/tree/master/RestClient/`.

Prerequisites: a running Windows instance and cloning the source code.
No other software/tools are needed to be installed.

#### What the client does?

* Implemeting Http request by Rest Client, not hydra vocab till now.

 [Client]: /doc/images/Rest.png "Rest Client"

## Endpoints

### Enpoints currently working in the hydra console
`/api/hotels/5aeb56f1eb089a6227c8fcf4/`

`/api/hotels/5aeb56f1eb089a6227c8fcf4/rooms`

`/api/hotels/5aeb56f1eb089a6227c8fcf4/rooms/Doppelzimmer,%20Dusche,%20WC,%20ruhig/prices`

### Enpoints/Resources implemented for Assignment 4

Currently not all are annotated with hydra for assignment 7.

  |  | HTTP Request type | Endpoint| Resulting HTTP Code| Resulting action  |
  |--- | --- | :--- | :--- | --- |
  |<ul><li>[x] </li> | GET | /api/hotels | `200 OK` | lists all hotels |
  |<ul><li>[x] </li> | POST | /api/hotels | `201 Created` or <TODO\> code in case of error| adds a new hotel |
  |<ul><li>[x] </li> | PUT | /api/hotels | `200 OK` or `500` in case of error| updates an existing hotel data |
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\> | `200 OK` or `404 Not Found` | returns one hotel|
  |<ul><li>[x] </li> | DELETE | /api/hotels/<hotelId\> | `201 Created` or `404 Not Found` |deletes the hotel |
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/contacts | `200 OK` or `404 Not Found` | returns the contact data of a hotel|
  |<ul><li>[x] </li> | POST | /api/hotels/<hotelId\>/contacts | `201 Created` or `404 Not Found` |adds contact details for a hotel |
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/rooms |`200 OK` or `404 Not Found`| all rooms of the specific hotel, or error in case the hotel is not found|
  |<ul><li>[ ] TODO</li>| POST | /api/hotels/<hotelId\>/rooms | `201 Created` or <TODO\> code in case of error| adds a new room|
  |<ul><li>[ ] TODO</li>| DELETE | /api/hotels/<hotelId\>/rooms/<room_name\> | TODO | delete one room|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/rooms/<room_name\>/prices | `200` or `404`| all prices for rooms of a specific hotel|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/images | `200` or `404`| all images of the hotel|
  |<ul><li>[ ] TODO </li>| POST | /api/hotels/<hotelId\>/images | `201 Created` or `404 Not Found`| adds one image|
  |<ul><li>[ ] TODO </li>| DELETE | /api/hotels/<hotelId\>/images/<url\> | TODO| deletes one image|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/location | `200 OK` or `404 Not Found`| the postal address and the geo location of the hotel|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/payments | `200 OK` or `404 Not Found`| the currencies and payment posibilities that the hotel offers|
  |<ul><li>[x] </li>| GET | /api/hotel/<hotelId\>/facilities | `200 OK` or `404 Not Found`|all facilities or emtpy list or error in case the hotel name is not found|
  |<ul><li>[x] </li>| POST | /api/hotel/<hotelIdid\>/facilities | `201 Created` or `404 Not Found`| new facility|
  |<ul><li>[ ] TODO</li>| DELETE | /api/hotel/<hotelId\>/facilities/<facility_id\> | TODO| deletes one facility|
  |<ul><li>[x] </li>| GET | /api/locations/<location\>/hotels | `200` or `404`| all hotels at the named location|
  |<ul><li>[x] </li>| GET | /api/hotels/<hotelId\>/rooms/<room_name\>/bookings |lists the hotel room bookings | |
  |<ul><li>[x] </li>| POST | /api/hotels/<hotelId\>/rooms/<room_name\>/bookings | adds a new booking| POST request body fields: `from`, `to`, `firstname`, `lastname`, `numberOfRooms`|
  |<ul><li>[ ] TODO</li>| DELETE | /api/hotels/<hotelId\>/rooms/<room_name\>/bookings/<from\>/<to\> | Think of something how to handle this| TODO|
  |<ul><li>[x] </li>| GET | /api/users | `200` or `404`| all users|
  |<ul><li>[x] </li>| GET | /api/users/<userId\> | `200` or `404`| one user by id|
  |<ul><li>[x] </li>| POST | /api/users | `201 Created` or <TODO\> code in case of error|adds a new user|
