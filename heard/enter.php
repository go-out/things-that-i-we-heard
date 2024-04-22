<div style="width: 100%; padding: 0 0.5rem;">
    <p>
        これは、私（わたしたち）が 誰かに聞いたこと を
        日時・位置情報 と合わせて記録する デジタル地図 です。
    </p>
    <p>
        街で聞いた知らない誰かの会話や独り言、友人・知人との会話の中で印象に残ったことなど、
        みんなが「どこかで誰かに聞いたこと」を集めて、世界地図を作りましょう。
    </p>
    <hr />
    <u>あなたの通信情報／ブラウザ等情報</u><br />
    <?php
    $ip = $_SERVER["REMOTE_ADDR"];
    $hqdn = $_SERVER["REMOTE_PORT"];
    $os = $_SERVER["HTTP_USER_AGENT"];

    echo "IP <b id='ip'>" . $ip . "</b>";
    echo "<b id='hqdn' hidden>" . $hqdn . "</b><br />";
    echo "<button type='button' onclick='setLOG()'>Come on join us !</button><br />";
    echo "<u id='os'>" . $os . "</u>";
    ?>
</div>
<small>※
    Come on join us ! を クリックすると、このウェブサイトに
    あなたの通信情報／ブラウザ等情報 が 送信され、地図に
    あなたが聞いたこと を 追加・記録 できるようになります。
</small>