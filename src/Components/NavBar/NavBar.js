import React, { useEffect,useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsLogo from "./newslogo.jpg"
import { Link,Switch,Route } from 'react-router-dom'
import { Nav,DropdownButton,Dropdown } from 'react-bootstrap';





function NavBar() {

    return (
      <>
        <Navbar bg="danger" variant="danger" fixed="top">
        {/* <div class="dropdown">
         <IconButton className='boutton'style={{color:'white'}} ><MenuIcon /></IconButton>
  </div> */}
  <div style={{backgroundColor:'white'}}>
<DropdownButton id="dropdown-basic-button" title="+">
  <Dropdown.Item style={{backgroundColor:'white'}}href="#/action-1">
    <Switch>
        <Link style={{marginRight:'44%',marginLeft:'90%'}} to="/US"><h3>US News</h3></Link>
    </Switch>
  </Dropdown.Item>
  <Dropdown.Item href="#/action-2">
    <Switch>
        <Link style={{marginRight:'44%'}}to="/France"><h3>France News</h3></Link>
    </Switch>
  </Dropdown.Item>
  <Dropdown.Item href="#/action-3">
    <Switch>
      <Link to="/Canada"><h3>Canada News</h3></Link>
    </Switch>
  </Dropdown.Item>
</DropdownButton>
</div>
        
        <Navbar.Brand style={{marginLeft:'39%',fontWeight:"900",color:'white',fontSize:'36px'}} href="#home">NewsApp
        <img className="p" src={NewsLogo} height="50" width="50" alt="profile photo"/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          



       
         

        

    </Nav>
    

      

      </Navbar>
      {/* <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          Search for a topic
        </Header>
        <SearchBar searchForTopic={searchForTopic} />
      
        {loading && (
          <p style={{ textAlign: "center" }}>Searching for articles...</p>
        )}
        {articles.length > 0&& (
          <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    */}
       </> 
   );
  }

export default NavBar;

