# Recipe Me!
[demo](https://sellofotoyi-recipe-me.netlify.app)

### `Description`
This is a react application which makes use of [Spoonacular food API](https://spoonacular.com/food-api/) (via GET HTTP requests) to render recipes, as per user's requests.\

### `Features`
- Home and Result pages: Retrieves recipes matching user's query via a search bar if available, else render an error component.
- Menu page: Renders random recipes upon mounting, then random recipes matching a chosen teg (dinner, dessert, etc).
- Search+ page: Retrieves recipes consisting of ingredients entered by the user if available, else render an error component.
- Renders a corresponding recipe modal when a user clicks a recipe card.

### `Trade-offs`
- No auto-complete: This is because the API key used is limited. This feature would result in a rather quicker depletion rate
