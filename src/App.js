import GeoMap from 'components/GeoMap'
import NYStats from 'components/NYStats'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Jumbotron >
        <Row>
          <Col className="text-center">
          <h1>New York State COVID-19 Stats</h1>
          </Col>
        </Row>
      <Row>
        <Col>
          <NYStats/>
        </Col>
        <Col >
          <GeoMap />
        </Col>
      </Row>
      </Jumbotron>
    </Container>
    </QueryClientProvider>
  );
}

export default App;
