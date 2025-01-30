// const fetchData = async () => {
//   const res = await fetch(
//     "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAfbw26gYCXHuaE_LiEbVi_hqUsSBixAL8&channelId=UCN3XGE-6riVWqcKDHlWEP2w&part=snippet,id&order=date&maxResults=50"
//   );
//   const data = await res.json();
//   console.log(data);
// };

// fetchData();

// const API_KEY = "AIzaSyAfbw26gYCXHuaE_LiEbVi_hqUsSBixAL8"; // Replace with your actual API key
// const CHANNEL_ID = "UCN3XGE-6riVWqcKDHlWEP2w"; // Replace with the channel ID you want to fetch from

// async function fetchAndLogVideos(apiKey, channelId) {
//   const baseUrl = "https://www.googleapis.com/youtube/v3/search";
//   const params = new URLSearchParams({
//     key: apiKey,
//     channelId: channelId,
//     part: "snippet",
//     order: "date",
//     maxResults: 10,
//   });

//   try {
//     const response = await fetch(`${baseUrl}?${params.toString()}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Network error:", error);
//   }
// }

// // Call the function to fetch and log videos
// fetchAndLogVideos(API_KEY, CHANNEL_ID);

// const API_KEY = "AIzaSyAfbw26gYCXHuaE_LiEbVi_hqUsSBixAL8"; // Replace with your actual API key
// const searchTerm = "thegbmedia"; // Replace with your actual search term

// async function fetchVideos(apiKey, searchTerm) {
//   const baseUrl = "https://www.googleapis.com/youtube/v3/search";
//   const params = new URLSearchParams({
//     key: apiKey,
//     type: "video",
//     part: "snippet",
//     q: searchTerm,
//   });

//   try {
//     const response = await fetch(`${baseUrl}?${params.toString()}`);
//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Network error:", error);
//   }
// }

// Call the function to fetch and log videos
// fetchVideos(API_KEY, searchTerm);

// const app = Vue.createApp({
//   data() {
//     return {
//       firstName: "Godbless",
//       lastName: "EJovwo",
//       email: "ejovwogfreeman007@gmail.com",
//       image: "https://randomuser.me/api/portraits/men/10.jpg",
//       gender: "male",
//     };
//   },
//   methods: {
//     async getRandomUser() {
//       const res = await fetch("https://randomuser.me/api");
//       const { results } = await res.json();
//       console.log(results);

//       (this.firstName = results[0].name.first),
//         (this.lastName = results[0].name.last),
//         (this.email = results[0].email),
//         (this.image = results[0].picture.large);
//       this.gender = results[0].gender;
//     },
//   },
// });

const datas = [
  {
    id: 1,
    title: "HTML TUTORIAL FOR ABSOLUTE BEGINNERS",
    url: "https://www.youtube.com/embed/0bBvz7b61kw?si=Z1oL7RHuqwScx19z",
    date: "May 30, 2023",
    content: `Welcome to our web development series! We begin with HTML, covering the basics to help you structure web pages. From headings to links, you'll learn everything needed to build a strong foundation. Stay tuned as we progress to CSS and JavaScript. Subscribe for more updates!`,
  },
  {
    id: 2,
    title: "CSS TUTORIAL FOR ABSOLUTE BEGINNERS",
    url: "https://www.youtube.com/embed/OjStif4rowc?si=b_b81g10N2nmnaQX",
    date: "Jun 7, 2023",
    content: `In this tutorial, we dive into CSS to style and enhance your webpages. If you're new, check out our HTML tutorial first. Learn how to use colors, fonts, and layouts to create visually appealing designs. Get ready to take your web development skills to the next level!`,
  },
  {
    id: 3,
    title: "JAVASCRIPT TUTORIAL FOR ABSOLUTE BEGINNERS",
    url: "https://www.youtube.com/embed/esD38JRk50Y?si=jYHhIHTaOXlKbNDV",
    date: "Jun 27, 2023",
    content: `Welcome to JavaScript! Now that you've learned HTML and CSS, it's time to add interactivity. This tutorial covers variables, functions, and DOM manipulation to make websites dynamic. Follow along to master JavaScript and enhance your web development skills. Let's start coding!`,
  },
  {
    id: 4,
    title: "GIT & GITHUB TUTORIAL FOR ABSOLUTE BEGINNERS",
    url: "https://www.youtube.com/embed/GL06F6vLU1c?si=0FAuL1o0kzO0dZHG",
    date: "Mar 5, 2024",
    content: `Learn Git and GitHub to manage your projects efficiently. This tutorial covers version control, repositories, branching, and collaboration. Whether you're a beginner or experienced developer, mastering Git will streamline your workflow. Start building, tracking, and sharing code like a pro!`,
  },
  {
    id: 5,
    title: "BASIC SHELL NAVIGATION",
    url: "https://www.youtube.com/embed/t02aqxW_C6I?si=s1HRq0nWaC1FSCs3",
    date: "Jun 16, 2024",
    content: `Master basic shell navigation to improve efficiency in development. Learn essential commands like cd, ls, and mkdir to navigate and manage files quickly. These skills are crucial for using Git effectively. Watch now and boost your productivity!`,
  },
];

let articleContainer = document.querySelector("#article-container"); // Use class selector without 'All'
console.log(articleContainer);
let html = "";

datas.forEach((article) => {
  html += `
        <article>
            <h1>${article.title}</h1>
            <small>
                ${article.date} by <a href="https://twitter.com/thegbmedia">@thegbmedia</a>
            </small>
            <p>${article.content}</p>
            <iframe 
                width="100%" 
                height="400px" 
                src="${article.url}" 
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </article>
    `;
});

articleContainer.innerHTML = html; // Append the generated HTML

document.querySelector("#date").textContent = new Date().getFullYear();
