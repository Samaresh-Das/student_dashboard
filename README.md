# [Student Dashboard](https://student-dashboard-nu.vercel.app/)

This is a student dashboard, where students can see their enrolled courses. They can see the progress they made so far, the course details.



## Thinking and approach
Students dashboard should be something where students can see every details about their courses. In the main page we show all the courses with their instructor name and the progress bar. The progress bar is given to visually let student know quickly how much they completed. On going to course details it shows every single details about a course. It show the title, instructor, duration, enrollment status and many more. I also implemented progress step bar to show the number of weeks completed.

This project uses firebase as it's backend as firebase offers easy to use services with their SDK. And also it is very easy to implement the real-time data change feature in firebase. The course like and progress section is updated in real-time from the database. Whenever a user likes the course like will be updated and so as the progress.

## Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SchadCN](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)


## Features

- Course Details
- Liking course
- realtime data updates


## Installation

Run this project

```bash
  git clone https://github.com/Samaresh-Das/student_dashboard.git
  cd my-project
  npm install 
```

Once the installation is complete, you can run the project with the following command:

```
npm run dev
```
