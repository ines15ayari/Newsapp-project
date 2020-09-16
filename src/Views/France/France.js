import React from 'react'
import { getBitcoinArticles } from "../api2"
import { Container, Header } from "semantic-ui-react";
import ArticleList from '../ArticleList'
import Search from '../Search'

export default class France extends React.Component {
    state = {
      articles: [],
      apiError: "",
    };
    // const [articles, setarticles] = useState([])
    // const [searchTopic, setsearchTopic] = useState("")
    // const [totalResults, settoalResults] = useState("")
    // const [loading, setloading] = useState(false)
    // const [apiError, setapiError] = useState("")

    async componentDidMount() {
        try {
          const response = await getBitcoinArticles();
          this.setState({ articles: response.articles });
        } catch (error) {
          this.setState({ apiError: "Could not find any articles" });
        }
      }
      render() {
        const { articles, apiError } = this.state;
        return (
          <div>
            <Search/>
          <Container style={{marginTop:"8%"}}>
            <Header as="h2" style={{ textAlign: "center",fontSize:'450%',fontFamily:'emoji',marginTop:'-64px'}}>
              Top Headlines in France
            </Header>
            {articles.length > 0 && <ArticleList articles={articles} />}
            {apiError && <p>Could not fetch any articles. Please try again.</p>}
          </Container>
          </div>
        );
      }}
