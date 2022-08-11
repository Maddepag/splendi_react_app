import React from 'react';
import {
    ShowsContainer, ShowsBg, ShowsContent, ShowsH1, ShowsAnnounceBox, ShowsP, ShowsTable, ShowsLink
} from './ShowsElements'
import {FaTicketAlt } from 'react-icons/fa'; 

const show_data = [
    { date: '08/16/22', city: 'Philadelphia', 'venue': 'The Fillmore', 'link': 'https://www.thefillmorephilly.com/venueinfo'},
    { date: '08/17/22', city: 'Baltimore', 'venue': 'The Baltimorean', 'link': 'https://www.baltimoresoundstage.com/'},
    { date: '08/18/22', city: 'New York', 'venue': 'Madison Square Garden', 'link': 'https://www.baltimoresoundstage.com/'},
    { date: '08/19/22', city: 'Nashville', 'venue': 'Grand Ole Opry', 'link': 'https://www.baltimoresoundstage.com/'},
]



const Shows = () => {
    return (
        <>
            <ShowsContainer id="shows"> 
                <ShowsBg />
        
                <ShowsContent>
                    
                    <ShowsAnnounceBox>
                        <ShowsH1>upcoming shows</ShowsH1>

                        <ShowsTable>
                            {show_data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.date}</td>
                                    <td>{val.city.toUpperCase()}</td>
                                    <td>{val.venue}</td>
                                    <td><ShowsLink href={val.link} target="_blank"><FaTicketAlt/></ShowsLink></td>
                                </tr>
                        )
                        })}
                        </ShowsTable>
                    </ShowsAnnounceBox>
                </ShowsContent>
                
            </ShowsContainer>

        </>
    )
};

export default Shows;