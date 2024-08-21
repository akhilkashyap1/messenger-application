Explanation:
1. App.js: 
   - Description: The root component of the application.
   - Function: Manages the layout and renders the FriendList and ChatPage     components side by side. Manages overall state and provides the Redux store to the components.

2. FriendList.js: 
    - Description: Displays a list of friends.
    - Function: Allows users to select a friend from the list. Uses Redux to update the selected friend in the global state. Highlights the currently selected friend.

3. ChatPage.js: 
    - Description: Shows the chat window for the selected friend.
    - Function: Displays messages between the user and the selected friend. Includes an input field to type and send new messages. Uses Redux to manage and update the chat messages.


To run this messenger application:
- npm run start