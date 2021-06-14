describe("Movie page", () => {
  beforeEach(() => {
      cy.visit('/')
  })
  it("Returns a list of all movies", () => {
  expect(cy.get("img")).to.exist
  })

  // it("Returns details of a specific movie", () => {

  // })

  // it("Returns a list of movies filtered on titles matching the given query", () => {

  // })

  // it("Returns all reviews for a given movie", () => {

  // })

  // it("Creates a new review, returns success status in JSON response", () => {

  // })

  // it("Creates a new user, returns success status in JSON response", () => {

  // })
})
