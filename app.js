/* ==========================================================================
   E-Learning Content Data
   ========================================================================== */

const MODULES_DATA = {
    1: {
        title: "現場向けチャット「direct」の特徴",
        slides: [
            {
                title: "1. フィールドワーカーのためのビジネスチャット",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="smartphone"></i> 立ち仕事の人に最適化された設計</h4>
                        <p>「direct」は、デスクワーク向けではなく、建設現場などの「立って働く人々」がスマートに使えるよう最適化されています。LINEのように簡単で直感的な操作性を持つため、高齢の作業員やITリテラシーの差が激しい環境でも、講習会なしでその日のうちに使い始めることができます。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="shield-check"></i> 万全のセキュリティ体制</h4>
                        <p>セキュリティ事故ゼロを掲げ、ISO27001およびISO27017（クラウドセキュリティ）の認証を取得。データはすべて日本国内の信頼性の高いサーバーで運用されており、機密情報が多い大手建設業でも安心して導入されています。</p>
                    </div>
                `
            },
            {
                title: "2. 建設現場でトップシェアの実績",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="bar-chart-3"></i> ゼネコン売上上位20社中「全社導入」</h4>
                        <p>鹿島建設、大林組、大成建設、清水建設、竹中工務店など、ゼネコン売上上位20社すべてにおいて「全社導入」または「一部現場導入」されています。現在10,000社以上の現場コミュニケーションを支えています。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="users"></i> 協力会社にも波及するメリット</h4>
                        <p>複数の現場を掛け持ちすることが多い協力会社の職人にとっても、「現場が変わっても同じアカウントでスムーズに切り替えて利用できる」ため、登録の手間がなく喜ばれています。</p>
                    </div>
                `
            },
            {
                title: "3. 【特許技術】ゲストモード",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="lock"></i> 協力会社同士の連絡先を非表示に</h4>
                        <p>通常のチャットツールでは、グループ内の全員がお互いの連絡先を見えてしまいます。「direct」は特許技術（第6243382号）を用いて、<b>「ゲスト」に設定された外部メンバー同士はお互いの存在が見えない</b>ように制御します。</p>
                    </div>
                    <div class="diagram-guestmode">
                        <div class="diagram-nodes">
                            <div class="node company">元請社員</div>
                        </div>
                        <div class="diagram-link-text">元請社員からは全員が見える</div>
                        <div class="diagram-nodes">
                            <div class="node guest">協力A</div>
                            <div class="node guest">協力B</div>
                            <div class="node guest">協力C</div>
                        </div>
                        <div class="diagram-link-text text-danger font-bold">⚠️ 協力会社同士は繋がらない・見えない</div>
                    </div>
                `
            },
            {
                title: "4. 現場ごとのグルーピング（組織の概念）",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="layers"></i> 1アカウントで複数現場（組織）を管理</h4>
                        <p>現場ごとに独立した「組織（テナント）」を作成できます。1アカウントで複数の現場組織に所属することができ、スライドで簡単に表示を切り替えられます。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="trash-2"></i> 竣工後のデータ整理と誤送信防止</h4>
                        <p>組織を切り替えると、その現場のトークルームだけが表示されるため、他の現場への誤送信が完全に発生しません。また、工事が竣工した際は「組織ごと一括削除」することで、現場データの保管や整理が非常にスムーズになります。</p>
                    </div>
                `
            }
        ],
        quizzes: [
            {
                question: "「direct」がターゲットとしている主なユーザー層はどれですか？",
                options: [
                    "オフィスワーク専用のバックオフィス従業員",
                    "建設現場などのフィールドワーカー（立ち仕事の人）",
                    "IT専門のシステムエンジニア"
                ],
                answer: 1,
                explanation: "「direct」は、建設現場、プラント、鉄道など「立ち仕事（フィールドワーク）」をする人々に最適化された操作性と機能を持っています。"
            },
            {
                question: "外部協力会社同士の存在をお互いに非表示にしつつ、元請社員とだけ安全に繋がることができる特許技術はどれですか？",
                options: [
                    "ゲストモード",
                    "クローズドチャット",
                    "セキュアプライベート"
                ],
                answer: 0,
                explanation: "「ゲストモード（特許第6243382号）」により、協力会社同士の横の繋がり（連絡先の露出）を防ぎ、安全な現場ネットワークを構築できます。"
            },
            {
                question: "「組織（現場）ごとのグルーピング」機能のメリットとして、正しいものはどれですか？",
                options: [
                    "複数の現場のトークルームが1つに混ざり合って便利になる",
                    "現場ごとに表示を切り替え、誤送信を防ぐとともに、竣工後は組織ごと削除できる",
                    "個人情報がすべての現場メンバーに自動で共有される"
                ],
                answer: 1,
                explanation: "現場を独立した「組織（テナント）」として管理することで、別現場への誤送信をシャットアウトし、竣工時のデータ整理も容易になります。"
            }
        ]
    },
    2: {
        title: "タスク管理とチャットボット",
        slides: [
            {
                title: "1. 会話から生まれるタスク管理",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="check-square"></i> トークからワンタップでタスク化</h4>
                        <p>チャットで流れていく指示内容を逃さないよう、メッセージを長押ししてそのまま「タスク」に登録できます。期日や担当者を設定して対応漏れを防ぎます。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="kanban"></i> 4つの進捗フェーズで進捗可視化</h4>
                        <p>タスクは「未対応」「対応中」「対応済」「完了」の4つのフェーズで管理されます。仕上げ検査時の是正指示など、「誰がいつまでに何をするか」が一目で分かります。</p>
                    </div>
                `
            },
            {
                title: "2. 写真報告書ボット for 現場",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="camera"></i> スマホだけで報告書を現場完結</h4>
                        <p>「写真報告書ボット」とチャット形式で対話するだけで、日報や工事報告書を作成できます。ボットの質問に従って、日付を選び、是正前の写真を送り、説明をタップするだけで、報告書PDFが自動作成され、関係者に共有されます。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="clock"></i> 移動時間と書類作成の手間を大幅削減</h4>
                        <p>事務所に戻ってPCでExcelに入力して印刷する、といった従来の業務スタイルを破壊し、現場で作業が終わったその場で報告書作成まで終わらせることができます。</p>
                    </div>
                `
            },
            {
                title: "3. GPS勤怠ボット と「帳票のプロ」",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="map-pin"></i> GPS勤怠ボット</h4>
                        <p>GPS機能を利用して、位置情報付きの出退勤をチャット上で簡単に打刻。直行直帰が多い現場作業員の正しい労働実態を簡単に見える化します。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="file-spreadsheet"></i> 帳票のプロ（Excel連携）</h4>
                        <p>Excel上で「書類テンプレート」と「会話パターン」を設定するだけで、自社オリジナルのチャットボットをノーコードで簡単に構築・カスタマイズできます。現場巡視記録、ヒヤリハット報告書、一人KYシートなどを即座にシステム化可能です。</p>
                    </div>
                `
            }
        ],
        quizzes: [
            {
                question: "directの「タスク管理」機能にある4つの進捗フェーズに含まれないものはどれですか？",
                options: [
                    "対応中",
                    "保留中",
                    "対応済"
                ],
                answer: 1,
                explanation: "タスクのフェーズは「未対応」「対応中」「対応済」「完了」の4つです。「保留中」はありません。"
            },
            {
                question: "チャットボット「写真報告書ボット for 現場」を使用する最大のメリットは何ですか？",
                options: [
                    "写真を送るだけでAIが自動で補修工事をしてくれる",
                    "スマホでの対話形式で現場に居ながらにして瞬時に報告書PDFを作成・共有できる",
                    "チャット上でゲームをして遊ぶことができる"
                ],
                answer: 1,
                explanation: "スマホでチャットボットと対話するだけで、写真を貼ったきれいな報告書PDFが作成され、事務所に戻る手間がなくなります。"
            },
            {
                question: "Excelだけでオリジナルの会話パターンや書類テンプレートを設定し、ボットをノーコードで自作できる機能はどれですか？",
                options: [
                    "報告書のプロ",
                    "帳票のプロ",
                    "エクセルロボ"
                ],
                answer: 1,
                explanation: "「帳票のプロ」を使用すれば、Excel上で設定するだけで、現場巡視やヒヤリハット活動のオリジナルボットを自在に作ることができます。"
            }
        ]
    },
    3: {
        title: "現場AI「directアシスタント」",
        slides: [
            {
                title: "1. 現場AI「directアシスタント」とは",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="sparkles"></i> 立ち上げるだけでベテランの知恵</h4>
                        <p>「directアシスタント」は、いつものチャット画面上で立ち上げるだけで、AIがベテランの知恵を持つエージェントとして日々の業務をサポートします。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="file-text"></i> トーク会話の要約・抽出</h4>
                        <p>飛び交う大量のやり取りから、指示事項や重要連絡、危険予知、やるべきタスクなどを自動で抽出し、分かりやすくまとめます。</p>
                    </div>
                `
            },
            {
                title: "2. アシスタントの活用シーン",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="user-check"></i> 若手社員：過去ログ検索で即解決</h4>
                        <p>「これどうすればいい？」という疑問が生じた際、アシスタントにチャットで聞くと、過去の膨大なやり取りから、ベテラン社員の判断や回答を基にした解決策を検索して提示してくれます。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="eye"></i> 現場管理者：まとめビュー</h4>
                        <p>複数のトークルームを巡回しなくても、AIが現場の問題点や危険の兆候などの情報を自動で整理。所長などの管理者がひと目で状況を把握できます。</p>
                    </div>
                `
            },
            {
                title: "3. 画像解析と今後の展開",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="binary"></i> 画像解析による省力化</h4>
                        <p>現場から送られてくる大量の写真を確認する業務において、AIが画像を自動解析。異常値の検知や確認ポイントのハイライトを行うことで、目視チェックの時間を大幅に削減します。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="mic"></i> 音声対話や専門AIエージェントの構想</h4>
                        <p>手が塞がっている現場でも操作できるよう「音声対話」や、特定の施工・安全基準に精通した「専門AIエージェント」の開発など、さらなる機能強化が構想されています。</p>
                    </div>
                `
            }
        ],
        quizzes: [
            {
                question: "「directアシスタント」が会話から重要事項を整理・抽出して所長などの管理者に提示する機能は何ですか？",
                options: [
                    "ダイジェストチャネル",
                    "まとめビュー",
                    "インテリジェントログ"
                ],
                answer: 1,
                explanation: "「まとめビュー」機能により、複数のトークルームの会話から現場の問題点や危険の兆候を整理して一目で把握することができます。"
            },
            {
                question: "若手社員が現場で判断に迷った際、directアシスタントはどのように支援しますか？",
                options: [
                    "過去のチャット履歴から、ベテランのやり取りに基づいた解決策を提示する",
                    "自動的に現場作業を代行するロボットを派遣する",
                    "即座に役員へ直接電話を転送する"
                ],
                answer: 0,
                explanation: "「過去ログ検索」を活用することで、過去のログから似た事例でのベテランの対応や解決策を検索し、現場での自己解決を促します。"
            },
            {
                question: "directアシスタントが今後さらに強化する機能の構想として、資料にあるものはどれですか？",
                options: [
                    "自動の給与計算システム",
                    "ドローンによる資材の自動配送",
                    "画像解析、音声対話、専門AIエージェント"
                ],
                answer: 2,
                explanation: "現場のさらなる自動化を目指し、画像解析による確認作業支援や、音声対話、施工管理の専門AIなどが計画されています。"
            }
        ]
    },
    4: {
        title: "他社アプリ連携とDXエコシステム",
        slides: [
            {
                title: "1. 図面・野帳アプリとのシームレスな連携",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="edit-3"></i> デジタル野帳「eYACHO」</h4>
                        <p>eYACHO上の図面やメモを「direct」で即座に関係者に通知・共有でき、現場と事務所間の情報伝達スピードが劇的に向上します。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="file-text"></i> 図面管理「SPIDERPLUS」</h4>
                        <p>図面の変更や修正があった際、SPIDERPLUSの更新データを「direct」経由でリアルタイムに通知。変更図面のリンクやPDFを即時共有でき、施工手戻りを防ぎます。</p>
                    </div>
                `
            },
            {
                title: "2. 安全管理・現場工程ツール連携",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="calendar"></i> 調整会議「Buildee」連携</h4>
                        <p>現場での指摘事項や、作業予定・実績の未承認アラートなどを「direct」に自動リマインド。承認業務の遅れを防ぎ、現場の円滑な工程実施を支援します。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="wrench"></i> 建機・安全「Arch」シリーズ連携</h4>
                        <p>Arch安全セーフティによる機械点検・足場点検の結果、故障報告、建機レンタルの発注承認などをリアルタイムにチャットで通知・確認できます。</p>
                    </div>
                `
            },
            {
                title: "3. IoTセンサー・AIカメラによる安全管理",
                content: `
                    <div class="slide-item-card">
                        <h4><i data-lucide="cloud-lightning"></i> 気象予測アラート (e-Stand連携)</h4>
                        <p>設定値を超える強風、豪雨、落雷予測、熱中症指数などを検知すると、directのグループトークに自動警報通知。現場作業員の迅速な避難判断や安全指示が行えます。</p>
                    </div>
                    <div class="slide-item-card">
                        <h4><i data-lucide="thermometer"></i> 熱中症対策AIカメラ「カオカラ」</h4>
                        <p>AIカメラに顔をかざすだけで作業員の体調を確認し、熱中症リスクが高いと判定された場合、即座にdirectを通じて管理者へアラートが通知されます。</p>
                    </div>
                `
            }
        ],
        quizzes: [
            {
                question: "デジタル野帳「eYACHO」や図面管理「SPIDERPLUS」との連携の主なメリットは何ですか？",
                options: [
                    "チャット上で図面の更新や指摘図面のPDFを即時共有でき、施工手戻りを減らせる",
                    "図面を書く作業そのものをAIが自動でやってくれる",
                    "他社のアプリを強制的にアンインストールできる"
                ],
                answer: 0,
                explanation: "野帳や図面の更新情報をチャットで即時に現場に通知・リンク共有できるため、手戻りのない迅速な施工管理が可能になります。"
            },
            {
                question: "気象予測アラート（e-Stand等）との連携で、directのトークに通知可能な情報はどれですか？",
                options: [
                    "明後日の地域の観光情報",
                    "設定基準を超えた雨・風・熱中症指数や、気象庁の警報情報",
                    "作業員の体脂肪率の変動"
                ],
                answer: 1,
                explanation: "雨・風・熱中症指標などの異常気象や気象庁発表の各種警報を自動検知してチャット通知するため、現場の迅速な安全指示に繋がります。"
            },
            {
                question: "暑熱対策AIカメラ「カオカラ」とdirectの連携で自動化できることは何ですか？",
                options: [
                    "現場への不審者の自動侵入防止",
                    "作業員の熱中症リスクをカメラで判定し、危険時に管理者にチャット通知する",
                    "カメラで撮った写真を自動で動画に変換する"
                ],
                answer: 1,
                explanation: "カメラが顔から判定した熱中症リスク情報を管理者にdirectでリアルタイム通知し、迅速な休息指示などが行えるようになります。"
            }
        ]
    }
};

