import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import Weather from './components/Weather'

export default (
    <Route>
        <Route path="/" component={App} >
            <IndexRoute component={Weather} />
            
        
        
        
            {/* 404 catch. No routes below this line */}
            <Route path="*" component={NotFound} />
        </Route>
    </Route>
)
