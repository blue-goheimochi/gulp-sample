# gulp Sample

## Install

* **npm**  
npmがインストールされていない場合はNode.jsをインストールしてください。
Node.js - http://nodejs.org/

## npm

### gulpのインストール  

    $ npm install -g gulp

### ライブラリのインストール  

    $ npm install

※browser-sync、gulp-minify-css、gulp-uglifyがインストールされます

## gulp

    $ gulp

CSS・JSの圧縮のタスクが実行されます。  
`resource/css/app.css` →　`public_html/css/app.css`  
`resource/js/app.js` →　`public_html/js/app.js`

    $ gulp watch

ブラウザが自動で起動しファイル監視が開始されます。  
`resource/css/app.css`か`resource/js/app.js`に変更が加わると、  
自動的にCSS・JSの圧縮タスクが実行されるとともにブラウザが自動リロードされます。
