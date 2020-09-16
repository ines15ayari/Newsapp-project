import React from "react";
import { List } from "semantic-ui-react";
import { Button,Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';


const ArticleList = (props) => {
  return (
    <>
    <List divided style={{ justifyContent:'space-between',display:'flex',flexWrap:'wrap'}}>
      {props.articles.map((article,index) => (
        <>
        <ArticleItem article={article} key={article.title + index} />
  <List.Item key={article.title + index}></List.Item>
  </>
))}
    </List>
    </>
  );
};
const ArticleItem = (props) => {
  const { article } = props;
  return (
    <Card style={{ width: '35rem',borderColor:'#e12e2e',borderWidth:'5px' }}>
      <h1 style={{backgroundColor:'#d02626',color:'white',fontSize:'200%'}}><Card.Title style={{fontSize:'100%',textAlign:'center'}}>{article.title}</Card.Title></h1>
  <Card.Img variant="top" src={article.urlToImage} />
  
  <Card.Body>
    
    <Card.Text style={{textAlign:'center'}}>
    <h4>{article.description}</h4>
    </Card.Text>
    <Link style={{textAlign:'center',marginLeft:'165px'}} to={`/`} ><Button style={{textAlign:'center'}} variant="primary"href={article.url} >More on<h3>{article.source.name}</h3></Button></Link>

  </Card.Body>
</Card>


  );
};

export default ArticleList;