
/* PLAY SOUND FUNCTION */
function playAudio(file){
    if(file === 'alert')
        document.getElementById('audio-alert').play();

    if(file === 'fail')
        document.getElementById('audio-fail').play();    
}
/* END PLAY SOUND FUNCTION */

$(".mb-control").on("click",function(){
    
    var sound = $(this).data("sound");
    console.log(sound);
    if(sound){
        if(sound === 'alert')
            playAudio('alert');
    
        if(sound === 'fail')
            playAudio('fail');            
    }

    return false;
});