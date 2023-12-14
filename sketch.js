let gameState;
let cat_music, cat_movies, cat_sports;
let sound_intro, sound_player, sound_wrong, sound_correct, sound_theme, introSound = true;


let voice_Movie1, voice_Movie2, voice_Movie3, voice_Movie4, voice_Movie5;
let voice_Music1, voice_Music2, voice_Music3, voice_Music4, voice_Music5;
let voice_Sports1, voice_Sports2, voice_Sports3, voice_Sports4, voice_Sports5;

let question_music1, question_music2, question_music3, question_music4, question_music5; 
let multiple_music1, multiple_music2, multiple_music3, multiple_music4, multiple_music5;

let question_movies1, question_movies2, question_movies3, question_movies4, question_movies5;
let multiple_movies1, multiple_movies2, multiple_movies3, multiple_movies4, multiple_movies5;

let question_sports1, question_sports2, question_sports3, question_sports4, question_sports5;
let multiple_sports1, multiple_sports2, multiple_sports3, multiple_sports4, multiple_sports5;


let startScreen; 
let categories; 
let questionsMusic, questionsMovies, questionsSports;
let gameChoice;
let cat_scene;
let ansSelection = [">>>>", ">>>>", ">>>>", ">>>>"];
let selectedItemIndex = 0;
let questionCount_Music = 0, questionCount_Movies = 0, questionCount_Sports = 0;
let quesitonCat, quesitonMul, quesitonShow;
let questionAns;
let voice_check = true; 

let player1, player2;
let p1Score, p2Score;
let questionScore = 0;


let playCheck1 = false;
let playCheck2 = false;
let playCheck = true;
let sideSelection;
let menuCheck = 0;
let playerChoice = 0;

let makeChoice = true;

let questionChange = false;

