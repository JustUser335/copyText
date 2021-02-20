# copyText
<div>
    <div>
        <span id="copy1">textt copy 1</span> <span data-id="copy1" class="copy">x1</span>
        <span id="copy2">textt copy 2</span> <span data-id="copy2" class="copy">x2</span>
        <span id="copy3">textt copy 3</span> <span data-id="copy3" class="copy">x3</span>
        <span id="copy4">textt copy 4</span> <span data-id="copy4" class="copy">x4</span>
    </div>
    <input type="text" style="display:none" id="copyTextInput" value="">
</div>
<br>
<br>
обрабатывает .copy<br>
забирает data-id от copy<br>
обрабатывает элемент c id == data-id<br>
забирает текст id el<br>
вставляет его в input#copyTextInput<br>
выделяет value input<br>
копирует его<br>
выбрасывает alert, если всё успешно<br>
(можно запилить подсветку копированного элемента вместо alert)<br>
