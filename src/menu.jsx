import React from 'react'
// side bar menu for the app. Sideways navbar with buttons for each page. When clicked, it will navigate to that page.
// seperate buttons for when logged in and not logged in
// Page icon becomes different color when on that page (ex. home page turns filled in when in home page)

const menu = () => {
  return (
    <>
    <nav class="menu">
        <div>Logo</div>
        <div class="menu-item">Dashboard</div>
        <div class="menu-item">Settings</div>
        <div class="menu-item">Create</div>
    </nav>
    </>
  )
}

export default menu