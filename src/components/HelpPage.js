import React from 'react';

const HelpPage = props => (
  <div
    class="help-page"
  > 
    <div>
      <h1>Add a Task</h1>
      <h2>Task Name</h2>
        <p>Type the name of your task into the 'Add Task' bar.</p>
        <p>Any character that is not used for special meaning is valid.</p>
        <ul>Special Characters:
          <li>- #</li>
          <li>- ~</li>
        </ul>
      <h2>Tags (#)</h2>
        <p>To add a tag to a task, use the '#' character.</p>
        <p>Add as many tags as you'd like, each started with a '#' character and separated with a space</p>
        <p>A tag cannot contain spaces.</p>
      <h2>Duration (~)</h2>
        <p>The default duration is 25min (25:00)</p>
        <p>To add a custom duration, use the '~' character.</p>
        <p>Use the formate '~MMSS' or '~MM:SS'</p>
        <p>If less than 3 numbers are provided, they will be converted to minutes (~4 => 4min).</p>
      <h2>Example</h2>
        <p>Input: 'My task #favs #general ~12:30'</p>
        <p>Task Name: My Task</p>
        <p>Tags: favs, general</p>
        <p>Duration: 12min and 30sec</p>
    </div>
  </div>
);

export default HelpPage;