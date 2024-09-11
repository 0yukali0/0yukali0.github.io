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
## Writing specs
用於描寫你預期與結果比較的地方，為階層底層。
1. **It** 描述要比較甚麼
2. **BeforeEach**每個同階層nodes的初始化 
於是乎，一個最底層container node通常會是BeforeEach與It組程。
體感跟單元測試是差不多的。
```golang
var _ = Describe("Books", func() {
  var book *books.Book
  BeforeEach(func() {
    book = &books.Book{
      Title: "Les Miserables",
      Author: "Victor Hugo",
      Pages: 2783,
    }
    Expect(book.IsValid()).To(BeTrue())
  })

  It("can extract the author's last name", func() {
    Expect(book.AuthorLastName()).To(Equal("Hugo"))
  })

  It("can fetch a summary of the book from the library service", func(ctx SpecContext) {
    summary, err := library.FetchSummary(ctx, book)
    Expect(err).NotTo(HaveOccurred())
    Expect(summary).To(ContainSubstring("Jean Valjean"))
  }, SpecTimeout(time.Second))
})
```
當有更高層的測試要求時，Container間的階層就是好方法，比如測k8s namespace中的deployment與pod時。便1st container提供namespace初始化，2st測試deployment與pod這樣。
```golang
var _ = Describe("k8s test", func() {
   BeforeEach(func() {
     // namespace init
     // deloyment
   })
   Describe("Is deployment right", func() {
      BeforeEach(func() {
        // TODO
      })
      Context("Is status ready", func() {
         BeforeEach(func() {
          // TODO
         })
        It("get pod", func(){ 
          //TODO 
        })
        It("check pod infog", func(){
          //TODO
        })
      })
    // TODO
   })
   Describe("Is pod metadata right", func() {
    // TODO
   })
})
```
