import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Error from "./Error";
function AxiosDemo() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(true));
  }, []);

  if(isError){
    return(
        <Error/>
    )
  }

  return (
    <>
      
      <div className="container container-fluid">
        <div className="row text-center">
          {myData.map((currentEle) => {
            return (
              <div className="col-md-4 mt-5" key={currentEle.id}>
                <Card >
                  <Card.Body>
                    <Card.Title>{currentEle.title}</Card.Title>
                    <Card.Text>{currentEle.body}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AxiosDemo;
