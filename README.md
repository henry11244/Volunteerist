# Volunteerist

## Description

Volunteerist is an event hosting site with an emphasis on volunteer work. Users can view created events, or login to create their own and RSVP for other events. Users also have the ability to filter by location and category of event.

## Table of Contents

- [Languages and Technology Used](#languages-and-technology-used)
- [Deployed Link](#deployed-link)
- [Project Demonstration](#project-demonstration)
- [Usage](#usage)
- [Code Snippet](#code-snippet)
- [Credits](#credits)

## Languages and Technologies Used

- CSS
- JavaScript
- SQL
- Handlebars
- Express.js
- Bootstrap and Material Design Bootstrap

## Deployed Link

Our site is deployed through heroku [HERE](https://volunteerists.herokuapp.com/)!

## Site Demonstration

Below is a demonstration of a validated user creating a new event through our Material Design Bootstrap modal. The event is then added to the homepage and to their dashboard under "My Events."

![event-creation-demo](public/img/event-creation-demo.gif)

## Usage

* Once you navigate to the live applicaiton linked above, you are presented with a hompage that contains a list of volunteering events you may RSVP to.
* The events can be filtered by category and location using the filter drop-down
* Once you login, by navigating to the login page through the nav bar, you may view your dashboard containing events that you have created and have RSVP to
* Once you login, you may also create new events using the link in the navigation bar. 

## Code Snippet

The code snippet below is from a handlebars template used to render events from the database onto the homepage. Using bootstrap, after three event cards (each taking up 1/3 of the page) have been placed in a row, flex-wrap creates a new row where another 3 cards can be inserted.

```
<div class="d-flex flex-row flex-wrap">
    {{#each events as |event|}}
        <div class="event-card mx-auto col-4">
            <h4 class="">{{event.name}}</h4>
            <p>{{event.description}}</p>
            <hr>
            <p class="mb-0">Location: {{event.location}}</p>
            <p class="mb-0">Date: {{event.date}}</p>
            <p class="mb-0">Time: {{event.time}}</p>
            <p class="mb-0">Created by: {{user.username}}</p>
            <br>

            <button type="button" class="btn" data-id="{{event.id}}">RSVP</button>
        </div>
    {{/each}}
     </div>
```

## Collaborators

- [Pat Barkley](https://github.com/pbarkley)
- [Lily Kot](https://github.com/lilyannekot)
- [Henry Nguyen](https://github.com/henry11244)

## Contact

Repository Link: [https://github.com/henry11244/Volunteerist](https://github.com/henry11244/Volunteerist)