const demoAppJson = {
  jsonName: '02-GoodShareSettingsDemoAppRac',
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
      tooltipTarget: 'targetArea01403',
      tooltipDescription: '「エアコン」をタップする',
      footerContent: '',
    },
    {
      index: 3,
      alt: 'STEP-04',
      imagePath: '../assets/img/rac/01501.png',
      tooltipTarget: 'targetArea01501',
      tooltipDescription: '「ルームエアコン」をタップする',
      footerContent: '',
    },
    {
      index: 4,
      alt: 'STEP-05',
      imagePath: '../assets/img/rac/01502.png',
      tooltipTarget: 'targetArea01502',
      tooltipDescription: '『 「長押しで無線無効」の文字がある』をタップする',
      footerContent:
        '<ul><li>リモコンの停止ボタンの近くに「<span class="fw-bold">長押しで無線無効</span>」の文字があるか確認ください。</li><li>「長押しで無線無効」の文字がない場合はやり直してください。</li></ul>',
    },
    {
      index: 5,
      alt: 'STEP-06',
      imagePath: '../assets/img/rac/01601.png',
      tooltipTarget: 'targetArea01601',
      tooltipDescription: '「リモコンにメニューボタンがある」をタップする',
      footerContent:
        '<ul><li>リモコンにメニューボタンがない場合はやり直してください。</li></ul>',
    },
    {
      index: 6,
      alt: 'STEP-07',
      imagePath: '../assets/img/rac/01701.png',
      tooltipTarget: 'targetArea01701',
      tooltipDescription:
        '機器とルーターの接続方法を選択します。<br><button type="button" class="btn btn-outline-primary mt-2 d-block mx-auto" data-bs-toggle="modal" data-bs-target="#modalCommon017">選択メニューを表示</button>',
      footerContent:
        'ルーターにWPS機能がない場合はアクセスポイントモードで接続、WPS機能がある場合はルーターの「WPS」ボタンを使って接続してください。<span class="fw-medium text-danger">WPS機能がない場合はWPSによる接続はできません。</span>',
    },
    {
      index: 7,
      alt: 'STEP-08',
      imagePath: '../assets/img/rac/01801.png',
      tooltipTarget: 'targetArea01801',
      tooltipDescription: '<h6>アクセスポイントモードでの接続</h6>ここからは、機器のアクセスポイントモードを使った機器とルーターの接続方法を説明します。画面の内容を確認し次へ進む、その他の接続方法は以下から選択ください。<ul class="mt-3"><li><a href="./?slide=21">WPS機能での接続</a></li><li><a href="./?slide=26">機器とルーターを接続済み</a></li></ul><div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm tippy-close-btn">閉じる</button></div>',
      noArrow: true,
      footerContent:
        '事前に以下の準備をしてください。<i class="bi bi-1-circle"></i>接続したいルーターのSSID(2.4GHz)、<i class="bi bi-2-circle"></i>ルーターに接続する暗号化キー(パスワード)',
    },
    {
      index: 8,
      alt: 'STEP-09',
      imagePath: '../assets/img/rac/01802.png',
      tooltipTarget: 'targetArea01802',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li>事前に以下の準備をしてください。<i class="bi bi-1-circle"></i>接続したいルーターのSSID(2.4GHz)、<i class="bi bi-2-circle"></i>ルーターに接続する暗号化キー(パスワード)</li><li>本アプリでルーターのSSIDに使用できる文字は<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon018">半角英数字、半角記号、半角スペース</a>です。</li></ul>',
    },
    {
      index: 9,
      alt: 'STEP-10',
      imagePath: '../assets/img/rac/01901.png',
      tooltipTarget: 'targetArea01901',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent: '',
    },
    {
      index: 10,
      alt: 'STEP-11',
      imagePath: '../assets/img/rac/04901.png',
      tooltipTarget: 'targetArea04901',
      tooltipDescription: '画面の内容を操作し、「次へ」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon050">エアコンをアクセスポイント（APモード）にする</a></li><li>詳しくは<a href="https://www.mitsubishielectric.co.jp/home/mymu/entry_ib_pdf.html">機器登録説明書、または機器個別の登録手順</a>（各機器の登録部分を抜粋した説明書）から、機器を登録する事項を確認ください。</li></ul>',
    },
    {
      index: 11,
      alt: 'STEP-12',
      imagePath: '../assets/img/rac/02201.png',
      tooltipTarget: 'targetArea02201',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent: '',
    },
    {
      index: 12,
      alt: 'STEP-13',
      imagePath: '../assets/img/rac/05102.png',
      tooltipTarget: 'targetArea05102',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon051">情報シールを確認する</a></li></ul>',
    },
    {
      index: 13,
      alt: 'STEP-14',
      imagePath: '../assets/img/rac/02202.png',
      tooltipTarget: 'targetArea02202',
      tooltipDescription:
        '「スマートフォンの設定画面へ」をタップしてスマートフォンの設定画面で設定を行う',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon054">エアコンとスマートフォンを接続する</a></li></ul>',
    },
    {
      index: 14,
      alt: 'STEP-15',
      imagePath: '../assets/img/rac/02501.png',
      tooltipTarget: 'targetArea02501',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li>ルーターのSSID（2.4GHz）と暗号化キー（パスワード）をお手元に準備してください。次の操作で使用します。</li></ul>',
    },
    {
      index: 15,
      alt: 'STEP-16',
      imagePath: '../assets/img/rac/02601.png',
      tooltipTarget: 'targetArea02601',
      tooltipDescription:
        'タップして<a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02601">一覧画面</a>を表示、接続するルーターのSSIDを選択する',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02602">SSIDと暗号化キーの表示例</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon027">SSIDは手動でも入力できます。</a></li></ul>',
    },
    {
      index: 16,
      alt: 'STEP-17',
      imagePath: '../assets/img/rac/02602.png',
      tooltipTarget: 'targetArea02602',
      tooltipDescription:
        'ルーターの暗号化キー(パスワード)を入力、「接続する」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02603">「前回使用した暗号化キーを入力する」</a>を選択すると、前回使用した暗号化キーを自動入力できます。</li></ul>',
    },
    {
      index: 17,
      alt: 'STEP-18',
      imagePath: '../assets/img/rac/02801.png',
      tooltipTarget: 'targetArea02801',
      tooltipDescription: '機器の登録が終わるまで、2～3分程度待つ',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02801">機器の登録に失敗した場合</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02802">「機器の登録確認」が表示された場合</a></li><li>登録された機器を削除する場合は<a href="https://www.mitsubishielectric.co.jp/home/mymu/ib.html">MyMUアプリの取扱説明書</a>を確認ください（ユーザー種別が「管理者」のみ行えます）。</li><li>機器を工場出荷時の状態に戻す場合は<a href="https://www.mitsubishielectric.co.jp/ldg/wink/ssl/searchProduct.do?ccd=104010">エアコン</a>、<a href="https://www.mitsubishielectric.co.jp/ldg/wink/ssl/displayProduct.do?pid=318322&ccd=1040128812">スマートスイッチ</a>、<a href="https://www.mitsubishielectric.co.jp/ldg/wink/ssl/displayProduct.do?pid=318325&ccd=1040128814">環境センサー</a>の取扱説明書を確認ください。</li></ul>',
    },
    {
      index: 18,
      alt: 'STEP-19',
      imagePath: '../assets/img/rac/03001.png',
      tooltipTarget: 'targetArea03001',
      tooltipDescription:
        '登録が完了したら、「エアコン初期設定へ」をタップする',
      footerContent: '',
    },
    {
      index: 19,
      alt: 'STEP-20',
      imagePath: '../assets/img/rac/03002.png',
      tooltipTarget: 'targetArea03002',
      tooltipDescription: '「宅外操作」を有効、「次へ」をタップする',
      footerContent:
        'MyMUアプリでエアコンを操作するためには、宅外操作を必ず有効(<i class="bi bi-toggle-on"></i>)に設定してください。',
    },
    {
      index: 20,
      alt: 'STEP-21',
      imagePath: '../assets/img/rac/03101.png',
      tooltipTarget: 'targetArea06201',
      tooltipDescription:
        '「アプリを起動する」をタップ、霧ヶ峰アプリを起動させる',
      footerContent:
        '<ul><li>エアコン登録と初期設定が完了しました。霧ヶ峰アプリの使い方については、霧ヶ峰アプリの取扱説明書を確認ください。</li><li>エアコン名は設置されている部屋名称に変更することをお勧めします(リビングのエアコンなど)。変更方法は<a href="https://www.mitsubishielectric.co.jp/home/mymu/ib.html">MyMUアプリの取扱説明書</a>から、「登録機器一覧を確認する」の事項を確認ください（ユーザー種別が「管理者」のみ行えます）。</li></ul>',
    },
    {
      index: 21,
      alt: 'STEP-22',
      imagePath: '../assets/img/rac/03201.png',
      tooltipTarget: 'targetArea03201',
      tooltipDescription: '<h6>WPS機能での接続</h6>ここからは、ルーターの「WPS」ボタンを使った機器とルーターの接続方法を説明します。画面の内容を確認し次へ進む、その他の接続方法は以下から選択ください。<ul class="mt-3"><li><a href="./?slide=7">アクセスポイントモードでの接続</a></li><li><a href="./?slide=26">機器とルーターを接続済み</a></li></ul><div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm tippy-close-btn">閉じる</button></div>',
      noArrow: true,
      footerContent: 'ここからは、WPS機能で接続する手順を説明します。',
    },
    {
      index: 22,
      alt: 'STEP-23',
      imagePath: '../assets/img/rac/03202.png',
      tooltipTarget: 'targetArea03202',
      tooltipDescription: '画面の内容を確認し、「次へ」をタップする',
      footerContent:
        '<ul><li>事前に以下の準備をしてください。<i class="bi bi-1-circle"></i>接続したいルーターの場所、<i class="bi bi-2-circle"></i>ルーターのWPS実施方法</li><li>ルーターのWPS実施方法は機器により異なります。詳しくはルーターの取扱説明書を確認ください。</li></ul>',
    },
    {
      index: 23,
      alt: 'STEP-24',
      imagePath: '../assets/img/rac/06401.png',
      tooltipTarget: 'targetArea06401',
      tooltipDescription: '画面の内容を操作し、「次へ」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon065">リモコンを使ってエアコンを接続モードにする</a></li></ul>',
    },
    {
      index: 24,
      alt: 'STEP-25',
      imagePath: '../assets/img/rac/03501.png',
      tooltipTarget: 'targetArea03501',
      tooltipDescription: '画面の内容を操作し、「次へ」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon035">ルーターをWPSモードにする</a></li></ul>',
    },
    {
      index: 25,
      alt: 'STEP-26',
      imagePath: '../assets/img/rac/03601.png',
      tooltipTarget: 'targetArea03601',
      tooltipDescription: '画面の内容を操作し、「次へ」をタップする',
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon036">エアコンとルーターの接続が完了したことを確認する</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon03602">接続に失敗したときは</a></li></ul>',
    },
    {
      index: 26,
      alt: 'STEP-27',
      imagePath: '../assets/img/rac/03901.png',
      tooltipTarget: 'targetArea03901',
      tooltipDescription: '<h6>機器とルーターを接続済み</h6>ここからは、すでに機器とルーターが接続済みの場合について説明します。画面の内容を確認し次へ進む、その他の接続方法は以下から選択ください。<ul class="mt-3"><li><a href="./?slide=7">アクセスポイントモードでの接続</a></li><li><a href="./?slide=21">WPS機能での接続</a></li></ul><div class="d-flex justify-content-end"><button type="button" class="btn btn-secondary btn-sm tippy-close-btn">閉じる</button></div>',
      noArrow: true,
      footerContent:
        '<ul><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon03901">スマートフォンの接続先を確認する</a></li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon03902">「"MyMU"がローカルネットワーク上のデバイスの検索および接続を求めています」</a>と表示されたら</li></ul>',
    },
    {
      index: 27,
      alt: 'STEP-28',
      imagePath: '../assets/img/rac/04001.png',
      tooltipTarget: 'targetArea04001',
      tooltipDescription: '登録するエアコンをタップする',
      footerContent:
        '<ul><li>複数の機器が表示された場合、<img class="mt-0 align-text-bottom" src="../assets/img/rac/buzzer.svg">ブザー鳴動ボタンをタップし、登録するエアコンからブザー音が鳴ることを確認ください。</li><li><a class="footer-link" data-bs-toggle="modal" data-bs-target="#modalCommon02802">エアコンが別のユーザーに登録されている場合</a></li></ul>',
    },
    {
      index: 28,
      alt: 'STEP-29',
      imagePath: '../assets/img/rac/03001.png',
      tooltipTarget: 'targetArea03001-01',
      tooltipDescription:
        '登録が完了したら、「エアコン初期設定へ」をタップする',
      footerContent: '',
    },
    {
      index: 29,
      alt: 'STEP-30',
      imagePath: '../assets/img/rac/03002.png',
      tooltipTarget: 'targetArea03002-01',
      tooltipDescription: '「宅外操作」を有効、「次へ」をタップする',
      footerContent:
        'MyMUアプリでエアコンを操作するためには、宅外操作を必ず有効(<i class="bi bi-toggle-on"></i>)に設定してください。',
    },
    {
      index: 30,
      alt: 'STEP-31',
      imagePath: '../assets/img/rac/03101.png',
      tooltipTarget: 'targetArea06201-01',
      tooltipDescription:
        '「アプリを起動する」をタップ、霧ヶ峰アプリを起動させる<div class="d-flex justify-content-center mt-3"><a role="button" href="../" class="btn btn-outline-secondary d-flex justify-content-between gap-2"><i class="bi bi-chevron-left"></i>機器選択画面に戻る</a></div>',
      footerContent:
        '<ul><li>エアコン登録と初期設定が完了しました。霧ヶ峰アプリの使い方については、霧ヶ峰アプリの取扱説明書を確認ください。</li><li>エアコン名は設置されている部屋名称に変更することをお勧めします(リビングのエアコンなど)。変更方法は<a href="https://www.mitsubishielectric.co.jp/home/mymu/ib.html">MyMUアプリの取扱説明書</a>から、「登録機器一覧を確認する」の事項を確認ください（ユーザー種別が「管理者」のみ行えます）。</li></ul>',
    },
  ],
};
