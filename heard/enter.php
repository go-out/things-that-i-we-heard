<div style="width: 100%; padding: 0 0.5rem;">
    <b>あなたの通信情報／ブラウザ等情報</b>
    <hr />
    <?php
    $ip = $_SERVER["REMOTE_ADDR"];
    $hqdn = $_SERVER["REMOTE_PORT"];
    $os = $_SERVER["HTTP_USER_AGENT"];

    echo "IP <b id='ip'>" . $ip . "</b><br/>";
    echo "PORT <b id='hqdn'>" . $hqdn . "</b><br/>";
    echo "<small id='os'>" . $os . "</small>";
    ?>
    <p>
        下記の Come on join us ! を クリックすると、このウェブサイトに
        あなたの通信情報／ブラウザ等情報 が 送信され、あなたが聞いたこと
        を 追加・記録できるようになります。
    </p>
</div>
<button type="button" onclick="setLOG()">Come on join us !</button>