/* ==========================================================================
   State Management
   ========================================================================== */

let currentUser = {
    loginId: "",
    password: "",
    name: "",
    company: "",
    progress: {}, // { "1": 100, "2": 0, ... }
    scores: {},   // { "1": 3, "2": 2, ... }
    examPassed: false,
    examScore: 0,
    visits: 1,
    lastActive: ""
};

let appUsers = []; // All tracking users in system

let currentModule = 1;
let currentSlideIndex = 0;
let currentQuizIndex = 0;
let currentQuizCorrectAnswers = 0;

// Auth tab tracking: 'login' or 'register'
let currentAuthTab = "login";

// Chatbot Sim State
let botStep = 0;

// Kanban Sim State
let taskCards = [
    { id: 1, title: "壁紙のキズ補修 (仕上げ検査#102)", tag: "内装工事", zone: "A工区", status: "todo" },
    { id: 2, title: "サッシの建付調整 (仕上げ検査#108)", tag: "建具工事", zone: "B工区", status: "todo" }
];

/* ==========================================================================
   App Initialization & Navigation
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Check localStorage for user databases
    initDatabase();
    
    // Bind Event Listeners
    setupEventListeners();
});

function initDatabase() {
    // Default Mock Users with pre-set Login ID & PW for testing
    const mockUsers = [
        { loginId: "sato", password: "sato123", name: "佐藤 一郎", company: "竹中工務店", progress: {1:100, 2:100, 3:100, 4:100}, scores: {1:3, 2:3, 3:3, 4:3}, examPassed: true, examScore: 100, visits: 14, lastActive: "2026-05-26 10:30" },
        { loginId: "suzuki", password: "suzuki123", name: "鈴木 二郎", company: "大林組", progress: {1:100, 2:100, 3:100, 4:0}, scores: {1:3, 2:2, 3:3}, examPassed: false, examScore: 0, visits: 8, lastActive: "2026-05-25 16:45" },
        { loginId: "takahashi", password: "takahashi123", name: "高橋 三郎", company: "清水建設", progress: {1:100, 2:0, 3:0, 4:0}, scores: {1:2}, examPassed: false, examScore: 0, visits: 3, lastActive: "2026-05-24 11:20" },
        { loginId: "watanabe", password: "watanabe123", name: "渡辺 四郎", company: "鹿島建設", progress: {1:100, 2:100, 3:100, 4:100}, scores: {1:3, 2:3, 3:2, 4:2}, examPassed: false, examScore: 40, visits: 12, lastActive: "2026-05-26 09:15" },
        { loginId: "nakamura", password: "nakamura123", name: "中村 美咲", company: "前田建設工業", progress: {1:100, 2:100, 3:100, 4:100}, scores: {1:3, 2:3, 3:3, 4:3}, examPassed: true, examScore: 80, visits: 9, lastActive: "2026-05-26 14:02" }
    ];

    const storedUsers = localStorage.getItem("direct_elearning_users");
    if (!storedUsers) {
        localStorage.setItem("direct_elearning_users", JSON.stringify(mockUsers));
        appUsers = mockUsers;
    } else {
        appUsers = JSON.parse(storedUsers);
    }

    // Check if current user is logged in
    const sessionUser = sessionStorage.getItem("direct_current_user");
    if (sessionUser) {
        currentUser = JSON.parse(sessionUser);
        document.getElementById("btn-logout").classList.remove("hidden");
        updateUserDashboard();
        showScreen("screen-dashboard");
    } else {
        document.getElementById("btn-logout").classList.add("hidden");
        showScreen("screen-welcome");
    }
    
    updateAdminDashboard();
}

function switchLoginTab(tab) {
    currentAuthTab = tab;
    const tabLogin = document.getElementById("tab-login");
    const tabRegister = document.getElementById("tab-register");
    const registerFields = document.getElementById("register-fields");
    const screenTitle = document.getElementById("login-screen-title");
    const btnSubmit = document.getElementById("btn-submit-login");

    if (tab === "login") {
        tabLogin.className = "btn-primary btn-sm w-48";
        tabLogin.style.background = "";
        tabRegister.className = "btn-secondary btn-sm w-48";
        tabRegister.style.background = "transparent";
        tabRegister.style.border = "none";
        tabRegister.style.boxShadow = "none";

        registerFields.classList.add("hidden");
        screenTitle.textContent = "受講者ログイン";
        btnSubmit.querySelector("span").textContent = "ログインする";
    } else {
        tabRegister.className = "btn-primary btn-sm w-48";
        tabRegister.style.background = "";
        tabLogin.className = "btn-secondary btn-sm w-48";
        tabLogin.style.background = "transparent";
        tabLogin.style.border = "none";
        tabLogin.style.boxShadow = "none";

        registerFields.classList.remove("hidden");
        screenTitle.textContent = "受講者アカウント作成";
        btnSubmit.querySelector("span").textContent = "アカウントを作成する";
    }
}

function setupEventListeners() {
    // Welcome Screen
    document.getElementById("btn-start-course").addEventListener("click", () => {
        showScreen("screen-login");
        switchLoginTab("login");
    });

    // Login Tabs Event Listeners
    document.getElementById("tab-login").addEventListener("click", () => switchLoginTab("login"));
    document.getElementById("tab-register").addEventListener("click", () => switchLoginTab("register"));

    // Login / Registration Submission
    document.getElementById("btn-submit-login").addEventListener("click", () => {
        const loginIdInput = document.getElementById("login-id").value.trim();
        const loginPwInput = document.getElementById("login-pw").value.trim();

        if (!loginIdInput || !loginPwInput) {
            alert("ログインIDとパスワードを入力してください。");
            return;
        }

        if (currentAuthTab === "login") {
            // Login verification
            const foundUser = appUsers.find(u => u.loginId === loginIdInput);
            if (!foundUser || foundUser.password !== loginPwInput) {
                alert("ログインIDまたはパスワードが正しくありません。");
                return;
            }

            currentUser = foundUser;
            currentUser.visits = (currentUser.visits || 0) + 1;
            currentUser.lastActive = getFormattedDate();

            // Sync inside appUsers list
            const idx = appUsers.findIndex(u => u.loginId === currentUser.loginId);
            if (idx !== -1) {
                appUsers[idx] = currentUser;
            }

            saveUserData();
            document.getElementById("btn-logout").classList.remove("hidden");
            updateUserDashboard();
            updateAdminDashboard();
            showScreen("screen-dashboard");
        } else {
            // New user registration
            const nameInput = document.getElementById("username").value.trim();
            const companyInput = document.getElementById("usercompany").value.trim();

            if (!nameInput) {
                alert("お名前を入力してください。");
                return;
            }

            // Check duplicate login IDs
            const duplicate = appUsers.find(u => u.loginId === loginIdInput);
            if (duplicate) {
                alert("このログインIDはすでに登録されています。別のIDを指定してください。");
                return;
            }

            currentUser = {
                loginId: loginIdInput,
                password: loginPwInput,
                name: nameInput,
                company: companyInput || "個人受講",
                progress: { "1": 0, "2": 0, "3": 0, "4": 0 },
                scores: {},
                examPassed: false,
                examScore: 0,
                visits: 1,
                lastActive: getFormattedDate()
            };

            appUsers.push(currentUser);
            saveUserData();
            document.getElementById("btn-logout").classList.remove("hidden");
            updateUserDashboard();
            updateAdminDashboard();
            showScreen("screen-dashboard");
        }
    });

    // Logout Action
    document.getElementById("btn-logout").addEventListener("click", () => {
        sessionStorage.removeItem("direct_current_user");
        currentUser = {
            loginId: "",
            password: "",
            name: "",
            company: "",
            progress: {},
            scores: {},
            examPassed: false,
            examScore: 0,
            visits: 1,
            lastActive: ""
        };
        document.getElementById("btn-logout").classList.add("hidden");

        // Clear input fields
        document.getElementById("login-id").value = "";
        document.getElementById("login-pw").value = "";
        document.getElementById("username").value = "";
        document.getElementById("usercompany").value = "";

        // Reset width class if returning from admin wide view
        const layout = document.querySelector(".app-layout");
        if (layout.classList.contains("layout-wide")) {
            layout.classList.remove("layout-wide");
            document.getElementById("btn-toggle-admin").querySelector(".btn-text").textContent = "管理者画面";
        }

        showScreen("screen-welcome");
    });

    // Admin Toggle Button (with Modal verification gate)
    document.getElementById("btn-toggle-admin").addEventListener("click", () => {
        const layout = document.querySelector(".app-layout");
        const btn = document.getElementById("btn-toggle-admin");
        const btnText = btn.querySelector(".btn-text");

        if (layout.classList.contains("layout-wide")) {
            // Switch back to student view
            layout.classList.remove("layout-wide");
            btnText.textContent = "管理者画面";
            if (currentUser.loginId) {
                showScreen("screen-dashboard");
            } else {
                showScreen("screen-welcome");
            }
        } else {
            // Open admin gate popup
            document.getElementById("admin-id").value = "";
            document.getElementById("admin-pw").value = "";
            document.getElementById("modal-admin-login").classList.remove("hidden");
        }
    });

    // Admin login submit verification
    document.getElementById("btn-submit-admin-login").addEventListener("click", () => {
        const adminId = document.getElementById("admin-id").value.trim();
        const adminPw = document.getElementById("admin-pw").value.trim();

        if (adminId === "admin" && adminPw === "direct123") {
            document.getElementById("modal-admin-login").classList.add("hidden");
            
            const layout = document.querySelector(".app-layout");
            layout.classList.add("layout-wide");
            document.getElementById("btn-toggle-admin").querySelector(".btn-text").textContent = "受講者画面";
            showScreen("screen-admin");
            updateAdminDashboard();
        } else {
            alert("管理者IDまたはパスワードが正しくありません。");
        }
    });

    // Admin Controls
    document.getElementById("btn-admin-reset").addEventListener("click", () => {
        if (confirm("すべての受講データを初期化します。よろしいですか？")) {
            localStorage.removeItem("direct_elearning_users");
            sessionStorage.removeItem("direct_current_user");
            currentUser = { loginId: "", password: "", name: "", company: "", progress: {}, scores: {}, examPassed: false, examScore: 0, visits: 1, lastActive: "" };
            initDatabase();
            showScreen("screen-welcome");
            const layout = document.querySelector(".app-layout");
            layout.classList.remove("layout-wide");
            document.getElementById("btn-toggle-admin").querySelector(".btn-text").textContent = "管理者画面";
        }
    });

    document.getElementById("btn-admin-add-user").addEventListener("click", () => {
        const firstNames = ["健太", "拓也", "直樹", "大介", "美香", "由美子", "香織"];
        const lastNames = ["山田", "加藤", "吉田", "林", "斉藤", "小林", "佐々木"];
        const companies = ["鹿島建設", "大林組", "清水建設", "竹中工務店", "大成建設"];
        
        const randomName = lastNames[Math.floor(Math.random() * lastNames.length)] + " " + firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomCompany = companies[Math.floor(Math.random() * companies.length)];
        
        // Random simple alphanumeric loginId
        const randId = "user_" + Math.random().toString(36).substring(2, 7);

        const randProgressVal = Math.floor(Math.random() * 5) * 25; // 0, 25, 50, 75, 100
        const progress = { "1": 100 };
        progress["2"] = randProgressVal >= 50 ? 100 : 0;
        progress["3"] = randProgressVal >= 75 ? 100 : 0;
        progress["4"] = randProgressVal === 100 ? 100 : 0;

        const scores = { "1": Math.floor(Math.random() * 2) + 2 }; // 2 or 3
        if (progress["2"] === 100) scores["2"] = Math.floor(Math.random() * 2) + 2;
        if (progress["3"] === 100) scores["3"] = Math.floor(Math.random() * 2) + 2;
        if (progress["4"] === 100) scores["4"] = Math.floor(Math.random() * 2) + 2;

        const isPassed = randProgressVal === 100 && Math.random() > 0.3;
        const examScore = isPassed ? (Math.random() > 0.5 ? 100 : 80) : 0;

        const newUser = {
            loginId: randId,
            password: "pw" + randId,
            name: randomName,
            company: randomCompany,
            progress: progress,
            scores: scores,
            examPassed: isPassed,
            examScore: examScore,
            visits: Math.floor(Math.random() * 10) + 1,
            lastActive: getFormattedDate()
        };

        appUsers.push(newUser);
        localStorage.setItem("direct_elearning_users", JSON.stringify(appUsers));
        updateAdminDashboard();
    });

    // Organization Filter Dropdown change event
    document.getElementById("admin-org-filter").addEventListener("change", () => {
        updateAdminDashboard();
    });

    // Slide Viewer Next/Prev Buttons
    document.getElementById("btn-prev-slide").addEventListener("click", () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            renderSlide();
        }
    });

    document.getElementById("btn-next-slide").addEventListener("click", () => {
        const slides = MODULES_DATA[currentModule].slides;
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            renderSlide();
        } else {
            // Finished slides, proceed to quiz
            startQuiz();
        }
    });

    // Cert Exam Start Button
    document.getElementById("btn-start-exam").addEventListener("click", () => {
        if (!document.getElementById("btn-start-exam").classList.contains("disabled")) {
            startExam();
        }
    });
}

function showScreen(screenId) {
    const screens = document.querySelectorAll(".app-screen");
    screens.forEach(s => s.classList.remove("active"));
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add("active");
    }
    
    // Re-initialize icons inside current view
    lucide.createIcons();
}

function saveUserData() {
    sessionStorage.setItem("direct_current_user", JSON.stringify(currentUser));
    
    // Sync with appUsers array
    const idx = appUsers.findIndex(u => u.loginId === currentUser.loginId);
    if (idx !== -1) {
        appUsers[idx] = currentUser;
    } else {
        appUsers.push(currentUser);
    }
    localStorage.setItem("direct_elearning_users", JSON.stringify(appUsers));
}

function getFormattedDate() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    return `${y}-${m}-${d} ${hh}:${mm}`;
}

/* ==========================================================================
   Student Dashboard Render
   ========================================================================== */

