import { isInTestEnv } from "./index";

describe("isInTestEnv Unit Test Suites", () => {
  it("should return true", () => {
    expect(isInTestEnv()).toBe(true);
  });

  it("should return true", () => {
    process.env.NODE_ENV === "dev";//on passe la variabiable sur "dev" pour la rendre fausse et que elle passe le teste , grace a ".not"
    expect(isInTestEnv()).not.toBe(true);
  });
});

//NOT
/*
.not
Si vous savez comment tester quelque chose, .not vous permet de tester son opposé. Par exemple, 
ce code teste que le meilleur goût de La Croix n'est pas coconut :
test('la meilleure saveur n\'est pas coconut', () => {
  expect(bestLaCroixFlavor()).not.toBe('coconut');
});

*/
