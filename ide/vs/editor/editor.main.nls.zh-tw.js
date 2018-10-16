/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.14.6(c1dd5c86b7e1e55223831b1beb73f017bb19af94)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.zh-tw",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再次出現)","{0} (occurred {1} times)"],"vs/base/browser/ui/findinput/findInput":["輸入"],"vs/base/browser/ui/findinput/findInputCheckboxes":["大小寫須相符","全字拼寫須相符","使用規則運算式"],"vs/base/browser/ui/inputbox/inputBox":["錯誤: {0}","警告: {0}","資訊: {0}"],"vs/base/browser/ui/list/listWidget":["{0}. Use the navigation keys to navigate."],"vs/base/browser/ui/menu/menu":["{0} ({1})"],"vs/base/browser/ui/selectBox/selectBoxCustom":["{0}"],"vs/base/common/keybindingLabels":["Ctrl","Shift","Alt","Windows","Ctrl","Shift","Alt","Super","Control","Shift","Alt","Command","Control","Shift","Alt","Windows","Control","Shift","Alt","Super"],"vs/base/common/severity":["錯誤","警告","資訊"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}，選擇器","選擇器"],"vs/base/parts/quickopen/browser/quickOpenWidget":["快速選擇器。輸入以縮小結果範圍。","快速選擇器","{0} Results"],"vs/base/parts/tree/browser/treeDefaults":["摺疊"],
"vs/editor/browser/controller/coreCommands":["&&Select All","&&Undo","&&Redo"],"vs/editor/browser/widget/codeEditorWidget":["游標數已限制為 {0} 個。"],"vs/editor/browser/widget/diffEditorWidget":["因其中一個檔案過大而無法比較。"],"vs/editor/browser/widget/diffReview":["關閉","沒有任何行","1 個行","{0} 個行","{1} 的 {0} 不同: 原始為 {2}，{3}，修改後為 {4}，{5}","空白","原始 {0},修改後{1}: {2","+ 修改後 {0}: {1}","- 原始 {0}: {1}","移至下一個差異","移至上一個差異"],
"vs/editor/common/config/commonEditorConfig":["編輯器","控制字型家族。","控制字型寬度。","控制字型大小 (以像素為單位)。","控制行高。使用 0 會從 fontSize 計算 lineHeight。","控制字元間距 (以像素為單位)","不顯示行號。","行號以絕對值顯示。","行號以目前游標的相對值顯示。","每 10 行顯示行號。","控制行號的顯示。","在特定的等寬字元數之後轉譯垂直尺規。有多個尺規就使用多個值。若陣列為空，則不繪製任何尺規。","執行文字相關導覽或作業時將作為文字分隔符號的字元","與 Tab 相等的空格數量。當 `editor.detectIndentation` 已開啟時，會根據檔案內容覆寫此設定。","必須是 'number'。請注意，值 \"auto\" 已由 `editor.detectIndentation` 設定取代。","與 Tab 相等的空格數量。當 `editor.detectIndentation` 已開啟時，會根據檔案內容覆寫此設定。","必須是 'boolean'。請注意，值 \"auto\" 已由 `editor.detect Indentation` 設定取代。","開啟檔案時，會依據檔案內容來偵測 `editor.tabSize` 及 `editor.insertSpaces`。","控制選取範圍是否有圓角","控制編輯器是否會捲動到最後一行之後","控制編輯器水平捲動所超出的額外字元數","控制編輯器是否會使用動畫捲動","控制是否會顯示迷你地圖","控制要在哪端呈現迷你地圖。","自動隱藏迷你地圖滑桿","呈現行內的實際字元 (而不是彩色區塊)","限制迷你地圖的寬度，以呈現最多的資料行","Controls whether the hover is shown.","Time delay in milliseconds after which to the hover is shown.","Controls whether the hover should remain visible when mouse is moved over it.","控制編譯器選取範圍是否預設為尋找工具的搜尋字串","控制編譯器內選取多字元或多行內文是否開啟選取範圍尋找功能","控制尋找小工具是否在 macOS 上讀取或修改共用尋找剪貼簿  ","一律不換行。","依檢視區寬度換行。","於 'editor.wordWrapColumn' 換行。","當檢視區縮至最小並設定 'editor.wordWrapColumn' 時換行。","控制是否自動換行。可以是:\n - 'off' (停用換行),\n - 'on' (檢視區換行),\n - 'wordWrapColumn' (於 'editor.wordWrapColumn' 換行`) 或\n - 'bounded' (當檢視區縮至最小並設定 'editor.wordWrapColumn' 時換行).","當 `editor.wordWrap` 為 [wordWrapColumn] 或 [bounded] 時，控制編輯器中的資料行換行。","No indentation. Wrapped lines begin at column 1.","Wrapped lines get the same indentation as the parent.","Wrapped lines get +1 indentation toward the parent.","Wrapped lines get +2 indentation toward the parent.","控制換行的縮排。可以是 'none'、'same' 或 'deepIndent'。","滑鼠滾輪捲動事件的 'deltaX' 與 'deltaY' 所使用的乘數","對應 Windows 和 Linux 的 `Control` 與對應 macOS 的 `Command`","對應 Windows 和 Linux 的 `Alt` 與對應 macOS 的 `Option`","用於新增多個滑鼠游標的修改。 `ctrlCmd` 會對應到 Windows 和 Linux 上的 `Control` 以及 macOS 上的 `Command`。 [移至定義] 及 [開啟連結] 滑鼠手勢將會適應以避免和 multicursor 修改衝突。","在多個游標重疊時將其合併。","允許在字串內顯示即時建議。","允許在註解中顯示即時建議。","允許在字串與註解以外之處顯示即時建議。","控制是否應在輸入時自動顯示建議","控制延遲顯示快速建議的毫秒數","當您輸入時啟用彈出視窗，顯示參數文件與類型資訊","控制編輯器是否應在左括號後自動插入右括號","控制編輯器是否應在輸入一行後自動格式化","控制編輯器是否應自動設定貼上的內容格式。格式器必須可供使用，而且格式器應該能夠設定文件中一個範圍的格式。","控制當使用者輸入, 貼上或移行時，編輯器應自動調整縮排。語言的縮排規則必須可用","控制輸入觸發字元時，是否應自動顯示建議","Only accept a suggestion with `Enter` when it makes a textual change.","控制除了 'Tab' 外，是否也藉由按下 'Enter' 接受建議。如此可避免混淆要插入新行或接受建議。設定值'smart'表示在文字變更同時，只透過Enter接受建議。","控制認可字元是否應接受建議。例如在 JavaScript 中，分號 (';') 可以是接受建議並鍵入該字元的認可字元。","將程式碼片段建議顯示於其他建議的頂端。","將程式碼片段建議顯示於其他建議的下方。","將程式碼片段建議與其他建議一同顯示。","不顯示程式碼片段建議。","控制程式碼片段是否隨其他建議顯示，以及其排序方式。","控制複製時不選取任何項目是否會複製目前程式行。","控制是否應根據文件中的單字計算自動完成。","一律選取第一個建議。","除非進一步的鍵入選取一個建議，否則選取最近的建議。例如，因為 `log` 最近完成，所以 `console.| -> console.log`。","根據先前已完成這些建議的首碼選取建議。例如，`co -> console` 與 `con -> const`。","控制在顯示建議清單時如何預先選取建議。","建議小工具的字型大小","建議小工具的行高","Controls whether filtering and sorting suggestions accounts for small typos.","Control whether an active snippet prevents quick suggestions.","控制編輯器是否應反白顯示與選取範圍相似的符合項","控制編輯器是否應反白顯示出現的語意符號","控制可在概觀尺規中相同位置顯示的裝飾項目數","控制是否應在概觀尺規周圍繪製邊框。","控制游標動畫樣式。","使用滑鼠滾輪並按住 Ctrl 時，縮放編輯器的字型","控制游標樣式。接受的值為 'block'、'block-outline'、'line'、'line-thin'、'underline' 及 'underline-thin'","控制游標寬度，當 editor.cursorStyle 設定為 'line' 時。","啟用連字字型","控制游標是否應隱藏在概觀尺規中。","Render whitespace characters except for single spaces between words.","控制編輯器轉譯空白字元的方式，可能為 'none'、'boundary' 及 'all'。'boundary' 選項不會轉譯字組間的單一空格。","控制編輯器是否應顯示控制字元","控制編輯器是否應顯示縮排輔助線","Controls whether the editor should highlight the active indent guide.","Highlights both the gutter and the current line.","控制編輯器應如何轉譯目前反白的行，可能的值有 'none'、'gutter'、'line' 和 'all'。","控制編輯器是否顯示 CodeLens","控制編輯器是否已啟用程式碼摺疊功能","控制折疊範圍的計算方式。'auto' 會在可行的情況下挑選使用語言特定摺疊策略。'indentation' 則會強制使用縮排式摺疊策略。","自動隱藏摺疊控制向","當選取某側的括號時，強調顯示另一側的配對括號。","控制編輯器是否應轉譯垂直字符邊界。字符邊界最常用來進行偵錯。","插入和刪除接在定位停駐點後的空白字元","移除尾端自動插入的空白字元","讓預覽編輯器在使用者按兩下其內容或點擊 Escape 時保持開啟。","控制編輯器是否允許透過拖放動作移動選取範圍。","編輯器將使用平台 API 以偵測螢幕助讀程式附加。","編輯器將會為螢幕助讀程式的使用方式永久地最佳化。","編輯器不會為螢幕助讀程式的使用方式進行最佳化。","控制編輯器是否應於已為螢幕助讀程式最佳化的模式中執行。","Controls fading out of unused code.","控制編輯器是否應偵測連結且讓它可點擊","控制編輯器是否應轉譯內嵌色彩裝飾項目與色彩選擇器。","啟用程式動作燈泡提示","要在儲存時執行組織匯入嗎?","要在儲存時執行的程式碼動作種類。","儲存時執行的程式碼動作逾時。","控制是否應支援 Linux 主要剪貼簿。","控制 Diff 編輯器要並排或內嵌顯示差異","控制 Diff 編輯器是否將開頭或尾端空白字元的變更顯示為差異","針對大型檔案停用部分高記憶體需求功能的特殊處理方式。","控制 Diff 編輯器是否要為新增的/移除的變更顯示 +/- 標記"],
"vs/editor/common/config/editorOptions":["編輯器現在無法存取。按Alt+F1尋求選項","編輯器內容"],"vs/editor/common/controller/cursor":["執行命令時發生未預期的例外狀況。"],"vs/editor/common/modes/modesRegistry":["純文字"],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],"vs/editor/common/view/editorColorRegistry":["目前游標位置行的反白顯示背景色彩。","目前游標位置行之周圍框線的背景色彩。","突顯顯示範圍的背景顏色，例如快速開啟和尋找功能。不能使用非透明的顏色來隱藏底層的樣式。","反白顯示範圍周圍邊框的背景顏色。","編輯器游標的色彩。","編輯器游標的背景色彩。允許自訂區塊游標重疊的字元色彩。","編輯器中空白字元的色彩。","編輯器縮排輔助線的色彩。","使用中編輯器縮排輔助線的色彩。","編輯器行號的色彩。","編輯器使用中行號的色彩 ","Id 已取代。請改用 'editorLineNumber.activeForeground' 。","編輯器使用中行號的色彩 ","編輯器尺規的色彩","編輯器程式碼濾鏡的前景色彩","成對括號背景色彩","成對括號邊框色彩","預覽檢視編輯器尺規的邊框色彩.","編輯器邊框的背景顏色,包含行號與字形圖示的邊框.","編輯器內錯誤提示線的前景色彩.","編輯器內錯誤提示線的邊框色彩.","編輯器內警告提示線的前景色彩.","編輯器內警告提示線的邊框色彩.","編輯器內資訊提示線的前景色彩","編輯器內資訊提示線的邊框色彩","編輯器內提示訊息的提示線前景色彩","編輯器內提示訊息的提示線邊框色彩","Border of unnecessary code in the editor.","Opacity of unnecessary code in the editor.","概述反白範圍的尺規標記顏色。不能使用非透明的顏色來隱藏底層的樣式。","錯誤的概觀尺規標記色彩。","警示的概觀尺規標記色彩。","資訊的概觀尺規標記色彩。"],
"vs/editor/contrib/bracketMatching/bracketMatching":["成對括弧的概觀尺規標記色彩。","移至方括弧","選取至括弧"],"vs/editor/contrib/caretOperations/caretOperations":["將插入點左移","將插入點右移"],"vs/editor/contrib/caretOperations/transpose":["調換字母"],"vs/editor/contrib/clipboard/clipboard":["剪下","Cu&&t","複製","&&Copy","貼上","&&Paste","隨語法醒目提示複製"],"vs/editor/contrib/codeAction/codeActionCommands":["顯示修正 ({0})","顯示修正","快速修復...","沒有可用的程式碼操作","沒有可用的程式碼操作","重構...","沒有可用的重構","來源動作...","沒有可用的來源動作","組織匯入","沒有任何可用的組織匯入動作"],"vs/editor/contrib/comment/comment":["切換行註解","&&Toggle Line Comment","加入行註解","移除行註解","切換區塊註解","Toggle &&Block Comment"],"vs/editor/contrib/contextmenu/contextmenu":["顯示編輯器內容功能表"],"vs/editor/contrib/cursorUndo/cursorUndo":["Soft Undo"],"vs/editor/contrib/find/findController":["尋找","&&Find","尋找選取項目","尋找下一個","尋找上一個","尋找下一個選取項目","尋找上一個選取項目","取代","&&Replace"],"vs/editor/contrib/find/findWidget":["尋找","尋找","上一個符合項","下一個相符項","在選取範圍中尋找","關閉","取代","取代","取代","全部取代","切換取代模式","僅反白顯示前 {0} 筆結果，但所有尋找作業會在完整文字上執行。","{0} / {1}","沒有結果"],
"vs/editor/contrib/folding/folding":["展開","以遞迴方式展開","摺疊","以遞迴方式摺疊","摺疊全部區塊註解","折疊所有區域","展開所有區域","全部摺疊","全部展開","摺疊層級 {0}"],"vs/editor/contrib/fontZoom/fontZoom":["編輯器字體放大","編輯器字型縮小","編輯器字體重設縮放"],"vs/editor/contrib/format/formatActions":["在行 {0} 編輯了 1 項格式","在行 {1} 編輯了 {0} 項格式","在行 {0} 與行 {1} 之間編輯了 1 項格式","在行 {1} 與行 {2} 之間編輯了 {0} 項格式","尚無安裝適用於 '{0}' 檔案的格式器","將文件格式化","未安裝 '{0}' 檔案的文件格式器。","將選取項目格式化","未安裝 '{0}' 檔案的選擇格式器。"],"vs/editor/contrib/goToDefinition/goToDefinitionCommands":["找不到 '{0}' 的定義","找不到任何定義"," - {0} 個定義","移至定義","在一側開啟定義","預覽定義","找不到 '{0}' 的任何實作","找不到任何實作"," – {0} 個實作","前往實作","預覽實作","找不到 '{0}' 的任何類型定義","找不到任何類型定義"," – {0} 個定義","移至類型定義","預覽類型定義"],"vs/editor/contrib/goToDefinition/goToDefinitionMouse":["按一下以顯示 {0} 項定義。"],"vs/editor/contrib/gotoError/gotoError":["移至下一個問題 (錯誤, 警告, 資訊)","移至上一個問題 (錯誤, 警告, 資訊)","移至檔案裡面的下一個問題 (錯誤, 警告, 資訊)","移至檔案裡面的上一個問題 (錯誤, 警告, 資訊)"],"vs/editor/contrib/gotoError/gotoErrorWidget":["({0}/{1})","編輯器標記導覽小工具錯誤的色彩。","編輯器標記導覽小工具警告的色彩。","編輯器標記導覽小工具資訊的色彩","編輯器標記導覽小工具的背景。"],
"vs/editor/contrib/hover/hover":["動態顯示"],"vs/editor/contrib/hover/modesContentHover":["正在載入..."],"vs/editor/contrib/inPlaceReplace/inPlaceReplace":["以上一個值取代","以下一個值取代"],"vs/editor/contrib/linesOperations/linesOperations":["將行向上複製","&&Copy Line Up","將行向下複製","Co&&py Line Down","上移一行","Mo&&ve Line Up","下移一行","Move &&Line Down","遞增排序行","遞減排序行","修剪尾端空白","刪除行","縮排行","凸排行","在上方插入行","在下方插入行","左邊全部刪除","刪除所有右方項目","連接線","轉置游標周圍的字元數","轉換到大寫","轉換到小寫"],"vs/editor/contrib/links/links":["按住 Cmd 並按一下滑鼠按鈕可連入連結","按住 Ctrl 並按一下滑鼠按鈕可連入連結","按住 Cmd 並按一下滑鼠以執行命令","按住 Ctrl 並按一下滑鼠以執行命令","按住 Option 並按一下滑鼠按鈕以追蹤連結","按住Alt並點擊以追蹤連結","按住 Option 並按一下滑鼠以執行命令","按住 Alt 並按一下滑鼠以執行命令","因為此連結的格式不正確，所以無法開啟: {0}","因為此連結目標遺失，所以無法開啟。","開啟連結"],"vs/editor/contrib/message/messageController":["無法在唯讀編輯器中編輯"],
"vs/editor/contrib/multicursor/multicursor":["在上方加入游標","&&Add Cursor Above","在下方加入游標","A&&dd Cursor Below","在行尾新增游標","Add C&&ursors to Line Ends","將選取項目加入下一個找到的相符項","Add &&Next Occurrence","將選取項目加入前一個找到的相符項中","Add P&&revious Occurrence","將最後一個選擇項目移至下一個找到的相符項","將最後一個選擇項目移至前一個找到的相符項","選取所有找到的相符項目","Select All &&Occurrences","變更所有發生次數"],"vs/editor/contrib/parameterHints/parameterHints":["觸發參數提示"],"vs/editor/contrib/parameterHints/parameterHintsWidget":["{0}，提示"],"vs/editor/contrib/referenceSearch/peekViewWidget":["關閉"],"vs/editor/contrib/referenceSearch/referenceSearch":[" - {0} 個參考","尋找所有參考"],"vs/editor/contrib/referenceSearch/referencesController":["正在載入..."],"vs/editor/contrib/referenceSearch/referencesModel":["個符號位於 {0} 中的第 {1} 行第 {2} 欄","1 個符號位於 {0}, 完整路徑 {1}","{0} 個符號位於 {1}, 完整路徑 {2}","找不到結果","在 {0} 中找到 1 個符號","在 {1} 中找到 {0} 個符號","在 {1} 個檔案中找到 {0} 個符號"],
"vs/editor/contrib/referenceSearch/referencesWidget":["無法解析檔案。","{0} 個參考","{0} 個參考","無法預覽","參考","沒有結果","參考","預覽檢視標題區域的背景色彩。","預覽檢視標題的色彩。","預覽檢視標題資訊的色彩。","預覽檢視之框線與箭頭的色彩。","預覽檢視中結果清單的背景色彩。","預覽檢視結果列表中行節點的前景色彩","預覽檢視結果列表中檔案節點的前景色彩","在預覽檢視之結果清單中選取項目時的背景色彩。","在預覽檢視之結果清單中選取項目時的前景色彩。","預覽檢視編輯器的背景色彩。","預覽檢視編輯器邊框(含行號或字形圖示)的背景色彩。","在預覽檢視編輯器中比對時的反白顯示色彩。","預覽檢視編輯器中比對時的反白顯示色彩。","在預覽檢視編輯器中比對時的反白顯示邊界。"],"vs/editor/contrib/rename/rename":["沒有結果。","已成功將 '{0}' 重新命名為 '{1}'。摘要: {2}","重新命名無法執行。","重新命名符號"],"vs/editor/contrib/rename/renameInputField":["為輸入重新命名。請鍵入新名稱，然後按 Enter 以認可。"],"vs/editor/contrib/smartSelect/smartSelect":["展開選取","&&Expand Selection","縮小選取","&&Shrink Selection"],"vs/editor/contrib/snippet/snippetVariables":["星期日","星期一","星期二","星期三","星期四","星期五","星期六","週日","週一","週二","週三","週四","週五","週六","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"vs/editor/contrib/suggest/suggestController":["接受 '{0}' 時接受了插入下列文字: {1}","觸發建議"],
"vs/editor/contrib/suggest/suggestWidget":["建議小工具的背景色彩。","建議小工具的邊界色彩。","建議小工具的前景色彩。","建議小工具中所選項目的背景色彩。","建議小工具中相符醒目提示的色彩。","進一步了解...{0}","{0}，建議，有詳細資料","{0}，建議","簡易說明...{0}","正在載入...","無建議。","{0}，接受","{0}，建議，有詳細資料","{0}，建議"],"vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode":["切換 TAB 鍵移動焦點"],"vs/editor/contrib/wordHighlighter/wordHighlighter":["讀取存取符號時的背景顏色，如讀取變數。不能使用非透明的顏色來隱藏底層的樣式。","寫入存取符號時的背景顏色，如寫入變數。不能使用非透明的顏色來隱藏底層的樣式。","讀取存取期間 (例如讀取變數時) 符號的邊框顏色。","寫入存取期間 (例如寫入變數時) 符號的邊框顏色。 ","概述反白符號的尺規標記顏色。不能使用非透明的顏色來隱藏底層的樣式。","概述反白寫入權限符號的尺規標記顏色。不能使用非透明的顏色來隱藏底層的樣式。","移至下一個反白符號","移至上一個反白符號"],
"vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp":["No selection","Line {0}, Column {1} ({2} selected)","Line {0}, Column {1}","{0} selections ({1} characters selected)","{0} selections","Now changing the setting `accessibilitySupport` to 'on'.","Now opening the Editor Accessibility documentation page."," in a read-only pane of a diff editor."," in a pane of a diff editor."," in a read-only code editor"," in a code editor","To configure the editor to be optimized for usage with a Screen Reader press Command+E now.","To configure the editor to be optimized for usage with a Screen Reader press Control+E now.","The editor is configured to be optimized for usage with a Screen Reader.","The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.","Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.","Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.","Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.","Press Command+H now to open a browser window with more information related to editor accessibility.","Press Control+H now to open a browser window with more information related to editor accessibility.","You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.","Show Accessibility Help"],
"vs/editor/standalone/browser/inspectTokens/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/standalone/browser/quickOpen/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/standalone/browser/quickOpen/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/standalone/browser/quickOpen/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],"vs/editor/standalone/browser/simpleServices":["Made {0} edits in {1} files"],
"vs/editor/standalone/browser/standaloneCodeEditor":["Editor content","Press Ctrl+F1 for Accessibility Options.","Press Alt+F1 for Accessibility Options."],"vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast":["Toggle High Contrast Theme"],"vs/platform/configuration/common/configurationRegistry":["預設組態覆寫","設定要針對 {0} 語言覆寫的編輯器設定。","設定要針對語言覆寫的編輯器設定。","無法註冊 '{0}'。這符合用於描述語言專用編輯器設定的屬性模式 '\\\\[.*\\\\]$'。請使用 'configurationDefaults' 貢獻。","無法註冊 '{0}'。此屬性已經註冊。"],"vs/platform/dialogs/common/dialogs":["...另外 1 個檔案未顯示","...另外 {0} 個檔案未顯示"],"vs/platform/keybinding/common/abstractKeybindingService":["已按下 ({0})。請等待第二個套索鍵...","按鍵組合 ({0}, {1}) 不是命令。"],
"vs/platform/list/browser/listService":["工作台","對應Windows和Linux的'Control'與對應 macOS 的'Command'。","對應Windows和Linux的'Alt'與對應macOS的'Option'。","透過滑鼠多選，用於在樹狀目錄與清單中新增項目的輔助按鍵 (例如在總管中開啟 [編輯器] 及 [SCM] 檢視)。在 Windows 及 Linux 上，`ctrlCmd` 對應 `Control`，在 macOS 上則對應 `Command`。[在側邊開啟] 滑鼠手勢 (若支援) 將會適應以避免和多選輔助按鍵衝突。","控制如何使用滑鼠在樹狀目錄與清單中開啟項目 (若有支援)。設為 `singleClick` 可以滑鼠按一下開啟物件，設為 `doubleClick` 則只能透過按兩下滑鼠開啟物件。對於樹狀目錄中具子系的父系而言，此設定會控制應以滑鼠按一下或按兩下展開父系。注意，某些樹狀目錄或清單若不適用此設定則會予以忽略。","控制是否支援工作台中的水平滾動。"],"vs/platform/markers/common/markers":["錯誤","警告","資訊"],
"vs/platform/theme/common/colorRegistry":["工作台中使用的色彩。","整體的前景色彩。僅當未被任何元件覆疊時，才會使用此色彩。","整體錯誤訊息的前景色彩。僅當未被任何元件覆蓋時，才會使用此色彩。","提供附加訊息的前景顏色,例如標籤","焦點項目的整體框線色彩。只在沒有任何元件覆寫此色彩時，才會加以使用。","項目周圍的額外框線，可將項目從其他項目中區隔出來以提高對比。","使用中項目周圍的額外邊界，可將項目從其他項目中區隔出來以提高對比。","作業區域選取的背景顏色(例如輸入或文字區域)。請注意，這不適用於編輯器中的選取。","文字分隔符號的顏色。","內文連結的前景色彩","當滑鼠點擊或懸停時，文字中連結的前景色彩。","提示及建議文字的前景色彩。","文內引用區塊背景色彩。","引用文字的框線顏色。","文字區塊的背景顏色。","小工具的陰影色彩，例如編輯器中的尋找/取代。","輸入方塊的背景。","輸入方塊的前景。","輸入方塊的框線。","輸入欄位中可使用之項目的框線色彩。","文字輸入替代字符的前景顏色。","資訊嚴重性的輸入驗證背景色彩。","資訊嚴重性的輸入驗證邊界色彩。","警告嚴重性的輸入驗證背景色彩。","警告嚴重性的輸入驗證邊界色彩。","錯誤嚴重性的輸入驗證背景色彩。","錯誤嚴重性的輸入驗證邊界色彩。","下拉式清單的背景。","下拉式清單的背景。","下拉式清單的前景。","下拉式清單的框線。","當清單/樹狀為使用中狀態時，焦點項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，焦點項目的清單/樹狀前景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，所選項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，所選項目的清單/樹狀前景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為非使用中狀態時，所選項目的清單/樹狀背景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中者則沒有。","當清單/樹狀為使用中狀態時，所選項目的清單/樹狀前景色彩。使用中的清單/樹狀有鍵盤焦點，非使用中則沒有。","List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.","使用滑鼠暫留在項目時的清單/樹狀背景。","滑鼠暫留在項目時的清單/樹狀前景。","使用滑鼠四處移動項目時的清單/樹狀拖放背景。","在清單/樹狀內搜尋時，相符醒目提示的清單/樹狀前景色彩。","列表/樹狀 無效項目的前景色彩，例如在瀏覽視窗無法解析的根目錄","包含錯誤清單項目的前景色彩","包含警告清單項目的前景色彩","分組標籤的快速選擇器色彩。","分組邊界的快速選擇器色彩。","按鈕前景色彩。","按鈕背景色彩。","暫留時的按鈕背景色彩。","標記的背景顏色。標記為小型的訊息標籤,例如搜尋結果的數量。","標記的前景顏色。標記為小型的訊息標籤,例如搜尋結果的數量。","指出在捲動該檢視的捲軸陰影。","捲軸滑桿的背景顏色。","動態顯示時捲軸滑桿的背景顏色。","當點擊時捲軸滑桿的背景顏色。","長時間運行進度條的背景色彩.","Color of focused breadcrumb items.","Color of focused breadcrumb items.","Color of selected breadcrumb items.","Background color of breadcrumb item picker.","編輯器的背景色彩。","編輯器的預設前景色彩。","編輯器小工具的背景色彩，例如尋找/取代。","編輯器小工具的邊界色彩。小工具選擇擁有邊界或色彩未被小工具覆寫時，才會使用色彩。","Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.","編輯器選取範圍的色彩。","為選取的文字顏色高對比化","在非使用中的編輯器的選取項目顏色。不能使用非透明的顏色來隱藏底層的樣式。","與選取項目相同的區域顏色。不能使用非透明的顏色來隱藏底層的樣式。","選取時，內容相同之區域的框線色彩。","符合目前搜尋的色彩。","符合搜尋條件的其他項目的顏色。不能使用非透明的顏色來隱藏底層的樣式。","限制搜索的範圍色彩。不能使用非透明的色彩來隱藏基礎樣式。","符合目前搜尋的框線色彩。","符合其他搜尋的框線色彩。","限制搜尋範圍的邊框色彩。不能使用非透明的色彩來隱藏基礎樣式。","突顯懸停顯示的文字。不能使用非透明的顏色來隱藏底層的樣式。","編輯器動態顯示的背景色彩。","編輯器動態顯示的框線色彩。","使用中之連結的色彩。","插入文字的背景顏色。不能使用非透明的顏色來隱藏底層的樣式。 ","移除文字的背景顏色。不能使用非透明的顏色來隱藏底層的樣式。 ","插入的文字外框色彩。","移除的文字外框色彩。","Border color between the two text editors.","目前內嵌合併衝突中的深色標題背景。不能使用非透明的顏色來隱藏底層的樣式。","目前內嵌合併衝突中的內容背景。不能使用非透明的顏色來隱藏底層的樣式。","傳入內嵌合併衝突中的深色標題背景。不能使用非透明的顏色來隱藏底層的樣式。","傳入內嵌合併衝突中的內容背景。不能使用非透明的顏色來隱藏底層的樣式。","內嵌合併衝突中的共同始祖標題背景。不能使用非透明的顏色來隱藏底層的樣式。","內嵌合併衝突中的共同始祖內容背景。不能使用非透明的顏色來隱藏基礎樣式。","內嵌合併衝突中標頭及分隔器的邊界色彩。","目前內嵌合併衝突的概觀尺規前景。","傳入內嵌合併衝突的概觀尺規前景。","內嵌合併衝突中的共同上階概觀尺規前景。","概述符合尋找條件的尺規標記顏色。不能使用非透明的顏色來隱藏底層的樣式。","概述反白選擇的尺規標記顏色。不能使用非透明的顏色來隱藏底層的樣式。"],
"vs/platform/workspaces/common/workspaces":["Code 工作區","未命名 (工作區)","{0} (工作區)","{0} (工作區)"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.zh-tw.js.map