function updateUserDashboard() {
    // Top Bar Info
    document.getElementById("display-user-name").textContent = `${currentUser.name} 様`;
    document.getElementById("display-user-company").textContent = currentUser.company;
    document.getElementById("user-initials").textContent = currentUser.name.trim().charAt(0);

    // Calculate overall progress percentage
    // 4 chapters, each represents 25% if completed
    let completedCount = 0;
    for (let i = 1; i <= 4; i++) {
        const stat = currentUser.progress[i] || 0;
        if (stat === 100) {
            completedCount++;
        }
    }
    
    const progressVal = completedCount * 25;
    document.getElementById("progress-percentage").textContent = `${progressVal}%`;
    document.getElementById("progress-bar-inner").style.width = `${progressVal}%`;

    // Render Chapters statuses
    for (let i = 1; i <= 4; i++) {
        const badge = document.getElementById(`module-status-1`); // Wait, we have individual IDs! Let's correct it:
        // Actually, the IDs are module-status-1, module-status-2, module-status-3, module-status-4.
        const statusBadge = document.getElementById(`module-status-${i}`);
        const card = document.querySelector(`.module-card[data-module="${i}"]`);
        const btn = card.querySelector(".btn-start-module");
        
        const prog = currentUser.progress[i] || 0;
        
        if (prog === 100) {
            statusBadge.textContent = "完了";
            statusBadge.className = "status-badge completed";
            btn.textContent = "復習する";
            btn.className = "btn-start-module btn-secondary btn-sm";
        } else if (prog > 0) {
            statusBadge.textContent = "学習中";
            statusBadge.className = "status-badge learning";
            btn.textContent = "再開する";
            btn.className = "btn-start-module btn-primary btn-sm";
        } else {
            statusBadge.textContent = "未着手";
            statusBadge.className = "status-badge unstarted";
            btn.textContent = "学習する";
            btn.className = "btn-start-module btn-primary btn-sm";
        }
    }

    // Cert Exam unlock check
    const examBtn = document.getElementById("btn-start-exam");
    const certCard = document.getElementById("cert-lock-card");
    const certIcon = document.getElementById("cert-lock-icon");
    const certText = document.getElementById("cert-lock-text");

    if (progressVal === 100) {
        examBtn.classList.remove("disabled");
        examBtn.removeAttribute("disabled");
        certIcon.setAttribute("data-lucide", "award");
        certIcon.className = "icon-lg text-gold animate-bounce";
        
        if (currentUser.examPassed) {
            certText.innerHTML = `<span class="text-success font-bold">🎉 合格済み (スコア: ${currentUser.examScore}点)</span><br>修了証書が発行されています。`;
            examBtn.querySelector("span").textContent = "修了証書を表示する";
            examBtn.onclick = () => showCertificate();
        } else {
            certText.innerHTML = "全チャプターの学習が完了しました！現場DX認定テストに挑戦できます。";
            examBtn.querySelector("span").textContent = "認定テストを開始する";
            examBtn.onclick = () => startExam();
        }
    } else {
        examBtn.classList.add("disabled");
        examBtn.setAttribute("disabled", "true");
        certIcon.setAttribute("data-lucide", "lock");
        certIcon.className = "icon-lg text-muted";
        certText.innerHTML = "全4チャプターを学習完了すると、認定テストに挑戦でき、合格すると修了証書が発行されます。";
        examBtn.querySelector("span").textContent = "認定テストを開始する";
    }

    lucide.createIcons();
}

