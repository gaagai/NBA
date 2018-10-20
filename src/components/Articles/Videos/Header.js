import React from 'react';
import TeamInfo from '../Elements/TeamInfo';


const Header = (props) => {
    const Teaminfo = (team) => {
        return team ? (
            <TeamInfo team={team}/>
        )
        :
        null;
    }
    return (
        <div>
            {Teaminfo(props.teamData)}
        </div>
    );
};

export default Header;