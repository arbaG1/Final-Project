import React from 'react'
import {
    TeamsContainer, HeaderWrappper,
    TeamsH1, TeamsWrapper, TeamsImg,
    TeamsName, TeamsDesk,
    TeamsSubContainer
}from './TeamsElement'
import team1 from '../../Images/team1.jpg'
import team2 from '../../Images/team2.jpg'
import team3 from '../../Images/team3.jpg'
import team4 from '../../Images/team4.jpg'
import team5 from '../../Images/team5.jpg'
import team6 from '../../Images/team6.jpg'

const Teams = () => {
    return (
        <TeamsContainer  id="team">
            <HeaderWrappper>
                <TeamsH1>Our Team</TeamsH1>
            </HeaderWrappper>
            <TeamsSubContainer>

                <TeamsWrapper>
                    <TeamsImg src={team1} alt="team 1 galang"/>
                    <TeamsName>Galang Dika <br/> 19.11.3291</TeamsName>
                    <TeamsDesk>Fullstack</TeamsDesk>
                </TeamsWrapper>

                <TeamsWrapper>
                    <TeamsImg src={team2} alt="team 2 chris"/>
                    <TeamsName>Christian Erwin <br/> 19.11.3299</TeamsName>
                    <TeamsDesk>Front End</TeamsDesk>
                </TeamsWrapper>

                <TeamsWrapper>
                    <TeamsImg src={team3} alt="team 3 fatma"/>
                    <TeamsName>Fatma Mustamim <br/> 19.11.3249</TeamsName>
                    <TeamsDesk>Front End</TeamsDesk>
                </TeamsWrapper>
            </TeamsSubContainer>
            <TeamsSubContainer>
                <TeamsWrapper>
                        <TeamsImg src={team4} alt="team 4 alfian"/>
                        <TeamsName>Alfian Hatmaji <br/> 19.11.3273</TeamsName>
                        <TeamsDesk>Content Writing</TeamsDesk>
                    </TeamsWrapper>

                    <TeamsWrapper>
                        <TeamsImg src={team5} alt="team 5 faisal"/>
                        <TeamsName>Faisal Salim <br/> 19.11.3283</TeamsName>
                        <TeamsDesk>Content Writing</TeamsDesk>
                    </TeamsWrapper>

                    <TeamsWrapper>
                        <TeamsImg src={team6} alt="team 6 raka"/>
                        <TeamsName>Raka <br/> 19.11.3297</TeamsName>
                        <TeamsDesk>Content Writing</TeamsDesk>
                    </TeamsWrapper>
                </TeamsSubContainer>
        </TeamsContainer>
    )
}

export default Teams