/* ==========================================================================
   Slide Viewer Engine
   ========================================================================== */

function startModule(moduleId) {
    currentModule = moduleId;
    currentSlideIndex = 0;
    
    // Set status to learning if unstarted
    if ((currentUser.progress[currentModule] || 0) === 0) {
        currentUser.progress[currentModule] = 50; // Learning
        saveUserData();
        updateUserDashboard();
        updateAdminDashboard();
    }
    
    // Update Header labels
    document.querySelector(".slide-chapter-label").textContent = `第 ${currentModule} 章`;
    document.getElementById("slide-chapter-title").textContent = MODULES_DATA[currentModule].title;
    
    renderSlide();
    showScreen("screen-slide-viewer");
}

function exitSlideViewer() {
    showScreen("screen-dashboard");
}

function renderSlide() {
    const slides = MODULES_DATA[currentModule].slides;
    const slide = slides[currentSlideIndex];
    
    // Update counter & progress
    document.getElementById("current-slide-num").textContent = currentSlideIndex + 1;
    document.getElementById("total-slide-num").textContent = slides.length;
    
    const pct = ((currentSlideIndex + 1) / slides.length) * 100;
    document.getElementById("slide-progress-bar-inner").style.width = `${pct}%`;

    // Setup prev button visibility
    const prevBtn = document.getElementById("btn-prev-slide");
    if (currentSlideIndex === 0) {
        prevBtn.style.opacity = "0.5";
        prevBtn.style.pointerEvents = "none";
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents = "auto";
    }

    // Next Button label
    const nextBtn = document.getElementById("btn-next-slide");
    if (currentSlideIndex === slides.length - 1) {
        nextBtn.textContent = "理解度クイズへ";
    } else {
        nextBtn.textContent = "次へ";
    }

    // Inject Content
    const body = document.getElementById("slide-body-content");
    body.innerHTML = `
        <h3>${slide.title}</h3>
        <div class="slide-main-inner">
            ${slide.content}
        </div>
    `;

    lucide.createIcons();
}

