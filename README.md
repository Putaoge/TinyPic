# 便捷壓縮圖片

前端頁面展示常常遇到靜態資源佔用空間過大, 導致頁面部署上線後瀏覽時的加載速度太慢, 此時可以通過壓縮圖片的方式來減小靜態資源的體積;

## TinyPNG
#### ---- Smart WebP, PNG and JPEG compression
TinyPNG使用智能有損壓縮技術將您的WebP, PNG and JPEG圖片的文件大小降低。通過選擇性的減少圖片中的顏色，只需要很少的字節數就能保存數據。對視覺的影響幾乎不可見，但是在文件大小上有非常大的差別。

## 開發環境
官方文檔中提到: 客戶端代碼庫支持Ruby, PHP, Node.js, Python, Java 和 .NET。您也可以使用WordPress插件來壓縮JPEG和PNG圖片。

這裡我是在 **`Node.js`** 開發環境下使用此工具


## 使用它需要先獲取開發者API:

點擊連結並按照步驟操作即可:
https://tinify.cn/developers

獲取到API後, 填入main.js的 **tinify.key** 



## 使用
```js
1. npm install
2. node main.js
```
