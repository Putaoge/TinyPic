const fs = require("fs");
const path = require('path')
const tinify = require("tinify");

// 設置tinify API key
tinify.key = "請填入你的API";
// 若無 API key 請點擊以下連結前往獲取
// https://tinify.cn/developers

/**
 * 壓縮圖片
 * @param {string} fromDir 待壓縮圖片所在目錄
 * @param {string} toDir 壓縮後圖片存放目錄
 */
function tinytinyPic(fromDir, toDir) {
    try {
        // 讀取目錄下所有文件
        let arr = fs.readdirSync(fromDir)
        // 如果存在.DS_Store文件，則刪除
        if (arr.includes('.DS_Store')) {
            arr.splice(arr.indexOf('.DS_Store'), 1)
        }
        // 遍歷所有文件
        arr.forEach(item => {
            // 如果是目錄，則遞歸調用tinytinyPic函數
            if (!item.includes('.')) {
                if (!fs.existsSync(path.join(toDir, item))) {
                    fs.mkdirSync(path.join(toDir, item))
                }
                tinytinyPic(path.join(fromDir, item), path.join(toDir, item))
            } else {
                // 如果是以下格式的圖片，則直接copy，不進行壓縮
                if (item.match(/\.(ico|svg|gif)$/i)) {
                    if (!fs.existsSync(path.join(toDir, item))) {
                        let read = fs.createReadStream(path.join(fromDir, item))
                        let write = fs.createWriteStream(path.join(toDir, item))
                        read.pipe(write)
                    }
                } else {
                    // 如果是其他格式的圖片，則進行壓縮
                    if (!fs.existsSync(path.join(toDir, item))) {
                        tinify.fromFile(path.join(fromDir, item)).toFile(path.join(toDir, item));
                    }
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

// 壓縮 ./未壓縮圖片 目錄下的所有圖片，並將壓縮後的圖片存放在 ./完成壓縮 目錄下
tinytinyPic('./未壓縮圖片', './完成壓縮')