/* ==========================================================================
   Quiz Interface
   ========================================================================== */

function startQuiz() {
    currentQuizIndex = 0;
    currentQuizCorrectAnswers = 0;
    renderQuizQuestion();
    showScreen("screen-quiz");
}

function renderQuizQuestion() {
    const quizzes = MODULES_DATA[currentModule].quizzes;
    const quiz = quizzes[currentQuizIndex];

    // Reset progress label and bar
    document.getElementById("current-quiz-num").textContent = currentQuizIndex + 1;
    document.getElementById("total-quiz-num").textContent = quizzes.length;
    
    const pct = ((currentQuizIndex + 1) / quizzes.length) * 100;
    document.getElementById("quiz-progress-inner").style.width = `${pct}%`;

    // Question Text
    document.getElementById("quiz-question-text").textContent = quiz.question;

    // Options list
    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";
    
    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `
            <span class="option-marker">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
        `;
        btn.addEventListener("click", () => handleQuizAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });

    // Hide feedback panel
    document.getElementById("quiz-feedback-panel").classList.add("hidden");
}

function handleQuizAnswer(selectedIdx, btnElement) {
    const quizzes = MODULES_DATA[currentModule].quizzes;
    const quiz = quizzes[currentQuizIndex];
    const optionsContainer = document.getElementById("quiz-options-container");
    const allButtons = optionsContainer.querySelectorAll(".option-btn");

    // Disable all options
    allButtons.forEach(btn => btn.classList.add("disabled"));

    const isCorrect = selectedIdx === quiz.answer;
    
    if (isCorrect) {
        btnElement.className = "option-btn correct";
        currentQuizCorrectAnswers++;
    } else {
        btnElement.className = "option-btn wrong";
        // Highlight correct option
        allButtons[quiz.answer].className = "option-btn correct";
    }

    // Render feedback panel
    const feedbackPanel = document.getElementById("quiz-feedback-panel");
    const resultIcon = document.getElementById("feedback-result-icon");
    const resultText = document.getElementById("feedback-result-text");
    const explanation = document.getElementById("feedback-explanation");
    const nextBtn = document.getElementById("btn-next-quiz");

    feedbackPanel.className = "feedback-panel card-glass mt-4";
    if (isCorrect) {
        resultIcon.innerHTML = `<i data-lucide="check-circle" class="text-success icon-lg"></i>`;
        resultText.textContent = "正解！";
        resultText.className = "text-success";
    } else {
        feedbackPanel.classList.add("wrong-border");
        resultIcon.innerHTML = `<i data-lucide="x-circle" class="text-danger icon-lg"></i>`;
        resultText.textContent = "不正解...";
        resultText.className = "text-danger";
    }

    explanation.textContent = quiz.explanation;
    feedbackPanel.classList.remove("hidden");
    
    if (currentQuizIndex === quizzes.length - 1) {
        nextBtn.textContent = "チャプターを修了する";
    } else {
        nextBtn.textContent = "次の問題へ";
    }

    nextBtn.onclick = () => {
        if (currentQuizIndex < quizzes.length - 1) {
            currentQuizIndex++;
            renderQuizQuestion();
        } else {
            finishModule();
        }
    };

    lucide.createIcons();
}

function finishModule() {
    // Record scores and set progress to 100%
    currentUser.progress[currentModule] = 100;
    currentUser.scores[currentModule] = currentQuizCorrectAnswers;
    currentUser.lastActive = getFormattedDate();
    
    saveUserData();
    updateUserDashboard();
    updateAdminDashboard();

    alert(`チャプター ${currentModule} を修了しました！\nスコア: 3問中 ${currentQuizCorrectAnswers}問 正解`);
    showScreen("screen-dashboard");
}

/* ==========================================================================
   Interactive Chatbot Simulator
   ========================================================================== */

function startSimulator(simType) {
    if (simType === 'bot') {
        resetBotSimulator();
        showScreen("screen-simulator-bot");
    } else if (simType === 'task') {
        resetTaskSimulator();
        showScreen("screen-simulator-task");
    }
}

function resetBotSimulator() {
    botStep = 0;
    const container = document.getElementById("chat-messages-container");
    container.innerHTML = "";
    
    // Add initial bot greeting
    appendChatMessage("bot", "お疲れ様です！写真報告書ボットです。現場から工事報告書を作成しますか？");
    renderBotOptions(["作成する", "キャンセル"]);
}

function appendChatMessage(sender, text, isSystem = false) {
    const container = document.getElementById("chat-messages-container");
    const bubble = document.createElement("div");
    
    if (isSystem) {
        bubble.className = "chat-bubble system-card";
    } else {
        bubble.className = `chat-bubble ${sender}`;
    }
    
    bubble.innerHTML = text;
    container.appendChild(bubble);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function renderBotOptions(options) {
    const container = document.getElementById("chat-inputs-container");
    container.innerHTML = "";
    
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "chat-btn-option";
        btn.textContent = opt;
        btn.onclick = () => handleBotUserChoice(opt);
        container.appendChild(btn);
    });
}

function handleBotUserChoice(choice) {
    // Append user response
    appendChatMessage("user", choice);
    document.getElementById("chat-inputs-container").innerHTML = ""; // Clear options
    
    botStep++;
    
    // Wait and respond
    setTimeout(() => {
        runBotScript(choice);
    }, 800);
}

