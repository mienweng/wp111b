# 第三章：CSS基礎
在網頁設計中，CSS是一個非常重要的技術，用於控制網頁的外觀和排版。CSS（Cascading Style Sheets，層疊樣式表）是一種樣式表語言，它用於描述HTML文檔中的元素應如何呈現。

## CSS的概念和語法
CSS通過選擇器和屬性將樣式應用到HTML元素上。選擇器用於選擇要應用樣式的HTML元素，屬性則用於定義元素的樣式。CSS的一般語法如下：
```js
selector {
  property1: value1;
  property2: value2;
  ...
}
```

其中，selector表示選擇要應用樣式的HTML元素；property表示要設置的樣式屬性，例如color表示文字顏色；value表示樣式屬性的值，例如red表示紅色。

## CSS選擇器和屬性
CSS選擇器用於選擇要應用樣式的HTML元素，常見的選擇器包括：

標籤選擇器：通过HTML元素的标签名来选择元素，例如p表示选择所有的段落元素。
类选择器：通过HTML元素的class属性值来选择元素，例如.class-name表示选择所有class属性为class-name的元素。
ID选择器：通过HTML元素的id属性值来选择元素，例如#id-name表示选择id属性为id-name的元素。
属性选择器：通过HTML元素的属性值来选择元素，例如[attribute=value]表示选择具有指定属性值的元素。
CSS屬性用於定義HTML元素的樣式，常見的CSS屬性包括：

color：文字顏色
background-color：背景顏色
font-size：字體大小
font-family：字體族譜
margin：外邊距
padding：內邊距
border：邊框

## CSS樣式表
CSS樣式表是一個獨立的文檔，其中包含了CSS樣式規則的集合，可以用來對HTML文檔進行樣式設置。CSS樣式表可以分為三種類型：內聯樣式表、內部樣式表和外部樣式表。

內聯樣式表：將樣式直接寫在HTML元素的style屬性中。
內部樣式表：在HTML文檔中使用<style>標籤定義樣式，將其放置在<head>標籤中。
外部樣式表：將樣式定義在一個獨立的CSS文件中，通常是以.css為文件擴展名，然後在HTML文檔中使用<link>標籤將其引入。
使用CSS樣式表可以對HTML元素進行各種樣式設置，包括文字樣式、字體樣式、背景樣式、邊框樣式等等。在CSS中，樣式規則由選擇器和一組屬性-值對組成。例如，以下是一個簡單的CSS樣式規則：
```js
h1 {
  color: red;
  font-size: 24px;
}
```

上述樣式規則中，h1是選擇器，表示樣式應用到所有的<h1>元素上；color和font-size是屬性，表示樣式規則應用到的屬性；red和24px是值，表示這些屬性的值。

CSS還支持繼承、層級和優先級等概念，這些概念可以用來進一步精煉樣式設置，使樣式更加靈活和可讀。

總的來說，CSS是一個非常強大的工具，可以讓開發者對網頁進行精細的樣式設置，從而使網頁更加美觀和易讀。學習和掌握CSS是網頁設計師的基本技能之一。