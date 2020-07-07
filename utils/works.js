export const workItems = [
    {
        type: 'big',
        title: 'Cegoc',
        text:[
            {
               p: 'Cegoc was the first in-house job I had as a developer and it is still an active freelance customer of mine. '
            },
            {
                p: `When started working in the project, Cegoc's website was old and was on the verge of a complete redesign. Since the website is run by Cegos, Cegoc's mother company, my goal was to work in the WordPress theme individual pages created by Cegoc Portugal and get the markup ready for the new layout. It was basically about creating HTML and CSS so that the old pages styles got closer to the new look the website was about to have.`
             },
             {
                p: `Five years later, I am still working with them as a freelancer. Nowadays my work with them is way more complex. I manage Cegoc's 4 websites, creating content, sites from scratch (UX, UI, and implementation).`
             },

        ],
        myWork:[
            {
                 img:'../cegoc-screen1.jpg' 
            },
            {
                img:'../cegoc-screen2.jpg' 
           },
           {
               img:'../cegoc-screen3.jpg' 
          }
        ],
        techUsed:[
            "photoshop", 'illustrator', 'after effects', 'XD', 'HTML', 'SASS', 'JS', 'PHP', 'jQuery', 'WP',  
        ],
        projectMock1: '../cegoc-mock.png',
        bgImg: './cegoc-mock2.png',
        bgColor: '#c7f3ff',
        hero: '../cegoc-bg.jpg'

    },
    {
        type: 'small',
        title: 'Allianz',
        text:[
            {
               p: `Allianz BENELUX in partnership with Deloitte Belgium recruited me to create a GUI for a query tool to be used by Allianz call center agents.`
            },
            {
                p: `I was given green light to create the tool interface from zero. With the support of another team who was performing interviews for the UX research, I designed and developed this React-based app.` 
             },
        ],
        problem:[
            `The challenge was to be able to display the customer's information in a new improved way. The old way was too dense and hard to deal with, so with that in mind, I had to come up with a solution that really could make the difference.`,
            `The main problem to be addressed was the search. The search had to be easy and accurate.`,
            `The second key point was the information display. When the data gets too big or too messy it's important to be able to handle it and display it in the cleanest way possible.`
        ],
        solution:[
           {
               title: 'Create a google style search.',
               text: 'The solution for the search was to implement a search flow that pretty much any user is used too. Since Google is the most used search engine, I opted to follow the way Google handles the user flow for search.',
               img1: '../search1.png',
               img2: '../search2.png',
           }, 
           {
            title: 'Display the information via a nodes graph',
            text: 'The customer searched is the main node so everything related to him appears as connections and any data connected to these connections can be expanded.',
            img1: '../allianz-screens.jpg',
            }
        ],
        techUsed:[
            "photoshop", 'illustrator', 'XD', 'Figma', 'react', 'SASS', 'JS', 'nodejs', 'graphql', 'github', 'visual studio',  
        ],
        projectMock1: '../allianz-project.jpg',
        bgImg: './allianz-prev.png',
        bgColor: '#c7ffce',

    },
    {
        type: 'big',
        title: 'Enaviga',
        text:[
            {
               p: 'Enaviga is a boat rental and management market place. It was my first job in Belgium and my favorite project so far.'
            },
            {
                p: `As a startup environment, Enaviga had a lot of challenges to be tackled in the shortest amount of time possible. The web application was split into a client site and partner site. I was in charge of the partner site where I had to develop a whole dashboard with KPI's of the rentals, billings, fleet, 3rd-party apps, and so on...`
             },
        ],
        problem:[
            `The challenge was that the boat rental business was outdated. There was not a lot to offer in terms of technology for the renting process. So I was asked to come up with something that could give the "Uau!" factor to the customer. After researching via questioning our customers what were the main cons of renting a boat I was able to identify 2 main issues.`,
            `The first issue was the check-in process duration. It could mean a whole day of waiting since normally there is only one person for the process for all the boats of the day.`,
            `The second issue was the lack of information and quality content for the boat pages that makes customers less confident about renting or not the boat. Renting a boat is similar to renting an Airbnb, so the experience should be as similar as possible.`
        ],
        solution:[
           {
               title: 'Re-invent the check-in process',
               text: 'I designed and developed an app for the check-in process app. The app goal was to let each customer do his check-in with the app to be later approved by the boat manager. This solution would reduce the check-in process duration by 70%. This could mean that our partners were able to schedule more rentals for the day.',
               img1: '../checkin1.png',
               img2: '../checkin2.png',
               img3: '../checkin3.png',
           }, 
           {
            title: 'Create a beautiful, modern management app. Make the user want to use it and upload content.',
            text: 'The partner app was a key point for the business. If the partner app was flawless the boat owners would easily start uploading their boats in the app. And the challenge was completed successfully. Although it is a management tool, with a lot of options, toggles, tables, items, etc, the information organization follows a line shared by each area, the iconography is also consistent throughout the app and the feedback was amazing from our customers. ',
            img1: '../enaviga-screens.jpg',
            }
        ],
        techUsed:[
            "photoshop", 'illustrator', 'after effects', 'XD', 'react', 'SASS', 'JS', 'gitLab', 'visual studio', 'xcode'  
        ],
        projectMock1: '../enaviga.png',
        codeImg: '../enavigacode.png',
        bgImg: './enaviga.png',
        bgColor: '#f5f5f5',

    },
    
    {
        type: 'small',
        title: 'Urbeazul',
        text:[
            {
               p: `Single page website to showcase the work and information about Urbeazul, an Architecture company based in Portugal`
            },
            {
                p: `I was provided with the pictures and the texts and asked to design and develop the website with the content provided. I wireframed a clean WordPress style page and it was gladly accepted by Urbeazul. From there I prototyped and developed it.`
             },
        ],
        myWork:[
            {
                 img:'../urbeazul-screen1.jpg' 
            },
            {
                img:'../urbeazul-screen2.jpg' 
           },
           {
               img:'../urbeazul-screen3.jpg' 
          }
        ],
        techUsed:[
            "photoshop", 'XD', 'HTML', 'SASS', 'JS', 'jQuery', 'github'
        ],
        projectMock1: '../urbeazul-mainMock.png',
        bgImg: './urbeazul-mock.png',
        bgColor: '#ffe6c7   ',

    },
    {
        type: 'small',
        title: 'Neupro',
        text:[
            {
               p: `Neupro is a Parkinson's disease treatment. UCB Pharma needed to have an app for to complement Neupro, as it gives information about how to use it and when to use it, as well as keeps a record of the treatment and its phases to help the customer with the process.`
            },
            {
                p: `I was in charge of the web integration process. In the beginning, I was developing the markup, styling, and interactions to integrate with the backend and Drupal. I was also in charge of new features UX and UI. After a while, I was also managing the bridge between the backend developers, drupal developers, front-end developers, and the scrum master. `
             },
       
        ],
        myWork:[
            {
                 img:'../neupro-screen1.jpg' 
            },
            {
                img:'../neupro-screen2.jpg' 
           },
           {
               img:'../neupro-screen3.jpg' 
          }
        ],
        techUsed:[
            "photoshop", 'illustrator', 'XD', 'HTML', 'SASS', 'JS', 'PHP', 'jQuery', 'github',  
        ],
        projectMock1: '../neupro.jpg',
        bgImg: './neupro-mock.png',
        hero: '../cegoc-bg.jpg',
        bgColor: '#d7c7ff',

    }
]