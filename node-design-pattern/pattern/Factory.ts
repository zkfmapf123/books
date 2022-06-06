// Factory
type Obj = "Human" | "Animal" | "Bird";
class Factory {
  private constructor() {}
  static inject(worker: Obj) {
    switch (worker) {
      case "Animal":
        return new Lion();
      case "Bird":
        return new Bird();
      case "Human":
        return new Man();
    }
  }
}

// implementaion
interface IWorker {
  whoami(): string;
}

class Lion implements IWorker {
  whoami(): string {
    return "i am a lion";
  }
}

class Man implements IWorker {
  whoami(): string {
    return "i am a leedonggyu";
  }
}

class Bird implements IWorker {
  whoami(): string {
    return "i am a bird";
  }
}

const lion = Factory.inject("Animal");
console.log(lion.whoami());
const man = Factory.inject("Human");
console.log(man.whoami());
const bird = Factory.inject("Animal");
console.log(bird.whoami());

// ts-node Factory.ts
// example : npm knex
