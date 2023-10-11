class Character {
  fullName;
  family;
  age;
  isAlive = true;
  serie = "Game of Thrones";

  die() {
    this.isAlive = false;
  }
}

export default Character;
