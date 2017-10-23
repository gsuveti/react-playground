import React from 'react';
import Post from "./Post";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={"row"}>
                    <h1 className="col-xs-12 text-center">Welcome to my blog!</h1>
                    <Post title={'First post'}></Post>
                    <Post title={'Second post'}></Post>
                    <Post></Post>
                </div>
            </div>
        );
    }
}

export default App;