function preload(){
  //Start Screen Image
  startScreen = loadImage('assets/menu/triviagame.jpg');
  
  //Categories Images
  cat_music = loadImage('assets/menu/triviagame_topic_music.jpg');
  cat_movies = loadImage('assets/menu/triviagame_topic_movies.jpg');
  cat_sports = loadImage('assets/menu/triviagame_topic_sports.jpg');
  
  //Music Questions Images
  question_music1 = loadImage('assets/image_music/triviagame_M1.jpg');
  multiple_music1 = loadImage('assets/image_music/triviagame_M1CHOICES.jpg');
  
  question_music2 = loadImage('assets/image_music/triviagame_M2.jpg');
  multiple_music2= loadImage('assets/image_music/triviagame_M2CHOICES.jpg');
  
  question_music3 = loadImage('assets/image_music/triviagame_M3.jpg');
  multiple_music3 = loadImage('assets/image_music/triviagame_M3CHOICES.jpg');
  
  question_music4 = loadImage('assets/image_music/triviagame_M4.jpg');
  multiple_music4 = loadImage('assets/image_music/triviagame_M4CHOICES.jpg');
  
  question_music5 = loadImage('assets/image_music/triviagame_M5.jpg');
  multiple_music5= loadImage('assets/image_music/triviagame_M5CHOICES.jpg');
  
  //Movies Questions Images
  question_movies1 = loadImage('assets/image_movies/triviagame_MO1.jpg');
  multiple_movies1 = loadImage('assets/image_movies/triviagame_MO1CHOICES.jpg');
  
  question_movies2 = loadImage('assets/image_movies/triviagame_MO2.jpg');
  multiple_movies2 = loadImage('assets/image_movies/triviagame_MO2CHOICES.jpg');
  
  question_movies3 = loadImage('assets/image_movies/triviagame_MO3.jpg');
  multiple_movies3 = loadImage('assets/image_movies/triviagame_MO3CHOICES.jpg');
  
  question_movies4 = loadImage('assets/image_movies/triviagame_MO4.jpg');
  multiple_movies4 = loadImage('assets/image_movies/triviagame_MO4CHOICES.jpg');
  
  question_movies5 = loadImage('assets/image_movies/triviagame_MO5.jpg');
  multiple_movies5 = loadImage('assets/image_movies/triviagame_MO5CHOICES.jpg');
  
  //Sports Questions Images
  question_sports1 = loadImage('assets/image_sports/triviagame_SP1.jpg');
  multiple_sports1 = loadImage('assets/image_sports/triviagame_SP1CHOICES.jpg');
  
  question_sports2 = loadImage('assets/image_sports/triviagame_SP2.jpg');
  multiple_sports2 = loadImage('assets/image_sports/triviagame_SP2CHOICES.jpg');
  
  question_sports3 = loadImage('assets/image_sports/triviagame_SP3.jpg');
  multiple_sports3 = loadImage('assets/image_sports/triviagame_SP3CHOICES.jpg');
  
  question_sports4 = loadImage('assets/image_sports/triviagame_SP4.jpg');
  multiple_sports4 = loadImage('assets/image_sports/triviagame_SP4CHOICES.jpg');
  
  question_sports5 = loadImage('assets/image_sports/triviagame_SP5.jpg');
  multiple_sports5 = loadImage('assets/image_sports/triviagame_SP5CHOICES.jpg');
  
  //Music/SFX
  sound_intro = loadSound('assets/sounds/show_intro.mp3');
  sound_player = loadSound('assets/sounds/buzzer.mp3'); 
  sound_wrong = loadSound('assets/sounds/incorrect_buzzer.mp3'); 
  sound_correct = loadSound('assets/sounds/correct.mp3');
  sound_theme = loadSound('assets/sounds/themeLoop.mp3');
  
  //Music voice Questions
  voice_Music1 = loadSound('assets/music/music_1.mp3');
  voice_Music2 = loadSound('assets/music/music_2.mp3');
  voice_Music3 = loadSound('assets/music/music_3.mp3');
  voice_Music4 = loadSound('assets/music/music_4.mp3');
  voice_Music5 = loadSound('assets/music/music_5.mp3');
  
  //Movie voice Questions
  voice_Movie1 = loadSound('assets/movies/movies_1.mp3');
  voice_Movie2 = loadSound('assets/movies/movies_2.mp3');
  voice_Movie3 = loadSound('assets/movies/movies_3.mp3');
  voice_Movie4 = loadSound('assets/movies/movies_4.mp3');
  voice_Movie5 = loadSound('assets/movies/movies_5.mp3');
  
  //Sports voice Questions
  voice_Sports1 = loadSound('assets/sports/sports_1.mp3');
  voice_Sports2 = loadSound('assets/sports/sports_2.mp3');
  voice_Sports3 = loadSound('assets/sports/sports_3.mp3');
  voice_Sports4 = loadSound('assets/sports/sports_4.mp3');
  voice_Sports5 = loadSound('assets/sports/sports_5.mp3');
  
  
  cat_scene = [cat_music, cat_movies, cat_sports];
  questionsMusic = [
    {
      question: question_music1,
      questionMultiple: multiple_music1,
      points: 10, 
      correct: 0,
      voice: voice_Music1,
      category: "Music"
    },
    {
      question: question_music2,
      questionMultiple: multiple_music2,
      points: 10,  
      correct: 0,
      voice: voice_Music2,
      category: "Music"
    },
    {
      question: question_music3,
      questionMultiple: multiple_music3,
      points: 10, 
      correct: 0,
      voice: voice_Music3,
      category: "Music"
    },
    {
      question: question_music4,
      questionMultiple: multiple_music4,
      points: 10, 
      correct: 0,
      voice: voice_Music4,
      category: "Music"
    },
    {
      question: question_music5,
      questionMultiple: multiple_music5,
      points: 10, 
      correct: 0,
      voice: voice_Music5,
      category: "Music"
    }
  ]; 
  questionsMovies = [
    {
      question: question_movies1,
      questionMultiple: multiple_movies1,
      points: 10, 
      correct: 0,
      voice: voice_Movie1,
      category: "Movies"
    },
    {
      question: question_movies2,
      questionMultiple: multiple_movies2,
      points: 10,  
      correct: 0,
      voice: voice_Movie2,
      category: "Movies"
    },
    {
      question: question_movies3,
      questionMultiple: multiple_movies3,
      points: 10, 
      correct: 0,
      voice: voice_Movie3,
      category: "Movies"
    },
    {
      question: question_movies4,
      questionMultiple: multiple_movies4,
      points: 10, 
      correct: 0,
      voice: voice_Movie4,
      category: "Movies"
    },
    {
      question: question_movies5,
      questionMultiple: multiple_movies5,
      points: 10, 
      correct: 0,
      voice: voice_Movie5,
      category: "Movies"
    }
  ]; 
  questionsSports = [
    {
      question: question_sports1,
      questionMultiple: multiple_sports1,
      points: 10, 
      correct: 0,
      voice: voice_Sports1,
      category: "Sports"
    },
    {
      question: question_sports2,
      questionMultiple: multiple_sports2,
      points: 10,  
      correct: 0,
      voice: voice_Sports2,
      category: "Sports"
    },
    {
      question: question_sports3,
      questionMultiple: multiple_sports3,
      points: 10, 
      correct: 0,
      voice: voice_Sports3,
      category: "Sports"
    },
    {
      question: question_sports4,
      questionMultiple: multiple_sports4,
      points: 10, 
      correct: 0,
      voice: voice_Sports4,
      category: "Sports"
    },
    {
      question: question_sports5,
      questionMultiple: multiple_sports5, 
      points: 10, 
      correct: 0,
      voice: voice_Sports5,
      category: "Sports"
    }
  ]; 
  
}

