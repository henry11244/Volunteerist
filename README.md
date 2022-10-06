# [Volunteerist](https://volunteerists.herokuapp.com/)

## Description

Volunteerist is an event hosting website with an emphasis on volunteer work. Users can view created events or login to create their own as well as RSVP for other events. Users are able to filter events by location and category.

## Table of Contents

- [Languages and Technology Used](#languages-and-technology-used)
- [Deployed Link](#deployed-link)
- [Project Demonstration](#project-demonstration)
- [Usage](#usage)
- [Collaborators](#collaborators)

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

Below is a demonstration of a user creating and editting an event in addition to signing up, logging in, logging out and RSVPing to events.

<b>Event Creation </b>
<br>
Events are created using a modal created with Material Design Bootstrap. Using JS event listeners, data entered into the modal are sent to our API which saves the created event. Data are maintained using SQL on the backend using Sequalize.
![Creating Event](img/createEvent.gif)

<b>Edit Event</b>
<br>
Similiar to creating an event, we utilze modals to user input on event edits. The inputted data is then saved using Sequalize. 
![Edit Event](img/editEvent.gif)

<b>Event RSVP</b>
<br>
We allow users to RSVP to events. This is done on the backend using many to many relationships between events and users. Once a user RSVP to an event, the relationship between a user and that event is saved, which will then be used to populate RSVP events on a user's dashboard.
![Event RSVP](img/RSVP.gif)

<b>Signup/Login/Logout</b>
<br>
As with events above, user data is tracked using SQL. Once a user creates an account on the page, that data is saved through our user API. After an account is made, users can login in through the login page, which will send a request to our user API. If the username and password entered matches API response, the user is able to login
![Signup/login/logout](img/signup.gif)

<b>Event Container Borders</b>

To add styling to the website, we utilized CSS to add animations to each event card, button and title. 

- Each corner of an event card has different border radius which gives the card a realistic paper style. We then added a CSS animation on hover, which gives the cards a subtle tilt when we hover our curser over them. 

- Similiarly, the RSVP, Delete and Edit buttons utilize CSS for their hover effect. This is accomplished using a border with border-radius' of 100% which creates a circle. We first create a circle using this tatic within each button on hover which then grows in size through CSS animations until it leaves the button. 

- The effect on the title of each event is created using strokes in CSS. Each title starts with a single stroke on the button which transitions into a complete 4-lined border once we hover our curser over the title. The neat effect of the lines moving is completed using the CSS transition property that slowly fills in the borders of the top and sides.

![Border Styles](img/eventCardStyle.gif)


## Usage

* Once you navigate to the live applicaiton linked above, you are presented with a hompage that contains a list of volunteering events you may RSVP to.
* The events can be filtered by category and location using the filter drop-down
* Once you login, by navigating to the login page through the nav bar, you may view your dashboard containing events that you have created and have RSVP to. You have the ability to edit and delete your events in addition to deleting RSVP events
* Once you login, you may also create new events using the link in the navigation bar. 


## Collaborators

- [Pat Barkley](https://github.com/pbarkley)
- [Lily Kot](https://github.com/lilyannekot)
- [Henry Nguyen](https://github.com/henry11244)


Repository Link: [https://github.com/henry11244/Volunteerist](https://github.com/henry11244/Volunteerist)
