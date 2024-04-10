# Frontend React Coding Assessment

A movie review web app showcasing current movies and TVshows.

### 🏁 Getting Started

To get started, first you need to clone the repo then install the dependencies you need to run the app. Make sure you have [NodeJS](https://nodejs.org/en) from version 20 ^ installed. To install the dependence run this code in your terminal:

```bash
pnpm install #recommended
# or
npm install
#or
yarn
#or
bun install
```

While instating the dependencies, we need to get the free `API` key from [TMDB](https://www.themoviedb.org/settings/api) settings API page [here](https://www.themoviedb.org/settings/api). To find your api key just goto the `Settings` page then click on `API ` from the sidebar options.
![Alt text](image-1.png)

After you have gained your `API` key you can duplicate the `.env.example` file and rename the copy to `.env` then replace the value of `VITE_TMDB_API_KEY` with the `API` key you got from [TMDB API page](https://www.themoviedb.org/settings/api).

Once thats done, you can run the the following command to start the app.

```bash
pnpm dev #recommended
# or
npm run dev
# or
yarn dev
# or
bun dev
```

### 📦 Packages used in the project

- [React](https://react.dev/) a JS library for building user interfaces
- [TanStack Query](https://react-query.tanstack.com/) for managing and caching server state
- [Axios](https://axios-http.com/) for making HTTP requests
- [Swiper](https://swiperjs.com/) for creating responsive and touch-friendly sliders
- [Tailwind CSS](https://tailwindcss.com/) for building responsive and customizable UI components
- [TypeScript](https://www.typescriptlang.org/) for static types in JavaScript
- [React Icons](https://react-icons.github.io/react-icons/) a collection of every icon set you'll ever need
- [React Youtube](https://www.npmjs.com/package/react-youtube) for a layer over the YouTube IFrame Player API
- [React Router](https://reactrouter.com/en/main/start/tutorial#setup) For page routing (navigation)

---

This will start the app on [localhost:3000](http://localhost:3000) development server.

<details>
 <summary> 🧠  Breakdown of the coding test instructions </summary>

#### Description:

The assessment involves developing a web application using ReactJS and TypeScript. The goal is to create an application that allows users to search for movies in an open API movie database and view detailed information about each movie.

#### Challenge:

- Develop a web app using ReactJS and TypeScript.
- Allow users to search for movies in an open API movie database.
- Display 10 random movies on the home screen.
- Implement search functionality.
- Create a movie detail screen with detailed information.
- Ensure cross-browser compatibility.
- Develop a network business logic SDK in TypeScript.
- Integrate a state manager solution like Redux or MobX.

#### Bonus Features:

- Build a cross-platform desktop app using Electron.
- Optimize the state manager solution for performance.

Additional Guidelines:

- Use ReactJS with TypeScript.
- Utilize React Navigation for screen navigation.
- Implement reusable components for code maintainability.
- Follow UI/UX best practices.
- Handle loading states and errors gracefully.

Submission Requirements:

- Create a new Git repository on platforms like GitHub, GitLab, or Bitbucket.
- Include a README.md with setup instructions.
- Ensure the application can run based on the README instructions.
- Share the public repository URL.

#### Recommendations:

- Read the features and bonus features carefully.
- Commit changes in Git at appropriate intervals.
- Leave TODO comments in the code if needed.

#### Interview Process:

You have 4 days to complete the assessment, with an option to request an extra day. During the interview, explain and demonstrate the code based on the requirements. Let me know if you need further clarification on any specific aspect of the test.

</details>
