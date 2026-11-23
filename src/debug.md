# Issues
- [ ] Clicking the logo leads back to the login page, even though the user is already logged in
  - [ ] Change the reference in the menu.jsx to dashboard if the user is logged in
- [ ] There is no "Page-not-found" page
  - [ ] Create a not found page and add it in App.jsx with the path being '/*'
- [ ] The app is currently using Example words and not using an api
  - [ ] Integrate an API
    - This is in progress by Suky since the [DictionaryAPI](https://github.com/meetDeveloper/freeDictionaryAPI) does not have a synonouns section like the [GoogleDictionaryAPI](https://www.npmjs.com/package/google-dictionary-api?activeTab=readme) but the google dictionary api isn't a web api and is a package dependency