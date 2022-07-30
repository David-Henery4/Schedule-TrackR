# Schedule TrackR

Schedule TrackR is a web app that helps users to keep track of their overall and day to day schedule, in order to help boost productivity and improve their time management.

Schedule TrackR is fully responsive and works on both small and large screens.

### Technologies used

Schedule TrackR was built using:

* HTML
* CSS/SASS
* Javascript
* React

## How to use

Schedule TrackR can be found at [schedule tracker](#"ScheduleTrackR").
(Link to be added)

When you first open schedule trackR you will start on the months page. From here you can choose what one of three main features you would like to use.
Creating a schedule, creating goals or creating a todo list.

The "current week", "month", "weeks" and "day" all interact or display the schedule data.

The "To do's" page only handles the todos data, while the "Goals" only handles the goals data.


![schedule trackr home](/readme-images/schedule%20trackr-homepage.png)


## Creating and handling a schedule

In order to start creating a schedule, the user has to first choose when they want to create a schedule. When they know a date, they can find the date by choosing the month on the "month" page, then they will be taken to the "weeks" page for them to select a specific date in that month. Once they have selected the date, the "day" page will then display that date and the user can add activities to their schedule for that date.

(User can also increment though the months from the "weeks" page using the arrow icons.)

![trackr date selection](/readme-images/schedule-trackr-date-selection.gif)

From then on, all schedule data created for this date will always be visiable on the "day" page on that current date.
The user can use this to create and view their schedule for any date they want.

![trackR form creation](/readme-images/schedule-trackr-schedule-creation.gif)

In the "current week" page the users schedule for that current week will be displayed and split up into the different days of the week, while also remaining in time order.

There is a option for the user to edit or delete individual activities from their schedule in ether the "day" page or the "current week" page by clicking the icon in the top right of the activity tab.

![trackr delete and edit](/readme-images/schedule-trackr-delete-edit-fucntions.gif)

### Using the Goals and Todo features

To start using the goals and todo features, the user can select ether the "To Do's" page or the "Goals" page and start adding their data by clicking the add icon and start filling in the form.

The Goals tab is different from the todos tab. In the goals tab users can mark wether they achieved their goal or not, this will enable the user to keep track of their individual goals.

![goals functionality](/readme-images/schedule-trackr-goals-functionality.gif)

Both the goals & todo tabs can be deleted and edited individually by selecting the icon in the top right corner of the tab. (The same icon used in the schedule tabs)

## Clear all button

The user can choose to clear all data from the relevent page by clicking the "clear all" button that can be found at the bottom of the sidebar. The user has to be on the "todo" page to clear the todo data, the "goal" page to clear the goals and any of the other pages to clear the schedule data.

![trackr clear functionality](/readme-images/schedule-trackr-clear-functionality.gif)

## Schedule data expiry

All schedule data that is older than 7 days will be deleted. This is to prevent old data piling up and taking up to much space.

## Improvements to be added

I will be updating schedule trackr with a few improvements in the future.

One improvement will be to update the calendar ui, so the names of the week days dictate the placement of the dates and not the other way around.

Another update i will be looking to add is to create a chrome extension version of Schedule trackR, so users can toggle notifications on their schedule activities and then be alerted in the browser when it's time to start a activity.

Look out for these updates and more in the future.












