// JavaScript File
function check(){

	var flag = [0,0,0] 
  var text1= document.form1.text1.value
  var text2= document.form1.text2.value
  var text3= document.form1.text3.value
 

	// 設定開始（必須にする項目を設定してください）

	if(text1 == "" || text1.match(/[^0-9]+/) || text1.length > 5 ){ // 「商品番号」の入力をチェック

		flag[0] = 1;

	}
	else if(text2 == "" || text2.length > 20){ // 「商品」の入力をチェック

		flag[1] = 1;

	}
	else if(text3 == "" || text3.match(/[^0-9]+/) || text3.length >= 8 || text3 % 10 !=0){ // 「原価」の入力をチェック

		flag[2] = 1;

	} 
	
	// 設定終了

	if(flag[0]){
		//alert(typeof text1)
		window.alert('商品番号に間違い'); // 入力漏れがあれば警告ダイアログを表示
		return false; // 送信を中止
	}else if(flag[1]){
		window.alert("商品に間違い")
		return false; // 送信を中止
	}else if (flag[2]){
		window.alert("原価に間違い")
		return false; // 送信を中止
	}
	else{

		return true; // 送信を実行

	}

}