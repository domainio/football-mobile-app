const terms = {
  'splash-screen.nav-title':'Football App',
  'home-screen.nav-title':'Team List',
  'player-list': (length) => `Player List (${length})`,
  'match-list-top-10': (length) => `Match List (${(!!length && length > 0) ? 'Top 10' : '0'})`,
  'rival-team': 'Rival Team',
  'date':'Date',
  'competition':'Competition'

};

export default terms