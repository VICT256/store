
const ENV = process.env.ENVIRONMENT;

const constants = {
      clientURL :  ENV === "LIVE" ? process.env.REACT_APP_LIVE_CLIENT_URL : ( ENV === "DEV" ? process.env.REACT_APP_CLIENT_URL : process.env.REACT_APP_LOCAL_CLIENT_URL) ,
      serverURL :  ENV === "LIVE" ? process.env.REACT_APP_LIVE_SERVER_URL : ( ENV === "DEV" ? process.env.REACT_APP_SERVER_URL : process.env.REACT_APP_LOCAL_SERVER_URL)
 
}


export default constants;

export const Posts=[
{
      id: 1,
      posted_by: "Ahmed Tinibu",
      username :"jagaban",
      title: "Let the church people breath, to those always spaking ill of it, There shoulb e no controversy",
      createdAt : "7 days ago",
      likes : 523,
      hates: '8k'
      
},
      {
            id: 2,
            fposted_by: "James Dmian",
            username :"janse23",
            title: "Back in the days of the old testament, People do not have to commeensuarete for their wrongs but have to discipline their old folks with all te",
            createdAt : "5 days ago",
            likes :2,
            hates: 14
     },
     {
      id: 3,
      posted_by: "Favour Dikachi",
      username :"frenzy",
      title: "People living in the baamas has this flair for rolls royce, You have got tomfit in",
      createdAt : "16mins ago",
      likes : "1k",
      hates: 23
   },
{
      id: 4,
      posted_by: "David Adeleke",
      username :"davido",
      title: "A privae Jet would bad enough to use for taking breakfast",
      createdAt : "7 days ago",
      likes : '12k',
      hates: 123
},

{
      id: 5,
      posted_by: "Daddy Freeze",
      username :"daddyfreeze",
      title: "imagine the lifestyle of taking your brakfast in the far country",
      createdAt : "7 days ago",
      likes :33,
      hates: 12
},
{
      id: 6,
      posted_by: "Ruth Kadiri",
      username :"ruthkadiri",
      title: "Stop filming my actors without my consent, let them be. i also pay them well you know",
      createdAt : "7 days ago",
      likes : 24,
      hates: 123
},

]