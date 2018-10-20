import React from 'react';
import SideNav from 'react-simple-sidenav';
import NavItems from './NavItems';

const Sidenav = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'75%'
                }}
            >
                <NavItems/>
            </SideNav>
        </div>
    );
};

export default Sidenav;