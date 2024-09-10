---
id: goalng_e2e_intro
title: Go E2E 快速入門
---
# E2E快速入門
通常分為三部分。
1. container nodes
2. setup nodes，
3. subject nodes
**container nodes**可以疊層，**Describe**與**context**屬於此類，包含container、setup與subject。
**setup nodes**負責建立測試用資料或前置準備，**BeforeEach**會幫每個container nodes準備好。
**subject nodes**則是等價於assert的驗證，如**It**。
可以透過官方範例發現以下三部分
```golang
var _ = Describe("Books", func() {
  var foxInSocks, lesMis *books.Book
  // setup nodes
  BeforeEach(func() {
    lesMis = &books.Book{
      Title:  "Les Miserables",
      Author: "Victor Hugo",
      Pages:  2783,
    }

    foxInSocks = &books.Book{
      Title:  "Fox In Socks",
      Author: "Dr. Seuss",
      Pages:  24,
    }
  })
  // container nodes
  Describe("Categorizing books", func() {
    Context("with more than 300 pages", func() {
      // subject nodes
      It("should be a novel", func() {
        Expect(lesMis.Category()).To(Equal(books.CategoryNovel))
      })
    })

    Context("with fewer than 300 pages", func() {
      It("should be a short story", func() {
        Expect(foxInSocks.Category()).To(Equal(books.CategoryShortStory))
      })
    })
  })
})
```