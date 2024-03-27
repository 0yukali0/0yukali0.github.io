---
id: pythonBase
title: Python基本
---

# python 基本
## 變數
### 變數type
1. str
2. int, float, complex
3. dict
4. set, fronzeset
5. bool
6. bytes, bytearray, memoryview
7. NoneType

### List
List允許元素重複、相異type
```python
fruits = ["apple", "banana", "cherry"]
if "banana" in fruits:
    print("Yes, this is fruit")
fruits.insert(2, "berry") # expext be ["apple", "banana", "berry", "cherry"]
fruits.append("orange")
# 可塞list, set等等iterable object
fruits.extend(["mango", "pineapple", "papaya"])
```