import { Switch, Route } from 'react-router-dom';

import { Home, Restaurant } from 'pages';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/estabelecimento/:id" component={Restaurant} />
    </Switch>
  );
}
