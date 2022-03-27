import HomePage from "./HomePage"

const page = new HomePage()


describe("Alkosto's home page", () => {
it("Should render Alkosto's Home page",()=>{
  page.visite()
})

it("Can search some product",()=>{
  page.searchProduct("lavadora")
})

it("Can search televisor",()=>{
  page.searchTv()
})
it("Can search  nevera",()=>{
  page.searchFridge()
})
it("Can search celular",()=>{
  page.searchPhone()
})

})