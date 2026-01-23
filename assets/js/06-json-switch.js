const demoAppJson = {
  jsonName: 'GoodShareSettingsDemoAppSensor',
  version: '1.0.0',
  slides: [
    {
      index: 0,
      alt: 'STEP-01',
      imagePath: '../assets/img/rac/01401.png',
      tooltipTarget: 'targetArea01401',
      tooltipDescription: '☰メニューをタップする',
      footerContent: '',
    },
    {
      index: 1,
      alt: 'STEP-02',
      imagePath: '../assets/img/rac/01402.png',
      tooltipTarget: 'targetArea01402',
      tooltipDescription: '「＋機器登録」をタップする',
      footerContent: '',
    },
    {
      index: 2,
      alt: 'STEP-03',
      imagePath: '../assets/img/rac/01403.png',
      tooltipTarget: 'targetArea39701',
      tooltipDescription: '「ファン」をタップする',
      footerContent: '',
    },
    {
      index: 3,
      alt: 'STEP-04',
      imagePath: '../assets/img/switch/39801.png',
      tooltipTarget: 'targetArea39801',
      tooltipDescription:
        '機器とルーターの接続方法を選択します。<br><button type="button" class="btn btn-outline-primary mt-2 d-block mx-auto" data-bs-toggle="modal" data-bs-target="#modalCommon398">選択メニューを表示</button>',
      footerContent:
        'ルーターにWPS機能がない場合はアクセスポイントモードで接続、WPS機能がある場合はルーターの「WPS」ボタンを使って接続してください。<span class="fw-medium text-danger">WPS機能がない場合はWPSによる接続はできません。</span>',
    },
    {
      index: 4,
      alt: 'STEP-05',
      imagePath: '../assets/img/switch/39901.png',
      tooltipTarget: 'targetArea39901',
      tooltipDescription: '<h6>アクセスポイントモードでの接続</h6>ここからは、機器のアクセスポイントモードを使った機器とルーターの接続方法を説明します。画面の内容を確認し次へ進む、その他の接続方法は以下から選択ください。<ul class="mt-3"><li><a href="./?slide=15">WPS機能での接続</a></li><li><a href="./?slide=19">機器とルーターを接続済み</a></li></ul><div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm tippy-close-btn">閉じる</button></div>',
      noArrow: true,
      footerContent:
       '機器、スマートフォン、ルーター、ルーターのSSID（2.4GHz）、ルーターに接続する暗号化キー（パスワード）を準備ください。',
    },
    {
      index: 5,
      alt: 'STEP-06',
      imagePath: '../assets/img/switch/39902.png',
      tooltipTarget: 'targetArea39902',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li>事前に次を準備してください。<i class="bi bi-1-circle"></i>接続したいルーターのSSID（2.4GHz）、<i class="bi bi-2-circle"></i>ルーターに接続する暗号化キー（パスワード）</li><li>本アプリでルーターのSSIDに使用できる文字は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon018">半角英数字、半角記号、半角スペース</a>です。</li></ul>',
    },
    {
      index: 6,
      alt: 'STEP-07',
      imagePath: '../assets/img/switch/40001.png',
      tooltipTarget: 'targetArea40001-01',
      tooltipDescription:
        '「QRコード&#174;を読み取る」をタップし、スマートフォンのカメラで設定情報シールのQRコードを読み取る',
      footerContent:
        '<ul><li>QRコードを読み取るとSSIDとKEYが表示されます。</li><li>スマートスイッチの設定情報シールは<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon400">取扱説明書</a>、またはスイッチカバーを外した<a class="footer-link" data-bs-toggle="modal" data-bs-target="#imageModal">機器本体</a>に貼り付けてあります。</li></ul>',
    },
    {
      index: 7,
      alt: 'STEP-08',
      imagePath: '../assets/img/switch/40001.png',
      tooltipTarget: 'targetArea40001-02',
      tooltipDescription: 'QRコードを読み取り後、「次へ」をタップする',
      footerContent:
        '<ul><li>QRコードを読み取るとSSIDとKEYが表示されます。</li></ul>',
    },
    {
      index: 8,
      alt: 'STEP-09',
      imagePath: '../assets/img/switch/40101.png',
      tooltipTarget: 'targetArea40101',
      tooltipDescription:
        '<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon401">設定方法をみる<i class="bi bi-link-45deg"></i></a>をタップし<br>機器をアクセスポイントモードに設定する',
      footerContent:
        '<ul><li>スマートスイッチの各部名称は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon008">こちら。</a></li><li>スマートスイッチのWi-Fiランプ状態の説明は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon007">こちら。</a></li><li>アクセスポイントモードは約10分で終了します、それまでに設定してください。詳しくはルーターの取扱説明書を確認ください。</li></ul>',
    },
    {
      index: 9,
      alt: 'STEP-10',
      imagePath: '../assets/img/switch/40101.png',
      tooltipTarget: 'targetArea40501',
      tooltipDescription:
        'アクセスポイントモードに設定後、「次へ」をタップする',
      footerContent:
        '「次へ」をタップした後の操作は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon405">こちら</a>',
    },
    {
      index: 10,
      alt: 'STEP-11',
      imagePath: '../assets/img/switch/40701.png',
      tooltipTarget: 'targetArea40701',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li>ルーターのSSID（2.4GHz）と暗号化キー（パスワード）をお手元に準備してください。次の操作で使用します。</li></ul>',
    },
    {
      index: 11,
      alt: 'STEP-12',
      imagePath: '../assets/img/switch/40702.png',
      tooltipTarget: 'targetArea40702',
      tooltipDescription:
        'タップして<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02601">一覧画面</a>を表示、接続するルーターのSSIDを選択する',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02602">SSIDと暗号化キーの表示例</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon027">SSIDは手動でも入力できます。</a></li></ul>',
    },
    {
      index: 12,
      alt: 'STEP-13',
      imagePath: '../assets/img/switch/40801.png',
      tooltipTarget: 'targetArea40801',
      tooltipDescription:
        'ルーターの暗号化キー(パスワード)を入力、「接続する」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon408">「前回使用した暗号化キーを入力する」</a>を選択すると、前回使用した暗号化キーを自動入力できます。</li></ul>',
    },
    {
      index: 13,
      alt: 'STEP-14',
      imagePath: '../assets/img/rac/02801.png',
      tooltipTarget: 'targetArea02801',
      tooltipDescription: '機器の登録が終わるまで2～3分程度待つ',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02801">機器の登録に失敗した場合</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02802">「機器の登録確認」が表示された場合</a></li><li>登録された機器を削除する場合は<a href="https://www.mitsubishielectric.co.jp/home/mymu/ib.html">MyMUアプリの取扱説明書</a>を確認ください（ユーザー種別が「管理者」のみ行えます）。</li><li>機器を工場出荷時の状態に戻す場合は<a href="https://www.mitsubishielectric.co.jp/ldg/wink/ssl/searchProduct.do?ccd=104010">エアコン</a>、<a href="https://www.mitsubishielectric.co.jp/ldg/wink/ssl/displayProduct.do?pid=318322&ccd=1040128812">スマートスイッチ</a>、<a href="https://www.mitsubishielectric.co.jp/ldg/wink/ssl/displayProduct.do?pid=318325&ccd=1040128814">環境センサー</a>の取扱説明書を確認ください。</li></ul>',
    },
    {
      index: 14,
      alt: 'STEP-15',
      imagePath: '../assets/img/switch/41001.png',
      tooltipTarget: 'targetArea41001',
      tooltipDescription:
        '機器の登録が完了しました。「 アプリを起動する」をタップすると、換気REMOTEアプリが起動します。',
      footerContent:
        '<ul><li>換気REMOTEアプリの使い方については、<a href="https://www.MitsubishiElectric.co.jp/ldg/ja/air/products/ventilationfan/lossnaycentral/IB/pdf/kankiremote_mymu.pdf">換気REMOTEアプリの取扱説明書</a>を確認ください。</li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon410">機器登録後に必要な初期設定</a></li></ul>',
    },
    {
      index: 15,
      alt: 'STEP-16',
      imagePath: '../assets/img/switch/41101.png',
      tooltipTarget: 'targetArea41101',
      tooltipDescription: '<h6>WPS機能での接続</h6>ここからは、ルーターの「WPS」ボタンを使った機器とルーターの接続方法を説明します。画面の内容を確認し次へ進む、その他の接続方法は以下から選択ください。<ul class="mt-3"><li><a href="./?slide=4">アクセスポイントモードでの接続</a></li><li><a href="./?slide=19">機器とルーターを接続済み</a></li></ul><div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm tippy-close-btn">閉じる</button></div>',
      noArrow: true,
      footerContent: '',
    },
    {
      index: 16,
      alt: 'STEP-17',
      imagePath: '../assets/img/rac/03202.png',
      tooltipTarget: 'targetArea03202',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li>事前に以下の準備をしてください。<i class="bi bi-1-circle"></i>接続したいルーターの場所、<i class="bi bi-2-circle"></i>ルーターのWPS実施方法</li><li>ルーターのWPS実施方法は機器により異なります。詳しくはルーターの取扱説明書を確認ください。</li></ul>',
    },
    {
      index: 17,
      alt: 'STEP-18',
      imagePath: '../assets/img/switch/41201.png',
      tooltipTarget: 'targetArea41201',
      tooltipDescription:
        '<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon412">設定方法をみる<i class="bi bi-link-45deg"></i></a>をタップし<br>機器をアクセスポイントモードに設定する',
      footerContent:
        '<ul><li>スマートスイッチの各部名称は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon008">こちら。</a></li><li>スマートスイッチのWi-Fiランプ状態の説明は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon007">こちら。</a></li></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon024">WPS接続できないときの対処方法。</a></li></ul>',
    },
    {
      index: 18,
      alt: 'STEP-19',
      imagePath: '../assets/img/switch/41201.png',
      tooltipTarget: 'targetArea41801',
      tooltipDescription:
        'WPS機能で機器とルーターを接続後、「次へ」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon418">位置情報の使用許可を求めるメッセージが表示されたら</a></li></ul>',
    },
    {
      index: 19,
      alt: 'STEP-20',
      imagePath: '../assets/img/switch/41901.png',
      tooltipTarget: 'targetArea41901',
      tooltipDescription: '<h6>機器とルーターを接続済み</h6>ここからは、すでに機器とルーターが接続済みの場合について説明します。画面の内容を確認し次へ進む、その他の接続方法は以下から選択ください。<ul class="mt-3"><li><a href="./?slide=4">アクセスポイントモードでの接続</a></li><li><a href="./?slide=15">WPS機能での接続</a></li></ul><div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm tippy-close-btn">閉じる</button></div>',
      noArrow: true,
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon03901">スマートフォンの接続先を確認する</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon03902">「"MyMU"がローカルネットワーク上のデバイスの検索および接続を求めています」</a>と表示されたら</li></ul>',
    },
    {
      index: 20,
      alt: 'STEP-21',
      imagePath: '../assets/img/switch/42001.png',
      tooltipTarget: 'targetArea42001',
      tooltipDescription: '登録する機器をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon42001">機器が表示されない場合</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon025">アダプター情報を手動で入力する</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02802">機器が別のユーザーに登録されている場合</a></li></ul>',
    },
    {
      index: 21,
      alt: 'STEP-22',
      imagePath: '../assets/img/switch/41001.png',
      tooltipTarget: 'targetArea41001-01',
      tooltipDescription:
        '機器の登録が完了しました。「 アプリを起動する」をタップすると、換気REMOTEアプリが起動します。<div class="d-flex justify-content-center mt-3"><a role="button" href="../" class="btn btn-outline-secondary d-flex justify-content-between gap-2"><i class="bi bi-chevron-left"></i>機器選択画面に戻る</a></div>',
      footerContent:
        '<ul><li>換気REMOTEアプリの使い方については、<a href="https://www.MitsubishiElectric.co.jp/ldg/ja/air/products/ventilationfan/lossnaycentral/IB/pdf/kankiremote_mymu.pdf">換気REMOTEアプリの取扱説明書</a>を確認ください。</li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon410">機器登録後に必要な初期設定</a></li></ul>',
    },
  ],
};