function runBotScript(userChoice) {
    if (botStep === 1) {
        if (userChoice === "作成する") {
            appendChatMessage("bot", "報告書に記載する日時を指定してください。");
            renderBotOptions(["本日（" + getTodayString() + "）", "別の日付を指定"]);
        } else {
            appendChatMessage("bot", "キャンセルされました。また報告書を作成する際はメッセージを送ってください。");
            appendChatMessage("bot", "【シミュレーション完了】", true);
            renderBotOptions(["最初からやり直す", "ダッシュボードに戻る"]);
        }
    } 
    else if (botStep === 2) {
        if (userChoice.startsWith("本日")) {
            appendChatMessage("bot", "了解しました。日付を<b>「" + getTodayString() + "」</b>で設定しました。");
            setTimeout(() => {
                appendChatMessage("bot", "次に、1つ目の写真（是正指示、施工箇所など）をカメラ撮影または選択して送信してください。");
                renderBotOptions(["📷 是正指示前の写真を送信"]);
            }, 600);
        } else {
            appendChatMessage("bot", "日付手入力モードです。2026-05-26 と入力されました。写真を送信してください。");
            renderBotOptions(["📷 是正指示前の写真を送信"]);
        }
    } 
    else if (botStep === 3) {
        // Picture sent
        appendChatMessage("bot", "画像のアップロードに成功しました。<br><br><img src='https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=150&q=80' alt='現場写真' style='border-radius: 8px; width: 120px; height: 90px; object-fit: cover;'><br><small class='text-muted'>GPS: 35.6997, 139.7711</small>");
        
        setTimeout(() => {
            appendChatMessage("bot", "この写真の説明・指摘内容を選択または入力してください。");
            renderBotOptions(["壁紙のキズ・破れ", "サッシの建付不良", "ヒヤリハット（足場手摺の緩み）"]);
        }, 1000);
    } 
    else if (botStep === 4) {
        appendChatMessage("bot", "指摘内容を「" + userChoice + "」として登録しました。");
        
        setTimeout(() => {
            appendChatMessage("bot", "写真報告書PDFを作成しました。トークルームにファイルをアップロードして完了します。");
            
            setTimeout(() => {
                // PDF Card mock
                const pdfCard = `
                    <div style="text-align: left; padding: 0.5rem; background: rgba(255,255,255,0.04); border: 1px solid var(--color-border); border-radius: 8px;">
                        <div class="flex-row gap-2">
                            <i data-lucide="file-text" style="color: var(--color-danger); width: 28px; height: 28px;"></i>
                            <div>
                                <h5 style="margin: 0; font-size: 0.8rem; font-weight: 700;">📄 現場是正報告書_${getTodayString().replace(/\//g, "")}.pdf</h5>
                                <span class="text-xs text-muted">サイズ: 214 KB | 送信先: A現場_全員</span>
                            </div>
                        </div>
                        <div class="flex-center mt-2" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.4rem;">
                            <span class="text-success text-xs font-bold"><i data-lucide="check" class="icon-inline"></i> 送信完了</span>
                        </div>
                    </div>
                `;
                appendChatMessage("bot", pdfCard);
                lucide.createIcons();
                
                setTimeout(() => {
                    appendChatMessage("bot", "【シミュレーション成功】<br>このようにチャットボットと会話するだけで、PCを開かずに報告書を現場で完成させることができます！", true);
                    renderBotOptions(["最初からやり直す", "ダッシュボードに戻る"]);
                }, 1000);
            }, 800);
        }, 800);
    }
    else if (botStep === 5) {
        if (userChoice === "最初からやり直す") {
            resetBotSimulator();
        } else {
            showScreen("screen-dashboard");
        }
    }
}

