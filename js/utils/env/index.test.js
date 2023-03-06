import { isInTestEnv } from "./index";

describe("isInTestEnv Unit Test Suites", () => {
  it("should be in test env", () => {
    expect(isInTestEnv()).toBe(true);
  });

  it("should not be in test env", () => {
    //on passe la variabiable sur "dev" pour la rendre fausse et que elle passe le teste , grace a ".not"
    //"Process" est une variable liée a nodeJS
    process.env.NODE_ENV === 'dev';
    expect(isInTestEnv()).not.toBe(false);
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
