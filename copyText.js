copyedBlock: function(babel){
    let getCopyEl = $('.copy');
    console.log(getCopyEl);

    [].forEach.call(getCopyEl,function(e){
      $(e).on('click',function(){
        let el = this;
        copyBox(babel,el);
        //допилить подсветку копированного элемента
      })
    });
    /*getCopyEl.click(function(){

        // let input     = $('copyTextInput')[0];
        // let nodeName  = input.nodeName;
        // if(input && nodeName == "INPUT"){//редактировать
        //     input.val(getTextEl(el));
        //     babel.copyText(input);
        // }else{
        //   createInput(getCopyEl,getTextEl(el));
        // }


    });*/
    function getTextEl(el){
      let id    = $(el).data('id');
      let text  = $('#'+id).text();
      return text;
    }
    function copyBox(babel,el){
      let input     = $('#copyTextInput')[0];
      $(input).val(getTextEl(el));
      copyText(input);
    }
    function copyText(el){
      el.select();
      document.execCommand("copy");
      alert("Copied the text: " + el.value);
    }
  }
