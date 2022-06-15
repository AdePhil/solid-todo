# Solid-Todo

- Playing around with solidJS

## Features

- [x] In memory Crud of todos
- [x] Use effects to update page title
- [x] Save to Localstorage
- [ ] Try superbase/Prisma
- [x] Learn how to add scss to vite
- [x] Added path aliases

## Learnings

- Signals - values that change over time (State).
- Derived signals - values that changes when signals change (Computed state).
- Effects - effects are observers that listening to changes in signals.
- Components only render once - each JSX that has a signal act as an effect which tracks signal changes to update the dom.
- Destructure props are un-reactive while Undestructured props are reactive in solid.
- Always make computed signals functions if you want them to be reactive.
- memo (Don’t understand yet).
