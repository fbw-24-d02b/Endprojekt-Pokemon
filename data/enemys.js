export const pokemon = [
  {
    name: "Pikachu",
    type: "electro",
    level: 20,
    hp: 150,
    picture: ` 
▓██▒                                                          
░████▒░▒                                           ▒████      
 ░███▒░░░░▒                                   ░█▓░█████       
  ░██▓░░░░░░▒                              ▒▓░░░░░████░       
    ▓█░░░░░░░░▒                          ▒▒░░░░░░▒███         
     ░█░░░░░░░░░▒                      ▒░░░░░░░░░▓█░          
       ░░░░░░░░░░▒      ░░░░░░░░     ░░░░░░░░░░░▒▒        ░░░▒
         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ░░░░░░░░░▒
           ░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ░▒░░░░░░░░░░░░
              ░░▒░░░░░░░░░░░░░░░░░░░░░░░▒░  ░▒░░░░░░░░░░░░░░░░
               ░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░ 
              ▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒ 
              ▒░░░▒▓▓░░░░░░░░░░░░░░▓▓▒░░░░░░░░░░░░░░░░░░░░░░  
              ▒░░██░ ▒▒░░░░░░░░░░▒▒ ▒██░░░░░░░░░░░░░░░░░░░░░  
              ░░░▓████░░░░░░░░░░░░████▓░░░░░░░░░░░░░░░░▒▒░    
              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░▒░           
             ▓▓▓▓▓▒░░░░░░░░░░░░░░░░░░░▒▓▓▓▓░░░░▒              
             ▒▓▓▓▓▓░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓░░░░░▒░            
              ▓▓▓▓▓░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓░░░░░░░▒           
               ▒▓▒░░░░░░░░░░░░░░░░░░░░▓▓▓▒ ░▒░░░░░░░░         
               ░░▒░░░░░░░░░░░░░░░░░░░░░▒▒  ░░░░░░░░▒░         
               ░░░░░░░░░░░░░░░░░░░░░▒░░░░▒░░░░░▒░             
               ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒░                
              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▒               
            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▒░                
           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                 
           ░░░░░░░░░░░░░░░▒░░░▒░░░░░░░░░░░░░░                 
       ░░ ░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░▒                
      ▒░▒░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░▒░░░▒            
       ▒▒▒░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░▒░░░░▒░░▒▒░            
        ▒░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░▒              
          ▒░░░░░░░░░░░░░░░▒░░░▒░░░░░░▒░░░░░░░▒░               
           ░▒░░░▒░░▒░░░░░░░░ ░▒░░░░░▒░░▒░░░▒░                 
              ▒▒    ░░▒░       ░▒▒▒  ░▒▒▒▒                    `,
    attacks: [
      {
        attack: "ThunderShock",
        damage: 40,
      },
      {
        attack: "ThunderWave",
        damage: 30,
      },
      {
        attack: "Star Shower",
        damage: 60,
      },
      {
        attack: "Howler",
        damage: 10,
      },
    ],
  },
  {
    name: "Eevee",
    type: "normal",
    level: 17,
    hp: 150,
    attacks: [
      {
        attack: "Quick Attack",
        damage: 40,
      },
      {
        attack: "Bite",
        damage: 35,
      },
      {
        attack: "Swift",
        damage: 50,
      },
      {
        attack: "Tackle",
        damage: 15,
      },
    ],
  },
  {
    name: "Jigglypuff",
    type: "fairy",
    level: 16,
    hp: 150,
    attacks: [
      {
        attack: "Sing",
        damage: 6,
      },
      {
        attack: "Double Slap",
        damage: 25,
      },
      {
        attack: "Body Slam",
        damage: 50,
      },
      {
        attack: "Disarming Voice",
        damage: 40,
      },
    ],
  },
  {
    name: "Zubat",
    type: "poison/flying",
    level: 15,
    hp: 150,
    attacks: [
      {
        attack: "Leech Life",
        damage: 20,
      },
      {
        attack: "Wing Attack",
        damage: 35,
      },
      {
        attack: "Poison Fang",
        damage: 40,
      },
      {
        attack: "Confuse Ray",
        damage: 5,
      },
    ],
  },
  {
    name: "Meowth",
    type: "normal",
    level: 18,
    hp: 150,
    attacks: [
      {
        attack: "Scratch",
        damage: 20,
      },
      {
        attack: "Bite",
        damage: 30,
      },
      {
        attack: "Fury Swipes",
        damage: 35,
      },
      {
        attack: "Pay Day",
        damage: 50,
      },
    ],
  },
  {
    name: "Psyduck",
    type: "water",
    level: 19,
    hp: 150,
    attacks: [
      {
        attack: "Water Gun",
        damage: 40,
      },
      {
        attack: "Confusion",
        damage: 50,
      },
      {
        attack: "Disable",
        damage: 5,
      },
      {
        attack: "Zen Headbutt",
        damage: 55,
      },
    ],
  },
  {
    name: "Machop",
    type: "fighting",
    level: 20,
    hp: 150,
    attacks: [
      {
        attack: "Karate Chop",
        damage: 50,
      },
      {
        attack: "Low Kick",
        damage: 45,
      },
      {
        attack: "Seismic Toss",
        damage: 55,
      },
      {
        attack: "Focus Energy",
        damage: 5,
      },
    ],
  },
  {
    name: "Geodude",
    type: "rock/ground",
    level: 18,
    hp: 150,
    attacks: [
      {
        attack: "Rock Throw",
        damage: 40,
      },
      {
        attack: "Magnitude",
        damage: 50,
      },
      {
        attack: "Self-Destruct",
        damage: 100,
      },
      {
        attack: "Defense Curl",
        damage: 5,
      },
    ],
  },
  {
    name: "Vulpix",
    type: "fire",
    level: 17,
    hp: 150,
    attacks: [
      {
        attack: "Ember",
        damage: 40,
      },
      {
        attack: "Quick Attack",
        damage: 30,
      },
      {
        attack: "Will-O-Wisp",
        damage: 5,
      },
      {
        attack: "Flame Burst",
        damage: 50,
      },
    ],
  },
  {
    name: "Oddish",
    type: "grass/poison",
    level: 16,
    hp: 150,
    attacks: [
      {
        attack: "Absorb",
        damage: 20,
      },
      {
        attack: "Poison Powder",
        damage: 5,
      },
      {
        attack: "Acid",
        damage: 35,
      },
      {
        attack: "Mega Drain",
        damage: 50,
      },
    ],
  },
];
