import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const users = [
    {
      userprofileButton: "View Profile",
      username: "Amit Sharma",
      userImage: "https://randomuser.me/api/portraits/men/1.jpg",
      userIntro: "Passionate web developer creating modern and responsive websites."
    },
    {
      userprofileButton: "Edit Profile",
      username: "Priya Verma",
      userImage: "https://randomuser.me/api/portraits/women/2.jpg",
      userIntro: "Creative graphic designer focused on branding and visuals."
    },
    {
      userprofileButton: "Open Profile",
      username: "Rahul Singh",
      userImage: "https://randomuser.me/api/portraits/men/3.jpg",
      userIntro: "Software engineer building scalable applications for businesses."
    },
    {
      userprofileButton: "Check Profile",
      username: "Neha Gupta",
      userImage: "https://randomuser.me/api/portraits/women/4.jpg",
      userIntro: "Digital marketer helping brands grow through online campaigns."
    },
    {
      userprofileButton: "Visit Profile",
      username: "Arjun Patel",
      userImage: "https://randomuser.me/api/portraits/men/5.jpg",
      userIntro: "Data analyst transforming complex information into useful insights."
    },
    {
      userprofileButton: "Profile Details",
      username: "Sneha Jain",
      userImage: "https://randomuser.me/api/portraits/women/6.jpg",
      userIntro: "Frontend developer passionate about user friendly interfaces everywhere."
    },
    {
      userprofileButton: "My Profile",
      username: "Vikram Yadav",
      userImage: "https://randomuser.me/api/portraits/men/7.jpg",
      userIntro: "Mobile app developer creating smooth experiences across platforms."
    },
    {
      userprofileButton: "Show Profile",
      username: "Kavita Sharma",
      userImage: "https://randomuser.me/api/portraits/women/8.jpg",
      userIntro: "Content writer producing engaging articles for diverse audiences."
    },
    {
      userprofileButton: "User Profile",
      username: "Rohit Mehta",
      userImage: "https://randomuser.me/api/portraits/men/9.jpg",
      userIntro: "Cybersecurity enthusiast protecting systems from emerging digital threats."
    },
    {
      userprofileButton: "See Profile",
      username: "Anjali Patel",
      userImage: "https://randomuser.me/api/portraits/women/10.jpg",
      userIntro: "UI designer crafting attractive layouts with excellent usability."
    },
    {
      userprofileButton: "View Account",
      username: "Manish Kumar",
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userIntro: "Cloud engineer managing reliable infrastructure for enterprise applications."
    },
    {
      userprofileButton: "Open Account",
      username: "Pooja Mishra",
      userImage: "https://randomuser.me/api/portraits/women/12.jpg",
      userIntro: "Project manager coordinating teams to deliver successful outcomes."
    }
  ];

  return (
    <div>
      <Header />
      <div className="parent">
        {users.map((obj) => {
          return <Card bt={obj.userprofileButton} user={obj.username} image={obj.userImage} userIntro={obj.userIntro} />
        })}
      </div>
    </div>
  )
}


export default App
