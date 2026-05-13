# WEB103 Prework - *Creatorverse*

Submitted by: **Christopher Devalme**

About this web app: **Creatorverse is a React web app that allows users to explore, add, view, edit, and delete content creators. The app uses Supabase as a backend database and displays creators in a clean card-based layout with images, descriptions, and links to their pages.**

Time spent: **10-12** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Added a custom dark gradient theme for a more polished visual design
- [x] Added hover effects to creator cards
- [x] Added a responsive card grid layout for different screen sizes
- [x] Added styled navigation links for Home and Add Creator
- [x] Added a detailed creator profile page
- [x] Added confirmation before deleting a creator
- [x] Added fallback styling for creators without an image

## Video Walkthrough

Here's a walkthrough of implemented required features:

![CreatorVerse 5.gif](CreatorVerse%205.gif)

## Notes

One challenge I encountered while building the app was connecting the frontend to Supabase correctly. I had to make sure the Supabase project URL and publishable API key were set up properly in the client file. I also ran into an issue where the app was trying to sort creators by a `created_at` column that did not exist in my table, so I had to either remove the sorting logic or add the column in Supabase.

Another challenge was styling the app with PicoCSS while also adding custom CSS. PicoCSS automatically styled some elements, like the footer inside creator cards, which caused a white background issue. I fixed this by overriding the PicoCSS styles and adjusting the card action section.

Overall, this project helped me better understand React components, routing, CRUD operations, Supabase queries, async/await, and how a frontend application connects to a backend database.

## License

Copyright [2026] [Christopher Devalme]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.