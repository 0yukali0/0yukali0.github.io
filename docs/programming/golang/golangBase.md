---
id: golangBase
title: Golang基本
---

# Golang基本範例
簡單說明[Golang基礎範例](https://gobyexample.com/)的功能。
## 基本
### 變數與常數宣告
```
// 常數宣告
const s string = "constant"

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
}
```
### For迴圈
```
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
```
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
```
// Array基本用法
nums := [5]int{1,2,3,4,5}
for idx, val := range nums { fmt.Println(val) }

// 用法與Array基本相同，但可以透過Index切割
chars := []string("H", "e", "l", "l", "o", "World")
hello := chars[:len(chars)-1]
```
### Maps
```
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
```
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
### 匿名函數(Closure of Anonymous function)
```
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