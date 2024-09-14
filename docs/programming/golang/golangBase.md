---
id: golang_getstarted
title: Golang基本
---

# Golang基本範例
簡單說明[Golang基礎範例](https://gobyexample.com/)的功能。
## 基本
### 變數、常數與指標
```golang
// 常數宣告
const s string = "constant"

func zeroptr(iptr *int) {
    *iptr = 0
}

func main() {
    // 宣告變數、自適應型態
    // 等同於a := "initial"
    var a = "initial"
    fmt.Println(a)
    // 多變數宣告、定義適應型態
    var b, c int = 1, 2
    fmt.Println(b, c)
    // 事先宣告，定義型態
    var d int
    fmt.Println(d)
    // 指標
    i := 1
    zeroptr(&i)
    fmt.Println("zeroptr", i)
}
```
### For迴圈
```golang
func main() {
    // 使用 i++ 達到
    for i := 0; i < 3; i++ { fmt.Println(i) }
    // 使用 range， 依序拜訪[1, 2, 3]
    for i := range 3 { fmt.Println("range", i) }
    // 無限迴圈
    for { fmt.Println("loop") }
}
```
### If與Swith
```golang
// if, else if, else if, ...., else
if num := 9; num < 0 {
    fmt.Println(num, "is negative")
} else if num < 10 {
    fmt.Println(num, "has 1 digit")
} else {
    fmt.Println(num, "has multiple digits")
}

// 一個Case可以放入多種條件
switch time.Now().Weekday() {
    case time.Saturday, time.Sunday:
        fmt.Println("It's the weekend")
    default:
        fmt.Println("It's a weekday")
 }

// 非常有用!!!
// 依據傳入物件型態更改處理方式，在golang開源專案常看見
whatAmI := func(i interface{}) {
        switch t := i.(type) {
        case bool:
            fmt.Println("I'm a bool")
        case int:
            fmt.Println("I'm an int")
        default:
            fmt.Printf("Don't know type %T\n", t)
        }
    }
```
### Arrays與Slices
```golang
// Array基本用法
nums := [5]int{1,2,3,4,5}
for idx, val := range nums { fmt.Println(val) }

// 用法與Array基本相同，但可以透過Index切割
chars := []string("H", "e", "l", "l", "o", "World")
hello := chars[:len(chars)-1]
```
### Maps
```golang
// 創建
m := map[string]int{"k1": 1, "k2": 2}
// 除去特定key
delete(m, "k1")
m["k3"] = 3
// 依據特定key的有無，做出不同反應
if ok, val := m["k2"]; ok {
    fmt.Println("find!", val)
} else {
    fmt.Println("No key:", "k2")
}
// 依序拜訪存在的key, value
// 只拜訪key，請使用 for key := range m
for key, val := range m {
    fmt.Println(key, val)
}
// 清空
clear(m)
```
### 函數與變數
```golang
func plus(a, b int) int {
    return a + b
}

func main() {
    fmt.Println(plus(1, 1))
    powerPlus := func(i, j interface{}) (bool, interface{}) {
        if reflect.TypeOf(i) != reflect.TypeOf(j) {
            return false, nil
        }
        switch i.(type) {
        case bool:
            return true, i.(bool) && j.(bool)
        case int:
            return true, i.(int) + j.(int)
        case string:
            return true, i.(string) + j.(string)
        default:
            return false, nil
        }
    }
    fmt.Println(powerPlus(1,1))
    fmt.Println(powerPlus("Hello","World"))
    fmt.Println(powerPlus("Hello", 1))
    fmt.Println(powerPlus(1.1, 1.2))
}
```
### 函數參數:伸縮變數
```golang
func sum(nums ...int) {
    fmt.Print(nums, " ")
    total := 0

    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}

func main() {
    sum(1, 2)
    sum(1, 2, 3)

    nums := []int{1, 2, 3, 4}
    sum(nums...)
}
```
### 匿名函數的封閉性(Closure of Anonymous function)
```golang
func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}
// nextInt與newInts的i各自獨立計算
nextInt := intSeq() 
newInts := intSeq()
```
### 結構、函數與介面
```golang
type geometry interface {
    area() float64
    perim() float64
}

func measure(g geometry) {
    fmt.Println(g)
    fmt.Println(g.area())
    fmt.Println(g.perim())
}

func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perim() float64 {
    return 2*r.width + 2*r.height
}

func (c *circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c *circle) perim() float64 {
    return 2 * math.Pi * c.radius
}
```
### Goroutines
```

```
### Json
```golang
import (
    "encoding/json"
    "fmt"
    "os"
)

type response1 struct {
    Page   int
    Fruits []string
}

type response2 struct {
    Page   int      `json:"page"`
    Fruits []string `json:"fruits"`
}

func main() {
    // 產生{"Page":1,"Fruits":["apple","peach","pear"]}
    res1D := &response1{
        Page:   1,
        Fruits: []string{"apple", "peach", "pear"}}
    res1B, _ := json.Marshal(res1D)
    fmt.Println(string(res1B))
    
    // 更改json的Key，不使用struct變數名稱
    // 產生{"page":1,"fruits":["apple","peach","pear"]}
    res2D := &response2{
        Page:   1,
        Fruits: []string{"apple", "peach", "pear"}}
    res2B, _ := json.Marshal(res2D)
    fmt.Println(string(res2B))

    // 透過interface接收json，並藉由Typeof進行轉型處裡
    byt := []byte(`{"num":6.13,"strs":["a","b"]}`)
    var dat map[string]interface{}

    if err := json.Unmarshal(byt, &dat); err != nil {
        panic(err)
    }
    fmt.Println(dat)

    num := dat["num"].(float64)
    fmt.Println(num)

    strs := dat["strs"].([]interface{})
    str1 := strs[0].(string)
    fmt.Println(str1)

    // 從string透過Unmarshal轉字串為response
    str := `{"page": 1, "fruits": ["apple", "peach"]}`
    res := response2{}
    json.Unmarshal([]byte(str), &res)
    fmt.Println(res)
    fmt.Println(res.Fruits[0])

    enc := json.NewEncoder(os.Stdout)
    d := map[string]int{"apple": 5, "lettuce": 7}
    enc.Encode(d)
}
```
### XML
```golang
import (
    "encoding/xml"
    "fmt"
)

type Plant struct {
    XMLName xml.Name `xml:"plant"`
    Id      int      `xml:"id,attr"`
    Name    string   `xml:"name"`
    Origin  []string `xml:"origin"`
}

func (p Plant) String() string {
    return fmt.Sprintf("Plant id=%v, name=%v, origin=%v", p.Id, p.Name, p.Origin)
}

func main() {
    // 封裝
    coffee := &Plant{Id: 27, Name: "Coffee", Origin: []string{"Ethiopia", "Brazil"}}
    out, _ := xml.MarshalIndent(coffee, " ", "  ")
    fmt.Println(string(out))
    fmt.Println(xml.Header + string(out))

    // 將coffee解構
    var p Plant
    if err := xml.Unmarshal(out, &p); err != nil {
        panic(err)
    }
    fmt.Println(p)

    tomato := &Plant{Id: 81, Name: "Tomato", Origin: []string{"Mexico", "California"}}
    type Nesting struct {
        XMLName xml.Name `xml:"nesting"`
        Plants  []*Plant `xml:"parent>child>plant"`
    }

    nesting := &Nesting{}
    nesting.Plants = []*Plant{coffee, tomato}

    out, _ = xml.MarshalIndent(nesting, " ", "  ")
    fmt.Println(string(out))
}
```