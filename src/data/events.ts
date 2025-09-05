export interface Event {
  id: number;
  team1: string; 
  team2: string;  
  date: string;
  odds: {
    team1Win: number;
    draw: number;
    team2Win: number;
  };
}

export const events: Event[] = [
  { id: 1, team1: 'Real Madrid', team2: 'Barcelona', date: '2025-09-10 18:00', odds: { team1Win: 1.8, draw: 2.0, team2Win: 2.5 } },
  { id: 2, team1: 'Manchester United', team2: 'Liverpool', date: '2025-09-11 20:00', odds: { team1Win: 2.1, draw: 1.9, team2Win: 2.3 } },
  { id: 3, team1: 'Bayern Munich', team2: 'Borussia Dortmund', date: '2025-09-12 16:30', odds: { team1Win: 1.6, draw: 2.2, team2Win: 3.0 } },
  { id: 4, team1: 'Juventus', team2: 'AC Milan', date: '2025-09-12 19:00', odds: { team1Win: 1.9, draw: 2.1, team2Win: 2.7 } },
  { id: 5, team1: 'Chelsea', team2: 'Arsenal', date: '2025-09-13 18:45', odds: { team1Win: 2.0, draw: 2.0, team2Win: 2.5 } },
  { id: 6, team1: 'PSG', team2: 'Lyon', date: '2025-09-14 20:00', odds: { team1Win: 1.7, draw: 2.3, team2Win: 3.1 } },
  { id: 7, team1: 'Atletico Madrid', team2: 'Sevilla', date: '2025-09-15 17:00', odds: { team1Win: 2.2, draw: 1.8, team2Win: 2.6 } },
  { id: 8, team1: 'Inter Milan', team2: 'Napoli', date: '2025-09-16 19:30', odds: { team1Win: 1.9, draw: 2.0, team2Win: 2.8 } },
  { id: 9, team1: 'Tottenham', team2: 'Everton', date: '2025-09-17 18:00', odds: { team1Win: 2.1, draw: 1.9, team2Win: 2.4 } },
  { id: 10, team1: 'Manchester City', team2: 'Leicester City', date: '2025-09-18 20:15', odds: { team1Win: 1.5, draw: 2.2, team2Win: 3.0 } },
  { id: 11, team1: 'RB Leipzig', team2: 'Schalke 04', date: '2025-09-19 16:00', odds: { team1Win: 1.8, draw: 2.0, team2Win: 2.9 } },
  { id: 12, team1: 'Benfica', team2: 'Porto', date: '2025-09-20 18:30', odds: { team1Win: 2.0, draw: 1.9, team2Win: 2.6 } },
  { id: 13, team1: 'Ajax', team2: 'PSV Eindhoven', date: '2025-09-21 19:00', odds: { team1Win: 1.7, draw: 2.1, team2Win: 3.0 } },
  { id: 14, team1: 'Galatasaray', team2: 'Fenerbahce', date: '2025-09-22 20:00', odds: { team1Win: 1.9, draw: 2.0, team2Win: 2.8 } },
  { id: 15, team1: 'Celtic', team2: 'Rangers', date: '2025-09-23 17:30', odds: { team1Win: 2.0, draw: 2.1, team2Win: 2.7 } },
];