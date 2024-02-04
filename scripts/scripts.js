(() => {
// クリックした要素に設定されているbackground-imageのURLを取得する関数
function getBackgroundImageURL(element) {
  // 要素のstyleプロパティからbackground-imageの値を取得
  var backgroundImage = element.style.backgroundImage;
  // 値がない場合は空文字を返す
  if (!backgroundImage) {
    return "";
  }
  // 値がurl(...)の形式の場合は、括弧の中身を抜き出す
  if (backgroundImage.startsWith("url(") && backgroundImage.endsWith(")")) {
    return backgroundImage.slice(4, -1);
  }
  // それ以外の場合は値そのままを返す
  return backgroundImage;
}

// クリックした要素のbackground-imageのURLをmy-divの背景像に設定する関数
function changeBackgroundImage(e) {
  // クリックした要素を取得
  var clickedElement = e.target;
  // クリックした要素に設定されているbackground-imageのURLを取得
  var url = getBackgroundImageURL(clickedElement);
  // div要素のIDを指定
  var div = document.getElementById("my-div");
  // モーダルウィンドウのIDを指定
  var modalDiv = document.getElementById("modal");
  // div要素の背景画像を取得したURLに設定
  div.style.backgroundImage = "url(" + url + ")";
  modalDiv.style.visibility = "visible"
}

// モーダルウィンドウを閉じる処理
var modalDiv = document.getElementById("modal");

modalDiv.addEventListener("click", function(){
  modalDiv.style.visibility = "hidden"
});

// リンク要素のクラス名を指定
var links = document.getElementsByClassName("my-link");
// リンク要素にクリックイベントのリスナーを追加
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", changeBackgroundImage);
}

// アートのリスト(手作業で更新)
const art_list = [
                  '1.jpeg',
                  '2.jpeg',
                  '3.jpeg',
                  '4.jpeg',
                  '5.jpeg',
                  '6.jpeg',
                  '7.jpeg',
                  '8.jpeg',
                  '9.jpeg',
                  '10.jpeg',
                  '11.jpeg',
                  '12.jpeg',
                  '13.jpeg',
                  '14.jpeg',
                  '15.jpeg',
                  '16.jpeg',
                  ]

// idが"load__btn"の要素を取得する
let loadBtn = document.getElementById("load__btn");

// loadBtnがクリックされたときのイベントリスナーを登録する
loadBtn.addEventListener("click", function() {
  // classが"works__contents"の要素を取得する
  let worksContents = document.querySelector(".works__contents");

  // worksContentsの中にあるarticleタグの数を取得する
  let articleCount = worksContents.getElementsByTagName("article").length;

  // articleタグの数をコンソールに出力する
  console.log(articleCount);

  // 9個の要素を追加するためのループを回す
  for (let i = 0; i < 9; i++) {
    // 追加する要素を作成する
    let newArticle = document.createElement("article");
    let newDiv = document.createElement("div");

    // newDivにクラスとスタイルを設定する(i+articleCoutがart_listの要素の数以下の時)
    if (i + articleCount < art_list.length) {
      newDiv.className = "my-link photo btn";
      newDiv.style.backgroundImage = "url(img/works/" + art_list[i + articleCount] + ")";
    } else {
      loadBtn.style.display = "none"
    }

    // newArticleにnewDivを追加する
    newArticle.appendChild(newDiv);

    // worksContentsにnewArticleを追加する
    worksContents.appendChild(newArticle);
  }
  });

})();