Background:
This project is a test to rewrite an old Frieren card game which got too hard to debug and maintain because it was originally made for a one-time event but got popular and continued on shakey foundations, now declining in popularity because of the lack of updates

This seeks to change that by improving the developer experience and maintainability, as well as opening up options for more complex cards and displaying better information to the user to not confuse them

Optimal pattern:

Hybrid entity-component system to store the game state and event-driven system to process changes