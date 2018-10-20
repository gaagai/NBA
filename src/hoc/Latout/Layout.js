import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
/*  CSS  */
import './layout.css';


class Layout extends Component {
    state = {
        showNav:false
    }
    toggleNav = (action) => {
        this.setState({
          showNav:action
        })
      }
    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleNav(false)}
                    onShowNav={() => this.toggleNav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;