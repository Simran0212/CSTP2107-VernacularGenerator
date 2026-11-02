import React from 'react'
// side bar menu for the app. Sideways navbar with buttons for each page. When clicked, it will navigate to that page.
// seperate buttons for when logged in and not logged in
// Page icon becomes different color when on that page (ex. home page turns filled in when in home page)

const menu = () => {
  return (
    <nav>
        // Replace this with a proper logo for the app
        <image src={viteLogo} alt="Vite Logo" />
        <ul>
            // Replace with icon buttons instead of text buttons
            <li><a href="/">Dashboard</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/create">Create</a></li>
        </ul>
    </nav>
  )
}

export default menu