//Setup of the program.
function setup() {
  // createCanvas(800, 900);
  let canvas = createCanvas(800, 900);
  canvas.parent("game");
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textSize(24);
  
  gameState = 'main';
  player1 = new players();
  player2 = new players();
}

//Manages the state of the game. 
function draw() {
  background(120);
  gameProgress();
  // print("gameState: " + gameState);
  // print("menuCheck: " + menuCheck);
  // print(selectedItemIndex);
}


//Controls the Player 1 functions
class players {
  constructor(){ 
    this.score = 0; 
  }
  
  display(check){
    if(check === 1){
      text("Player 1: " + this.score, width/2 - 200, 20);
    } else if(check === 2){
      text("Player 2: " + this.score, width/2 + 200, 20);
    }
  }
  
  addScore(posPoints){
    this.score = this.score + posPoints;
  }
  
  loseScore(posPoints){
    this.score = this.score - posPoints;
  }
  
}


function gameProgress(){ 
  if (!sound_theme.isPlaying() && introSound === false) {
    sound_theme.play();
    sound_theme.setVolume(0.1);
  } 
  
  switch(gameState){
    case 'main': 
      startScene();
      break;
    case 'categories': 
      catMenu();
      break;
    case 'answer': 
      answers(); 
      break;
    case 'question':
      if(selectedItemIndex === 0){
        gameChoice = 'questionMusic';
      } else if(selectedItemIndex === 1){
        gameChoice = 'questionMovies';
      } else if(selectedItemIndex === 2){
        gameChoice = 'questionSports';
      }
        
      selectMainItem();
      break;
    case 'checkAnswer':
      selectAnswerItem();
      break;
    default: break;
  }
  player1.display(1);
  player2.display(2);
}

function readTime() {
  gameState = 'answer';
  voice_check = true; 
  
  
  switch(quesitonCat){
    case 'Music': 
      if(questionCount_Music === 0 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Music;
        setTimeout(noAnswer, 5000); 
        questionCount_Music = 1;
      } else if(questionCount_Music === 1 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Music;
        questionCount_Music = 2;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Music === 2 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Music;
        questionCount_Music = 3;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Music === 3 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Music;
        questionCount_Music = 4;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Music === 4 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Music;
        questionCount_Music = 5;
        setTimeout(noAnswer, 5000); 
      } 
      break;
    case 'Movies':
      if(questionCount_Movies === 0 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Movies;
        setTimeout(noAnswer, 5000); 
        questionCount_Movies = 1;
      } else if(questionCount_Movies === 1 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Movies;
        questionCount_Movies = 2;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Movies === 2 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Movies;
        questionCount_Movies = 3;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Movies === 3 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Movies;
        questionCount_Movies = 4;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Movies === 4 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Movies;
        questionCount_Movies = 5;
        setTimeout(noAnswer, 5000); 
      } 
      break; 
    case 'Sports':
      if(questionCount_Sports === 0 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Sports;
        setTimeout(noAnswer, 5000); 
        questionCount_Sports = 1;
      } else if(questionCount_Sports === 1 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Sports;
        questionCount_Sports = 2;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Sports === 2 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Sports;
        questionCount_Sports = 3;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Sports === 3 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Sports;
        questionCount_Sports = 4;
        setTimeout(noAnswer, 5000); 
      } else if(questionCount_Sports === 4 && questionChange === true){
        questionChange = false; 
        questionAns = questionCount_Sports;
        questionCount_Sports = 5;
        setTimeout(noAnswer, 5000); 
      } 
      break;
    default: break; 
      
  }
}

function catMenu() {
  menuCheck = 0;
  
  for (let i = 0; i < cat_scene.length; i++) {
    if (i === selectedItemIndex) {
      image(cat_scene[i], 0, 0);
    }
  }
  sideSelection = cat_scene.length;
}

