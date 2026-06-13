import React from 'react'
import SectionOne from './components/section1/SectionOne'
import SectionTwo from './components/section2/SectionTwo'


const App = () => {
  const users = [
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D ',
      para: ' ',
      tag: 'Satisfied',
      color: 'royalblue'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      para: ' ',
      tag: 'Underserved',
      color: 'seagreen'
    },
    {
      image: 'https://images.unsplash.com/photo-1555421689-43cad7100750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      para: ' ',
      tag: 'Underbanked',
      color: 'orange'
    },
    {
      image: 'https://images.unsplash.com/photo-1541560052-5e137f229371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      para: ' ',
      tag: 'Underwear',
      color: 'red'
    },
    {
      image: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      para: ' ',
      tag: 'Notsatisfied',
      color: 'darkgray'
    },
  ]
  return (
    <div>
      <SectionOne users={users} />
      <SectionTwo />
    </div>
  )
}

export default App
