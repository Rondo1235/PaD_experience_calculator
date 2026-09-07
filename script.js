document.addEventListener("DOMContentLoaded", function () {

// 計算ボタン
const calculateButton =
    document.getElementById("calculate");


calculateButton.addEventListener("click", function () {

    // =========================
    // 入力値を取得
    // =========================

    const normalExp =
        Number(document.getElementById("normalExp").value);

    const collab =
        Number(document.getElementById("collab").value);

    const dumbo =
        Number(document.getElementById("dumbo").value);

    const leader =
        Number(document.getElementById("leader").value);

    const friend =
        Number(document.getElementById("friend").value);


    // =========================
    // 入力チェック
    // =========================

    if (normalExp < 0) {

        alert("通常経験値は0以上で入力してください。");

        return;
    }


    if (collab < 0 || collab > 6) {

        alert(
            "コラボ / 対象キャラクター数は0～6体で入力してください。"
        );

        return;
    }


    if (dumbo < 0) {

        alert("ダンボの数は0以上で入力してください。");

        return;
    }


    // =========================
    // バッジ倍率
    // =========================

    const badge =
        Number(
            document.querySelector(
                'input[name="badge"]:checked'
            ).value
        );


    // =========================
    // 会員倍率
    // =========================

    const member =
        Number(
            document.querySelector(
                'input[name="member"]:checked'
            ).value
        );


    // =========================
    // 基本経験値
    // =========================

    const baseExp =
        normalExp +
        (collab * 40000000);


    // =========================
    // ダンボ倍率
    // =========================

    const dumboRate =
        1 + (dumbo * 0.02);


    // =========================
    // 最終経験値
    // =========================

    const result =
        baseExp *
        badge *
        member *
        dumboRate *
        leader *
        friend;


    // =========================
    // 結果を表示
    // =========================

    document.getElementById("baseExp").textContent =
        Math.floor(baseExp).toLocaleString();


    document.getElementById("dumboRate").textContent =
        "×" + dumboRate.toFixed(2);


    document.getElementById("result").textContent =
        Math.floor(result).toLocaleString();


    document.getElementById("easyResult").textContent =
        convertExp(result);

});

});

// =========================
// 経験値を「○億○万」に変換
// =========================

function convertExp(exp) {

exp = Math.floor(exp);


const oku =
    Math.floor(exp / 100000000);


const man =
    Math.floor(
        (exp % 100000000) / 10000
    );


const remainder =
    exp % 10000;


let text = "";


if (oku > 0) {

    text += oku + "億";

}


if (man > 0) {

    text += man + "万";

}


if (remainder > 0) {

    text += remainder.toLocaleString();

}


if (text === "") {

    text = "0";

}


return text;

}