function selectMainItem() {
  // switch (selectedItemIndex) {
  let voiceSound;
  
  switch (gameChoice) {
    case 'questionMusic':
      // Music
      image(questionsMusic[questionCount_Music].question, 0, 0);
      questionScore = questionsMusic[questionCount_Music].points;
      quesitonCat = questionsMusic[questionCount_Music].category;
      quesitonMul = questionsMusic[questionCount_Music].questionMultiple;
      quesitonShow = questionsMusic[questionCount_Music].correctScreen;
      voiceSound = questionsMusic[questionCount_Music].voice;  
      if (!voiceSound.isPlaying() && voice_check) {
        voice_check = false; 
        voiceSound.play();
        questionChange = true; 
      } 
      setTimeout(readTime, 5000);
      break;
    case 'questionMovies':
      // Movies
      image(questionsMovies[questionCount_Movies].question, 0, 0);
      questionScore = questionsMovies[questionCount_Movies].points;
      quesitonCat = questionsMovies[questionCount_Movies].category;
      quesitonMul = questionsMovies[questionCount_Movies].questionMultiple;
      quesitonShow = questionsMovies[questionCount_Movies].correctScreen;
      voiceSound = questionsMovies[questionCount_Movies].voice;  
      if (!voiceSound.isPlaying() && voice_check) {
        voice_check = false; 
        voiceSound.play();
        questionChange = true; 
      } 
      setTimeout(readTime, 5000);
      break;
    case 'questionSports':
      // Sports
      image(questionsSports[questionCount_Sports].question, 0, 0);
      questionScore = questionsSports[questionCount_Sports].points;
      quesitonCat = questionsSports[questionCount_Sports].category;
      quesitonMul = questionsSports[questionCount_Sports].questionMultiple;
      quesitonShow = questionsSports[questionCount_Sports].correctScreen;
      voiceSound = questionsSports[questionCount_Sports].voice;  
      if (!voiceSound.isPlaying() && voice_check) {
        voice_check = false; 
        voiceSound.play();
        questionChange = true; 
      } 
      setTimeout(readTime, 5000);
      break;
    default:
      break;
  }
}

function selectAnswerItem() {
  // selectedItemIndex
  if(selectedItemIndex === questionsMusic[questionAns].correct){
    if(playerChoice === 1){
      player1.addScore(questionScore);
      playerChoice = 0;
      gameState = 'categories';
      playCheck = true;
      sound_correct.play();
    } else if(playerChoice === 2){
      gameState = 'categories';
      player2.addScore(questionScore);
      playerChoice = 0;
      playCheck = true;
      sound_correct.play();
    }
  } else if(selectedItemIndex != questionsMusic[questionAns].correct) {
    if(playerChoice === 1){
      gameState = 'categories';
      player1.loseScore(questionScore);
      playerChoice = 0;
      playCheck = true;
      sound_wrong.play();
    } else if(playerChoice === 2){
      gameState = 'categories';
      player2.loseScore(questionScore);
      playerChoice = 0;
      playCheck = true;
      sound_wrong.play();
    }
  }
  
}

function answers() {
  menuCheck = 1; 
  if(playCheck === true){ 
    playCheck1 = true;
    playCheck2 = true;
  }
  ansMenu();
}

function ansMenu() {
  fill(0);
  image(quesitonMul, 0, 0);
  for (let i = 0; i < ansSelection.length; i++) {
    if (i === selectedItemIndex) {
      fill(0, 0, 255); // Highlight the selected item
    } else {
      fill(0);
    }
    text(ansSelection[i], width / 2 - 70, 465 + i * 60);
  }
  sideSelection = ansSelection.length;
  if(playerChoice === 1){
    rect(width/2 - 250, 30, 100, 20);
  } else if(playerChoice === 2) {
    rect(width/2 + 150, 30, 100, 20);
  }
}

function noAnswer(){
  gameState = 'categories';
  sound_wrong.play();
}

function keyPressed() {
  if (keyCode === UP_ARROW && menuCheck != 2) {
    // Move selection up
    selectedItemIndex = (selectedItemIndex - 1 + sideSelection) % sideSelection;
  } else if (keyCode === DOWN_ARROW && menuCheck != 2) {
    // Move selection down
    selectedItemIndex = (selectedItemIndex + 1) % sideSelection;
  } else if (keyCode === ENTER) {
    // Perform action based on the selected item
    if(menuCheck === 0){
      
      gameState = 'question';
      // selectMainItem();
    } else if(menuCheck === 1){
      selectAnswerItem();
      // gameState = 'checkAnswer';
    } else if(menuCheck === 2){
      selectStartItem();
      sound_intro.stop();
      introSound = false; 
    }
  } else if (keyCode === LEFT_ARROW && playCheck1 === true && playCheck === true) {
    //Player 1
    playCheck2 = false;
    playCheck = false;
    playerChoice = 1;
    sound_player.play();
  } else if (keyCode === RIGHT_ARROW && playCheck2 === true && playCheck === true) {
    //Player 2
    playCheck1 = false;
    playCheck = false;
    playerChoice = 2;
    sound_player.play();
    fill(0, 0, 255);
  }
}

function startScene() {
  menuCheck = 2;
  image(startScreen, 0, 0);
  if (!sound_intro.isPlaying()) {
    sound_intro.play();
    sound_intro.setVolume(0.2);
  } 
}

function selectStartItem() {
  switch (selectedItemIndex) {
    case 0:
      gameState = 'categories';
      break;
    default:
      break;
  }
}