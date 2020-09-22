// import React from 'react';
// import Counter from './Counter/Counter';

// //JSX
// function App() {
//     // return <h1>Hello from App component own modules!</h1>;
//     return (
//         <div>
//             <h1>Counter</h1>
//             <Counter />
//         </div>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import GamesList from '../features/Games/GamesList';
import GameDetails from '../features/Games/GameDetails';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="container">
            <Router>
                <Nav />

                <Route exact path="/" component={ () => <h1>Homepage</h1> } />
                <Route exact path="/games" component={ GamesList } />
                <Route exact path="/games/:id" component={ GameDetails } />
            </Router>
        </div>
    );
}

export default App;