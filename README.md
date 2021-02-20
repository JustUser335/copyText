# copyText
<div>
    <div class="cp"><span>ОГРН</span> <div><span id="ogrn">11612312355820</span> <span data-id="ogrn" class="copy"></span></div></div>
    <div class="cp"><span>ИНН</span>  <div><span id="inn">9123123120024</span>   <span data-id="inn" class="copy"></span></div></div>
    <div class="cp"><span>КПП</span>  <div><span id="kpp">772221001</span>       <span data-id="kpp" class="copy"></span></div></div>
    <div class="cp"><span>ОКПО</span> <div><span id="okpo">01235105</span>       <span data-id="okpo" class="copy"></span></div></div>
</div>
<input type="text" style="display:none" id="copyTextInput" value="">

обрабатывает .copy<br>
забирает data-id от copy<br>
обрабатывает элемент c id == data-id<br>
забирает текст id el<br>
вставляет его в input#copyTextInput<br>
выделяет value input<br>
копирует его<br>
выбрасывает alert, если всё успешно<br>
(можно запилить подсветку копированного элемента вместо alert)<br>
