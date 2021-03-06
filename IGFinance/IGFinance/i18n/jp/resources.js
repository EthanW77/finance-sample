﻿var resources = (function () {
    return {
        Title: "IG ファイナンス",
        NoDataFromYahooPipe: "データ ソースが一時的にオフラインの場合があります。後でもう一度サンプルを表示してください。",
        ShowCaseInfo: "<div class='ui-dialog-wrap'><h1>詳細情報 <img src='assets/images/logo.png'></h1><p>ファイナンス ダッシュボードのサンプルは、データ チャート、ツリーマップとズームバーコントロールの金融業界で使用できる機能を紹介しています。データ チャートは、財務チャートにおいて高いパフォーマンスとスピードを発揮しています。このサンプルでは、数百万のデータ ポイントや大規模なデータセットにおいて、リアルタイムな更新を使用します。データ チャートでは主要な統計や技術的な指標、および主要な競合他者との比較などができます。</p><h1>Infragistics コントロール:</h1><div class='control-sprite-wrap'><span class='dialog-sprite ds-combo'></span><span>Combo</span><span class='dialog-sprite ds-chart'></span><span>Chart</span><span class='dialog-sprite ds-dialog'></span><span>Dialog</span><span class='dialog-sprite ds-zoombar'></span><span>Zoombar</span></div><a href='http://jp.infragistics.com/downloads/DownloadLinkGenerator.aspx?DownloadId=278FDD1A-1452-E311-8B12-0050568A73AE'>ソース コードのダウンロード<span class='icon-down ui-sprite'></span></a><span class='dialog-qr'><span>スキャンしてモバイル デバイスで表示します</span><div id='barcode'></div></span></div><a href='http://jp.igniteui.com' target='_blank'><div class='dialog-igniteui'><img src='assets/images/igniteui.png'></div></a><a href='http://jp.infragistics.com' target='_blank'><div class='dialog-infragistics'><img src='assets/images/infragistics.png'></div></a>",
        MarketCurrentlyClosed: "取引時間が終了しました。",
        RangeText: "範囲",
        WeeksText: "52 週間",
        OpenText: "始値",
        VolumeText: "出来高",
        EbitaText: "EBITA",
        EpsText: "EPS",
        MktText: "株式時価総額",
        PeText: "P/E",
        AskText: "売値",
        BidText: "入札",
        DailyHighText: "その日の高値",
        DailyLowText: "その日の低値",
        TooltipOpen: "始値:",
        TooltipLow: "低値:",
        TooltipHigh: "高値:",
        TooltipClose: "終値:",
        IndicatorPeriod: "インジケーター/期間: ",
        IndicatorType: {
            AvgTrueRange: "ATR (アベレージ トゥルー レンジ)",
            AvgIndex: "平均方向性指数",
            CommodityIndex: "商品チャネル指数 (CCI)",
            FastOscillator: "ファスト スト キャスティクス オシレーター",
            ForceIndex: "フォース インデックス",
            MoneyFlow: "マネー フロー インデックス",
            PriceOverlay: "プライス チャネル オーバーレイ",
            RateMomentum: "変化率およびモメンタム",
            RelativeIndex: "相対力指数",
            SlowOscillator: "スロー ストキャスティクス オシレーター",
            StockRsi: "ストキャスティクス RSI",
            Trix: "TRIX",
            WilliamsR: "ウィリアム パーセント レンジ",
        },

        SelectIndicator: "インジケーターの選択:",
        PeriodSlider: "期間スライダー:",
        ValidTicker: "有効な株式銘柄コード (INTC など) を入力してください",
        InfoScreen: "<p>有効な株式銘柄コードに変更できます。</p><p>株価チャートをエリア、ローソク足、OHLC、および折れ線の表示モードの間に切り替えます。ズーム可能で、その他のチャートと同期化します。パンニングするには、SHIFT キーを押します。チャートの解像度は 10 に設定されています。詳細について、ズームインしてください。</p><p>インジケーターを以下にカスタマイズできます。</p>",
        MonthNames: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
        InvalidTicker: "有効なティッカーを入力してください。",
        //This should not be transpated its for time formating
        getTimeFormatted: function (year, month, day) { month++; return year + "/" + month + "/" + day; }
    }
})();