function getTodayString() {
    const now = new Date();
    return `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;
}

/* ==========================================================================
   Interactive Kanban Task Simulator
   ========================================================================== */

function resetTaskSimulator() {
    taskCards = [
        { id: 1, title: "壁紙のキズ補修 (仕上げ検査#102)", tag: "内装工事", zone: "A工区", status: "todo" },
        { id: 2, title: "サッシの建付調整 (仕上げ検査#108)", tag: "建具工事", zone: "B工区", status: "todo" }
    ];
    renderTaskBoard();
}

function renderTaskBoard() {
    const cols = {
        todo: document.getElementById("cards-todo"),
        doing: document.getElementById("cards-doing"),
        done: document.getElementById("cards-done"),
        completed: document.getElementById("cards-completed")
    };
    
    // Clear lists
    Object.values(cols).forEach(el => el.innerHTML = "");
    
    // Counts
    const counts = { todo: 0, doing: 0, done: 0, completed: 0 };

    taskCards.forEach(card => {
        counts[card.status]++;
        
        const cardEl = document.createElement("div");
        cardEl.className = "kanban-card";
        
        let tagClass = "tag-red";
        if (card.tag === "建具工事") tagClass = "tag-blue";
        
        // Progress label for interactive hint
        let progressHint = "👉 タップして着工する";
        if (card.status === "doing") progressHint = "👉 タップして是正報告する";
        if (card.status === "done") progressHint = "👉 タップして元請確認・完了";
        if (card.status === "completed") progressHint = "✅ 完了";

        cardEl.innerHTML = `
            <h6>${card.title}</h6>
            <p>${card.zone}</p>
            <span class="card-tag ${tagClass}">${card.tag}</span>
            <div style="font-size: 0.55rem; color: var(--color-primary); font-weight: 700; margin-top: 0.25rem;">${progressHint}</div>
        `;
        
        cardEl.onclick = () => transitionTask(card.id);
        cols[card.status].appendChild(cardEl);
    });

    // Update count labels
    Object.keys(counts).forEach(key => {
        document.getElementById(`count-${key}`).textContent = counts[key];
    });

    // Check if simulation is complete (all tasks are completed)
    if (counts.completed === taskCards.length) {
        setTimeout(() => {
            alert("おめでとうございます！すべての是正タスクが完了し、現場の帳票データに同期されました。");
            showScreen("screen-dashboard");
        }, 600);
    }
}

function transitionTask(cardId) {
    const card = taskCards.find(c => c.id === cardId);
    if (!card) return;

    if (card.status === "todo") {
        card.status = "doing";
        showToast("協力会社がタスクを引き受け、「対応中」にしました。");
    } else if (card.status === "doing") {
        card.status = "done";
        showToast("協力会社が是正写真を撮影し、「対応済（報告）」にしました。");
    } else if (card.status === "done") {
        card.status = "completed";
        showToast("元請が仕上がりを確認し、タスクを「完了」にしました！");
    }
    
    renderTaskBoard();
}

function showToast(message) {
    // Simple custom notification alert
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "80px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "rgba(15, 23, 42, 0.9)";
    toast.style.color = "white";
    toast.style.border = "1px solid var(--color-primary)";
    toast.style.padding = "0.75rem 1rem";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "0.75rem";
    toast.style.zIndex = "999";
    toast.style.boxShadow = "var(--shadow-premium)";
    toast.style.textAlign = "center";
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.5s ease";
        setTimeout(() => toast.remove(), 500);
    }, 2000);
}

/* ==========================================================================
   Exam Engine & Certification
   ========================================================================== */

let examQuestions = [
    {
        question: "特許取得済みの「ゲストモード」により、協力会社の職長同士のやり取りはどう制御されますか？",
        options: [
            "お互いの存在（連絡先）が非表示になり、安全かつクローズドな対話となる",
            "自動的に全員がグループ通話で接続される",
            "メッセージの送信数が1日10件までに制限される"
        ],
        answer: 0,
        explanation: "ゲストモードは、外部作業員同士がお互いに連絡先を閲覧できないようにし、機密性と安全性を保つ特許技術です。"
    },
    {
        question: "「写真報告書ボット for 現場」で写真の説明（指摘項目等）を登録する際、最も簡単な方法はどれですか？",
        options: [
            "ボットが提示する選択肢からタップして選ぶ",
            "CAD図面データを直接書き換える",
            "手書きのメモを別のスキャナで読み込ませる"
        ],
        answer: 0,
        explanation: "ボットの質問に対して選択肢をタップするだけで、面倒なテキスト入力を省略して写真報告書が作成できます。"
    },
    {
        question: "directのタスク管理において、進捗状況を示す「4つのフェーズ」として正しい並びはどれですか？",
        options: [
            "準備中 ➔ 実行中 ➔ 検査中 ➔ クローズ",
            "未対応 ➔ 対応中 ➔ 対応済 ➔ 完了",
            "受付 ➔ 調査 ➔ 施工 ➔ 請求"
        ],
        answer: 1,
        explanation: "タスクの進行フェーズは「未対応」「対応中」「対応済」「完了」の順で管理されます。"
    },
    {
        question: "現場AI「directアシスタント」で、複数のトークルームの課題や危険兆候をAIが整理して提示する機能は何ですか？",
        options: [
            "マルチロギング",
            "まとめビュー",
            "画像センサースキャン"
        ],
        answer: 1,
        explanation: "「まとめビュー」により、管理者は膨大なトークルームのチャットから、重要な現場状況を素早くまとめて確認できます。"
    },
    {
        question: "気象予測センサー（e-Stand連携等）の値が設定値を超えた場合のdirectの挙動はどれですか？",
        options: [
            "自動でトークルームの全員に注意警報のアラートが自動通知され、瞬時に安全指示ができる",
            "管理者のスマートフォンを強制ロックする",
            "現場の防犯ブザーが自動で鳴る"
        ],
        answer: 0,
        explanation: "設定基準を超えた気象異変（雨・風・熱中症）を自動でdirectグループに配信し、速やかな安全周知を可能にします。"
    }
];

let currentExamIndex = 0;
let currentExamCorrectAnswers = 0;

function startExam() {
    currentExamIndex = 0;
    currentExamCorrectAnswers = 0;
    renderExamQuestion();
    showScreen("screen-quiz"); // Use same quiz screen but with exam logic
}

function renderExamQuestion() {
    const quiz = examQuestions[currentExamIndex];

    document.getElementById("current-quiz-num").textContent = currentExamIndex + 1;
    document.getElementById("total-quiz-num").textContent = examQuestions.length;
    
    const pct = ((currentExamIndex + 1) / examQuestions.length) * 100;
    document.getElementById("quiz-progress-inner").style.width = `${pct}%`;
    document.getElementById("quiz-progress-inner").style.background = "var(--color-accent)";

    // Update Title Badge
    const badge = document.querySelector(".badge-quiz");
    badge.textContent = "現場DX認定テスト";
    badge.style.background = "var(--color-accent-soft)";
    badge.style.color = "var(--color-accent)";

    document.getElementById("quiz-question-text").textContent = quiz.question;

    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";
    
    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `
            <span class="option-marker">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
        `;
        btn.addEventListener("click", () => handleExamAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });

    document.getElementById("quiz-feedback-panel").classList.add("hidden");
}

function handleExamAnswer(selectedIdx, btnElement) {
    const quiz = examQuestions[currentExamIndex];
    const optionsContainer = document.getElementById("quiz-options-container");
    const allButtons = optionsContainer.querySelectorAll(".option-btn");

    allButtons.forEach(btn => btn.classList.add("disabled"));

    const isCorrect = selectedIdx === quiz.answer;
    
    if (isCorrect) {
        btnElement.className = "option-btn correct";
        currentExamCorrectAnswers++;
    } else {
        btnElement.className = "option-btn wrong";
        allButtons[quiz.answer].className = "option-btn correct";
    }

    const feedbackPanel = document.getElementById("quiz-feedback-panel");
    const resultIcon = document.getElementById("feedback-result-icon");
    const resultText = document.getElementById("feedback-result-text");
    const explanation = document.getElementById("feedback-explanation");
    const nextBtn = document.getElementById("btn-next-quiz");

    feedbackPanel.className = "feedback-panel card-glass mt-4";
    if (isCorrect) {
        resultIcon.innerHTML = `<i data-lucide="check-circle" class="text-success icon-lg"></i>`;
        resultText.textContent = "正解！";
        resultText.className = "text-success";
    } else {
        feedbackPanel.classList.add("wrong-border");
        resultIcon.innerHTML = `<i data-lucide="x-circle" class="text-danger icon-lg"></i>`;
        resultText.textContent = "不正解...";
        resultText.className = "text-danger";
    }

    explanation.textContent = quiz.explanation;
    feedbackPanel.classList.remove("hidden");
    
    if (currentExamIndex === examQuestions.length - 1) {
        nextBtn.textContent = "テスト結果を見る";
    } else {
        nextBtn.textContent = "次の問題へ";
    }

    nextBtn.onclick = () => {
        if (currentExamIndex < examQuestions.length - 1) {
            currentExamIndex++;
            renderExamQuestion();
        } else {
            finishExam();
        }
    };

    lucide.createIcons();
}

function finishExam() {
    const totalScore = (currentExamCorrectAnswers / examQuestions.length) * 100;
    
    currentUser.examScore = totalScore;
    currentUser.lastActive = getFormattedDate();
    
    if (totalScore >= 80) {
        // Passed (80% or higher is pass)
        currentUser.examPassed = true;
        saveUserData();
        updateUserDashboard();
        updateAdminDashboard();
        showCertificate();
    } else {
        // Failed
        currentUser.examPassed = false;
        saveUserData();
        updateUserDashboard();
        updateAdminDashboard();
        
        alert(`テスト終了。\nスコア: ${totalScore}点 (80点以上で合格)\n合格基準に達しませんでした。もう一度チャレンジしてください。`);
        showScreen("screen-dashboard");
    }
}

function showCertificate() {
    // Fill text in certificate view
    document.getElementById("cert-name").textContent = `${currentUser.name} 殿`;
    document.getElementById("cert-company").textContent = currentUser.company;
    
    // Format today's date for display
    const now = new Date();
    document.getElementById("cert-date").textContent = `${now.getFullYear()}年 ${now.getMonth()+1}月 ${now.getDate()}日`;

    showScreen("screen-certificate");
    
    // Spawn confetti particles
    spawnConfetti();
}

function spawnConfetti() {
    const holder = document.getElementById("confetti-holder");
    holder.innerHTML = "";
    
    const colors = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"];
    
    for (let i = 0; i < 50; i++) {
        const div = document.createElement("div");
        div.className = "confetti";
        div.style.left = `${Math.random() * 100}%`;
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.animationDelay = `${Math.random() * 2}s`;
        div.style.transform = `scale(${Math.random() * 0.6 + 0.4})`;
        holder.appendChild(div);
    }
}

function printCertificate() {
    window.print();
}

/* ==========================================================================
   Admin Analytics Dashboard Panel
   ========================================================================== */

function closeAdminModal() {
    document.getElementById("modal-admin-login").classList.add("hidden");
}

function openEditUserModal(index) {
    const user = appUsers[index];
    if (!user) return;
    document.getElementById("edit-user-index").value = index;
    document.getElementById("edit-username").value = user.name;
    document.getElementById("edit-usercompany").value = user.company;
    document.getElementById("modal-edit-user").classList.remove("hidden");
}

function closeEditUserModal() {
    document.getElementById("modal-edit-user").classList.add("hidden");
}

// Bind Save action in User Edit Modal
document.getElementById("btn-save-user-edit").addEventListener("click", () => {
    const index = parseInt(document.getElementById("edit-user-index").value, 10);
    const newName = document.getElementById("edit-username").value.trim();
    const newCompany = document.getElementById("edit-usercompany").value.trim();

    if (!newName) {
        alert("受講者名を入力してください。");
        return;
    }

    if (appUsers[index]) {
        const user = appUsers[index];
        user.name = newName;
        user.company = newCompany || "個人受講";

        // Sync with currently logged-in user if applicable
        if (currentUser && currentUser.loginId === user.loginId) {
            currentUser.name = user.name;
            currentUser.company = user.company;
            sessionStorage.setItem("direct_current_user", JSON.stringify(currentUser));
        }

        localStorage.setItem("direct_elearning_users", JSON.stringify(appUsers));
        closeEditUserModal();
        
        updateAdminDashboard();
        updateUserDashboard();
    }
});

function updateOrgFilterDropdown() {
    const filter = document.getElementById("admin-org-filter");
    if (!filter) return;
    
    // Remember selection
    const selectedValue = filter.value || "all";
    
    // Extract unique organization names
    const orgs = [...new Set(appUsers.map(u => u.company).filter(Boolean))];
    
    // Clear and build options
    filter.innerHTML = '<option value="all">すべての所属組織 (全体)</option>';
    orgs.forEach(org => {
        const option = document.createElement("option");
        option.value = org;
        option.textContent = org;
        filter.appendChild(option);
    });
    
    // Restore selection if still exists
    if (orgs.includes(selectedValue)) {
        filter.value = selectedValue;
    } else {
        filter.value = "all";
    }
}

function renderOrgStatistics() {
    const orgTableBody = document.getElementById("admin-org-table-body");
    if (!orgTableBody) return;
    
    orgTableBody.innerHTML = "";
    
    // Group users by organization
    const orgGroups = {};
    appUsers.forEach(u => {
        const org = u.company || "個人受講";
        if (!orgGroups[org]) {
            orgGroups[org] = {
                users: [],
                totalProgress: 0,
                passes: 0,
                visits: 0
            };
        }
        orgGroups[org].users.push(u);
        
        // Progress percentage calculation
        let completed = 0;
        for (let i = 1; i <= 4; i++) {
            if (u.progress[i] === 100) completed++;
        }
        orgGroups[org].totalProgress += (completed * 25);
        
        // Test Passed
        if (u.examPassed) {
            orgGroups[org].passes++;
        }
        
        // Total visits
        orgGroups[org].visits += (u.visits || 1);
    });
    
    // Populate organization grouped statistics table rows
    Object.keys(orgGroups).forEach(orgName => {
        const data = orgGroups[orgName];
        const count = data.users.length;
        const avgProg = count > 0 ? Math.round(data.totalProgress / count) : 0;
        const passRate = count > 0 ? Math.round((data.passes / count) * 100) : 0;
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${orgName}</strong></td>
            <td class="text-center font-bold" style="font-family: var(--font-outfit);">${count} 名</td>
            <td class="text-center">
                <div class="flex-row gap-2 justify-center">
                    <div class="progress-bar-outer" style="width: 50px;">
                        <div class="progress-bar-inner" style="width: ${avgProg}%"></div>
                    </div>
                    <span>${avgProg}%</span>
                </div>
            </td>
            <td class="text-center font-bold text-success" style="font-family: var(--font-outfit);">${passRate}%</td>
            <td class="text-center font-bold" style="font-family: var(--font-outfit);">${data.visits} 回</td>
        `;
        orgTableBody.appendChild(tr);
    });
}

