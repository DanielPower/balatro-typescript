export type Joker = {
  activation?: "independent" | "on scored" | "on held";
  buyPrice: number;
  effect: string;
  name: string;
  rarity: "common" | "uncommon" | "rare" | "legendary";
  sellPrice: number;
  type:
    | "additive mult"
    | "chips"
    | "multiplicative mult"
    | "effect"
    | "retrigger"
    | "economy"
    | "chips and additive mult";
  unlockRequirement: string;
  imageUrl: string;
};

export const jokers = {
  joker: {
    name: "Joker",
    effect: "+4 Mult",
    type: "additive mult",
    rarity: "common",
    buyPrice: 2,
    sellPrice: 1,
    unlockRequirement: "Unlocked from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/ef/Joker.png",
  },
  greedy_joker: {
    name: "Greedy Joker",
    effect: "Played cards with Diamond suit give +4 Mult when scored.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/43/Greedy_Joker.png",
  },
  lusty_joker: {
    name: "Lusty Joker",
    effect: "Played cards with Heart suit give +4 Mult when scored.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Lusty_Joker.png",
  },
  wrathful_joker: {
    name: "Wrathful Joker",
    effect: "Played cards with Spade suit give +4 Mult when scored.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/7b/Wrathful_Joker.png",
  },
  gluttonous_joker: {
    name: "Gluttonous Joker",
    effect: "Played cards with Club suit give +4 Mult when scored.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/ac/Gluttonous_Joker.png",
  },
  jolly_joker: {
    name: "Jolly Joker",
    effect: "+8 Mult if played hand contains a Pair",
    type: "additive mult",
    rarity: "common",
    buyPrice: 3,
    sellPrice: 1,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/40/Jolly_Joker.png",
  },
  zany_joker: {
    name: "Zany Joker",
    effect: "+12 Mult if played hand contains a Three of a Kind",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/45/Zany_Joker.png",
  },
  mad_joker: {
    name: "Mad Joker",
    effect: "+20 Mult if played hand contains a Four of a Kind",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/6d/Mad_Joker.png",
  },
  crazy_joker: {
    name: "Crazy Joker",
    effect: "+10 Mult if played hand contains a Straight",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4d/Crazy_Joker.png",
  },
  droll_joker: {
    name: "Droll Joker",
    effect: "+10 Mult if played hand contains a Flush.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/9c/Droll_Joker.png",
  },
  sly_joker: {
    name: "Sly Joker",
    effect: "+50 Chips if played hand contains a Pair",
    type: "chips",
    rarity: "common",
    buyPrice: 3,
    sellPrice: 1,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4e/Sly_Joker.png",
  },
  wily_joker: {
    name: "Wily Joker",
    effect: "+100 Chips if played hand contains a Three of a Kind",
    type: "chips",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4d/Wily_Joker.png",
  },
  clever_joker: {
    name: "Clever Joker",
    effect: "+150 Chips if played hand contains a Four of a Kind",
    type: "chips",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/6a/Clever_Joker.png",
  },
  devious_joker: {
    name: "Devious Joker",
    effect: "+100 Chips if played hand contains a Straight.",
    type: "chips",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4a/Devious_Joker.png",
  },
  crafty_joker: {
    name: "Crafty Joker",
    effect: "+80 Chips if played hand contains a Flush.",
    type: "chips",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/7f/Crafty_Joker.png",
  },
  half_joker: {
    name: "Half Joker",
    effect: "+20 Mult if played hand contains 3 or fewer cards.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a0/Half_Joker.png",
  },
  joker_stencil: {
    name: "Joker Stencil",
    effect:
      "X1 Mult for each empty Joker slot. Joker Stencil included (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/2e/Joker_Stencil.png",
  },
  four_fingers: {
    name: "Four Fingers",
    effect: "All Flushes and Straights can be made with 4 cards",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Four_Fingers.png",
  },
  mime: {
    name: "Mime",
    effect: "Retrigger all card held in hand abilities",
    type: "retrigger",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/65/Mime.png",
  },
  credit_card: {
    name: "Credit Card",
    effect: "Go up to -$20 in debt",
    type: "economy",
    rarity: "common",
    buyPrice: 1,
    sellPrice: 1,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/aa/Credit_Card.png",
  },
  ceremonial_dagger: {
    name: "Ceremonial Dagger",
    effect:
      "When Blind is selected, destroy Joker to the right and permanently add double its sell value to this Mult (Currently +0 Mult)",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/76/Ceremonial_Dagger.png",
  },
  banner: {
    name: "Banner",
    effect: "+40 Chips for each remaining discard.",
    type: "chips",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/87/Banner.png",
  },
  mystic_summit: {
    name: "Mystic Summit",
    effect: "+15 Mult when 0 discards remaining",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a4/Mystic_Summit.png",
  },
  marble_joker: {
    name: "Marble Joker",
    effect: "Adds one Stone card to the deck when Blind is selected",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/16/Marble_Joker.png",
  },
  loyalty_card: {
    name: "Loyalty Card",
    effect: "x4 Mult every 6 hands played 5 remaining",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/eb/Loyalty_Card.png",
  },
  "8_ball": {
    name: "8 Ball",
    effect:
      "Create a Planet card if played hand contains 2 or more 8s (Must have room)",
    type: "effect",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/ef/8_Ball.png",
  },
  misprint: {
    name: "Misprint",
    effect: "+? Mult",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e1/Misprint.png",
  },
  dusk: {
    name: "Dusk",
    effect: "Retrigger all played cards in final hand of the round",
    type: "retrigger",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/5d/Dusk.png",
  },
  raised_fist: {
    name: "Raised Fist",
    effect: "Adds double the rank of lowest card held in hand to Mult",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/3/37/Raised_Fist.png",
  },
  chaos_the_clown: {
    name: "Chaos the Clown",
    effect: "1 free Reroll per shop",
    type: "effect",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/0/02/Chaos_the_Clown.png",
  },
  fibonacci: {
    name: "Fibonacci",
    effect: "Each played Ace, 2, 3, 5, or 8 gives +8 Mult when scored",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/f1/Fibonacci.png",
  },
  steel_joker: {
    name: "Steel Joker",
    effect:
      "This joker gains X0.25 Mult for each Steel Card in your full deck (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Steel_Joker.png",
  },
  scary_face: {
    name: "Scary Face",
    effect: "Played face cards give +30 Chips when scored",
    type: "chips",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c8/Scary_Face.png",
  },
  abstract_joker: {
    name: "Abstract Joker",
    effect: "+3 Mult for each Joker card (Currently +0 Mult)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/ca/Abstract_Joker.png",
  },
  delayed_gratification: {
    name: "Delayed Gratification",
    effect: "Earn $2 per discard if no discards are used by end of the round",
    type: "economy",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c3/Delayed_Gratification.png",
  },
  hack: {
    name: "Hack",
    effect: "Retrigger each played 2, 3, 4, or 5",
    type: "retrigger",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/fd/Hack.png",
  },
  pareidolia: {
    name: "Pareidolia",
    effect: "All cards are considered face cards",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/81/Pareidolia.png",
  },
  gros_michel: {
    name: "Gros Michel",
    effect: "+15 Mult1 in 4 chance this is destroyed at the end of round.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/6f/Gros_Michel.png",
  },
  even_steven: {
    name: "Even Steven",
    effect:
      "Played cards with even rank give +4 Mult when scored (10, 8, 6, 4, 2)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/20/Even_Steven.png",
  },
  odd_todd: {
    name: "Odd Todd",
    effect:
      "Played cards with odd rank give +30 Chips when scored (A, 9, 7, 5, 3)",
    type: "chips",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/17/Odd_Todd.png",
  },
  scholar: {
    name: "Scholar",
    effect: "Played Aces give +20 Chips and +4 Mult when scored",
    type: "chips and additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c5/Scholar.png",
  },
  business_card: {
    name: "Business Card",
    effect: "Played face cards have a 1 in 2 chance to give $2 when scored",
    type: "economy",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/16/Business_Card.png",
  },
  supernova: {
    name: "Supernova",
    effect: "Adds the number of times poker hand has been played to Mult",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/3/30/Supernova.png",
  },
  ride_the_bus: {
    name: "Ride the Bus",
    effect:
      "+1 Mult per consecutive hand played without a scoring face card (Currently +0 Mult)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/3/34/Ride_the_Bus.png",
  },
  space_joker: {
    name: "Space Joker",
    effect: "1 in 4 chance to upgrade level of played poker hand",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/70/Space_Joker.png",
  },
  egg: {
    name: "Egg",
    effect: "Gains $3 of sell value at end of round",
    type: "economy",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/26/Egg.png",
  },
  burglar: {
    name: "Burglar",
    effect: "When Blind is selected, gain +3 Hands and lose all discards",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/29/Burglar.png",
  },
  blackboard: {
    name: "Blackboard",
    effect: "X3 Mult if all cards held in hand are Spades or  Clubs",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c6/Blackboard.png",
  },
  runner: {
    name: "Runner",
    effect:
      "Gains +10 Chips if played hand contains a Straight (Currently +20 Chips)",
    type: "chips",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/14/Runner.png",
  },
  ice_cream: {
    name: "Ice Cream",
    effect: "+100 Chips-5 Chips for every hand played",
    type: "chips",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/5d/Ice_Cream.png",
  },
  dna: {
    name: "DNA",
    effect:
      "If first hand of round has only 1 card, add a permanent copy to deck and draw it to hand",
    type: "effect",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/47/DNA.png",
  },
  splash: {
    name: "Splash",
    effect: "Every played card counts in scoring",
    type: "effect",
    rarity: "common",
    buyPrice: 3,
    sellPrice: 1,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/0/01/Splash.png",
  },
  blue_joker: {
    name: "Blue Joker",
    effect: "+2 Chips for each remaining card in deck (Currently +104 Chips)",
    type: "chips",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/ed/Blue_Joker.png",
  },
  sixth_sense: {
    name: "Sixth Sense",
    effect:
      "If first hand of round is a single 6, destroy it and create a Spectral card (Must have room)",
    type: "effect",
    rarity: "rare",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/d5/Sixth_Sense.png",
  },
  constellation: {
    name: "Constellation",
    effect: "Gains X0.1 Mult per Planet card used (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/69/Constellation.png",
  },
  hiker: {
    name: "Hiker",
    effect: "Every played card permanently gains +4 Chips when scored",
    type: "chips",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a9/Hiker.png",
  },
  faceless_joker: {
    name: "Faceless Joker",
    effect: "Earn $5 if 3 or more face cards are discarded at the same time",
    type: "economy",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/8f/Faceless_Joker.png",
  },
  green_joker: {
    name: "Green Joker",
    effect: "+1 Mult per hand played -1 Mult per discard  (Currently +0 Mult)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/6c/Green_Joker.png",
  },
  superposition: {
    name: "Superposition",
    effect:
      "Create a Tarot card if poker hand contains an Ace and a Straight (Must have room)",
    type: "effect",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/68/Superposition.png",
  },
  to_do_list: {
    name: "To Do List",
    effect:
      "Earn $5 if poker hand is a [Poker Hand], poker hand changes on every payout",
    type: "economy",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/2c/To_Do_List.png",
  },
  cavendish: {
    name: "Cavendish",
    effect:
      "X3 Mult 1 in 1000 chance this card is destroyed at the end of round",
    type: "multiplicative mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement:
      "It is technically unlocked at start, but can only be bought or found if  Gros Michel Gros Michel+15 Mult1 in 4 chance this is destroyed at the end of round. has been destroyed during the current run.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/13/Cavendish.png",
  },
  card_sharp: {
    name: "Card Sharp",
    effect: "X3 Mult if played poker hand has already been played this round",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/12/Card_Sharp.png",
  },
  red_card: {
    name: "Red Card",
    effect:
      "Gains +3 Mult when any Booster Pack is skipped (Currently +0 Mult)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/93/Red_Card.png",
  },
  madness: {
    name: "Madness",
    effect:
      "When Blind is selected, gain X0.5 Mult and destroy a random Joker (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/ee/Madness.png",
  },
  square_joker: {
    name: "Square Joker",
    effect:
      "Gains +4 Chips if played hand has exactly 4 cards (Currently 16 Chips)",
    type: "chips",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/53/Square_Joker.png",
  },
  sance: {
    name: "Séance",
    effect:
      "If poker hand is a Straight Flush, create a random Spectral card (Must have room)",
    type: "effect",
    rarity: "rare",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/6f/S%C3%A9ance.png",
  },
  riffraff: {
    name: "Riff-Raff",
    effect: "When Blind is selected, create 2 Common Jokers (Must have room)",
    type: "effect",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/d2/Riff-Raff.png",
  },
  vampire: {
    name: "Vampire",
    effect:
      "Gains X0.2 Mult per Enhanced card played, removes card Enhancement (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4e/Vampire.png",
  },
  shortcut: {
    name: "Shortcut",
    effect: "Allows Straights to be made with gaps of 1 rank (ex: 2 3 5 7 8)",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/89/Shortcut.png",
  },
  hologram: {
    name: "Hologram",
    effect:
      "Gains X0.25 Mult per playing card added to your deck (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c9/Hologram.png",
  },
  vagabond: {
    name: "Vagabond",
    effect: "Create a Tarot card if hand is played with $3 or less",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e7/Vagabond.png",
  },
  baron: {
    name: "Baron",
    effect: "Each King held in hand gives X1.5 Mult",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/40/Baron.png",
  },
  cloud_9: {
    name: "Cloud 9",
    effect:
      "Earn $1 for each 9 in your full deck at end of round (Currently $4)",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4a/Cloud_9.png",
  },
  rocket: {
    name: "Rocket",
    effect: "Earn $1 at end of round. Gains $2 when Boss Blind is defeated",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/fb/Rocket.png",
  },
  obelisk: {
    name: "Obelisk",
    effect:
      "X0.2 Mult per consecutive hand played without playing your most played poker hand (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/b/be/Obelisk.png",
  },
  midas_mask: {
    name: "Midas Mask",
    effect: "All face cards become Gold cards when played",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/84/Midas_Mask.png",
  },
  luchador: {
    name: "Luchador",
    effect: "Sell this card to disable the current Boss Blind",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/64/Luchador.png",
  },
  photograph: {
    name: "Photograph",
    effect: "First played face card gives X2 Mult when scored",
    type: "multiplicative mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/0/06/Photograph.png",
  },
  gift_card: {
    name: "Gift Card",
    effect:
      "Add $1 of sell value to every Joker and Consumable card at end of round",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/3/37/Gift_Card.png",
  },
  turtle_bean: {
    name: "Turtle Bean",
    effect: "+5 hand size, reduces by 1 each round",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/ca/Turtle_Bean.png",
  },
  erosion: {
    name: "Erosion",
    effect:
      "+4 Mult for each card below 52 in your full deck (Currently +0 Mult)",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/3/3a/Erosion.png",
  },
  reserved_parking: {
    name: "Reserved Parking",
    effect: "Each face card held in hand has a 1 in 2 chance to give $1",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c2/Reserved_Parking.png",
  },
  mailin_rebate: {
    name: "Mail-In Rebate",
    effect: "Earn $3 for each discarded [rank], rank changes every round",
    type: "economy",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/3/3d/Mail-In_Rebate.png",
  },
  to_the_moon: {
    name: "To the Moon",
    effect:
      "Earn an extra $1 of interest for every $5 you have at end of round",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/d1/To_the_Moon.png",
  },
  hallucination: {
    name: "Hallucination",
    effect:
      "1 in 2 chance to create a Tarot card when any Booster Pack is opened (Must have room)",
    type: "effect",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/b/bc/Hallucination.png",
  },
  fortune_teller: {
    name: "Fortune Teller",
    effect: "+1 Mult per Tarot card used this run (Currently +0)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/8b/Fortune_Teller.png",
  },
  juggler: {
    name: "Juggler",
    effect: "+1 hand size",
    type: "effect",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/b/be/Juggler.png",
  },
  drunkard: {
    name: "Drunkard",
    effect: "+1 discard",
    type: "effect",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/48/Drunkard.png",
  },
  stone_joker: {
    name: "Stone Joker",
    effect:
      "This Joker gains +25 Chips for each Stone Card in your full deck (Currently +0 Chips)",
    type: "chips",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Unlocked from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c9/Stone_Joker.png",
  },
  golden_joker: {
    name: "Golden Joker",
    effect: "Earn $4 at end of round",
    type: "economy",
    rarity: "common",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/9a/Golden_Joker.png",
  },
  lucky_cat: {
    name: "Lucky Cat",
    effect:
      "Gains X0.2 Mult each time a Lucky card successfully triggers (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement:
      "Available from start. (need a lucky card in deck to see in shop)",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/f1/Lucky_Cat.png",
  },
  baseball_card: {
    name: "Baseball Card",
    effect: "Uncommon Jokers each give X1.5 Mult",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/dd/Baseball_Card.png",
  },
  bull: {
    name: "Bull",
    effect: "+2 Chips for each dollar you have (Currently +0 Chips)",
    type: "chips",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/7a/Bull.png",
  },
  diet_cola: {
    name: "Diet Cola",
    effect: "Sell this card to create a free Double Tag",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/57/Diet_Cola.png",
  },
  trading_card: {
    name: "Trading Card",
    effect: "If first discard of round has only 1 card, destroy it and earn $3",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/0/0c/Trading_Card.png",
  },
  flash_card: {
    name: "Flash Card",
    effect: "+2 Mult per reroll in the shop (Currently +0 Mult)",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e3/Flash_Card.png",
  },
  popcorn: {
    name: "Popcorn",
    effect: "+20 Mult -4 Mult per round played",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/85/Popcorn.png",
  },
  spare_trousers: {
    name: "Spare Trousers",
    effect:
      "Gains +2 Mult if played hand contains a Two Pair (Currently +0 Mult)",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/85/Spare_Trousers.png",
  },
  ancient_joker: {
    name: "Ancient Joker",
    effect:
      "Each played card with [suit] give x1.5 Mult when scored. Suit changes at end of round.",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Missing Data.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a3/Ancient_Joker.png",
  },
  ramen: {
    name: "Ramen",
    effect: "X2 Mult, Loses X0.01 Mult per card discarded",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/f8/Ramen.png",
  },
  walkie_talkie: {
    name: "Walkie Talkie",
    effect: "Each played 10 or 4 gives +10 Chips and +4 Mult when scored",
    type: "chips and additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a3/Walkie_Talkie.png",
  },
  seltzer: {
    name: "Seltzer",
    effect: "Retrigger all cards played for the next 10 hands",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/69/Seltzer.png",
  },
  castle: {
    name: "Castle",
    effect:
      "This Joker gains +3 Chips per discarded [Suit] card, suit changes every round (Currently +0 Chips)",
    type: "chips",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/1f/Castle.png",
  },
  smiley_face: {
    name: "Smiley Face",
    effect: "Played face cards give +4 Mult when scored",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/6f/Smiley_Face.png",
  },
  campfire: {
    name: "Campfire",
    effect:
      "This Joker gains X0.5 Mult for each card sold, resets when Boss Blind is defeated (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Available from start.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/0/01/Campfire.png",
  },
  golden_ticket: {
    name: "Golden Ticket",
    effect: "Played Gold cards earn $3 when scored",
    type: "economy",
    rarity: "common",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Play a five card hand that contains only Gold cards.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/cf/Golden_Ticket.png",
  },
  mr_bones: {
    name: "Mr. Bones",
    effect:
      "Prevents Death if chips scored are at least 25% of required chips self destructs",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Lose five runs.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/11/Mr._Bones.png",
  },
  acrobat: {
    name: "Acrobat",
    effect: "X3 Mult on final hand of round",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Play 200 hands",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/8f/Acrobat.png",
  },
  sock_and_buskin: {
    name: "Sock and Buskin",
    effect: "Retrigger all played face cards",
    type: "retrigger",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Play 300 face cards across all runs.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/48/Sock_and_Buskin.png",
  },
  swashbuckler: {
    name: "Swashbuckler",
    effect:
      "Adds the sell value of all owned Jokers left of this card to Mult (Currently +1 Mult)",
    type: "additive mult",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Sell 20 Jokers.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/88/Swashbuckler.png",
  },
  troubadour: {
    name: "Troubadour",
    effect: "+2 hand size, -1 hands per round",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement:
      "Win 5 consecutive rounds by playing only a single hand in each. (Discards are fine.)",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/64/Troubadour.png",
  },
  certificate: {
    name: "Certificate",
    effect:
      "When round begins, add a random playing card with a random seal to your hand",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Have a Gold card with a Gold Seal.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e5/Certificate.png",
  },
  smeared_joker: {
    name: "Smeared Joker",
    effect:
      "Hearts and Diamonds count as the same suit,  Spades and  Clubs count as the same suit",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Have 3 or more Wild Cards in your deck.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/7d/Smeared_Joker.png",
  },
  throwback: {
    name: "Throwback",
    effect: "X0.25 Mult for each Blind skipped this run (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Continue a run from the Main Menu.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/69/Throwback.png",
  },
  hanging_chad: {
    name: "Hanging Chad",
    effect: "Retrigger first played card used in scoring",
    type: "retrigger",
    rarity: "common",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Beat a Boss Blind with a High Card hand.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/1/15/Hanging_Chad.png",
  },
  rough_gem: {
    name: "Rough Gem",
    effect: "Played cards with Diamond suit earn $1 when scored",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Have at least 30 Diamonds in your deck",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/27/Rough_Gem.png",
  },
  bloodstone: {
    name: "Bloodstone",
    effect:
      "1 in 3 chance for played cards with Heart suit to give X2 Mult when scored",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Have at least 30 Hearts in your deck.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/0/00/Bloodstone.png",
  },
  arrowhead: {
    name: "Arrowhead",
    effect: "Played cards with Spade suit give +50 Chips when scored",
    type: "chips",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Have at least 30 Spades in your deck.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/d1/Arrowhead.png",
  },
  onyx_agate: {
    name: "Onyx Agate",
    effect: "Played cards with Club suit give +8 Mult when scored.",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Have at least 30 Clubs in your deck",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/23/Onyx_Agate.png",
  },
  glass_joker: {
    name: "Glass Joker",
    effect:
      "Gains X0.5 Mult for every Glass Card that is destroyed (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Have 5 or more Glass cards in your deck.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/df/Glass_Joker.png",
  },
  showman: {
    name: "Showman",
    effect:
      "Joker, Tarot, Planet, and Spectral cards may appear multiple times",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Reach Ante 4.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/61/Showman.png",
  },
  flower_pot: {
    name: "Flower Pot",
    effect:
      "x3 Mult if played hand has a scoring Diamond suit card,  Club suit card,  Heart suit card, and  Spade suit card",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Reach Ante Level 8",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/cc/Flower_Pot.png",
  },
  blueprint: {
    name: "Blueprint",
    effect: "Copies ability of Joker to the right",
    type: "effect",
    rarity: "rare",
    buyPrice: 10,
    sellPrice: 5,
    unlockRequirement: "Win 1 run.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/98/Blueprint.png",
  },
  wee_joker: {
    name: "Wee Joker",
    effect:
      "This Joker gains +8 Chips when each played 2 is scored (Currently +10 Chips)",
    type: "chips",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Win a run in 18 or fewer rounds.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/2b/Wee_Joker.png",
  },
  merry_andy: {
    name: "Merry Andy",
    effect: "+3 discards, -1 hand size",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Win a run in 12 or fewer rounds",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e6/Merry_Andy.png",
  },
  oops_all_6s: {
    name: "Oops! All 6s",
    effect: "Doubles all listed probabilities (ex: 1 in 3 -> 2 in 3)",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 4,
    sellPrice: 2,
    unlockRequirement: "Earn at least 10,000 Chips in a single hand.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/2/25/Oops%21_All_6s.png",
  },
  the_idol: {
    name: "The Idol",
    effect:
      "Each played [rank] of [suit] gives X2 Mult when scored Card changes every round",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "In one hand, earn at least 1,000,000 Chips.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/8f/The_Idol.png",
  },
  seeing_double: {
    name: "Seeing Double",
    effect:
      "X2 Mult if played hand has a scoring Club card and a scoring card of any other suit",
    type: "multiplicative mult",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement:
      "Play a hand that contains four 7 of Clubs.  Other suits that count as clubs (e.g. wild suits) with rank 7 will also count.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a1/Seeing_Double.png",
  },
  matador: {
    name: "Matador",
    effect: "Earn $8 if played hand triggers the Boss Blind ability",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement:
      "Defeat a Boss Blind in one hand, without using discards.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/ec/Matador.png",
  },
  hit_the_road: {
    name: "Hit the Road",
    effect: "Gains X0.5 Mult per discarded Jack this round (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Discard 5 Jacks at the same time.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/4/4b/Hit_the_Road.png",
  },
  the_duo: {
    name: "The Duo",
    effect: "x2 Mult if played hand contains a Pair",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Win a run without playing a Pair.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/f/fb/The_Duo.png",
  },
  the_trio: {
    name: "The Trio",
    effect: "x3 Mult if played hand contains a Three of a Kind",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Win a run without playing a Three of a Kind",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/81/The_Trio.png",
  },
  the_family: {
    name: "The Family",
    effect: "X4 Mult if played hand contains a Four of a Kind",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Win a run without playing a Four of a Kind.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/ae/The_Family.png",
  },
  the_order: {
    name: "The Order",
    effect: "X3 Mult if played hand contains a Straight",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Win a run without playing a Straight.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/59/The_Order.png",
  },
  the_tribe: {
    name: "The Tribe",
    effect: "x2 Mult if played hand contains a Flush",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Win a run without playing a Flush.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/9a/The_Tribe.png",
  },
  stuntman: {
    name: "Stuntman",
    effect: "+300 Chips-2 hand size.",
    type: "chips",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement:
      "Earn at least 100 million (100,000,000) Chips in a single hand",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/9b/Stuntman.png",
  },
  invisible_joker: {
    name: "Invisible Joker",
    effect:
      "After 3 rounds, sell this card to Duplicate a random Joker (Currently 0/3)  (Removes Negative from copy)",
    type: "effect",
    rarity: "rare",
    buyPrice: 10,
    sellPrice: 5,
    unlockRequirement: "Win a game while never having more than 4 jokers.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/a6/Invisible_Joker.png",
  },
  brainstorm: {
    name: "Brainstorm",
    effect: "Copies the ability of leftmost Joker",
    type: "effect",
    rarity: "rare",
    buyPrice: 10,
    sellPrice: 5,
    unlockRequirement: "Discard a Royal Flush.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/84/Brainstorm.png",
  },
  satellite: {
    name: "Satellite",
    effect: "Earn $1 at end of round per unique Planet card used this run",
    type: "economy",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Have at least $400.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/5a/Satellite.png",
  },
  shoot_the_moon: {
    name: "Shoot the Moon",
    effect: "+13 Mult for each Queen held in hand.",
    type: "additive mult",
    rarity: "common",
    buyPrice: 5,
    sellPrice: 2,
    unlockRequirement: "Play every Heart card in your deck in one round.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/5/57/Shoot_the_Moon.png",
  },
  drivers_license: {
    name: "Driver's License",
    effect:
      "x3 Mult if you have at least 16 Enhanced cards in your full deck (Currently 0)",
    type: "multiplicative mult",
    rarity: "rare",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Enhance 16 cards in your deck",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e0/Driver%27s_License.png",
  },
  cartomancer: {
    name: "Cartomancer",
    effect: "Create a Tarot card when Blind is selected (Must have room)",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Discover every Tarot Card.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/94/Cartomancer.png",
  },
  astronomer: {
    name: "Astronomer",
    effect: "All Planet cards and Celestial Packs in the shop are free",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 8,
    sellPrice: 4,
    unlockRequirement: "Discover all Planet cards.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/d/dd/Astronomer.png",
  },
  burnt_joker: {
    name: "Burnt Joker",
    effect: "Upgrade the level of the first discarded poker hand each round",
    type: "effect",
    rarity: "uncommon",
    buyPrice: 6,
    sellPrice: 3,
    unlockRequirement: "Sell 50 cards.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/c/c4/Burnt_Joker.png",
  },
  bootstraps: {
    name: "Bootstraps",
    effect: "+2 Mult for every $5 you have.",
    type: "additive mult",
    rarity: "uncommon",
    buyPrice: 7,
    sellPrice: 3,
    unlockRequirement: "Have two or more Polychrome Jokers at once",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/e/e3/Bootstraps.png",
  },
  canio: {
    name: "Canio",
    effect: "Gains X1 Mult when a face card is destroyed (Currently X1 Mult)",
    type: "multiplicative mult",
    rarity: "legendary",
    buyPrice: 20,
    sellPrice: 10,
    unlockRequirement: "Find this Joker from the Soul card.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/7/75/Canio.png",
  },
  triboulet: {
    name: "Triboulet",
    effect: "Played Kings and Queens each give x2 Mult when scored",
    type: "multiplicative mult",
    rarity: "legendary",
    buyPrice: 20,
    sellPrice: 10,
    unlockRequirement: "Find this Joker from the Soul card.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/9/9f/Triboulet.png",
  },
  yorick: {
    name: "Yorick",
    effect: "X5 Mult only after using 23 discards (Discards left: 23)",
    type: "multiplicative mult",
    rarity: "legendary",
    buyPrice: 20,
    sellPrice: 10,
    unlockRequirement: "Find this Joker from the Soul card.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/a/ad/Yorick.png",
  },
  chicot: {
    name: "Chicot",
    effect: "Disables effect of every Boss Blind",
    type: "effect",
    rarity: "legendary",
    buyPrice: 20,
    sellPrice: 10,
    unlockRequirement: "Find this Joker from the Soul card.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/8/8e/Chicot.png",
  },
  perkeo: {
    name: "Perkeo",
    effect:
      "Creates a Negative copy of 1 random consumable card in your possession at the end of the shop",
    type: "effect",
    rarity: "legendary",
    buyPrice: 20,
    sellPrice: 10,
    unlockRequirement: "Find this Joker from the Soul card.",
    imageUrl:
      "https://static.wikia.nocookie.net/balatrogame/images/6/60/Perkeo.png",
  },
} as const satisfies { [key: string]: Joker };
