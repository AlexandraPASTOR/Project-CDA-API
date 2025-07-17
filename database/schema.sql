DROP TABLE IF EXISTS Joke;

CREATE TABLE Joke (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL
);

INSERT INTO Joke (content) VALUES
('Quelle est la femelle du hamster ? L’Amsterdam'),
('Que dit un oignon quand il se cogne ? Aïe'),
('Quel est l''animal le plus heureux ? Le hibou, parce que sa femme est chouette.'),
('Pourquoi le football c''est rigolo ? Parce que Thierry en rit'),
('Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.'),
('Que se fait un Schtroumpf quand il tombe ? Un Bleu'),
('Quel est le comble pour un marin ? Avoir le nez qui coule'),
('Qu''est ce que les enfants usent le plus à l''école ? Le professeur'),
('Quel est le sport le plus silencieux ? Le para-chuuuut'),
('Quel est le comble pour un joueur de bowling ? C’est de perdre la boule');