function updateAdminDashboard() {
    // Sync filters & statistics tables first
    updateOrgFilterDropdown();
    renderOrgStatistics();
    
    const filterOrg = document.getElementById("admin-org-filter").value;
    
    // Update table titles dynamically based on filter selection
    const userTableTitle = document.getElementById("admin-user-table-title");
    const orgTableTitle = document.getElementById("admin-org-table-title");
    if (filterOrg === "all") {
        if (userTableTitle) userTableTitle.textContent = "👥 受講者詳細データ";
        if (orgTableTitle) orgTableTitle.textContent = "🏢 組織別集計データ";
    } else {
        if (userTableTitle) userTableTitle.textContent = `👥 ${filterOrg} 詳細データ`;
        if (orgTableTitle) orgTableTitle.textContent = `🏢 ${filterOrg} 集計データ`;
    }
    
    // Filter users list based on selection
    let filteredUsers = appUsers;
    if (filterOrg !== "all") {
        filteredUsers = appUsers.filter(u => u.company === filterOrg);
    }
    
    // Calculate filtered KPIs
    const usersCount = filteredUsers.length;
    
    let totalProgress = 0;
    filteredUsers.forEach(u => {
        let completed = 0;
        for (let i = 1; i <= 4; i++) {
            if (u.progress[i] === 100) completed++;
        }
        totalProgress += (completed * 25);
    });
    const avgProgress = usersCount > 0 ? Math.round(totalProgress / usersCount) : 0;
    
    let passes = 0;
    let fails = 0;
    let untested = 0;
    filteredUsers.forEach(u => {
        if (u.examPassed) {
            passes++;
        } else if (u.examScore > 0 && u.examScore < 80) {
            fails++;
        } else {
            untested++;
        }
    });
    const passRate = usersCount > 0 ? Math.round((passes / usersCount) * 100) : 0;
    
    let totalVisits = 0;
    filteredUsers.forEach(u => {
        totalVisits += (u.visits || 1);
    });
    const avgVisits = usersCount > 0 ? (totalVisits / usersCount).toFixed(1) : 0;
    const activeCount = filteredUsers.filter(u => u.visits > 0).length;

    // Update KPIs on GUI
    document.getElementById("kpi-users-count").textContent = `${usersCount} 名`;
    document.getElementById("kpi-active-count").textContent = activeCount;
    document.getElementById("kpi-avg-progress").textContent = `${avgProgress}%`;
    document.getElementById("kpi-progress-bar-inner").style.width = `${avgProgress}%`;
    document.getElementById("kpi-pass-rate").textContent = `${passRate}%`;
    document.getElementById("kpi-pass-rate").nextElementSibling.textContent = `${passes} / ${usersCount} 合格`;
    document.getElementById("kpi-fail-count").textContent = fails;
    document.getElementById("kpi-untested-count").textContent = untested;
    document.getElementById("kpi-avg-visits").textContent = `${avgVisits} 回`;
    document.getElementById("kpi-total-visits").textContent = totalVisits;

    // Render filtered student progress details table rows
    const tbody = document.getElementById("admin-table-body");
    tbody.innerHTML = "";

    filteredUsers.forEach((u) => {
        // Retrieve global absolute index in original appUsers list
        const index = appUsers.findIndex(usr => usr.loginId === u.loginId);
        
        let completed = 0;
        for (let i = 1; i <= 4; i++) {
            if (u.progress[i] === 100) completed++;
        }
        const progPct = completed * 25;

        let testBadge = `<span class="badge-table untested">未受験</span>`;
        let scoreText = "-";
        
        if (u.examPassed) {
            testBadge = `<span class="badge-table passed">合格</span>`;
            scoreText = `<span class="text-success font-bold">${u.examScore}点</span>`;
        } else if (u.examScore > 0) {
            testBadge = `<span class="badge-table failed">不合格</span>`;
            scoreText = `<span class="text-danger">${u.examScore}点</span>`;
        }

        const isSelf = currentUser && currentUser.loginId === u.loginId;

        const tr = document.createElement("tr");
        if (isSelf) tr.setAttribute("style", "background: rgba(16, 185, 129, 0.08); font-weight: 500;");
        
        tr.innerHTML = `
            <td>
                <div class="flex-row gap-2">
                    <span style="font-size: 1.1rem;">${isSelf ? '👤' : '👷'}</span>
                    <span>${u.name} ${isSelf ? '<small class="text-success">(あなた)</small>' : ''}</span>
                </div>
            </td>
            <td>${u.company}</td>
            <td>
                <div class="flex-row gap-2 w-100 justify-center">
                    <div class="progress-bar-outer" style="width: 60px;">
                        <div class="progress-bar-inner" style="width: ${progPct}%"></div>
                    </div>
                    <span>${progPct}%</span>
                </div>
            </td>
            <td class="text-center font-bold" style="font-family: var(--font-outfit);">${u.visits || 1} 回</td>
            <td>${testBadge}</td>
            <td class="text-center" style="font-family: var(--font-outfit);">${scoreText}</td>
            <td class="text-muted text-xs">${u.lastActive || "-"}</td>
            <td>
                <div class="flex-row gap-1">
                    <button class="btn-primary btn-xs" onclick="openEditUserModal(${index})">編集</button>
                    <button class="btn-danger btn-xs" onclick="deleteAdminUser(${index})">削除</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteAdminUser(index) {
    if (index === -1 || !appUsers[index]) return;
    if (confirm(`この受講ユーザー「${appUsers[index].name}」のデータを削除しますか？`)) {
        const target = appUsers[index];
        
        // If deleting current logged-in user
        if (currentUser && currentUser.loginId === target.loginId) {
            sessionStorage.removeItem("direct_current_user");
            currentUser = { loginId: "", password: "", name: "", company: "", progress: {}, scores: {}, examPassed: false, examScore: 0, visits: 1, lastActive: "" };
        }
        
        appUsers.splice(index, 1);
        localStorage.setItem("direct_elearning_users", JSON.stringify(appUsers));
        
        // Refresh
        if (!currentUser.loginId) {
            initDatabase();
        } else {
            updateAdminDashboard();
            updateUserDashboard();
        }
    }
}
